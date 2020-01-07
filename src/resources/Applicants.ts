import { AxiosInstance } from "axios";
import { Method, Resource } from "../Resource";
import { Address, AddressRequest } from "./Addresses";
import { IdNumber, IdNumberRequest } from "./IdNumbers";

// firstName and lastName are also optional, to allow updating.
export type ApplicantRequest = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  dob?: string | null;
  address?: AddressRequest | null;
  idNumbers?: IdNumberRequest[] | null;
};

export type Applicant = {
  id: string;
  createdAt: string;
  deleteAt: string | null;
  href: string;
  firstName: string;
  lastName: string;
  email: string | null;
  dob: string | null;
  address: Address | null;
  idNumbers: IdNumber[] | null;
};

export class Applicants extends Resource<ApplicantRequest> {
  constructor(axiosInstance: AxiosInstance) {
    super("applicants", axiosInstance);
  }

  public async create(applicantRequest: ApplicantRequest): Promise<Applicant> {
    return this.request({ method: Method.POST, body: applicantRequest });
  }

  public async find(id: string): Promise<Applicant> {
    return this.request({ method: Method.GET, path: id });
  }

  public async update(
    id: string,
    applicantRequest: ApplicantRequest
  ): Promise<Applicant> {
    return this.request({
      method: Method.PUT,
      path: id,
      body: applicantRequest
    });
  }

  public async delete(id: string): Promise<void> {
    await this.request({ method: Method.DELETE, path: id });
  }

  public async restore(id: string): Promise<void> {
    await this.request({ method: Method.POST, path: `${id}/restore` });
  }

  public async list({
    page,
    perPage,
    includeDeleted
  }: {
    page?: number;
    perPage?: number;
    includeDeleted?: boolean;
  } = {}): Promise<Applicant[]> {
    const { applicants } = await this.request({
      method: Method.GET,
      query: { page, perPage, includeDeleted }
    });

    return applicants;
  }
}
