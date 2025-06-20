import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import type { LatLngTuple } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { Hammer } from 'lucide-react';

export default function Map() {

    const position: LatLngTuple = [47.7924256, 3.5695084];

    const customDivIcon = L.divIcon({
        className: '',
        html: renderToStaticMarkup(
            <Hammer size={32} color="#421112" />
        ),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    return (
        <MapContainer center={position} zoom={18} scrollWheelZoom={true} className="my-auto mx-auto h-80 lg:h-90 w-full md:w-90 lg:w-100 z-0">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customDivIcon}>
                <Tooltip direction="top" offset={[0, -20]} opacity={1} className='rounded-xl'>
                    <div className="text-center">
                        <h2 className="text-sm m-0 font-bold">Jean Claude LARRIVÉ</h2>
                        <span className='mx-0'>26 rue Haute-Perrière, Auxerre (89000)</span>
                    </div>
                </Tooltip>
            </Marker>
        </MapContainer>
    );
}