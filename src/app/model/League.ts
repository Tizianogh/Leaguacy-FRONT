import {Squad} from "./Squad";

export interface League {
  uuidLeague: string,
  title: string,
  created: Date,
  updated: Date,
  squads: Squad[]
}
