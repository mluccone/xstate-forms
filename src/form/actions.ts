export const blur = (name: string) => ({ type: "BLUR", fieldName: name });
export const change = (name: string, value: string | number | boolean) => ({
  type: "CHANGE",
  fieldName: name,
  value
});
export const click = (name: string) => ({ type: "CLICK", fieldName: name });
export const disable = (name: string) => ({ type: "DISABLE", fieldName: name });
export const enable = (name: string) => ({ type: "ENABLE", fieldName: name });
export const focus = (name: string) => ({ type: "FOCUS", fieldName: name });
export const invalid = (name: string) => ({ type: "INVALID", fieldName: name });
export const invisible = (name: string) => ({
  type: "INVISIBLE",
  fieldName: name
});
export const reset = () => ({ type: "RESET" });
export const valid = (name: string) => ({ type: "VALID", fieldName: name });
export const visible = (name: string) => ({ type: "VISIBLE", fieldName: name });
