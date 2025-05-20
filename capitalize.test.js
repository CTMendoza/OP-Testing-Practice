import { capitalize } from "./capitalize";
test('capitalizes dog to be Dog',() => {
    expect(capitalize('dog')).toBe('Dog')
})

test('capitalizes dog to be Dog',() => {
    expect(capitalize('caT')).toBe('Cat')
})