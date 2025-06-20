function stringChop(str, size) {
  const chunks = [];
  for (let i = 0; i < str.length; i += Number(size)) {
    chunks.push(str.slice(i, i + Number(size)));
  }
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));