import { projectInputDomElement as input } from "./dom-elements";

/* Clear Input values after event listener fired */

export function clearInputValue() {
  input.value = "";
}
