function shortestWord(str) {
    var words = str.split(" ");
    let shortestWord = words[0];
    //let next = " "
    for (let i = 0; i < words.length; i++) {
        //var next = words[i].length
        if (words[i].length <= shortestWord.length) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
}