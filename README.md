# generator-kroms

***

Very opinionated generator for Yeoman.

## install

preferably as a dev dependency

```sh
yarn add --dev generator-kroms
```

## use

```sh
yo kroms
```

## features

*  synchronise `LICENSE` from your `package.json` informations (thanks to [generator-license](https://github.com/jozefizso/generator-license))
*  add configuration file for [Renovate](https://renovatebot.com)
*  add configuration file for [NVM](https://github.com/nvm-sh/nvm)
*  add configuration file, dependencies and script for [ESLint](https://github.com/eslint/eslint), using [eslint-config-kroms](https://github.com/Roms1383/eslint-config-kroms) as preset
*  add configuration file, dependency and script for [Jest](https://github.com/facebook/jest)
*  add dependency and script for [Codacy](https://github.com/codacy/node-codacy-coverage)
*  add configuration file, dependencies and script for [semantic-release](https://github.com/semantic-release/semantic-release), using [semantic-release-kroms](https://github.com/Roms1383/semantic-release-kroms) as preset
*  add configuration file and dependencies for [commitlint](https://github.com/conventional-changelog/commitlint), using [commitlint-config-kroms](https://github.com/Roms1383/commitlint-config-kroms) as preset
*  add configuration file and dependency for [lint-staged](https://github.com/okonet/lint-staged)
*  add configuration file and dependency for [husky](https://github.com/typicode/husky)
*  add configuration file and Git hooks for [travis](https://travis-ci.org)

More to come...