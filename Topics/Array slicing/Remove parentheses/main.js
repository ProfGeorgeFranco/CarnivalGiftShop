function parentheses(string) {
    let myArray = string.split("");
    myArray.shift();
    myArray.pop();
    return myArray;
}