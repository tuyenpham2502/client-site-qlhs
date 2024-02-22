import React from 'react'
import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react'
const Header = () => {
    return (
        <Box position={"sticky"} top={0} zIndex={1000} h={20} bg="#131720" color="white">
            <Center>
                <Box p={4} display={"flex"} maxW={{
                    base: "1330px",
                    md: "1330px",
                    lg: "1330px",
                }} >
                    {/* <Box display={"flex"} gap={"4px"}> */}
                        <img src="/images/logo.png" alt="Logo" />
                        {/* <Text fontSize="xl" fontWeight="bold">TuyenPham films</Text> */}
                    {/* </Box> */}
                    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                        <GridItem w='100%' h='10'>Home</GridItem>
                        <GridItem w='100%' h='10' />
                        <GridItem w='100%' h='10' />
                        <GridItem w='100%' h='10' />
                        <GridItem w='100%' h='10' />
                    </Grid>

                </Box>
            </Center>
        </Box>

    );
}

export default Header;