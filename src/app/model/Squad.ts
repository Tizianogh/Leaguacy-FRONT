import {Player} from "./Player";

export interface Squad {
  uuidSquad: string,
  squadName: string,
  created: Date,
  updated: Date,
  members: Player[]
}
