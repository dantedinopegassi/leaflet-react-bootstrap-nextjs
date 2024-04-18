import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { map } from "leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[-32.0308, -60.3061]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png`}
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>"
      >
        
      </TileLayer>

      <Marker position={[-32.0308, -60.3061]} draggable={true} animate={true}>
        <Popup>Me encontraste :P</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
