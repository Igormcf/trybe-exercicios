function encode(string1) {
  let novaFrase = string1.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return novaFrase;
}

function decode(string2) {
  let novaFrase2 = string2.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return novaFrase2;
}


const functions = { encode, decode };
module.exports = functions;