import test from 'ava'
import {linear} from '../'

test('empty', t => {
  const {b, fn, m, r2} = linear()
  t.is(b, undefined)
  t.is(m, undefined)
  t.is(r2, undefined)
  t.is(fn(10), undefined)
})

test('simple', t => {
  const {b, fn, m, r2} = linear([0, 1], [1, 2], [2, 3], [3, 4], [4, 5])
  t.is(b, 1)
  t.is(m, 1)
  t.is(r2, 1)
  t.is(fn(10), 11)
})