Find the longest word in a string


Returns the length of the longest word in the given sentence.

Your answer must be a number.






function findLongestWordLength(str) {
  str=str.split(" ");
let larga= [];
for(let i=0;i<str.length;i++){
  if(str[i].length > larga){
    larga = str[i].length;
  }
}
  return larga;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");