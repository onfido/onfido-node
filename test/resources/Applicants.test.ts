import { Applicant } from "onfido-node";
import { createNock, onfido, getExpectedObject } from "../testHelpers";

const exampleApplicant: Applicant = {
  id: "123-abc",
  createdAt: "2020-01-01T00:00:00Z",
  deleteAt: null,
  href: "/v3.4/applicants/123-abc",
  firstName: "Test",
  lastName: "Applicant",
  email: null,
  dob: null,
  idNumbers: [],
  address: {
    postcode: "AB12 3AB",
    country: "GBR",
    flatNumber: null,
    buildingNumber: null,
    buildingName: null,
    street: null,
    subStreet: null,
    town: null,
    state: null,
    line1: null,
    line2: null,
    line3: null
  },
  phoneNumber: null,
  location: {
    ipAddress: "127.0.0.1",
    countryOfResidence: "GBR"
  }
};

let applicant_id = "";

it("creates applicants", async () => {
  createNock()
    .post("/applicants/", {
      first_name: "Test",
      last_name: "Applicant",
      address: {
        postcode: "AB12 3AB",
        country: "GBR"
      },
      location: {
        ip_address: "127.0.0.1",
        country_of_residence: "GBR"
      }
    })
    .reply(201, JSON.stringify(exampleApplicant));

  const applicant = await onfido.applicant.create({
    firstName: "Test",
    lastName: "Applicant",
    address: {
      postcode: "AB12 3AB",
      country: "GBR"
    },
    location: {
      ipAddress: "127.0.0.1",
      countryOfResidence: "GBR"
    }
  });

  expect(applicant).toMatchObject(getExpectedObject(exampleApplicant));

  applicant_id = applicant.id
});

it("finds an applicant", async () => {
  createNock()
    .get("/applicants/123-abc")
    .reply(200, JSON.stringify(exampleApplicant));

  const applicant = await onfido.applicant.find(applicant_id);

  expect(applicant).toMatchObject(getExpectedObject(exampleApplicant));
});

it("updates an applicant", async () => {
  var modifiedApplicant = { ... exampleApplicant };
  modifiedApplicant.firstName = "Test2"

  createNock()
    .put("/applicants/123-abc", { first_name: "Test2" })
    .reply(200, JSON.stringify(modifiedApplicant));

  const applicant = await onfido.applicant.update(applicant_id, {
    firstName: "Test2"
  });

  expect(applicant).toMatchObject(getExpectedObject(modifiedApplicant));
});

it("deletes an applicant", async () => {
  createNock()
    .delete("/applicants/123-abc")
    .reply(204);

  expect(await onfido.applicant.delete(applicant_id)).toBeUndefined();
});

it("restores an applicant", async () => {
  createNock()
    .post("/applicants/123-abc/restore")
    .reply(204);

  expect(await onfido.applicant.restore(applicant_id)).toBeUndefined();
});

it("lists applicants", async () => {
  createNock()
    .get("/applicants/")
    .query({
      page: 1,
      per_page: 20,
      include_deleted: true
    })
    .reply(200, { applicants: [JSON.stringify(exampleApplicant), JSON.stringify(exampleApplicant)] });

  const applicants = await onfido.applicant.list({
    page: 1,
    perPage: 20,
    includeDeleted: true
  });

  expect(applicants).toEqual(expect.arrayContaining([]));
});
