import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import your custom marker icon image
import markerIcon from "./marker-icon-pink.png";

// Create a new icon object
const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -35],
});

function Map({ lat, lon }) {
  React.useEffect(() => {
    const map = L.map("map").setView([lat, lon], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);
    
    // Pass the custom icon to the marker function
    L.marker([lat, lon], { icon: customIcon }).addTo(map);

    return () => {
      map.remove();
    };
  }, [lat, lon]);

  return    <div className="mapbox"id="map" ></div>;
}

export default Map;
