export function addressFormatter(address_components){
    //console.log(address_components)

    const ShouldBeComponent = {
      street_number: ["street_number"],
      street_name: ["street_address", "route"],
      suburb: ["sublocality_level_1", "sublocality", "political"],
      city: ["locality" ],
      state: ["administrative_area_level_1", "administrative_area_level_2"],
      country: ["country"],
      postal_code: ["postal_code"]
    };
  
    let address = {
      street_number: "",
      street_name: "",
      suburb: "",
      city: "",
      state:"",
      country: "",
      postal_code: ""
    }
  
    address_components.forEach((component) => {
      for (var shouldBe in ShouldBeComponent) {
        if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
          // if (shouldBe === "country") {
          //   address[shouldBe] = component.short_name;
          // } else {
            address[shouldBe] = component.long_name;
          //}
        }
      }
    });

  return address;
}

export function googleMapMarker(location, address, map) {
  const contentString =
    '<div id="content">' +
      '<h5>Shipping Address</h5>' +
      '<div>' +
        `<p><b>Street:</b> ${address.street_number + " " + address.street_name}</p>` +
        `<p><b>Suburb:</b> ${address.suburb}</p>` +
        `<p><b>City:</b> ${address.city}</p>` +
        `<p><b>State:</b> ${address.state}</p>` +
        `<p><b>Country:</b> ${address.country}</p>` +
        `<p><b>Post Code:</b> ${address.postal_code}</p>` +
      "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  
  const marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    position: location,
    title: "Shipping Address",
    map: map
  })

  google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
    infowindow.open(map, marker)
  })

  return ( 
    marker,
    infowindow
  ) 
}