export type LocationRequest = {
    ipAddress?: string | null;
    countryOfResidence?: string | null;
  };
  
export type Location = {
    ipAddress: string;
    countryOfResidence: string;
  };