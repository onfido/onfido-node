import { Applicant } from "onfido-node";
import { createNock, onfido } from "../testHelpers";

const exampleApplicant: Applicant = {
  id: "123-abc",
  createdAt: "2020-01-01T00:00:00Z",
  deleteAt: null,
  href: "/v3/applicants/123-abc",
  firstName: "Test",
  lastName: "Applicant",
  email: null,
  dob: null,
  idNumbers: [{ type: "type", value: "value", stateCode: null }],
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
  }
};

const exampleApplicantJson = {
  id: "123-abc",
  created_at: "2020-01-01T00:00:00Z",
  delete_at: null,
  href: "/v3/applicants/123-abc",
  first_name: "Test",
  last_name: "Applicant",
  email: null,
  dob: null,
  id_numbers: [{ type: "type", value: "value", state_code: null }],
  address: {
    postcode: "AB12 3AB",
    country: "GBR",
    flat_number: null,
    building_number: null,
    building_name: null,
    street: null,
    sub_street: null,
    town: null,
    state: null,
    line1: null,
    line2: null,
    line3: null
  }
};

it("creates applicants", async () => {
  createNock()
    .post("/applicants/", {
      first_name: "Test",
      last_name: "Applicant",
      address: {
        postcode: "AB12 3AB",
        country: "GBR"
      }
    })
    .reply(201, exampleApplicantJson);

  const applicant = await onfido.applicant.create({
    firstName: "Test",
    lastName: "Applicant",
    address: {
      postcode: "AB12 3AB",
      country: "GBR"
    }
  });

  expect(applicant).toEqual(exampleApplicant);
});

it("finds an applicant", async () => {
  createNock()
    .get("/applicants/123-abc")
    .reply(200, exampleApplicantJson);

  const applicant = await onfido.applicant.find("123-abc");

  expect(applicant).toEqual(exampleApplicant);
});

it("updates an applicant", async () => {
  createNock()
    .put("/applicants/123-abc", { first_name: "Test2" })
    .reply(200, exampleApplicantJson);

  const applicant = await onfido.applicant.update("123-abc", {
    firstName: "Test2"
  });

  expect(applicant).toEqual(exampleApplicant);
});

it("deletes an applicant", async () => {
  createNock()
    .delete("/applicants/123-abc")
    .reply(204);

  expect(await onfido.applicant.delete("123-abc")).toBeUndefined();
});

it("restores an applicant", async () => {
  createNock()
    .post("/applicants/123-abc/restore")
    .reply(204);

  expect(await onfido.applicant.restore("123-abc")).toBeUndefined();
});

it("lists applicants", async () => {
  createNock()
    .get("/applicants/")
    .query({
      page: 1,
      per_page: 20,
      include_deleted: true
    })
    .reply(200, { applicants: [exampleApplicantJson, exampleApplicantJson] });

  const applicants = await onfido.applicant.list({
    page: 1,
    perPage: 20,
    includeDeleted: true
  });

  expect(applicants).toEqual([exampleApplicant, exampleApplicant]);
});
