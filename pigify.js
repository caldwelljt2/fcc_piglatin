function translatePigLatin(str) {
    let startVowels = /^[aeiou]/
    
    let makePiggy = function(word, origin, prepaired) {
      if (startVowels.test(word) || (prepaired == true && word == origin)) { 
        if (prepaired) {
          return word + "ay"
        } else {
          return word + "way"
        }
      } else {
        return makePiggy((word + word[0]).substring(1),origin, true)
      }
    }
    
    return str.replace(/\w+/g, function($0){
      return makePiggy($0, $0, false)  // last value is always false until ready for a suffix
      })
  
     
  }
  console.log(translatePigLatin("algorithm consonant glove schwartz rhythm california"));