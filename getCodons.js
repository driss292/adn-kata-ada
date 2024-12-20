import { promises as fs } from "fs";

export const getCodons = async (length) => {
  try {
    const nucleotides = await fs.readFile("./assets/adn.txt", "utf8");

    const codons = [];
    for (let i = 0; i < nucleotides.length; i += length) {
      const codon = nucleotides.slice(i, i + length);
      if (codon.length === length) {
        codons.push(codon);
      }
    }
    return codons;
  } catch (err) {
    console.error("Erreur:", err);
  }
};
