# eslint

Lint source code to ensure compliancy and ease versioning

Add :
*   `eslint-config-kroms` shared configuration, via `.eslintrc` file
*   `.eslintignore` file, to avoid linting irrelevant folders
    > defaults to `['coverage/', 'node_modules/', 'my-tests/']`, but can be overriden by setting `eslintignore` in `.yo-rc.json`
*   required dev dependencies in `package.json`

More informations about :
*   [eslint](https://github.com/eslint/eslint)
*   [eslint shared configuration](https://eslint.org/docs/developer-guide/shareable-configs)
*   [eslint-config-kroms](https://github.com/Roms1383/eslint-config-kroms)
