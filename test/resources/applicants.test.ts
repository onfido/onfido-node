import { Applicant, ApplicantConsentName } from "onfido-node";

import {
  onfido,
  getExpectedObject,
  createApplicant,
  cleanUpApplicants,
  sortByApplicantfirst_name
} from "../test-helpers";
import { exampleApplicant } from "../test-examples";
import { AxiosError, isAxiosError } from "axios";

function getExpectedApplicant(exampleApplicant: Applicant) {
  return getExpectedObject(exampleApplicant, {
    sandbox: true
  });
}

let applicant: Applicant;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
});

afterAll(() => {
  return cleanUpApplicants();
});

async function deleteApplicant(applicant: Applicant) {
  return onfido.deleteApplicant(applicant.id);
}

it("creates an applicant", async () => {
  expect(applicant).toMatchObject(getExpectedApplicant(exampleApplicant));
});

it("finds an applicant", async () => {
  const lookupApplicant = await onfido.findApplicant(applicant.id);

  expect(lookupApplicant.data).toMatchObject(
    getExpectedApplicant(exampleApplicant)
  );
});

it("updates an applicant", async () => {
  const modifiedApplicant = { ...exampleApplicant, first_name: "Test2" };

  const updatedApplicant = await onfido.updateApplicant(applicant.id, {
    first_name: "Test2"
  });

  expect(updatedApplicant.data).toMatchObject(
    getExpectedApplicant(modifiedApplicant)
  );
});

it("deletes an applicant", async () => {
  expect((await deleteApplicant(applicant)).status).toEqual(204);
});

it("restores an applicant", async () => {
  await deleteApplicant(applicant);

  expect((await onfido.restoreApplicant(applicant.id)).status).toEqual(204);
});

it("lists applicants", async () => {
  const anotherApplicant = { ...exampleApplicant, first_name: "Another" };
  await createApplicant({
    first_name: "Another",
    consents: [
      {
        name: ApplicantConsentName.PrivacyNoticesRead,
        granted: true
      }
    ]
  });

  const applicants = await onfido.listApplicants(1, 20, false);

  expect(applicants.data.applicants.sort(sortByApplicantfirst_name)).toEqual(
    expect.arrayContaining([
      getExpectedApplicant(anotherApplicant),
      getExpectedApplicant(exampleApplicant)
    ])
  );
});

it("finds a non existent applicant", async () => {
  try {
    await onfido.findApplicant("invalid-applicant-id");
    fail(); // We should never be here
  } catch (error) {
    expect(error).toBeInstanceOf(AxiosError);
    expect(error.response.status).toEqual(404);

    const error_details = error.response?.data.error;
    expect(isAxiosError(error)).toBe(true);
    expect(error_details.message).toBe(
      "Could not find the following resource: Applicant with id=invalid-applicant-id"
    );
    expect(error_details.type).toBe("resource_not_found");
  }
});
