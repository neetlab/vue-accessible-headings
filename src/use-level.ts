import { inject } from "vue";
import { INJECTION_KEYS } from "./constants";

export const useLevel = (): number => {
  return inject<number>(INJECTION_KEYS.HEADING_LEVEL, 1);
};
