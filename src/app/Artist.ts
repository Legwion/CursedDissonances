export interface Artist {
  name: String;
  desc?: String;
  desc2?: string[]
  noDesc?: boolean;
  genre?: String;
  cateogry?: String;
  img: String;
  ScLink?: String;
  SpLink?: String;
  IgLink?: String;
  BcLink?: String;
  hasAlbum: boolean;
  Active: boolean;
  albums?: Array<any>;
  releases?: Array<any>;
}