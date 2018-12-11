const { build } = require("gluegun");

async function run(argv) {
  const cli = build()
    .brand("caelum-cli")
    .src(__dirname)
    .plugins("./node_modules", { matching: "caelum-cli-*", hidden: true })
    .help()
    .version()
    .create();

  const context = await cli.run(argv);
  return context;
}

module.exports = { run };
