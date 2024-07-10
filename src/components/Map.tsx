/* eslint-disable import/no-extraneous-dependencies */
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import markerIcon from '../assets/marker.png';
import { useAppSelector } from '../hooks/redux';

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 38],
});

function Map() {
  const searched = useAppSelector(
    (store) => store.activities.searchedActivities
  );

  const [center, setCenter] = useState([0, 0]);

  useEffect(() => {
    if (searched.length > 0) {
      const firstGeocode = [searched[0].latitude, searched[0].longitude];
      setCenter(firstGeocode);
    }
  }, [searched]);

  function ChangeMapView({ center }) {
    const map = useMap();
    useEffect(() => {
      map.setView(center);
    }, [center, map]);
    return null;
  }

  const activities = searched.map((activity) => ({
    geocode: [activity.latitude, activity.longitude],
    id: activity.id,
    slug: activity.slug,
    title: activity.title,
    url: activity.url,
    description: activity.description,
    avg_rate: activity.avg_rate,
    image: activity.image,
    address: activity.address,
    phone: activity.phone,
    city_id: activity.city_id,
  }));

  return (
    <MapContainer
      className="w-full h-full"
      center={[48.8566, 2.3522]}
      zoom={13}
      scrollWheelZoom
    >
      <ChangeMapView center={center} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=4LWp1keVJZWckLljEDQy"
      />
      {activities.map((activity, index) => (
        <Marker key={index} position={activity.geocode} icon={customIcon}>
          <Popup>
            <Link to={`/activity/${activity.slug}`}>
              <img src={activity.image} alt={activity.title} />
              <h2 className="text-black font-hind font-bold text-center text-sm md:text-base lg:text-lg">
                {activity.title}
              </h2>
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
