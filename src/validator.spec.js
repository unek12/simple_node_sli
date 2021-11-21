const { getConfig } = require('./validator')

describe('Validator of config', () => {
    test('1', () => {
        expect(getConfig(['-c', 'A-C1-R1'])).toEqual({
            config: 'A-C1-R1',
            input: '',
            output: ''
        })
    })
    test('2', () => {
        expect(getConfig(['--config', 'A-C1-R1'])).toEqual({
            config: 'A-C1-R1',
            input: '',
            output: ''
        })
    })
    test('3', () => {
        expect(getConfig(['-c', 'A-C1-R1', '-i', './input.txt'])).toEqual({
            config: 'A-C1-R1',
            input: './input.txt',
            output: ''
        })
    })
    test('4', () => {
        expect(getConfig(['-c', 'A-C1-R1', '--input', './input.txt'])).toEqual({
            config: 'A-C1-R1',
            input: './input.txt',
            output: ''
        })
    })
    test('4', () => {
        expect(getConfig(['-c', 'A-C1-R1', '--output', './output.txt'])).toEqual({
            config: 'A-C1-R1',
            input: '',
            output: './output.txt'
        })
    })
    test('4', () => {
        expect(getConfig(['-c', 'A-C1-R1', '-o', './output.txt'])).toEqual({
            config: 'A-C1-R1',
            input: '',
            output: './output.txt'
        })
    })
})