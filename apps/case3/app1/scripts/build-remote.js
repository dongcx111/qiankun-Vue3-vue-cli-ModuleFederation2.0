const Service = require("@vue/cli-service/lib/Service");
const { resolve, join } = require('node:path')
const { copy } = require("@qvm/utils")
const dotenvExpand = require('dotenv-expand')
const { envName } = require('./constants')
const { rmSync } = require("node:fs");

const service = new Service(process.cwd());

const rawArgv = process.argv.slice(2)
const args = require('minimist')(rawArgv, {
    boolean: [
        // build
        // FIXME: --no-module, --no-unsafe-inline, no-clean, etc.
        'modern',
        'report',
        'report-json',
        'inline-vue',
        'watch',
        // serve
        'open',
        'copy',
        'https',
        // inspect
        'verbose'
    ]
})
const command = args._[0]

const env = {
    parsed: {
        [envName]: 'normal'
    }
}

dotenvExpand.expand(env)

console.log(`Set process.env.${envName} to "remote" for remote build.`);
process.env[envName] = 'remote'

const targetPath = resolve(__dirname, "..", "public")

console.log('Clean public...');

rmSync(join(targetPath, "remoteEntry.js"))

rmSync(join(targetPath, "remote"), { recursive: true, force: true })

service.run(command, args, rawArgv).then(() => {

    console.log(`Reset process.env.${envName} for normal build.`);
    process.env[envName] = 'normal'
    console.log('Start copy Remote File to public...');

    const distPath = resolve(__dirname, "..", "dist")
    copy(join(distPath, "remoteEntry.js"), join(targetPath, "remoteEntry.js"))
    copy(join(distPath, "remote"), join(targetPath, "remote"))

    console.log('Build completed successfully.')

}).catch(err => {
    console.log(err)
    process.exit(1)
})
