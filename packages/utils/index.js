import { mkdirSync, statSync, copyFileSync, readdirSync } from "node:fs"
import { resolve } from 'node:path'

export function remoteRuntime(host, libraryName) {
  return `promise new Promise(resolve => {
        // This part depends on how you plan on hosting and versioning your federated modules
        const remoteUrlWithVersion = '${host}/remoteEntry.js'
        const script = document.createElement('script')
        script.src = remoteUrlWithVersion
        script.onload = () => {
          // the injected script has loaded and is available on window
          // we can now resolve this Promise
          const proxy = {
            get: (request) => window.${libraryName}.get(request),
            init: (arg) => {
              try {
                console.log(arg)
                return window.${libraryName}.init(arg)
              } catch(e) {
                console.log('remote container already initialized')
              }
            }
          }
          resolve(proxy)
        }
        // inject this script with the src set to the versioned remoteEntry.js
        document.head.appendChild(script);
      })
      `
}

export function copy(src, dest) {
  const stat = statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    copyFileSync(src, dest)
  }
}

export function copyDir(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true })
  for (const file of readdirSync(srcDir)) {
    const srcFile = resolve(srcDir, file)
    const destFile = resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

