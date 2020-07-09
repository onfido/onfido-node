import { AxiosInstance } from "axios";
import { Method, Resource } from "../Resource";

export type ExtractionResult = {
  documentId: string;
  documentClassification: {
    issuingCountry: string;
    documentType: string;
    issuingState?: string;
  };
  extractedData: {
    documentNumber?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    fullName?: string;
    gender?: string;
    dateOfBirth?: string;
    dateOfExpiry?: string;
    nationality?: string;
    mrzLine1?: string;
    mrzLine2?: string;
    mrzLine3?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    addressLine4?: string;
    addressLine5?: string;
  };
};

export type AutofillResource = {
  documentId: string;
};

export class Autofill extends Resource<AutofillResource> {
  constructor(axiosInstance: AxiosInstance) {
    super("extractions", axiosInstance);
  }

  public async perform(documentId: string): Promise<ExtractionResult> {
    return this.request({
      method: Method.POST,
      body: { documentId }
    });
  }
}
