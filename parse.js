var phrase = 'red fish blue Fish';
var parseAndCount = function(str) {
 let wordArray = str.toLowerCase().split(" ");
 let results = {};
 for(let i = 0; i < wordArray.length; i++){ 
 if(wordArray[i] in results){
results[wordArray[i]].count++;
 } else {
 results[wordArray[i]] = {count:1};
 }
 }
 Object.keys(results).sort().forEach(key => {
 console.log(key, ' - ', results[key].count);
 });
}
parseAndCount(phrase);
