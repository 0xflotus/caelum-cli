import { filesystem } from "gluegun/filesystem";
import { homedir } from "os";

module.exports = {
  name: "key",
  dashed: true,
  alias: ["a"],
  description: "Displays the apiKey",
  hidden: false,
  run: async toolbox => {
    const CAELUM_CONFIG = `${homedir()}/.caelumrc`;

    const apiKey =
      filesystem.exists(CAELUM_CONFIG) &&
      JSON.parse(await filesystem.readAsync(CAELUM_CONFIG))["API_KEY"];

    toolbox.print.info(apiKey);
  },
};
