const array = new Uint32Array(4);
crypto.getRandomValues(array);
let out = "";
for (const num of array) {
    out += num;
}
console.log(out);
