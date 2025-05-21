function analyzeArray(arr) {
    let obj = {}

    if(arr.length === 0){
        return 'arr is empty, please input some numerical values'
    }
    //calculate average of the numbers inside of the arr array
    const avg = arr.reduce((accumulator, currentValue) => accumulator + currentValue)/arr.length
    // assign avg to the average property of the obj object
    obj['average'] = avg
    // find the smallest number (min) inside the arr array
    const min = Math.min(... arr)
    obj['min'] = min
    // find the largest number (max) inside the arr array
    const max = Math.max(... arr)
    obj['max'] = max
    //find the length of the array
    obj['length'] = arr.length

    return obj
}

export {analyzeArray}