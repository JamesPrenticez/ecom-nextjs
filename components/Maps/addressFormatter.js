

export function addressFormatter(address_components){
    //console.log(address_components);
  
    const ShouldBeComponent = {
      street_number: ["street_number"],
      street: ["street_address", "route"],
      postal_code: ["postal_code"],
      suburb: ["neighborhood"],
      state: ["administrative_area_level_1", "administrative_area_level_2"],
      city: ["locality" ],
      country: ["country"]
    };
  
    let address = {
      street_number: "",
      street: "",
      postal_code: "",
      suburb: "",
      state:"",
      city: "",
      country: ""
    }
  
    address_components.forEach((component) => {
      for (var shouldBe in ShouldBeComponent) {
        if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
          if (shouldBe === "country") {
            address[shouldBe] = component.short_name;
          } else {
            address[shouldBe] = component.long_name;
          }
        }
      }
    });
  

  return address;
}