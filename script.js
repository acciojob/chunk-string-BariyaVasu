function chunkString(str, chunkLength) {
  const chunks = [];

  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.slice(i, i + chunkLength));
  }

  return chunks;
}
console.log(chunkString("Hello, world!", 5)); 
console.log(chunkString("12345", 2));        
console.log(chunkString("abc", 5));           
