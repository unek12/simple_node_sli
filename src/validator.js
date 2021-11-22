function getConfig(argv) {
    const optionFlags = {}
    argv.forEach(item => !(item in optionFlags && item.includes('-')) ? optionFlags[item] = 1 : (() => {
        process.stderr.write('have duplicate arguments')
        process.exit(2)
    })())
    const config = {
        config: '',
        input: '',
        output: ''
    }

    if (argv.indexOf('-c') !== -1){
        config.config = argv[argv.indexOf('-c') + 1]
    }else if (argv.indexOf('--config') !== -1){
        config.config = argv[argv.indexOf('--config') + 1]
    } else {
        process.stderr.write('not exist config')
        process.exit(2)
    }

    if (!configValidator(config.config)) {
        process.stderr.write('invalid config')
        process.exit(3)
    }

    if (argv.indexOf('-i') !== -1){
        config.input = argv[argv.indexOf('-i') + 1]
    }
    if (argv.indexOf('--input') !== -1){
        config.input = argv[argv.indexOf('--input') + 1]
    }
    if (argv.indexOf('-o') !== -1){
        config.output = argv[argv.indexOf('-o') + 1]
    }
    if (argv.indexOf('--output') !== -1){
        config.output = argv[argv.indexOf('--output') + 1]
    }
    return config
}

function configValidator(config) {
    return  config.split('-').every(item => ['A', 'C1', 'C0', 'R1', 'R0'].indexOf(item) !== -1)
}

module.exports = {
    getConfig
}