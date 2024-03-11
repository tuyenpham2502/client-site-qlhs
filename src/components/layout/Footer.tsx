import { Box, Center, Show, Image, Text, IconButton } from "@chakra-ui/react";
import constants from "src/common/constants";
const Footer = () => {
  return (
    <Box
      bg="#131720"
      color="white"
      py={10}
      height={{
        sm: "540px",
        md: "600px",
        lg: "500px",
        xl: "500px",
      }}
    >
      <Center h={"100%"} display={"flex"} flexFlow={"column"}>
        <Box
          w={"100%"}
          display={"flex"}
          maxW={constants.widthBreakPoint}
        >
          <Show breakpoint="(min-width: 1140px)">
            <Box display={"flex"}>
              <Box>
                <Box display={"flex"} flexDirection={"column"} gap={5}>
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={10}
                    height={10}
                  />
                  <Text>Movies & TV Shows, Online cinema,</Text>
                  <Box>
                    <Box
                      _hover={{ opacity: 0.4 }}
                      display={"inline-block"}
                    >
                      <IconButton
                        aria-label="facebook"
                        icon={
                          <Image src="/icons/facebook.svg" alt="facebook" />
                        }
                        variant="unstyled"
                        width={8}
                        height={8}
                        _hover={{ opacity: 1 }}
                      />
                      <IconButton
                        aria-label="twitter"
                        icon={<Image src="/icons/twitter.svg" alt="twitter" />}
                        variant="unstyled"
                        width={8}
                        height={8}
                        _hover={{ opacity: 1 }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box></Box>
            </Box>
          </Show>
        </Box>
      </Center>
    </Box>
  );
};

export default Footer;
