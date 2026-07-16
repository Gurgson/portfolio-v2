export type Position = {
  x: number
  y: number
}

export type AnimationType = 'flying' | 'staying'

export type Direction = 'left' | 'right'

export type FollowerStateType =
  | 'spawning'
  | 'following'
  | 'goingToNest'
  | 'inNest'
  | 'despawning'

export type Sprites = {
  flying: string
  staying: string
}

export interface FollowerState {
  active: boolean
  state: FollowerStateType
  position: Position
  target: Position
  direction: Direction
  currentAnimation: AnimationType
  nestPosition: Position | null
  spawnPosition: Position | null
}

export type FollowerAction =
  | { type: 'SPAWN'; position: Position }
  | { type: 'DESPAWN' }
  | { type: 'RESET' }
  | { type: 'SET_TARGET'; target: Position }
  | { type: 'GO_TO_NEST'; position: Position }
  | { type: 'RETURN_FROM_NEST' }
  | { type: 'UPDATE_POSITION'; position: Position }
  | { type: 'SET_ANIMATION'; animation: AnimationType }
  | { type: 'SET_DIRECTION'; direction: Direction }
  | { type: 'SET_STATE'; state: FollowerStateType }
  | { type: 'FINISH_DESPAWN' }

export interface FollowerContextType {
  state: FollowerState
  dispatch: React.Dispatch<FollowerAction>
}

export interface SpawnWelcomeMessage {
  content: React.ReactNode
  popAfter?: number
  duration?: number
}

export interface SpawnProps {
  position: Position
  welcomeMessage?: SpawnWelcomeMessage
  showWelcomeOnce?: boolean
  lang?: 'pl' | 'en'
}

export interface FollowerProps {
  sprites?: Sprites
  smoothness?: number
  lang?: 'pl' | 'en'
}

export interface NestMessage {
  content: React.ReactNode
  duration?: number
}

export interface NestProps {
  position: Position
  children: React.ReactNode
  image?: string
  messages?: NestMessage[]
  messagesStartDelay?: number
  messagesRepeatAfter?: number
  reverseColors?: boolean
  lang?: 'pl' | 'en'
}
