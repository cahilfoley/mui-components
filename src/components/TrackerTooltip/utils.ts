export type Point = {
  clientX: number
  clientY: number
  [attr: string]: any
}

export const rectContainsPosition = (rect: DOMRect | ClientRect, point: Point): boolean => {
  return (
    rect &&
    point.clientX >= rect.left &&
    point.clientX <= rect.right &&
    point.clientY >= rect.top &&
    point.clientY <= rect.bottom
  )
}
