import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
// Import your custom marker icon image
import markerIcon from "./marker-icon-pink.png";
import { useContext } from "react";
import userdetails from '../context/userdetails/userdetail'
// Create a new icon object
const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -35],
});

function Map({ lat, lon }) {
  var current=useContext(userdetails);
  current=current.userposition;
  console.log(current);
  console.log(lat,lon)
  React.useEffect(() => {
    const map = L.map("map").setView([lat, lon], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);
    
    // Pass the custom icon to the marker function
    L.marker([lat, lon], { icon: customIcon }).addTo(map);
    L.marker([current.latitude,current.longitude], { icon: customIcon }).addTo(map);
    L.Routing.control({
      waypoints: [
        L.latLng(current.latitude,current.longitude),
        L.latLng(lat, lon),
      ]}).addTo(map);
    return () => {
      map.remove();
    };
  }, [lat, lon]);

  return    <div className="mapbox"id="map" ></div>;
}

export default Map;
