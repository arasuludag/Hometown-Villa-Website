import { Box, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import AirBNBCard from "./AirBNBCard";
import airBNBLinks from "./airBNBLinks.json";

export default function AirBNBSection() {
  return (
    <Wrap margin={"50px 0px"} spacing="30px" justify="center">
      {airBNBLinks.map((link) => (
        <WrapItem maxWidth="435px" width="100%">
          <AirBNBCard href={link.href} />
        </WrapItem>
      ))}
    </Wrap>
  );
}
