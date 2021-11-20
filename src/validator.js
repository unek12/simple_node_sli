function cipher(input = '', item = '') {
    if (!input.length) return
    if (item.length) {
        if (item[0] === 'A') {
            const code = input?.split('').map(item => item.charCodeAt(0)) ?? []
            const newCode = code.map(code => {
                if (65 <= code && code <= 90) {
                    return 155 - code
                }
                if (97 <= code && code <= 122) {
                    return 219 - code
                }
                return code
            })
            return String.fromCharCode(...newCode)
        }
        if (item[0] === 'C') {
            const code = input?.split('').map(item => item.charCodeAt(0)) ?? []
            const newCode = code.map(code => {
                const operation = parseInt(item[1])
                if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                    if (code === 65) {
                        return operation ? code + 1 : 90
                    }
                    if (code === 90) {
                        return operation ? 65 : code - 1
                    }
                    if (code === 97) {
                        return operation ? code + 1 : 122
                    }
                    if (code === 122) {
                        return operation ? 97 : code - 1
                    }
                    return operation ? code + 1 : code - 1
                }
                return code
            })
            return String.fromCharCode(...newCode)
        }
        if (item[0] === 'R') {
            const code = input.split('').map(item => item.charCodeAt(0))
            const newCode = code.map(code => {
                const operation = parseInt(item[1])
                if (code >= 65 && code <= 90) {
                    if (code < 65 + 8) {
                        return operation ? code + 8 : code + 18
                    }
                    if (code > 90 - 8) {
                        return operation ? code - 18 : code - 8
                    }
                    return operation ? code + 8 : code - 8
                }
                if (code >= 97 && code <= 122) {
                    if (code < 97 + 8) {
                        return operation ? code + 8 : code + 18
                    }
                    if (code > 122 - 8) {
                        return operation ? code - 18 : code - 8
                    }
                    return operation ? code + 8 : code - 8
                }
                return code
            })
            return String.fromCharCode(...newCode)
        }
    }
    return input
}

module.exports = {cipher}