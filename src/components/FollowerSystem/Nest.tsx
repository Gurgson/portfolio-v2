'use client'

import { useRef, useCallback, useState, useEffect } from 'react'
import { useFollowerContext } from './FollowerContext'
import type { NestProps } from '../../types/Follower'
import { useT } from '@/providers/Dictionary/DictionaryProvider'
import styles from './follower.module.css'

export default function Nest({
  position,
  children,
  image = '/bird-nest.png',
  messages = [],
  messagesStartDelay = 500,
  messagesRepeatAfter = 15000,
  reverseColors = false,
  lang = 'pl',
}: NestProps) {
  const { state, dispatch } = useFollowerContext()
  const t = useT()
  const elementRef = useRef<HTMLDivElement | null>(null)
  const stateRef = useRef(state)
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number | null>(
    null
  )
  const [isExiting, setIsExiting] = useState(false)
  const lastLeaveTimeRef = useRef<number>(0)
  const messageTimerRef = useRef<NodeJS.Timeout | null>(null)
  const startDelayTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    stateRef.current = state
  }, [state])

  const getNestPosition = useCallback(() => {
    const element = elementRef.current
    if (!element) return null

    const rect = element.getBoundingClientRect()

    const nestX = rect.left + (position.x / 100) * rect.width
    const nestY = rect.top + (position.y / 100) * rect.height

    return {
      x: nestX,
      y: nestY - 20,
    }
  }, [position.x, position.y])

  useEffect(() => {
    if (state.state !== 'inNest') return
    if (messages.length === 0) return

    const now = Date.now()
    if (now - lastLeaveTimeRef.current < messagesRepeatAfter) return

    startDelayTimerRef.current = setTimeout(() => {
      setCurrentMessageIndex(0)
    }, messagesStartDelay)

    return () => {
      if (startDelayTimerRef.current) {
        clearTimeout(startDelayTimerRef.current)
      }
    }
  }, [state.state, messages.length, messagesStartDelay, messagesRepeatAfter])

  useEffect(() => {
    if (currentMessageIndex === null) return
    if (currentMessageIndex >= messages.length) {
      const resetTimer = setTimeout(() => setCurrentMessageIndex(null), 0)
      return () => clearTimeout(resetTimer)
    }

    const currentMessage = messages[currentMessageIndex]
    const duration = currentMessage?.duration ?? 3000

    messageTimerRef.current = setTimeout(() => {
      if (currentMessageIndex < messages.length - 1) {
        setIsExiting(true)
        setTimeout(() => {
          setIsExiting(false)
          setCurrentMessageIndex(currentMessageIndex + 1)
        }, 300)
      } else {
        setIsExiting(true)
        setTimeout(() => {
          setIsExiting(false)
          setCurrentMessageIndex(null)
        }, 300)
      }
    }, duration)

    return () => {
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current)
      }
    }
  }, [currentMessageIndex, messages])

  useEffect(() => {
    if (state.state !== 'inNest' && state.state !== 'goingToNest') {
      if (currentMessageIndex !== null) {
        const exitTimer = setTimeout(() => setIsExiting(true), 0)
        const hideTimer = setTimeout(() => {
          setIsExiting(false)
          setCurrentMessageIndex(null)
        }, 300)
        lastLeaveTimeRef.current = Date.now()

        return () => {
          clearTimeout(exitTimer)
          clearTimeout(hideTimer)
        }
      }

      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current)
      }
      if (startDelayTimerRef.current) {
        clearTimeout(startDelayTimerRef.current)
      }
    }
  }, [state.state, currentMessageIndex])

  const handleMouseEnter = useCallback(() => {
    const currentState = stateRef.current

    if (!currentState.active) return
    if (currentState.state !== 'following') return

    const nestPos = getNestPosition()
    if (!nestPos) return

    dispatch({ type: 'GO_TO_NEST', position: nestPos })
  }, [getNestPosition, dispatch])

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      const currentState = stateRef.current

      if (!currentState.active) return

      const relatedTarget = e.relatedTarget
      if (
        relatedTarget &&
        relatedTarget instanceof HTMLElement &&
        relatedTarget.closest('[data-nest]')
      ) {
        return
      }

      if (
        currentState.state === 'goingToNest' ||
        currentState.state === 'inNest'
      ) {
        dispatch({ type: 'RETURN_FROM_NEST' })
      }
    },
    [dispatch]
  )

  const handleImageClick = useCallback(() => {
    if (messages.length === 0) return
    if (currentMessageIndex !== null) return

    setCurrentMessageIndex(0)
  }, [messages.length, currentMessageIndex])

  const handleImageKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleImageClick()
      }
    },
    [handleImageClick]
  )

  const handleBubbleClick = useCallback(() => {
    if (currentMessageIndex !== null) {
      setIsExiting(true)
      setTimeout(() => {
        setIsExiting(false)
        setCurrentMessageIndex(null)
      }, 300)
      lastLeaveTimeRef.current = Date.now()

      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current)
      }
    }
  }, [currentMessageIndex])

  const currentMessage =
    currentMessageIndex !== null ? messages[currentMessageIndex] : null

  if (!state.active) {
    return <>{children}</>
  }

  return (
    <div
      ref={elementRef}
      data-nest
      className={styles.nestWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {image && (
        <div
          className={styles.nestAnchor}
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
          }}
        >
          <img
            src={image}
            alt=""
            className={styles.nestImage}
            draggable={false}
            role={messages.length > 0 ? 'button' : undefined}
            tabIndex={messages.length > 0 ? 0 : undefined}
            aria-label={
              messages.length > 0 ? t('common.follower.showMessage') : undefined
            }
            onClick={messages.length > 0 ? handleImageClick : undefined}
            onKeyDown={messages.length > 0 ? handleImageKeyDown : undefined}
          />

          {currentMessage && (
            <div
              className={`${reverseColors && 'contrast '} ${styles.nestBubble} ${isExiting ? styles.nestBubbleExit : ''}`}
              onClick={handleBubbleClick}
              role="status"
              aria-live="polite"
            >
              {currentMessage.content}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
