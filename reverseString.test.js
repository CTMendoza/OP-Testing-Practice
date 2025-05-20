import { reverseString} from "./reverseString";
test('reverses word to be spelled backwards', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('reverses word to be spelled backwards', () => {
    expect(reverseString('respect')).toBe('tcepser')
})