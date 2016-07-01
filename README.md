# regress [![Build Status][build]](https://circleci.com/gh/bcherny/regress) [![npm]](https://www.npmjs.com/package/regress) [![mit]](https://opensource.org/licenses/MIT)

[build]: https://img.shields.io/circleci/project/bcherny/regress.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/regress.svg?style=flat-square
[mit]: https://img.shields.io/npm/l/regress.svg?style=flat-square

> Work in progress - Statistical regression algorithms in TypeScript

## Installation

```sh
npm install --save regress
```

## Usage

```ts
import {linear} from 'regress'

// fn(x) = m*x + b
const {m, b, r2, fn} = linear([0,1], [2,3], [5,6])

assert.equal(b, 1)
assert.equal(m, 1)
assert.equal(r2, 1)
assert.equal(fn(10), 11)
```