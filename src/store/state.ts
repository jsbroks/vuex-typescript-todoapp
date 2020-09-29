export type TodoItem = {
  id: number
  text: string
  completed: boolean
}

export type State = {
  loading: boolean
  items: TodoItem[]
}

export const state: State = {
  loading: false,
  items: []
}
