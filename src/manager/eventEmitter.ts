class EventEmitter {
  listeners: Record<string, Function[]> = {}
  on(event: string, listener: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(listener)
  }

  emit(event: string, ...args: any[]) {
    for (const listener of this.listeners[event] ?? []) {
      listener(...args)
    }
  }
}

export default new EventEmitter()
