import { Applicant } from "onfido-node";

import { createNock, onfido, getExpectedObject, createApplicant, cleanUpApplicants } from "../testHelpers";
import { exampleApplicant } from "../testExamples";

function getExpectedApplicant(exampleApplicant: Applicant)
{
  return getExpectedObject(exampleApplicant, {
    'sandbox': true });
}

function sort_by_firstname( a: Applicant, b: Applicant ) {
  if ( a.firstName < b.firstName ){
    return -1;
  }
  if ( a.firstName > b.firstName ){
    return 1;
  }
  return 0;
}

let modifiedApplicant = { ... exampleApplicant,
                          firstName: "Test2" }

let applicant: Applicant;

afterAll(() => {
  return cleanUpApplicants();
});

it("creates an applicant", async () => {
  applicant = await createApplicant();
  expect(applicant).toMatchObject(getExpectedApplicant(exampleApplicant));
});

it("finds an applicant", async () => {
  createNock()
    .get("/applicants/" + applicant.id)
    .reply(200, JSON.stringify(exampleApplicant));

  const lookupApplicant = await onfido.applicant.find(applicant.id);

  expect(lookupApplicant).toMatchObject(getExpectedApplicant(exampleApplicant));
});

it("updates an applicant", async () => {
  createNock()
    .put("/applicants/" + applicant.id, { first_name: "Test2" })
    .reply(200, JSON.stringify(modifiedApplicant));

  const updatedApplicant = await onfido.applicant.update(applicant.id, {
    firstName: "Test2"
  });

  expect(updatedApplicant).toMatchObject(getExpectedApplicant(modifiedApplicant));
});

it("deletes an applicant", async () => {
  createNock()
    .delete("/applicants/" + applicant.id)
    .reply(204);

  expect(await onfido.applicant.delete(applicant.id)).toBeUndefined();
});

it("restores an applicant", async () => {
  createNock()
    .post("/applicants/" + applicant.id + "/restore")
    .reply(204);

  expect(await onfido.applicant.restore(applicant.id)).toBeUndefined();
});

it("lists applicants", async () => {
  createNock()
    .get("/applicants/")
    .query({
      page: 1,
      per_page: 20,
      include_deleted: false
    })
    .reply(200, JSON.stringify({ applicants: [exampleApplicant, modifiedApplicant] }))

  const applicants = await onfido.applicant.list({
    page: 1,
    perPage: 20,
    includeDeleted: false
  });

  expect(applicants.sort(sort_by_firstname)).toEqual(
    expect.arrayContaining([getExpectedApplicant(exampleApplicant),
                            getExpectedApplicant(modifiedApplicant)]));
});
