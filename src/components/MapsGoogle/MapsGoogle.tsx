import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import styles from './mapsGoogle.module.scss'

interface PickupPoint {
  id: string
  name: string
  address: {
    location: {
      latitude: number
      longitude: number
    }
  }
}
interface Props {
  data: PickupPoint[]
  apiKey: string
}

export default function MapsGoogle({ data, apiKey }: Props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  })

  let center = { lat: 0, lng: 0 }

  if (data && data.length > 0 && data[0].address) {
    center = {
      lat: data[0].address.location.latitude,
      lng: data[0].address.location.longitude,
    }
  }

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={15}
        >
          {data.map((pickupPoint, index) => (
            <div key={index}>
              <Marker
                key={pickupPoint.id}
                position={{
                  lat: pickupPoint.address.location.latitude,
                  lng: pickupPoint.address.location.longitude,
                }}
                options={{
                  label: { text: pickupPoint.name, className: styles.map },
                }}
              />
            </div>
          ))}
        </GoogleMap>
      )}
    </>
  )
}
