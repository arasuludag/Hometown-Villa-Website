import { Wrap, WrapItem } from "@chakra-ui/react";
import AirBNBCard from "./AirBNBCard";
import villas from "../../assets/villas.json";

export default function AirBNBSection() {
  return (
    <Wrap margin={"50px 0px"} spacing="80px" justify="center">
      {villas.map((villa, index) => (
        <WrapItem key={index}>
          <AirBNBCard villa={villa} />
        </WrapItem>
      ))}
    </Wrap>
  );
}
