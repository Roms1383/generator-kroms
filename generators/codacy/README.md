# codacy

Add `codacy-coverage` dependency and command for `coverage` in package.json

### notes

Token for `codacy` must be :
*  generated on the website under *Project* / *Settings* / *Integrations* / *Project API*
*  defined on `tracis` either :
   *  with environment variable `CODACY_PROJECT_TOKEN` in *Project* / *Settings* 
   *  via CLI arguments `--token`