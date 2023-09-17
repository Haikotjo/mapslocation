import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

const LeafIcon = L.Icon.extend({
    options: {
        iconSize: [38/3, 95/3],  // Een derde van de oorspronkelijke grootte
        iconAnchor: [22/3, 94/3],  // Een derde van de oorspronkelijke ankerpunt
        popupAnchor: [-3, -76/3]  // Aangepast voor de nieuwe grootte
    }
});

const redIcon = new LeafIcon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(createSVGString('#FF0000'))
});

const greenIcon = new LeafIcon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(createSVGString('#00FF00'))
});

function createSVGString(color, size = 40) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}"><path fill="${color}" d="M16 0C7.164 0 0 7.163 0 16c0 9.234 12.496 24.956 16 32 3.504-7.044 16-22.766 16-32C32 7.163 24.836 0 16 0z"></path></svg>`;
}
function AlbertHeijnMap({ stores, toggleMachineStatus }) {

    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                setUserLocation([latitude, longitude]);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const center = userLocation || [52.3676, 4.9041];

    return (
        <MapContainer center={[52.3676, 4.9041]} zoom={15} style={{ width: '100%', height: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stores.map(store => (
                <Marker
                    key={store.id}
                    position={[store.lat, store.lon]}
                    // icon={greenIcon}
                    icon={store.isMachineBroken ? redIcon : greenIcon}
                    eventHandlers={{
                        click: () => toggleMachineStatus(store.id)
                    }}
                />
            ))}
        </MapContainer>
    );
}

export default AlbertHeijnMap;
