export interface HouseApiResponse {
  name: string;
  founder: string;
  houseColours: string;
  animal: string;
  traits: {
    id: string;
    name: string;
  }[];
}
