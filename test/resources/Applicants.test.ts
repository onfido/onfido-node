import { Applicant } from "onfido-node";

import { createNock, onfido, getExpectedObject, createApplicant, cleanUpApplicants, sortByFirstName } from "../testHelpers";
import { exampleApplicant } from "../testExamples";

function getExpectedApplicant(exampleApplicant: Applicant)
{
  return getExpectedObject(exampleApplicant, {
    'sandbox': true });
}

let applicant: Applicant;

beforeEach(async () => {
  applicant = await createApplicant();
});

afterAll(() => {
  return cleanUpApplicants();
});

async function deleteApplicant(applicant: Applicant)
{
  createNock()
    .delete("/applicants/" + applicant.id)
    .reply(204);

  return onfido.applicant.delete(applicant.id);
}

it("creates an applicant", async () => {
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
  const modifiedApplicant = { ... exampleApplicant, firstName: "Test2" }

  createNock()
    .put("/applicants/" + applicant.id, { first_name: "Test2" })
    .reply(200, JSON.stringify(modifiedApplicant));

  const updatedApplicant = await onfido.applicant.update(applicant.id, {
    firstName: "Test2"
  });

  expect(updatedApplicant).toMatchObject(getExpectedApplicant(modifiedApplicant));
});

it("deletes an applicant", async () => {
  expect(await deleteApplicant(applicant)).toBeUndefined();
});

it("restores an applicant", async () => {
  await deleteApplicant(applicant);

  createNock()
    .post("/applicants/" + applicant.id + "/restore")
    .reply(204);

  expect(await onfido.applicant.restore(applicant.id)).toBeUndefined();
});

it("lists applicants", async () => {
  const anotherApplicant = { ... exampleApplicant, firstName: "Another" }
  await createApplicant({ firstName: "Another" });

  createNock()
    .get("/applicants/")
    .query({
      page: 1,
      per_page: 20,
      include_deleted: false
    })
    .reply(200, JSON.stringify({ applicants: [anotherApplicant, exampleApplicant] }))

  const applicants = await onfido.applicant.list({
    page: 1,
    perPage: 20,
    includeDeleted: false
  });

  expect(applicants.sort(sortByFirstName)).toEqual(
    expect.arrayContaining([getExpectedApplicant(anotherApplicant),
                            getExpectedApplicant(exampleApplicant)]));
});
