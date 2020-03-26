const fs = require('fs')
const glob = require('glob')

const theme = process.argv[2]
const newTheme = process.argv[3] + '.js'

const files = glob.sync('src/**/themes/*.js').filter(file => {
    if (fs.lstatSync(file).isDirectory()) {
        return false
    }

    return file.endsWith(theme + '.js')
})

const REGEX = new RegExp(`${theme}.js$`)
files.forEach(file => {
    fs.copyFile(file, file.replace(REGEX, newTheme), err => err && console.error(err))
})

console.log('All good...')
