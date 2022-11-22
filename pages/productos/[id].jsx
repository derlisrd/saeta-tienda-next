import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Cabezera from '../../Components/Cabezera'
import AppLayout from '../../Layout/AppLayout'

const Details = ({params}) => {

    console.log(params)

  return (
    <AppLayout>
        <Cabezera title="Detalles" />
        <Box w='100%' bg='blackAlpha.100' borderRadius={6} p={5}>
            <Text fontSize='sm' >Ramo  9 Red Roses</Text>
        </Box>

        <Flex my={5}>
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={6}>
                <GridItem>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                </GridItem>
                <GridItem>
                    <Text fontWeight='bold'> Rmao 9 red Roses</Text>
                    <Text color='gray.600' fontSize='2xl' >Gs. 185.000</Text>
                    <Text fontSize='sm'>Box Terciopelo G Rosas Preservadas</Text>
                </GridItem>
            </Grid>
        </Flex>
        
    </AppLayout>
  )
}

export default Details
