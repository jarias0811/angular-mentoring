export interface StarWarsPeople {
  name: string;
  skin_color?: string;
  height: string | number;
  mass: string | number;
}

export interface StarWarsResponse {
  count: number;
  previous: string;
  next: string;
  results: Array<StarWarsPeople>;
}
