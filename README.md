# triflake-cli
Print the [Triflake Fractal](https://en.wikipedia.org/wiki/List_of_fractals_by_Hausdorff_dimension) to the console!

![What triflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/triflake-cli/main/img/triflake-3-banner.png)

Why the console?  Because it's the *cool* way.  [See All Fractals](https://spirometaxas.com/projects/fractals-cli)

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
console.log(triflake.create(<n>));
console.log(triflake.create(<n>, { scale: <scale>, character: <character> }));
```
The config params are optional.

## Options
### Recursive Step  
```
$ triflake-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ triflake-cli 2
```
![What triflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/triflake-cli/main/img/triflake-2.png)

```
$ triflake-cli 3
```
![What triflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/triflake-cli/main/img/triflake-3.png)

### Size
```
$ triflake-cli <n> <size>
```
The optional `<size>` param allows the Triflake to be drawn at larger sizes.  `<size>` should be an integer greater than or equal to `<n>`.  Including size will draw a Triflake of `<n>` recursive steps the size of a hexagon with `<size>` recursive steps.  

#### Example:
```
$ triflake-cli 2 3
```
![What triflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/triflake-cli/main/img/triflake-2-3.png)

### Custom Characters
```
$ triflake-cli <n> <size> --character=<character>
```
The optional `--character=<character>` param will draw the Triflake using the provided character.  (Please provide only 1 character)  

#### Example:
```
$ triflake-cli 1 3 --character=*
```
![What triflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/triflake-cli/main/img/triflake-1-3-character.png)

## Related

#### Fractal Shapes
- [sierpinski-triangle-cli](https://www.npmjs.com/package/sierpinski-triangle-cli) - Print the Sierpinski Triangle to the console
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console


#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-island-cli](https://www.npmjs.com/package/minkowski-island-cli) - Print the Minkowski Island to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console


#### Space Filling Curves
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/triflake-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)




-b, --blocks   - blocks
-b, --bold     - bold
-i, --inverse  - inverse
--character    - character

-d, --diagonal - diagonal
-f, --full     - full rows

-o, --outline  - outline
--rotate       - rotate: left, right, full
-c, --closed   - closed (Moore curve)