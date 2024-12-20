import { formatInGroup } from "./consensus.js";
import { getCodons } from "./getCodons.js";
const codons = await getCodons(25);

console.log(formatInGroup(codons));

// const calculateRecurrences = () => {};
