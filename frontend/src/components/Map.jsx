import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";

const Map = () => {
  const customIcon = new Icon({
    iconUrl: "./icons/garbage.png",
    iconSize: [30, 30],
  });
  return (
    <>
      <MapContainer
        className="h-[450px] w-full rounded-xl z-0  shadow-2xl"
        center={[-0.433235, 116.987562]}
        zoom={15}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TVTNPGIyfvfalfAu4mN4"
          maxZoom={18}
        />
        <Marker position={[-0.433235, 116.987562]} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker position={[-0.43557, 116.988605]} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[-0.431821, 116.988083]} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
