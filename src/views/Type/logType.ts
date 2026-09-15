import { Role } from "./roleType";
import { GroupEn } from "./groupType";

export type LogItem = {
  round: number;
  role: GroupEn;
  result: 'win' | 'lose' | 'draw';
  sort?: number;
  playerScore?: number;
  computerScore?: number;
  playerCardRole?: Role;
  computerCardRole?: Role;
  beansChange?: number;
}
