import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import avatarFemale from "../assets/avatarFemale.jpg";
import avatarMale from "../assets/avatarMale.jpg";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box margin="75px 0">
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Değerlendirmeler</Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Temiz ve İlgili</TestimonialHeading>
              <TestimonialText>
                Çok temiz ve ilgiliydiler her şey eksiksiz düşünülmüş. Ailecek
                çok güzel ve dinlendirici bir tatil geçirdik, seneye yine
                görüşmek üzere.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={avatarFemale}
              name={"Ece"}
              title={"AirBNB Değerlendirmesi"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mükemmel</TestimonialHeading>
              <TestimonialText>
                İki gün konaklama fırsatı bulduk. Cem beyin iletişimi çok iyi.
                Her konuda çözüm odaklı ve net. Odalar temiz, bina yeni, konumu
                şahane, güvenlikli, herşeyi ile mükemmel ailecek
                konaklayacağınız bir yer. Gönül rahatlığı ile tercih
                edebilirsiniz. Seneye görüşmek üzere.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={avatarMale}
              name={"Atakan"}
              title={"VillaReviews Değerlendirmesi"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Çok İlgililer</TestimonialHeading>
              <TestimonialText>
                Çok ilgililer. Giriş çıkış saatlerimiz sorun olmadı. Temizlik
                çok özenliydi. Güzel bir konaklama deneyimi yaşadım. Teşekkür
                ederim.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={avatarMale}
              name={"İbrahim"}
              title={"AirBNB Değerlendirmesi"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
