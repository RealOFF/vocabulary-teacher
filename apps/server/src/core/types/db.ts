import { DrizzleD1Database } from "drizzle-orm/d1";
import * as schema from "@/db-schema";

type Schema = typeof schema;

export type Database = DrizzleD1Database<Schema>;
