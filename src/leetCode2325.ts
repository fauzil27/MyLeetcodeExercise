let key = "the quick brown fox jumps over the lazy dog",
  message = "vkbs bs t suepuv";

function decode(key: string, message: string) {
  const newKey = key.split(" ").join("");
  let latter: string = "abcdefghijklmnopqrstuvwxyz";
  let record: string[] = [];
  let result = "";
  for (let i = 0; i < newKey.length; i++) {
    if (!record.includes(newKey[i])) {
      record.push(newKey[i]);
    }
  }
  for (let j = 0; j < message.length; j++) {
    if (record.indexOf(message[j]) !== -1) {
      result += latter[record.indexOf(message[j])];
    } else {
      result += " ";
    }
  }
  console.log(record.length);
  return result;
}

console.log(decode(key, message));
