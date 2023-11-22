import { IUserPermissions, type IUser } from "../models";

export const mockUsers: IUser[] = [
  {
    id: "123456",
    email: "james.prentice@gmail.com",
    firstName: "james",
    lastName: "prentice",
    profilePicture: "./avatar.png",
    locale: "en-gb",
    newsletter: false,
    shippingDetails: {
      address: '2 Mission Cove',
      suburb: 'Company Bay',
      city: 'Dunedin',
      region: 'Otago',
      postalCode: '9016',
      country: 'New Zealand',
    },
    permissions: [IUserPermissions.ADMIN],
  }
]
