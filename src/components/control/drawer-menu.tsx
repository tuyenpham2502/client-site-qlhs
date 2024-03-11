import { Box, Drawer, DrawerContent, DrawerOverlay, Link, Text } from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"
import ListItem from "src/common/models/list-items";

type ListMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    items: ListItem[];
}


const DrawerMenu = (props: ListMenuProps) => {
    const { isOpen, onClose, items } = props
    return (
        <Drawer
            placement='top'
            isOpen={isOpen}
            onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent backgroundColor={"#131720"} >
                <Box padding={"24px"} display={"flex"} gap={"16px"} flexDirection={"column"}>
                    {items.map((item, index) => (
                        <Link key={index} as={NextLink} href={item?.hyperlink} _hover={{ textDecoration: "none" }} >
                            <Box display={"flex"} alignItems={"center"}>
                            <Text lineHeight={"22px"} fontSize="sm" color={"#e0e0e0"} _hover={{ color: "#2f80ed" }} fontWeight="semibold">{item?.displayText}
                            </Text>
                                <Image src={item.icon} alt={item?.displayText} width={20} height={20} />
                            </Box>
                        </Link>
                    ))}
                </Box>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerMenu;