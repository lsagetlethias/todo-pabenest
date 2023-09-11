import path from "path";

export type StoreType = "db" | "file" | "memory" | "mock";

export const config = {
  store: {
    type: "file" as StoreType,
    filePath: path.resolve(__dirname, "../../store.json"),
  },
} as const;
