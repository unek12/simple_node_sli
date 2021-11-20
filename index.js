const {checkValidFile, checkValidConfig} = require('./src/validators')
const {cipher} = require('./src/cipher')
const {stdin, stdout} = require('process')
const rl = require('node:readline/promises').createInterface(stdin, stdout)
const fs = require('fs');
const argv = process.argv.slice(2)
let writer = fs.createWriteStream('./output.txt')

process.stdin.on("data", (data) => {
    options.output = data.toString()
    options.cipherArgs.forEach(item => options.output = cipher(options.output, item))
    writer.write(options.output)
})

const options = {
    inputFile: '',
    inputFlag: false,
    outputFile: '',
    outputFlag: '',
    configFlag: false,
    cipherArgs: []
};

(async () => {
        while (!options.inputFlag || !options.outputFlag || !options.configFlag) {
            if (argv[0] === '-c' || argv[0] === '--config') {
                argv.shift()
                options.cipherArgs = argv.shift()?.split('-')

                if (!checkValidConfig(options.cipherArgs)) {
                    process.exit(1)
                }
                options.configFlag = true

            } else if (argv[0] === '-i' || argv[0] === '--input') {

                argv.shift()
                options.inputFile = argv.shift()

                if (!checkValidFile(options.inputFile, "not exist input file")) {
                    process.exit(2)
                }

                options.output = await fs.readFileSync(options.inputFile).toString()

                options.inputFlag = true
                options.cipherArgs.forEach(item => options.output = cipher(options.output, item))

            } else if (argv[0] === '-o' || argv[0] === '--output') {

                argv.shift()

                if (!checkValidFile(argv[0], "not exist output file")) {
                    process.exit(2)
                }
                options.outputFile = argv.shift()
                // writer = fs.createWriteStream(options.outputFile)
                options.outputFlag = true
            } else {
                if (!options.configFlag) {
                    process.stderr.write('not exist config')
                    process.exit(3)
                }

                if (!options.inputFlag) {
                    await rl.question('')
                }
            }
        }
        writer.write('qwe')
        writer.end()
        process.exit(0)
    }
)()