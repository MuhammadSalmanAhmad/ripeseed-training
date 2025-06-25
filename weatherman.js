import { main } from "./src/main.js";
import Yargs from "yargs-parser";
 // eslint-disable-next-line no-undef
const args = Yargs(process.argv.slice(2));
await main(args);

