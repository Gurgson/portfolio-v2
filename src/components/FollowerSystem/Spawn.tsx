'use client'

import { useCallback, useState, useEffect } from 'react'
import { useFollowerContext } from './FollowerContext'
import type { SpawnProps } from '../../types/Follower'
import { common } from '@/dictionaries/common'
import styles from './follower.module.css'
import Image from 'next/image'

const STORAGE_KEY = 'follower-welcome-shown'

export default function Spawn({
  position,
  welcomeMessage,
  showWelcomeOnce = true,
  lang = 'pl',
}: SpawnProps) {
  const { state, dispatch } = useFollowerContext()
  const [showBubble, setShowBubble] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (!welcomeMessage) return
    if (state.active) return

    if (showWelcomeOnce) {
      const alreadyShown = sessionStorage.getItem(STORAGE_KEY)
      if (alreadyShown) return
    }

    const popAfter = welcomeMessage.popAfter ?? 2000
    const duration = welcomeMessage.duration ?? 5000

    const showTimer = setTimeout(() => {
      setShowBubble(true)

      if (showWelcomeOnce) {
        sessionStorage.setItem(STORAGE_KEY, 'true')
      }

      const hideTimer = setTimeout(() => {
        setIsExiting(true)
        setTimeout(() => {
          setShowBubble(false)
          setIsExiting(false)
        }, 300)
      }, duration)

      return () => clearTimeout(hideTimer)
    }, popAfter)

    return () => clearTimeout(showTimer)
  }, [welcomeMessage, showWelcomeOnce, state.active])

  useEffect(() => {
    if (!state.active || !showBubble) return

    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 0)

    const hideTimer = setTimeout(() => {
      setShowBubble(false)
      setIsExiting(false)
    }, 300)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(hideTimer)
    }
  }, [state.active, showBubble])

  const handleClick = useCallback(() => {
    if (typeof window === 'undefined') return

    if (showBubble) {
      setIsExiting(true)
      setTimeout(() => {
        setShowBubble(false)
        setIsExiting(false)
      }, 300)
    }

    if (state.active) {
      dispatch({ type: 'DESPAWN' })
    } else {
      dispatch({
        type: 'SPAWN',
        position: {
          x: (position.x / 100) * window.innerWidth,
          y: (position.y / 100) * window.innerHeight,
        },
      })
    }
  }, [state.active, position.x, position.y, dispatch, showBubble])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleClick()
      }
    },
    [handleClick]
  )

  return (
    <div
      className={styles.spawn}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={state.active ? common.follower.hideGuide[lang] : common.follower.showGuide[lang]}
      aria-pressed={state.active}
    >
      <Image
        src="/bird-spawn.png"
        width={80}
        height={80}
        alt=""
        className={styles.spawnImage}
        draggable={false}
      />

      {showBubble && welcomeMessage && (
        <div
          className={`${styles.spawnBubble} ${isExiting ? styles.spawnBubbleExit : ''}`}
          role="status"
          aria-live="polite"
        >
          {welcomeMessage.content}
        </div>
      )}
    </div>
  )
}
