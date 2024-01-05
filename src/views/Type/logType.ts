import { Role } from "./roleType";

export type LogItem = {
  round: number;
  role: Role;
  result: 'win' | 'lose';
  sort?: number;
  playerScore?: number;
  computerScore?: number;
}
