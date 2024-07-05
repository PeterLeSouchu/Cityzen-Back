/* eslint-disable import/no-extraneous-dependencies */
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon from '../assets/marker.png';
import { useAppSelector } from '../hooks/redux';

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 38],
});

const position = [51.505, -0.09];

function Map() {
  const searched = useAppSelector(
    (store) => store.activities.searchedActivities
  );

  const markers = searched.map((activity) => ({
    geocode: [activity.latitude, activity.longitude],
    popUp: activity.title,
  }));

  console.log(markers);

  return (
    <MapContainer
      className="w-full h-full"
      center={[48.8566, 2.3522]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=4LWp1keVJZWckLljEDQy"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
