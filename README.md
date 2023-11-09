Commands for project:
1)npm init
2)npm i or npm ci
3) npm + 
    "start": "webpack serve --open --config webpack.config.js",
    "build": "webpack --mode production --config webpack.config.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint . --ext .js,.jsx",
    "lint:fix": "eslint . --ext .js,.jsx --fix",
    "format": "prettier --write \"**/*.{js,jsx,json,css,scss,md}\""
