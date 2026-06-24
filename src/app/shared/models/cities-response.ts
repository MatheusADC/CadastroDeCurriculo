export type CitiesListResponse = string[];

export interface ICitiesResponse {
  error: string;
  msg: string;
  data: CitiesListResponse;
}
