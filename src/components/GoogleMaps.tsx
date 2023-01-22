import { memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import houseIcon from "../assets/houseIcon.png";
import villas from "../assets/villas.json";
import googleMapsAPI from "../assets/GoogleMapsAPIKey.json";

const containerStyle = {
  width: "90%",
  height: "600px",
  margin: "30px auto",
  borderRadius: "25px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 30px 10px",
};

const center = {
  lat: 36.57,
  lng: 29.14,
};

function MyComponent() {
  // API key is apperently not secret
  // and the usage is being restricted from Google Dev Console per website.
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsAPI.key,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      {villas.map((villa, index) => (
        <Marker
          position={villa.coordinates}
          title={villa.title}
          icon={houseIcon}
          onClick={() => window.open(villa.href, "_blank")}
          key={index}
        />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(MyComponent);
