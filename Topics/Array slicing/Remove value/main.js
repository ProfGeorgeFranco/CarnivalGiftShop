function newRemove(array, index, n) {
    let newArray = array;
    if (index >= 0 ){
        newArray.splice(index, n);
    }
    return newArray;
}