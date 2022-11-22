import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
 import { APICALLER } from '../Services/api'


const Footer = () => {
  return (
    <Flex minW="100%" bg='blackAlpha.50' justifyContent={"center"} pt={4} >
        <Box maxW="container.xl" w="100%" alignItems="center"  >
            <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={3} py={5} >
                <GridItem w="100%"  bg='orange.100' p={4} borderRadius={4} >
                    <Text fontSize='md' fontWeight='500'>
                        Categorías
                    </Text>
                    {
                        APICALLER.categorias.map((e,i)=>(
                            <Text fontSize='sm' key={i} mt={2}>
                                {e}
                            </Text>
                        ))
                    }
                    
                </GridItem>

                <GridItem w="100%"  bg='orange.100' p={4} borderRadius={4} >
                    <Text fontSize='md' fontWeight='500'>
                        Categorías
                    </Text>
                    {
                        APICALLER.categorias.map((e,i)=>(
                            <Text fontSize='sm' key={i} mt={2}>
                                {e}
                            </Text>
                        ))
                    }
                    
                </GridItem>

                <GridItem w="100%"  bg='orange.100' p={4} borderRadius={4} >
                    <Text fontSize='md' fontWeight='500'>
                        Categorías
                    </Text>
                    {
                        APICALLER.categorias.map((e,i)=>(
                            <Text fontSize='sm' key={i} mt={2}>
                                {e}
                            </Text>
                        ))
                    }
                    
                </GridItem>
                
            </Grid>

            <Box maxW="container.xl"  w="100%" alignItems="center" mt={5} >
                <Text fontSize='sm' >Desarrollado por saeta sistema. Todos los derechos reservados &copy; </Text>
            </Box>

        </Box>
    </Flex>
  )
}

export default Footer
