/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */
import type { IncomingMessage } from "http";
import { getClient, logQueries } from "@faustjs/next";
import {
  generatedSchema,
  scalarsEnumsHash,
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";

export const client = getClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
});

export function serverClient(req: IncomingMessage) {
  return getClient<GeneratedSchema, SchemaObjectTypesNames, SchemaObjectTypes>({
    schema: generatedSchema,
    scalarsEnumsHash,
    context: req,
  });
}

if (process.env.NODE_ENV === "development") {
  logQueries(client);
}

export * from "./schema.generated";
