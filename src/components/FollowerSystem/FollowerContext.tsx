'use client'

import React, { createContext, useContext, useReducer } from 'react'
import type {
  FollowerContextType,
  FollowerState,
  FollowerAction,
} from '../../types/Follower'

const FollowerContext = createContext<FollowerContextType | undefined>(
  undefined
)

const initialState: FollowerState = {
  active: false,
  state: 'following',
  position: { x: 0, y: 0 },
  target: { x: 0, y: 0 },
  direction: 'right',
  currentAnimation: 'flying',
  nestPosition: null,
  spawnPosition: null,
}

function followerReducer(
  state: FollowerState,
  action: FollowerAction
): FollowerState {
  switch (action.type) {
    case 'SPAWN':
      return {
        ...state,
        active: true,
        state: 'spawning',
        position: action.position,
        target: action.position,
        spawnPosition: action.position,
        currentAnimation: 'flying',
      }

    case 'DESPAWN':
      if (!state.spawnPosition) return initialState
      return {
        ...state,
        state: 'despawning',
        target: state.spawnPosition,
      }

    case 'FINISH_DESPAWN':
      return initialState

    case 'RESET':
      return initialState

    case 'SET_TARGET':
      if (state.state !== 'following') return state
      return { ...state, target: action.target }

    case 'GO_TO_NEST':
      return {
        ...state,
        state: 'goingToNest',
        target: action.position,
        nestPosition: action.position,
      }

    case 'RETURN_FROM_NEST':
      return {
        ...state,
        state: 'following',
        nestPosition: null,
      }

    case 'UPDATE_POSITION':
      return { ...state, position: action.position }

    case 'SET_ANIMATION':
      return { ...state, currentAnimation: action.animation }

    case 'SET_DIRECTION':
      return { ...state, direction: action.direction }

    case 'SET_STATE':
      return { ...state, state: action.state }

    default:
      return state
  }
}

export function FollowerProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(followerReducer, initialState)

  return (
    <FollowerContext.Provider value={{ state, dispatch }}>
      {children}
    </FollowerContext.Provider>
  )
}

export function useFollowerContext() {
  const context = useContext(FollowerContext)
  if (!context) {
    throw new Error('useFollowerContext must be used within FollowerProvider')
  }
  return context
}
