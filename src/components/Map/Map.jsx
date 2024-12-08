import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

function Map() {
    useEffect(() => {
        const mapInstance = L.map('map', {
            minZoom: 4,
            maxZoom: 18,
            maxBoundsViscosity: 1.0,
            maxBounds: [
                [20, -130], // Southwest
                [50, -60]    // Northeast
            ]
        }).setView([39.8283, -98.5795], 5);
       
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            className: 'dark-tiles'
        }).addTo(mapInstance);

        return () => {
            mapInstance.remove();
        };
    }, []);

    return <div id="map"></div>;
}

export default Map;