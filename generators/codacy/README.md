# codacy

Add `codacy-coverage` dependency and command for `coverage` in package.json

## option

Both explicitly setting `coverage` to false in `.yo-rc.json` **or** having no `*.test.js` files in project will :

*   skip or remove `codacy` script from `package.json`
    > it will only remove it **provided that it matches the scaffolded command** (so that if modified it won't erase changes)
*   skip or remove `codacy-coverage` from dev dependencies
*   skip or remove `codacy` badges from `README.md`

Thanks to these, other coverage tools can be used or coverage can be disable completely.

## notes

Token for `codacy` must be :
*   generated on the website under *Project* / *Settings* / *Integrations* / *Project API*
*   defined on `tracis` either :
    *   with environment variable `CODACY_PROJECT_TOKEN` in *Project* / *Settings* 
    *   via CLI arguments `--token`
