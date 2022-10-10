import { Address } from "onfido-node";

import { createNock, onfido } from "../testHelpers";

const exampleAddress: Address = {
  postcode: "S2 2DF",
  country: "GBR",
  flatNumber: "",
  buildingNumber: "2",
  buildingName: "",
  street: "RAWSON CLOSE",
  subStreet: "",
  town: "SHEFFIELD"
};

const exampleAddress2 = {
  ... exampleAddress,
  buildingNumber: "18",
};

it("allows picking addresses", async () => {
  createNock()
    .get("/addresses/pick")
    .query({ postcode: "S2 2DF" })
    .reply(200, JSON.stringify({ addresses: [exampleAddress, exampleAddress2] }));

  const addresses = await onfido.address.pick("S2 2DF");

  expect(addresses).toEqual(expect.arrayContaining([ exampleAddress, exampleAddress2 ]));
});
