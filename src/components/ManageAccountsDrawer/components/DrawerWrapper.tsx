import { Drawer, DrawerOverlay } from '@chakra-ui/react'

export type DrawerWrapperProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export const DrawerWrapper = ({ children, isOpen, onClose }: DrawerWrapperProps) => {
  return (
    <Drawer isOpen={isOpen} size='lg' placement='right' onClose={onClose}>
      <DrawerOverlay />
      {children}
    </Drawer>
  )
}