import { noCmsImports } from "@portfolio/eslint-config/boundaries";
import { config } from "@portfolio/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config[]} */
export default [...config, noCmsImports];
