import { UserEffects } from "./effects/userEffect/user.effect";
import { MemberEffects } from "./effects/memberEffect/member.effect";

export const combinedEffects = [
  UserEffects,
  MemberEffects
];
