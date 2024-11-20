import { env } from "$env/dynamic/public";
import PocketBase from "pocketbase";
import { dev } from "$app/environment";
import type { TypedPocketBase } from "./types";

export function createInstance() {
  return new PocketBase(
    dev ? "http://localhost:8090" : env.PUBLIC_POCKETBASE_URL,
  );
}

export const pb = createInstance() as TypedPocketBase;
