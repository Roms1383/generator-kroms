# generator-kroms

[![Latest Release](https://badgen.net/npm/v/generator-kroms)](https://www.npmjs.com/package/generator-kroms) [![License](https://badgen.net/badge/license/MIT/blue)](LICENSE) [![Build Status](https://travis-ci.org/Roms1383/generator-kroms.svg?branch=master)](https://travis-ci.org/Roms1383/generator-kroms) [![Codacy Quality](https://api.codacy.com/project/badge/Grade/b0788062328c435ba1dc364424c25281)](https://www.codacy.com/app/Roms1383/generator-kroms?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Roms1383/generator-kroms&amp;utm_campaign=Badge_Grade) [![Codacy Coverage](https://api.codacy.com/project/badge/Coverage/b0788062328c435ba1dc364424c25281)](https://www.codacy.com/app/Roms1383/generator-kroms?utm_source=github.com&utm_medium=referral&utm_content=Roms1383/generator-kroms&utm_campaign=Badge_Coverage) [![Renovate](https://img.shields.io/badge/Renovate-enabled-brightgreen.svg)](https://renovatebot.com) [![Dependencies](https://david-dm.org/Roms1383/generator-kroms.svg)](https://david-dm.org/) [![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg)](https://github.com/carloscuesta/gitmoji)

Very opinionated generator for Yeoman

*****

## install

First, install [Yeoman](http://yeoman.io).

```bash
yarn global add yo
```

## use

Then, install `generator-kroms` and run it on your new project:

```bash
yarn add generator-kroms --dev
yo kroms
```

## features

*   synchronise `LICENSE` from your `package.json` informations (thanks to [generator-license](https://github.com/jozefizso/generator-license))
*   synchronise `.gitignore` from files found in project (only basic set so far), thanks to [gitignore.io](https://gitignore.io)
*   synchronise `README.md` header and footer while leaving content untouched only if using proper delimiters
*   add configuration file for [Renovate](https://renovatebot.com)
*   add configuration file for [NVM](https://github.com/nvm-sh/nvm)
*   add configuration files, dependencies and script for [ESLint](https://github.com/eslint/eslint), using [eslint-config-kroms](https://github.com/Roms1383/eslint-config-kroms) as preset
*   add configuration file, dependencies and script for [RemarkLint](https://github.com/remarkjs/remark-lint), using `remark-preset-lint-recommended` as preset
*   add configuration file, dependency and script for [Jest](https://github.com/facebook/jest)
*   add dependency and script for [Codacy](https://github.com/codacy/node-codacy-coverage) (more [infos](generators/codacy/README.md))
*   add configuration file, dependencies and script for [semantic-release](https://github.com/semantic-release/semantic-release), using [semantic-release-kroms](https://github.com/Roms1383/semantic-release-kroms) as preset
*   add configuration file and dependencies for [commitlint](https://github.com/conventional-changelog/commitlint), using [commitlint-config-kroms](https://github.com/Roms1383/commitlint-config-kroms) as preset
*   add configuration file and dependency for [lint-staged](https://github.com/okonet/lint-staged)
*   add configuration file and dependency for [husky](https://github.com/typicode/husky)
*   add configuration file and Git hooks for [travis](https://travis-ci.org)

More to come...

## getting to know Yeoman

*   Yeoman has a heart of gold. I don't :joy:.
*   Yeoman is a person with feelings and opinions, but is very easy to work with.
*   Yeoman can be too opinionated at times but is easily convinced not to be.
*   Feel free to [learn more about Yeoman](http://yeoman.io/).

*****

_Romain KELIFA - MIT - 2019_
