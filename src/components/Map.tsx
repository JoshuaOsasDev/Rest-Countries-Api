import type { JSX } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import type { MapProps } from "./Type";

function Map({ position, country }: MapProps): JSX.Element {
  const markerIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  return (
    <div className="mt-10 w-full">
      <MapContainer
        center={position}
        zoom={5}
        className="h-[250px] w-full rounded-lg shadow-md md:h-[400px] lg:h-[500px]"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            <div className="mr-5 flex items-center space-x-2 text-lg font-bold">
              <img
                src={country.flags?.png}
                alt={`${country.name.common} flag`}
                className="h-4 w-6 rounded-sm object-cover"
              />
              <span>{country.name.common}</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
