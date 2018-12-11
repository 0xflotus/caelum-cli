import { filesystem } from "gluegun/filesystem";
import { homedir } from "os";

module.exports = {
  alias: ["a"],
  dashed: true,
  description: "Displays the apiKey",
  hidden: false,
  name: "key",
  run: async (toolbox) => {
    const CAELUM_CONFIG = `${homedir()}/.caelumrc`;

    const apiKey =
      filesystem.exists(CAELUM_CONFIG) &&
      JSON.parse(await filesystem.readAsync(CAELUM_CONFIG)).API_KEY;

    toolbox.print.info(apiKey);
  },
};
