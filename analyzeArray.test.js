import { analyzeArray } from "./analyzeArray";

test('analyzeArray function works', () => {
    expect(analyzeArray([1,2,3,4,5])).toStrictEqual({'average':3, 'min': 1, 'max': 5, 'length':5})
})

test('analyzeArray function works', () => {
    expect(analyzeArray([])).toStrictEqual('arr is empty, please input some numerical values')
})