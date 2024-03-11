import React from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Show,
  Text,
  Image,
  IconButton,
  useDisclosure,
  Collapse,
  Stack,
  Fade,
  Slide,
} from "@chakra-ui/react";
import NextLink from "next/link";
import constants from "src/common/constants";
const DrawerMenu = dynamic(() => import("src/components/control/drawer-menu"));
const Header = () => {
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  const { isOpen: isOpenSearch, onToggle: onToggleSearch } = useDisclosure();
  return (
    <Box
      zIndex={1000}
      h={100}
      bg="#131720"
      color="white"
    >
      <Center
        h={"100%"}
        display={"flex"}
        flexFlow={"column"}
        justifyContent={"center"}
      >
        <Box
          p={4}
          maxW={constants.widthBreakPoint}
          w={"100%"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            position={"sticky"}
            alignItems={"center"}
            top={0}
          >
            {/* <Box display={"flex"} gap={"4px"}> */}

            <Box display={"flex"} gap={4}>
              <Show breakpoint="(max-width: 960px)">
                <Box onClick={onOpenDrawer} cursor={"pointer"}>
                  <IconButton
                    aria-label="menu"
                    icon={
                      <Image
                        src="/icons/menu.svg"
                        alt="menu"
                        width={10}
                        height={10}
                      />
                    }
                    variant="unstyled"
                  />
                </Box>
              </Show>
              <Image src="/images/logo.png" alt="Logo" width={10} height={10} />
              {/* <Text fontSize="xl" fontWeight="bold">Films</Text> */}
            </Box>
            {/* </Box> */}
            <Show breakpoint="(min-width: 960px)">
              <Box display={"flex"} alignItems={"center"}>
                {constants.MenuConfig.MainMenu.map((item, index) => (
                  <Link
                    key={index}
                    as={NextLink}
                    href={item?.hyperlink}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Box
                      as={"span"}
                      display={"flex"}
                      alignItems={"center"}
                      _hover={{ ".hovered-text": { color: "#2f80ed" } }}
                    >
                      <Text
                        lineHeight={"22px"}
                        fontSize="sm"
                        color={"#e0e0e0"}
                        fontWeight="semibold"
                      >
                        {item?.displayText}
                      </Text>
                      <IconButton
                        aria-label={item?.displayText}
                        icon={
                          <Image
                            src={item.icon}
                            alt={item?.displayText}
                            width={5}
                            height={5}
                          />
                        }
                        variant="unstyled"
                      />
                    </Box>
                  </Link>
                ))}
              </Box>
            </Show>
            <Show breakpoint="(min-width: 960px)">
              <Box>
                <InputGroup>
                  <Input
                    placeholder="I'm looking for"
                    _placeholder={{ color: "white" }}
                    bg="#1f2833"
                    color="white"
                    border={"none"}
                    borderRadius={"16px"}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="search"
                      icon={
                        <Image
                          src="/icons/search.svg"
                          alt="search"
                          width={5}
                          height={5}
                        />
                      }
                      variant="unstyled"
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Show>
            <Show breakpoint="(max-width: 960px)">
              <Box display={"flex"}>
                <Box>
                  <IconButton
                    aria-label="search"
                    _hover={{ color: "white" }}
                    icon={
                      <Image
                        src="/icons/search.svg"
                        _hover={{ color: "white" }}
                        alt="search"
                        width={5}
                        height={5}
                      />
                    }
                    variant="unstyled"
                    onClick={onToggleSearch}
                  />
                </Box>
              </Box>
            </Show>
            <Link
              as={NextLink}
              _hover={{ textDecoration: "none" }}
              href="/"
              display={"flex"}
              gap={2}
              alignItems={"center"}
            >
              <Text
                fontSize="sm"
                _hover={{ color: "#0056b3" }}
                color={"#e0e0e0"}
                fontWeight="medium"
              >
                Sign in
              </Text>
              <Image
                src={"icons/sign-in.svg"}
                alt="sign-in"
                width={5}
                height={5}
              />
            </Link>
            <Slide in={isOpenSearch}>
              <Box display={"flex"} h={100} alignItems={"center"}>
                <InputGroup>
                  <Input
                    placeholder="I'm looking for"
                    _placeholder={{ color: "white" }}
                    bg="#1f2833"
                    color="white"
                    border={"none"}
                    borderRadius={"16px"}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="search"
                      icon={
                        <Image
                          src="/icons/search.svg"
                          alt="search"
                          width={5}
                          height={5}
                        />
                      }
                      variant="unstyled"
                    />
                  </InputRightElement>
                </InputGroup>
                <IconButton
                  marginLeft={2}
                  aria-label="close"
                  icon={
                    <Image
                      src="/icons/delete.svg"
                      alt="close"
                      width={5}
                      height={5}
                    />
                  }
                  variant="unstyled"
                  onClick={onToggleSearch}
                />
              </Box>
            </Slide>
          </Box>
        </Box>
      </Center>

      {isOpenDrawer && (
        <DrawerMenu
          isOpen={isOpenDrawer}
          onClose={onCloseDrawer}
          items={constants.MenuConfig.MainMenu}
        />
      )}
    </Box>
  );
};

export default Header;
