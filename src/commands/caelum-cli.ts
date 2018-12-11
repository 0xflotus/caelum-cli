import chalk from "chalk";
import { filesystem } from "gluegun/filesystem";
import { homedir } from "os";

const CAELUM_CONFIG = `${homedir()}/.caelumrc`;

async function getKey(key: string, toolbox: any): Promise<string> {
  try {
    return JSON.parse(await filesystem.readAsync(CAELUM_CONFIG))[key];
  } catch (Error) {
    toolbox.print.error(`Error in ${CAELUM_CONFIG}`);
    process.exit(1);
  }
}

module.exports = {
  name: "caelum-cli",
  run: async (toolbox: any) => {
    toolbox.print.info("Welcome to Caelum - Terminal powered");

    const api = toolbox.http.create({
      baseURL: "http://api.openweathermap.org/data/2.5",
      headers: { Accept: "application/json" },
    });

    if (!filesystem.exists(CAELUM_CONFIG)) {
      toolbox.print.error(`Couldn't find ${CAELUM_CONFIG}`);
      process.exit(1);
    }

    const apiKey = await getKey("API_KEY", toolbox);
    const location = await getKey("hometown", toolbox);

    const spinner = toolbox.print.spin("Fetching data...");
    const { ok, data } = await api.get(`/weather?q=${location}&APPID=${apiKey}`);

    spinner.stop();
    toolbox.print.info(
      ok ? `${location}: ${data.weather[0].description}` : chalk.red("An error occurred"),
    );
  },
};
