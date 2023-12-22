import { Role } from "./roleType";

export type LogItem = {
  round: number;
  role: Role;
  result: 'win' | 'lose';
  playerScore?: number;
  computerScore?: number;
}
