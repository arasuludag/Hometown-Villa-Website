import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image src={logo} objectFit="scale-down" htmlWidth="200px" alt="Logo" />
        <Text>{`© ${new Date().getFullYear()} Hometown Villa. All rights reserved`}</Text>
        <Text>Babadağ Cd. 10, 48300 Muğla, Fethiye / Türkiye</Text>
      </Container>
    </Box>
  );
}
