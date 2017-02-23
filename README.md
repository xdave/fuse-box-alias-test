# fuse-box-alias-test
Test repo for fuse-box issue #290 (fixed with 1.3.121-preview.2)

1. `git clone https://github.com/xdave/fuse-box-alias-test.git`
2. `cd fuse-box-alias-test`
3. `npm install`
4. `npm run dev`
5. Open browser to http://localhost:4444/

## Size and bundle time comparison
- Using `react` and `react-dom`
    - Size: 798.5 kB
    - Time: 52ms
        - Uglified:
            - Size: 266.7 kB
            - Time: 2s 282ms
- Using `preact` and `preact-compat`
    - Size: 144.4 kB
    - Time: 41ms
        - Uglified:
            - Size: 62.4 kB
            - Time: 797ms

Shave 654.1 kB (204.3 kB uglified) off my build? DON'T MIND IF I DO!

[FuseBox](http://fuse-box.org/ "Way faster than webpack").
