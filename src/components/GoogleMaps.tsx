import { memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import houseIcon from "../assets/houseIcon.png";
import markers from "../assets/airBNBLinks.json";
import googleMapsAPI from "../assets/GoogleMapsAPIKey.json";

const containerStyle = {
  width: "100%",
  height: "600px",
  margin: "0 auto",
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
      {markers.map((marker, index) => (
        <Marker
          position={marker.coordinates}
          title={marker.title}
          icon={houseIcon}
          onClick={() => window.open(marker.href, "_blank")}
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
