import { calculator } from "./calculator";
test('add works', () => {
    expect(calculator.add(3,2)).toBe(5)
})

test('subtract works', () => {
    expect(calculator.subtract(2,3)).toBe(-1)
})

test('multiply works', () => {
    expect(calculator.multiply(3,2)).toBe(6)
})

test('divide works', () => {
    expect(calculator.divide(3,2)).toBe(1.5)
})