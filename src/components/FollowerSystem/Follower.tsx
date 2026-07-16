'use client'

import { useEffect, useRef, useState } from 'react'
import { useFollowerContext } from './FollowerContext'
import type { FollowerProps } from '../../types/Follower'
import { useT } from '@/providers/Dictionary/DictionaryProvider'
import styles from './follower.module.css'

const SPAWN_DURATION = 500
const MOUSE_THROTTLE_MS = 100

const defaultSprites = {
  flying: '/bird-fly.gif',
  staying: '/bird-idle.gif',
}

export default function Follower({
  sprites = defaultSprites,
  smoothness = 0.1,
  lang = 'pl',
}: FollowerProps) {
  const { state, dispatch } = useFollowerContext()
  const t = useT()
  const animationFrameRef = useRef<number | null>(null)
  const stateRef = useRef(state)
  const positionRef = useRef(state.position)
  const [flyDirection, setFlyDirection] = useState<'up' | 'down' | 'none'>(
    'none'
  )

  useEffect(() => {
    stateRef.current = state
    positionRef.current = state.position
  }, [state])

  useEffect(() => {
    let lastMoveTime = 0

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastMoveTime < MOUSE_THROTTLE_MS) return
      lastMoveTime = now

      if (stateRef.current.active && stateRef.current.state === 'following') {
        dispatch({ type: 'SET_TARGET', target: { x: e.clientX, y: e.clientY } })
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [dispatch])

  useEffect(() => {
    if (state.state === 'spawning') {
      const timer = setTimeout(() => {
        dispatch({ type: 'SET_STATE', state: 'following' })
      }, SPAWN_DURATION)
      return () => clearTimeout(timer)
    }
  }, [state.state, dispatch])

  useEffect(() => {
    if (state.state === 'despawning') {
      const timer = setTimeout(() => {
        dispatch({ type: 'FINISH_DESPAWN' })
      }, SPAWN_DURATION)
      return () => clearTimeout(timer)
    }
  }, [state.state, dispatch])

  useEffect(() => {
    if (!state.active) return

    const animate = () => {
      const current = stateRef.current

      if (
        current.state === 'following' ||
        current.state === 'goingToNest' ||
        current.state === 'despawning'
      ) {
        const currentPos = positionRef.current
        const dx = current.target.x - currentPos.x
        const dy = current.target.y - currentPos.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const threshold =
          current.state === 'goingToNest' || current.state === 'despawning'
            ? 20
            : 5

        if (distance > threshold) {
          const newPos = {
            x: currentPos.x + dx * smoothness,
            y: currentPos.y + dy * smoothness,
          }
          positionRef.current = newPos
          dispatch({ type: 'UPDATE_POSITION', position: newPos })

          if (dx !== 0) {
            dispatch({
              type: 'SET_DIRECTION',
              direction: dx > 0 ? 'right' : 'left',
            })
          }

          if (Math.abs(dy) > 5) {
            setFlyDirection(dy < 0 ? 'up' : 'down')
          } else {
            setFlyDirection('none')
          }

          if (current.currentAnimation !== 'flying') {
            dispatch({ type: 'SET_ANIMATION', animation: 'flying' })
          }
        } else {
          setFlyDirection('none')

          if (current.state === 'goingToNest') {
            dispatch({ type: 'SET_STATE', state: 'inNest' })
            dispatch({ type: 'SET_ANIMATION', animation: 'staying' })
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [state.active, smoothness, dispatch])

  if (!state.active) return null

  const currentSprite = sprites[state.currentAnimation]
  if (!currentSprite) return null

  return (
    <div
      className={styles.follower}
      data-direction={state.direction}
      data-state={state.state}
      data-fly={flyDirection}
      role="presentation"
      aria-hidden="true"
      style={{
        left: `${state.position.x}px`,
        top: `${state.position.y}px`,
      }}
    >
      <img
        src={currentSprite}
        alt={t('common.follower.altText')}
        className={styles.sprite}
        draggable={false}
      />
    </div>
  )
}
