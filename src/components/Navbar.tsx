import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { SiGooglemaps } from "react-icons/si";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  function Links() {
    return (
      <HStack spacing={4}>
        <Link
          isExternal
          href="https://search.google.com/local/writereview?placeid=ChIJaXCAigNHwBQRQ4ppkGNn6P8"
        >
          <Button leftIcon={<FcGoogle />}>Yorum Yapın</Button>
        </Link>
        <Link isExternal href="https://goo.gl/maps/iQTYB4dmzJbuVYDH7">
          <Button leftIcon={<SiGooglemaps color="salmon" />}>Tarif Alın</Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    );
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Image
            src={logo}
            objectFit="scale-down"
            htmlWidth="200px"
            alt="Logo"
          />
          <Box as={"nav"} display={{ base: "none", md: "flex" }}>
            <Links />
          </Box>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Links />
          </Box>
        ) : null}
      </Box>
    </>
  );
}
