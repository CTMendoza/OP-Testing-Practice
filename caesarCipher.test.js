import { caesarCipher } from "./caesarCipher";

test('caesarCipher works', () => {
    expect(caesarCipher('xyz',1)).toBe('yza')
})

test('caesarCipher works', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
})

test('caesarCipher works', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})

test('caesarCipher works', () => {
    expect(caesarCipher("Abc!", -1)).toBe("Zab!")
})




