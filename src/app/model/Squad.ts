import {Player} from "./Player";

export interface Squad {
  uuidSquad: string,
  squadName: string,
  members: Player[]
}
