import {mean, partialRight, sum, unzip} from 'lodash'

export interface Result {
  fn(x: number): number|void
  r2: number|void
}

export interface LinearResult extends Result {
  b: number|void
  m: number|void
}

const square = partialRight(Math.pow, 2)

export function linear(...as: [number, number][]): LinearResult {

  if (!as.length) {
    return {
      b: undefined,
      m: undefined,
      fn: () => undefined,
      r2: undefined
    }
  }

  const [xs, ys] = unzip(as)
  const [sum_x, sum_y] = [xs, ys].map(sum)
  const sum_x2 = sum(xs.map(_ => _*_))
  const sum_xy = sum(as.map(([a, b]) => a * b))
  const n = as.length
  const mean_y = mean(ys)

  const m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x)
  const b = (sum_y - m * sum_x) / n
  const fn = (x: number) => m*x + b

  // @see https://en.wikipedia.org/wiki/Coefficient_of_determination
  const ss_res = sum(as.map(([x, y]) => square(y - fn(x))))
  const ss_tot = sum(ys.map(y => square(y - mean_y)))
  const r2 = 1 - ss_res/ss_tot

  return {b, m, fn, r2}

}