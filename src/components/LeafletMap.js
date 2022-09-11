
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
export default function LeafletMap() {
  
  return (
    <div className="xl:h-[500px] xl:w-[825px]  lg:h-[500px] lg:w-[520px] h-[400px] w-[510px]  mx-0">
      <MapContainer
        center={[36.19125374221944, 44.00914381197795]}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[36.19125374221944, 44.00914381197795]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {/* <LocationMarker /> */}
      </MapContainer>
    </div>
  );
}