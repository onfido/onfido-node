type AddressOptional = {
  flatNumber: string | null;
  buildingNumber: string | null;
  buildingName: string | null;
  street: string | null;
  subStreet: string | null;
  town: string | null;
  state: string | null;
  line1: string | null;
  line2: string | null;
  line3: string | null;
};

export type AddressRequest = {
  postcode: string;
  country: string;
} & Partial<AddressOptional>;

export type Address = {
  postcode: string;
  country: string;
} & AddressOptional;
