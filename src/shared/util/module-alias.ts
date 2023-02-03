import * as path from "path";
import moduleAlias from "module-alias";

const files = path.resolve(__dirname, "../..");

// lista de alias para importar
moduleAlias.addAliases({
  "@src": path.join(files, "src"),
  "@test": path.join(files, "test"),
});
