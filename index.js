const path = require('path')
const vfs = require('vinyl-fs')
const through = require('through2')
const posix = require('ensure-posix-path')
const Undertaker = require('undertaker')
const del = require('del')
const co = require('co')

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

function compile () {
  let taker = new Undertaker()

  taker.task('clean', () => del([OUTPUT_ROOT]))

  taker.task('walk:text', () =>
    vfs.src(['./**/*.@(js|json|wxml|wxss)'], { cwd: CWD, nodir: true })
      .pipe(snapshot(OUTPUT_VOLUME_FILENAME))
      .pipe(vfs.dest(OUTPUT_ROOT))
  )

  taker.task('walk:buffer', () =>
    vfs.src(['./**/*.!(js|json|wxml|wxss)'], { cwd: CWD, nodir: true })
      .pipe(vfs.dest(path.join(OUTPUT_ROOT, OUTPUT_STATIC_DIRNAME)))
  )

  taker.task('walk', taker.parallel('walk:text', 'walk:buffer'))

  taker.task('compile', taker.series('clean', 'walk'))

  return co(function* () {
    yield taker.series('compile')
  })
}

/**
 * test
 */
;(async function () {
  await compile()
  console.log('done')
})()
