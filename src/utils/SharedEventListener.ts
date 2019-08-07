type EventHandler<E extends keyof DocumentEventMap> = (
  event: DocumentEventMap[E],
) => void

export class SharedEventListener<E extends keyof DocumentEventMap> {
  private subscribers: EventHandler<E>[]
  public readonly target: HTMLElement
  public readonly event: E

  constructor(event: E, target = document.documentElement) {
    this.event = event
    this.target = target
    this.subscribers = []
  }

  private attach = () => {
    this.target.addEventListener(this.event, this.handleEvent as any)
  }

  private detach = () => {
    this.target.removeEventListener(this.event, this.handleEvent as any)
  }

  private handleEvent = (event: DocumentEventMap[E]) => {
    this.subscribers.forEach(listener => listener(event))
  }

  public subscribe = (handler: EventHandler<E>) => {
    if (this.subscribers.length === 0) {
      this.attach()
    }

    this.subscribers.push(handler)

    return () => this.unsubscribe(handler)
  }

  public unsubscribe = (handler: EventHandler<E>) => {
    this.subscribers = this.subscribers.filter(listener => listener !== handler)

    if (this.subscribers.length === 0) {
      this.detach()
    }
  }
}
