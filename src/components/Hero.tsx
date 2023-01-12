import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BiSwim } from "react-icons/bi";
import { FaBath, FaTemperatureLow, FaWifi } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import Cards from "./Swiper/Swiper";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function CallToAction() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "4xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              zIndex={1}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#FC7F7C",
                zIndex: -1,
              }}
            >
              {`${new Date().getFullYear()} yaz sezonuna`}
            </Text>
            <br />
            <Text as={"span"} color="#FC7F7C">
              hazır olan lüks villamızda
            </Text>
          </Heading>
          <Container maxW={"6xl"} mt={10}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
              <Feature
                icon={<Icon as={BiSwim} color={"blue.500"} w={5} h={5} />}
                iconBg={useColorModeValue("blue.100", "blue.900")}
                text={"Açık Havuz"}
              />
              <Feature
                icon={
                  <Icon
                    as={FaTemperatureLow}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.200", "yellow.900")}
                text={"Her Odada Klima"}
              />
              <Feature
                icon={<Icon as={FaBath} color={"gray.500"} w={5} h={5} />}
                iconBg={useColorModeValue("gray.100", "gray.900")}
                text={"Her Odanın Özel Banyosu"}
              />
              <Feature
                icon={<Icon as={FaWifi} color={"purple.500"} w={5} h={5} />}
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Ücretsiz WiFi"}
              />
              <Feature
                icon={<Icon as={GiBarbecue} color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Bahçe Mobilya & Barbekü"}
              />
              <Feature
                icon={
                  <Icon as={AiOutlineSafety} color={"blue.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("blue.100", "blue.900")}
                text={"Rahat & Güvenli"}
              />
            </SimpleGrid>
          </Container>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Link href="https://www.instagram.com/hometown.villa/" isExternal>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme="orange"
                bg={"#FC7F7C"}
                _hover={{ bg: "#BD5E5C" }}
                leftIcon={<BsInstagram />}
              >
                Instagram
              </Button>
            </Link>
            <Link href="https://wa.me/905063858001" isExternal>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme="whatsapp"
                leftIcon={<BsWhatsapp />}
              >
                WhatsApp
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Cards />
        </Flex>
      </Stack>
    </Container>
  );
}
