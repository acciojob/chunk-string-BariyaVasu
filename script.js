function stringChop(str, size) {
  const chunks = [];
  for (let i = 0; i < str.length; i += Number(size)) {
    chunks.push(str.slice(i, i + Number(size)));
  }
  return chunks;
}
// Do not change the code below
const str = prompt("Enter String.");

function stringChop(str, size) {
  const chunks = [];
  size = Number(size); // Convert once at the start

  if (isNaN(size) || size <= 0) {
    return ["Invalid chunk size"];
  }

  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size).join(', '));


const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size).join(','));
