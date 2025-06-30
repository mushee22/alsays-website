type Service = {
    title: string;
    description: string;
    icon: string;
    id: string;
}

export interface MenuItem {
  id?: string
  title: string
  path?: string
  subMenu?: Omit<MenuItem, "id">[]
}

export interface NavigationProps {
  className?: string
}

export interface MenuItemProps {
  item: MenuItem
  isActive?: boolean
  onHover?: (id?: string) => void;
  onClick?: (id: string) => void;
  level?: number,
  className?: string
}
