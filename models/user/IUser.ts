export interface IUser {
  id: string,
  email: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  locale: string;
  newsletter: boolean,
  shippingDetails?: {
    address: string,
    suburb: string,
    city: string,
    region: string,
    postalCode: string,
    country: string,
  },
  permissions: IUserPermissions[];
}

export interface IShippingDetails {
  address: '',
  city: '',
  postalCode: '',
  country: '',
}

export enum IUserPermissions {
  ADMIN = 'ADMIN',
}