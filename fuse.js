const fs = require('fs');
const path = require('path');
const fsbx = require('fuse-box');

const homeDir = path.resolve('.', 'src');
const publicDir = path.resolve('.', 'public');
const name = 'app';
const outFile = path.join(publicDir, name + '.js');
const html = 'index.html';
const entry = '>index.tsx';
const prod = process.env.NODE_ENV === 'production';

const fuse = fsbx.FuseBox.init({
    alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
    },
    homeDir,
    outFile,
    sourceMap: {
        bundleReference: path.basename(outFile) + '.map',
        outFile: outFile + '.map'
    },
    plugins: [
        {
            init(context) {
                try { fs.mkdirSync(publicDir); } catch (err) { }
            },
            bundleEnd(context) {
                fs.createReadStream(path.join(homeDir, html))
                    .pipe(fs.createWriteStream(path.join(publicDir, html)));
            }
        },
        fsbx.JSONPlugin(),
        fsbx.EnvPlugin({ NODE_ENV: process.env.NODE_ENV }),
        prod ? fsbx.UglifyJSPlugin() : {},
    ]
});

if (process.argv.indexOf('--dev') > -1) {
    fuse.devServer(entry);
} else {
    fuse.bundle(entry);
}