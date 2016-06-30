# Tregress

> Work in progress - Statistical regression algorithms in TypeScript

## Installation

```sh
npm install --save tregress
```

## Usage

```ts
import {linear} from 'tregress'

// fn(x) = m*x + b
const {m, b, r2, fn} = linear([0,1], [2,3], [5,6])

assert.equal(b, 1)
assert.equal(m, 1)
assert.equal(r2, 1)
assert.equal(fn(10), 11)
```