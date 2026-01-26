import { Address } from "onfido-node";

import { onfido } from "../test-helpers";

const exampleAddress: Address = {
  postcode: "S2 2DF",
  country: "GBR",
  flat_number: "",
  building_number: "2",
  building_name: "",
  street: "RAWSON CLOSE",
  sub_street: "",
  town: "SHEFFIELD",
};

const exampleAddress2 = {
  ...exampleAddress,
  building_number: "18",
};

it("allows picking addresses", async () => {
  const addresses = await onfido.findAddresses("S2 2DF");

  expect(addresses.data.addresses).toEqual(
    expect.arrayContaining([exampleAddress, exampleAddress2]),
  );
});
