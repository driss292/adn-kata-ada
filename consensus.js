export const formatInGroup = (codons, groupeSize = 5) => {
  const allFormattedGroup = [];
  for (let i = 0; i < codons.length; i++) {
    const formattedGroup = [];
    const nucleotides = codons[i].split("");
    for (let j = 0; j < nucleotides.length; j += groupeSize) {
      const group = nucleotides.slice(j, j + groupeSize).join(" ");
      formattedGroup.push(group);
    }
    allFormattedGroup.push(formattedGroup.join("\n"));
  }
  return allFormattedGroup.join("\n\n");
};
