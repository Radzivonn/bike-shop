import { type IAddressUpdateAction } from 'types/types';

export interface IProfileInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
}

export interface IAddressFormData {
  title: string;
  country: string;
  city: string;
  streetName: string;
  postalCode: string;
}

export interface IAddressData extends IAddressFormData {
  id?: string;
  key: string;
  source: IAddressUpdateAction;
  isDefault: boolean;
}
