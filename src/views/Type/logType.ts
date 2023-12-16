import { Role } from "./roleType";

export type LogItem = {
  round: number;
  role: Role;
  result: 'win' | 'lose';
  score?: number;
}
