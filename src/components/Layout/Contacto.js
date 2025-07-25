import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconoPersonalizado from "../../assets/icono-not.png";
import { ContactItem } from "../Core/ContactItem";
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";
import CurrentHour from "../Core/CurrentHour";
import WeeklyServiceHours from "./WeeklyServiceHours";

const icono_nueve = new L.Icon({
  iconUrl: iconoPersonalizado,
  iconSize: [60, 60],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Contacto = () => {
  const position = [18.895503, -96.946083]; //NOTARIA 9
  const style = { minHeight: "18rem", height: "100%", width: "100%" };

  return (
    <div className="main-contact-wrapper">
      <div id="horarios-servicio" className="map-div">
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
      <div className="phone-mail-container">
        <ContactItem
          typeDireccion={"Dirección"}
          description={
            "Calle 20 entre evenidas 13 y 15 #1303, Federal, 94570 Córdoba, Ver."
          }
          Icono={IconMapPin}
        />

        <ContactItem
          typeDireccion={"Teléfonos"}
          description={"271 717 9911 - 271 272 5760"}
          Icono={IconPhone}
        />

        <ContactItem
          typeDireccion={"Correo electrónico"}
          description={"notaria9_corvera@yahoo.com.mx"}
          Icono={IconMapPin}
        />
        {/* <ContactItem
          typeDireccion={"Correo"}
          description={"notaria9_corvera@yahoo.com.mx"}
          Icono={IconMail}
        /> */}
        <CurrentHour WeeklyServiceHours={WeeklyServiceHours} />
      </div>
    </div>
  );
};

export default Contacto;
