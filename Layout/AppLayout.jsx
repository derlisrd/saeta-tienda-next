import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import styles from './applayout.module.css'

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})



const AppLayout = ({children}) => {
    return (
        <ChakraProvider theme={theme}>
            <Navbar />
            <div className={styles.nav_bar_top} ></div>
            <Container maxW="container.xl" minH='80vh'>
              {children}
            </Container>
            <Footer />
        </ChakraProvider>
    );
};

export default AppLayout