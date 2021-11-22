const {getConfig} = require('./src/validator')
const {cipher} = require('./src/cipher')
const fs = require('fs');
const argv = process.argv.slice(2)
const stream = require('stream');

async function main() {
    const {config ,output, input} = getConfig(argv)

    let reader = fs.existsSync(input) ?
        fs.createReadStream(input) :
        process.stdin

    let writer = fs.existsSync(output) ?
        fs.createWriteStream(output, {flags: 'a'}) :
        fs.createWriteStream('./output.txt')

    await stream.pipeline(
        reader,
        async function * (source) {
            for await (const chunk of source) {
                let res = chunk.toString()
                config.split('-').forEach(item => res = cipher(res, item))
                yield res
            }
        },
        writer,
        (e) => {
            process.stderr.write(e)
            process.exit(1)
        })
}

main().catch(e => process.stderr.write(e))