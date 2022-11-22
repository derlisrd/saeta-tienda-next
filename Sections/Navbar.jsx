import { Drawer,DrawerCloseButton,DrawerContent,DrawerOverlay,Flex,IconButton,Container, Box, Text } from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  const btnRef = React.useRef()
  const [isOpen,setIsOpen] = useState(false)

  const onClose = ()=>{ setIsOpen(false) }

  return (
    <>
      <Flex p={2} minW="100%" bg='blackAlpha.50' backdropFilter='blur(10px) hue-rotate(90deg)' justifyContent={"center"} >
        <Box maxW="container.xl"  w="100%">
          <IconButton bgColor='blackAlpha.100'icon={<GiHamburgerMenu />} size="lg" color='blue.400' onClick={()=>{setIsOpen(!isOpen)}}  />
        </Box>
      </Flex>

      <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backdropBlur={3} >
          <DrawerCloseButton />
          <Flex justifyContent="center" gap={8} alignItems="center" minWidth='max-content' minH="100vh" flexDirection="column" >
            <Link href="/"><Text fontSize='2xl' color='blackAlpha.700'>Home</Text></Link>
            <Link href="/tienda"><Text fontSize='2xl' color='blackAlpha.700'>Tienda</Text></Link>
            <Link href="/micuenta"><Text fontSize='2xl' color='blackAlpha.700'>Mi Cuenta</Text></Link>
            <Link href="/contacto"><Text fontSize='2xl' color='blackAlpha.700'>Contacto</Text></Link>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar
