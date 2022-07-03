# triflake-cli
Print the Triflake Fractal to the console!

## Usage
### Via `npx`:
```
$ npx triflake-cli <n>
$ npx triflake-cli <n> <size>
```

### Via Global Install
```
$ npm install --global triflake-cli
$ triflake-cli <n>
$ triflake-cli <n> <size>
```

### Via Import
```
$ npm install triflake-cli
```
then:
```
const triflake = require('triflake-cli');
console.log(triflake.create(<n>, <size>));
```