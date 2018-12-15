const monkey = require('fs-monkey')
const { Volume } = require('memfs')
const volume = require('Volume/volume.json')
// const simulate = require('miniprogram-simulate')

const fs = Volume.fromJSON(volume, '/')

monkey.patchFs(fs)
// monkey.patchRequire(fs)

console.log(fs.readFileSync('/pages/counter.js'))

// simulate.load('/page/counter')
