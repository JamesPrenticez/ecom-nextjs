
export default function GoogleMarker({geometry, address}) {
  return (
    new google.maps.Marker({
      position: geometry.location,
      title: address.
    })
  ) 
  
}