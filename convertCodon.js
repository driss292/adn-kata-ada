import { codonTable } from "./assets/dico.js";
import { getCodons } from "./getCodons.js";

const codons = await getCodons(3);

export const convertCodons = async (arrayOfCodons) => {
  const proteins = [];
  for (const codon of arrayOfCodons) {
    const protein = codonTable[codon];
    proteins.push(protein);
  }
  console.log(proteins.join(""));
};
convertCodons(codons);
