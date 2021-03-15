import nock from "nock";
import { Address, Onfido } from "onfido-node";

const onfido = new Onfido({ apiToken: "api_token" });

const exampleAddress: Address = {
  postcode: "S2 2DF",
  country: "GBR",
  flatNumber: null,
  buildingNumber: null,
  buildingName: null,
  street: "Second Street",
  subStreet: null,
  town: "London",
  state: null,
  line1: null,
  line2: null,
  line3: null
};

const exampleAddressJson = {
  postcode: "S2 2DF",
  country: "GBR",
  flat_number: null,
  building_number: null,
  building_name: null,
  street: "Second Street",
  sub_street: null,
  town: "London",
  state: null,
  line1: null,
  line2: null,
  line3: null
};

it("allows picking addresses", async () => {
  nock("https://api.onfido.com/v3.1")
    .get("/addresses/pick")
    .query({ postcode: "S2 2DF" })
    .reply(200, { addresses: [exampleAddressJson, exampleAddressJson] });

  const addresses = await onfido.address.pick("S2 2DF");

  expect(addresses).toEqual([exampleAddress, exampleAddress]);
});
