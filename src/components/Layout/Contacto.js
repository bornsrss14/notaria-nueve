import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IconMapPin, IconPhone } from "@tabler/icons-react";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import iconoPersonalizado from "../../assets/icono-not.png";

{
  /* delete L.Icon.Default.prototype._getIconUrl; */
}

const icono_nueve = new L.Icon({
  iconUrl: iconoPersonalizado,
  iconSize: [60, 60],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
export const Contacto = () => {
  const position = [18.895503, -96.946083]; //NOTARIA 9
  const style = { height: "400px", width: "44%" };
  return (
    <div>
      <div>
        <MapContainer center={position} zoom={17} style={style}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
          <Marker position={position} icon={icono_nueve}>
            <Popup>
              <div
                style={{
                  padding: "10px",
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#333",
                }}
              >
                <h3 style={{ margin: "0", color: "#4a148c" }}>Notaría 9</h3>
                <a
                  href="https://wa.me/521234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "6px 12px",
                    background: "blue",
                    color: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                    marginTop: "6px",
                  }}
                >
                  Llamar
                </a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="container-contacto">
        <div id="flexx">
          <IconMapPin stroke={1} color="blue" />
          <div>
            <h4>Dirección:</h4>
            <p>
              Calle 20 entre evenidas 13 y 15 #1303, Federal, 94570 Córdoba,
              Ver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
