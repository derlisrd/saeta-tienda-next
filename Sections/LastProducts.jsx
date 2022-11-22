import { Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const LastProducts = () => {


    const array = [1,2,4,5,6]


  return (
    <>
        <Text fontSize="3xl" align={"center"} mb={6}>BLACK FRIDAY TOP PICKS</Text>

      <Grid templateColumns={{ md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6}>
        {
            array.map((e,i)=>(
                <GridItem w="100%" key={i}  >
                    <Link href='/productos/34'>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Heading size='sm'>Living room Sofa</Heading>
                    <Text fontSize='xs'>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    </Link>
                </GridItem>
            ))
        }
      </Grid>
    </>
  );
};

export default LastProducts;
