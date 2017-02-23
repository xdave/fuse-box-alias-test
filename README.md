# fuse-box-alias-test
Test repo for fuse-box issue #290 (fixed with 1.3.121-preview.2)

## Wat?
This is essentially just some react+react-router+redux boilerplate that uses
`preact` as a drop-in replacement for `react`.  It was meant to test the
above-mentioned fuse-box issue until it was fixed.


## Eh?
The `react` and `react-dom` packages are replaced by using this alias with `fuse-box`:
```js
alias: {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
}
```

## Install
1. `git clone https://github.com/xdave/fuse-box-alias-test.git`
2. `cd fuse-box-alias-test`
3. `npm install`
4. `npm run dev`
5. Open browser to http://localhost:4444/


## FuseBox
Shave a bunch of kB off my build? DON'T MIND IF I DO!

Use [FuseBox](http://fuse-box.org/ "Way faster than webpack").
