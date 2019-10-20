declare module "json-deep-copy" {
  export interface JsonObject {
    [key: string]: JsonValue;
  }

  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = boolean | number | string | null | JsonArray | JsonObject;

  export default function deepCopy<T extends JsonValue>(src: T): T;
}
