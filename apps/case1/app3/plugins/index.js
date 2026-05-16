import { extname, resolve, normalize, join, isAbsolute } from 'path';
import fs from 'fs-extra';
import { isAbsoluteUrl, addTrailingSlash, formatPath, getEntryUrl, isSingleEntry, getRelativePath } from './utils';
import { log } from 'console';
// import minifyHtml from './minifyHtml';

const scriptLooseRegex = /<script\s[^>]*src=['"]?([^'"]*)['"]?[^>]*>*<\/script>/;


export default function htmlPlugin(userOptions = {
    template: "",
    templateContent: "",
    entry: "./src/main.js"
}) {
    let viteConfig = null;

    if (!userOptions.template && !userOptions.templateContent) {
        if (fs.pathExists(resolve('index.html'))) {
            userOptions.template = 'index.html';
        } else {
            return;
        }
    }

    if (userOptions.entry) {
        userOptions.input = userOptions.entry;
    }

    if (!isSingleEntry(userOptions.input)) {
        console.warn('vite-plugin-index-html: Multi entries are not supported currently. Use multi instance of vite-plugin-index-html instead for now!');
        return;
    }

    if (userOptions.minify === undefined) {
        userOptions.minify = 'auto';
    }

    if (userOptions.preserveEntrySignatures === true) {
        userOptions.preserveEntrySignatures = 'exports-only';
    }

    return {
        name: 'vite-plugin-html',
        // config(cfg) {
        //     // eslint-disable-next-line no-param-reassign
        //     cfg.build = {
        //         ...cfg.build,
        //         rollupOptions: {
        //             ...cfg?.build?.rollupOptions,
        //             preserveEntrySignatures: userOptions.preserveEntrySignatures ?? false,
        //             input: userOptions.input,
        //         },
        //     };
        //     return cfg;
        // },

        configResolved(resolvedConfig) {
            viteConfig = resolvedConfig;
        },

        async generateBundle(_, bundle) {
            const htmlTags = classifyFiles(
                getFiles(bundle),
                viteConfig,
            );

            const html = injectToHtml(
                removeHtmlEntryScript(
                    viteConfig.root,
                    parseTemplate(userOptions.template, userOptions.templateContent),
                    getEntryUrl(userOptions.input),
                ),
                htmlTags,
            );
            // const htmlAfterMinification = await minifyHtml(html, userOptions.minify === 'auto' ? true : userOptions.minify);
            const htmlAfterMinification = html

            this.emitFile({
                type: 'asset',
                source: htmlAfterMinification,
                name: 'html',
                fileName: 'index.html',
            });
        },

        async transformIndexHtml(html) {
            const entryTag = {
                tag: 'script',
                attrs: {
                    type: 'module',
                    src: getRelativePath(
                        viteConfig.root,
                        getEntryUrl(userOptions.input)
                    ),
                },
                injectTo: 'body',
            };
            const _html = injectToHtml(
                removeHtmlEntryScript(
                    viteConfig.root,
                    html,
                    getEntryUrl(userOptions.input)),
                [entryTag],
            );

            // return await minifyHtml(_html, userOptions.minify === 'auto' ? false : userOptions.minify);
            return _html
        },
    };
}

export const removeHtmlEntryScript = (rootDir, html, entry) => {
    let _html = html;
    const _entry = formatPath(
        isAbsolute(entry) ? entry : join(rootDir, entry)
    );
    // console.log("removeHtmlEntryScript", _entry)
    const matchs = html.match(new RegExp(scriptLooseRegex, 'g'));

    const commentScript = (script) => `<!-- removed by vite-plugin-index-html ${script} -->`;

    if (matchs) {
        matchs.forEach((matchStr) => {
            const [, src] = matchStr.match(scriptLooseRegex);
            // change `./src/index.js` to `src/index.js`
            // const normalizedSrc = normalize(src);
            const normalizedSrc = src.replace(/\\/g, "/");
            // console.log(normalizedSrc)
            if (_entry.includes(normalizedSrc)) {
                _html = _html.replace(matchStr, commentScript(matchStr));
                console.warn(`
          vite-plugin-index-html: For the reason that entry was configured, ${matchStr} is deleted.
          You may also delete it from the index.html.
        `);
            }
        });
    }

    return _html;
};

function parseTemplate(template, templateContent) {
    if (template) {
        return fs.readFileSync(resolve(template), 'utf-8');
    }

    if (templateContent) {
        return templateContent;
    }
}

function classifyFiles(files, config) {
    const htmlTags = [];

    for (let i = 0; i < files.length; ++i) {
        if (files[i].ext === '.css') {
            htmlTags.push({
                tag: 'link',
                attrs: {
                    rel: 'stylesheet',
                    href: toPublicPath(files[i].fileName, config),
                },
                injectTo: 'head',
            });
        }

        // Only appends entry file
        if (files[i].ext === '.js' && (files[i]).isEntry) {
            htmlTags.push({
                tag: 'script',
                attrs: {
                    type: 'module',
                    src: toPublicPath(files[i].fileName, config),
                },
                injectTo: 'body',
            });
        }
    }

    return htmlTags;
}

function getFiles(bundle) {
    return Object.values(bundle)
        .map((file) => ({
            ...file,
            ext: extname(file.fileName),
        }));
}

function toPublicPath(filename, config) {
    return isAbsoluteUrl(filename) ? filename : addTrailingSlash(config.base) + filename;
}

const headInjectRE = /<\/head>/;
const bodyInjectRE = /<\/body>/;

function injectToHtml(html, tags) {
    let _html = html;
    const hasHeadElement = headInjectRE.test(html);
    const hasBodyElement = bodyInjectRE.test(html);
    tags.forEach((tag) => {
        if (tag.injectTo === 'head' && hasHeadElement) {
            _html = _html.replace(headInjectRE, `${serializeTag(tag)}\n$&`);
        }

        if (tag.injectTo === 'body' && hasBodyElement) {
            _html = _html.replace(bodyInjectRE, `${serializeTag(tag)}\n$&`);
        }
    });

    return _html;
}

const unaryTags = new Set(['link', 'meta', 'base']);

function serializeTag({ tag, attrs, children }) {
    if (unaryTags.has(tag)) {
        return `<${tag}${serializeAttrs(attrs)}>`;
    } else {
        return `<${tag}${serializeAttrs(attrs)}>${serializeTags(children)}</${tag}>`;
    }
}

function serializeTags(tags) {
    if (typeof tags === 'string') {
        return tags;
    } else if (tags) {
        return tags.map(serializeTag).join('\n  ');
    }
    return '';
}

function serializeAttrs(attrs) {
    let res = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const key in attrs) {
        if (typeof attrs[key] === 'boolean') {
            res += attrs[key] ? ` ${key}` : '';
        } else {
            res += ` ${key}=${JSON.stringify(attrs[key])}`;
        }
    }
    return res;
}