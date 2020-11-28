import { SELECT_PAGE } from "../_constants/action-types";

export function selectPage(payload) {
  return { type: SELECT_PAGE, payload };
}
