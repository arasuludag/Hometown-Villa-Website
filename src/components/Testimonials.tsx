import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import avatarFemale from "../assets/avatarFemale.jpg";
import avatarMale from "../assets/avatarMale.jpg";
import testimonials from "../data/testimonials.json";
import { Testimonial as TestimonialType } from "../interfaces/testimonial.interface";

const MAX_TEXT_LENGTH = 150;

const getAvatar = (gender: string) =>
  gender === "female" ? avatarFemale : avatarMale;

const TruncatedText = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);
  const textColor = useColorModeValue("gray.600", "gray.400");
  const needsTruncation = text.length > MAX_TEXT_LENGTH;

  return (
    <Text textAlign="center" color={textColor} fontSize="sm">
      {expanded || !needsTruncation ? text : `${text.slice(0, MAX_TEXT_LENGTH)}...`}
      {needsTruncation && (
        <Text
          as="span"
          color="blue.500"
          cursor="pointer"
          fontWeight={600}
          ml={1}
          onClick={() => setExpanded(!expanded)}
          _hover={{ textDecoration: "underline" }}
        >
          {expanded ? "Daha az" : "Devamını oku"}
        </Text>
      )}
    </Text>
  );
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Stack
      bg={bg}
      boxShadow="lg"
      p={8}
      rounded="xl"
      align="center"
      pos="relative"
      flex="1"
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
        borderTopColor: bg,
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

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  const textColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Flex align="center" mt={8} direction="column">
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align="center">
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize="sm" color={textColor}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const ReviewCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  return (
    <Flex direction="column" h="100%" px={2} pb={4}>
      <TestimonialContent>
        <Heading as="h3" fontSize="xl">
          {testimonial.heading}
        </Heading>
        <TruncatedText text={testimonial.text} />
      </TestimonialContent>
      <TestimonialAvatar
        src={getAvatar(testimonial.gender)}
        name={testimonial.name}
        title={`${testimonial.source} Değerlendirmesi`}
      />
    </Flex>
  );
};

const ModalTestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Stack bg={bgColor} boxShadow="md" p={6} rounded="xl" spacing={4}>
      <Flex align="center" gap={3}>
        <Avatar src={getAvatar(testimonial.gender)} size="sm" />
        <Box>
          <Text fontWeight={600} fontSize="sm">
            {testimonial.name}
          </Text>
          <Text fontSize="xs" color={textColor}>
            {testimonial.source} Değerlendirmesi
          </Text>
        </Box>
      </Flex>
      <Heading as="h4" fontSize="md">
        {testimonial.heading}
      </Heading>
      <Text fontSize="sm" color={textColor}>
        {testimonial.text}
      </Text>
    </Stack>
  );
};

export default function WithSpeechBubbles() {
  const data = testimonials as TestimonialType[];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalBg = useColorModeValue("gray.50", "gray.900");
  const subtitleColor = useColorModeValue("gray.600", "gray.400");

  // Split into pages of 6 for desktop (2 rows x 3)
  const pages: TestimonialType[][] = [];
  for (let i = 0; i < data.length; i += 6) {
    pages.push(data.slice(i, i + 6));
  }

  return (
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }} margin="75px auto">
        <Stack spacing={8} align="center" mb={8}>
          <Heading>Değerlendirmeler</Heading>
          <Text color={subtitleColor} fontSize="lg" mt={-4}>
            {data.length}+ mutlu misafir
          </Text>
        </Stack>

        {/* Desktop: 2 rows of 3, paginated via Swiper */}
        <Box
          display={{ base: "none", md: "block" }}
          sx={{
            ".swiper-pagination-bullet-active": {
              bg: "gray.600",
            },
          }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            style={{ paddingBottom: "50px" }}
          >
            {pages.map((page, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <SimpleGrid columns={3} spacing={6}>
                  {page.map((testimonial, i) => (
                    <ReviewCard key={i} testimonial={testimonial} />
                  ))}
                </SimpleGrid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Mobile: single card slider */}
        <Box
          display={{ base: "block", md: "none" }}
          sx={{
            ".swiper-pagination-bullet-active": {
              bg: "gray.600",
            },
          }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            style={{ paddingBottom: "50px" }}
          >
            {data.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <ReviewCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Flex justify="center" mt={4}>
          <Button
            onClick={onOpen}
            size="lg"
            variant="outline"
            colorScheme="gray"
          >
            Tüm {data.length} Değerlendirmeyi Gör
          </Button>
        </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent bg={modalBg} maxH="85vh">
          <ModalHeader>Tüm Değerlendirmeler ({data.length})</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {data.map((testimonial, index) => (
                <ModalTestimonialCard key={index} testimonial={testimonial} />
              ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
