import Header from "src/components/layout/Header";
import Body from "src/components/layout/Body";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Footer from "src/components/layout/Footer";

const MainLayout = ({ children }) => {
    return (
        <Flex flexDirection="column" minHeight="100vh" >
            {/* Header */}
           <Header/>
            {/* Content */}
            <Box flex="1" p={4} overflowY={"auto"}>
                {children}
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>
                <Box h={20}></Box>

            </Box>
            {/* Footer */}
            <Footer />
        </Flex>
    );
}

export default MainLayout;