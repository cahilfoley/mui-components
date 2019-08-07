export type MenuItem = {
  label: string
  onClick: () => void
}

export type MenuItemGroup = {
  label: string
  items: MenuItem[]
}
