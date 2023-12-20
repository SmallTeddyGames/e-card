import { GroupEn } from "./groupType";
import { Role } from "./roleType";

export type CardItem = {
  role: Role;
  img: string; //  'emperor.jpg' | 'citizen.jpg' | 'slave.jpg'|
  isClick?: boolean;
  sort?: number;
  group?: GroupEn;
}
