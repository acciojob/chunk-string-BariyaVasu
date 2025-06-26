function chunkString(str, chunkLength) {
  const chunks = [];

  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.slice(i, i + chunkLength));
  }

  return chunks;
}
