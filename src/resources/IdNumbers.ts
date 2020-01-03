export type IdNumberRequest = {
  type: string;
  value: string;
  stateCode?: string | null;
};

export type IdNumber = {
  type: string;
  value: string;
  stateCode: string | null;
};
