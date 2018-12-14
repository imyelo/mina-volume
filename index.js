const path = require('path')
const vfs = require('vinyl-fs')
const through = require('through2')
const posix = require('ensure-posix-path')

const CWD = path.resolve(__dirname, './example/mina')
const OUTPUT_ROOT = path.resolve(__dirname, './example/volume')
const OUTPUT_VOLUME_FILENAME = 'volume.json'
const OUTPUT_STATIC_DIRNAME = 'static'

function snapshot (filename) {
  let volume = {}
  let latest
  return through.obj((file, encoding, callback) => {
    if (file.isBuffer()) {
      volume[`/${posix(file.relative)}`] = file.contents.toString()
    }

    latest = file

    callback()
  }, (callback) => {
    if (!latest) {
      callback()
      return
    }

    output = latest.clone({ contents: false })
    output.path = path.join(latest.base, filename)
    output.contents = new Buffer(JSON.stringify(volume, null, 2))

    callback(null, output)
  })
}

function walk () {

  return Promise.all([
    /**
     * text
     */
    new Promise((resolve, reject) => {
      vfs.src(['./**/*.@(js|json|wxml|wxss)'], { cwd: CWD, nodir: true })
        .pipe(snapshot(OUTPUT_VOLUME_FILENAME))
        .pipe(vfs.dest(OUTPUT_ROOT))
        .on('error', (error) => reject(error))
        .on('end', () => resolve())
    }),
    /**
     * buffer
     */
    new Promise((resolve, reject) => {
      vfs.src(['./**/*.!(js|json|wxml|wxss)'], { cwd: CWD, nodir: true })
        .pipe(vfs.dest(path.join(OUTPUT_ROOT, OUTPUT_STATIC_DIRNAME)))
        .on('error', (error) => reject(error))
        .on('end', () => resolve())
    }),
  ])
}

/**
 * test
 */
;(async function () {
  await walk()
  console.log('done')
})()
