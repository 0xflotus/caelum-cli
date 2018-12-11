import { build } from "gluegun";

async function run(argv) {
  const cli = build()
    .brand("caelum-cli")
    .src(__dirname)
    .plugins("./node_modules", { matching: "caelum-cli-*", hidden: true })
    .help()
    .version()
    .create();

  return await cli.run(argv);
}

module.exports = { run };
