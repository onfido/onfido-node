import { AxiosInstance } from "axios";
import { Method, Resource } from "../Resource";

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

export class Addresses extends Resource<never> {
  constructor(axiosInstance: AxiosInstance) {
    super("addresses", axiosInstance);
  }

  public async pick(postcode: string): Promise<Address[]> {
    const { addresses } = await this.request({
      method: Method.GET,
      path: "pick",
      query: { postcode }
    });

    return addresses;
  }
}
