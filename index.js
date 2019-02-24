const del = require('del');
const ncp = require('ncp').ncp;
const path = require("path")

hexo.extend.tag.register("imgr", (args, content) => {
    return `<img src="${path.join(hexo.config.root, args[0])}"></img>`
})

hexo.extend.deployer.register('zeronet', function (args, callback) {
    if (!args.siteAddr || !args.zeronetDir) {
        console.log(`
        Config it in root _config.yml
        Example:

        deploy:
            type: zeronet
            siteAddr: 12q9YNb5oJ331nTjUxWefV9W2EXpMu8RWi
            zeronetDir: D:/ZeroNet/
        `)
        callback()
    }
    else {
        const sitedir = path.join(args.zeronetDir, "data", args.siteAddr)
        console.log(
            del.sync([path.join(sitedir, "**"),
            `!${path.join(sitedir, "content.json")}`,
            `!${path.join(sitedir, "dbschema.json")}`,
            `!${path.join(sitedir, "data", "**")}`,
            `!${path.join(sitedir, "data")}`,
            `!${path.join(sitedir, "data-default")}`,
            `!${path.join(sitedir, "data-default", "**")}`
            ], { force: true, dryRun: args.dryRun }))
        ncp(hexo.public_dir, sitedir, err => {
            if (err)
                console.log(err)
            callback()
        })
        // TODO: Auto publish site
    }
})