let ms = 100
let characters = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|', '\n']
for (const char of characters){
  setTimeout(() => {
    process.stdout.write(`${char}`);
  }, ms);
  ms += 200
}