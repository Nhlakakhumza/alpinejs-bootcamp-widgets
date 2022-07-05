function longestWord(str) {
    var longestWord1 = str.split(" ");
    var maxLength = 0;
    var max = ' '
    for (var i = 0; i < longestWord1.length; i++) {
        if (longestWord1[i].length >= maxLength) {
            maxLength = longestWord1[i].length
            max = longestWord1[i]
        }
    }
    return max;
}