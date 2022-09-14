
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
export default function LeafletMap() {
  
  return (
    <div className="xl:h-[500px] xl:w-[825px]  lg:h-[500px] lg:w-[520px] h-[400px] w-[510px]  mx-0">
      <MapContainer
        center={[36.191334551162996, 44.00403851007483]}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[36.191334551162996, 44.00403851007483]}>
          <Popup>
            This is my Office.
          </Popup>
        </Marker>
        {/* <LocationMarker /> */}
      </MapContainer>
    </div>
  );
}