import {
  Box,
  chakra,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  Text,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { GiBeachBucket, GiValley } from "react-icons/gi";
import { MdPark } from "react-icons/md";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading
        lineHeight={1.2}
        fontWeight={500}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        margin="30px 0"
      >
        <Text as={"span"} color={"orange.300"}>
          {"Yamaç paraşütüyle ünlü "}
        </Text>
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
            bg: "orange.300",
            zIndex: -1,
          }}
        >
          {"Babadağı yolu "}
        </Text>
        <br />
        <Text as={"span"} color={"orange.300"}>
          {"ve "}
        </Text>
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
            bg: "orange.300",
            zIndex: -1,
          }}
        >
          Ölüdeniz caddesi
        </Text>
        <Text as={"span"} color={"orange.300"}>
          {" üzerinde"}
        </Text>
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
        justifyContent="center"
      >
        <StatsCard
          title={"Hisarönü Eğlence ve AVM"}
          stat={"1 km"}
          icon={<AiOutlineShopping size={"3em"} color="orange" />}
        />
        <StatsCard
          title={"Ölüdeniz / Kumburnu Milli Park"}
          stat={"3 km"}
          icon={<MdPark size={"3em"} color="green" />}
        />
        <StatsCard
          title={"Kelebekler Vadisi"}
          stat={"5 km"}
          icon={<GiValley size={"3em"} color="brown" />}
        />
        <StatsCard
          title={"Kabak Plajı"}
          stat={"10 km"}
          icon={<GiBeachBucket size={"3em"} color="gold" />}
        />
      </SimpleGrid>
    </Box>
  );
}
