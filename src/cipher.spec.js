const { cipher } = require('./cipher')

describe('Cipher tests:', () => {

    test('Caesar cipher', () => {
        expect(cipher('abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'C1')).toBe('bcdefghijklmnopqrstuvwxyza BCDEFGHIJKLMNOPQRSTUVWXYZA')
        expect(cipher('bcdefghijklmnopqrstuvwxyza BCDEFGHIJKLMNOPQRSTUVWXYZA', 'C0' )).toBe('abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    })

    test('Rot 8 cipher', () => {
        expect(cipher('abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ','R1' )).toBe('ijklmnopqrstuvwxyzabcdefgh IJKLMNOPQRSTUVWXYZABCDEFGH')
        expect(cipher('ijklmnopqrstuvwxyzabcdefgh IJKLMNOPQRSTUVWXYZABCDEFGH','R0' )).toBe('abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    })

    test('Atbash cipher', () => {
        expect(cipher('This is secret. Message about "_" symbol!','A' )).toBe('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!')
        expect(cipher('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!','A' )).toBe('This is secret. Message about "_" symbol!')
    })
    test('Atbash cipher', () => {
        expect(cipher('', 'C')).toBe('')
    })
})