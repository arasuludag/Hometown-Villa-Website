import { Wrap, WrapItem } from "@chakra-ui/react";
import AirBNBCard from "./AirBNBCard";
import airBNBLinks from "../../assets/airBNBLinks.json";
import { useEffect } from "react";

export default function AirBNBSection() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.airbnb.com/embeddable/airbnb_jssdk";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Wrap margin={"50px 0px"} spacing="30px" justify="center">
      {airBNBLinks.map((link, index) => (
        <WrapItem maxWidth="435px" width="100%" key={index}>
          <AirBNBCard href={link.href} key={index} />
        </WrapItem>
      ))}
    </Wrap>
  );
}
