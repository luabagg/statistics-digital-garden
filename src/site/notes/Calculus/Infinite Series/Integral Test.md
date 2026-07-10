---
{"dg-publish":true,"permalink":"/calculus/infinite-series/integral-test/","tags":["calculus","series"],"noteIcon":"","dg-note-properties":{"tags":["calculus","series"]}}
---


# Integral Test

## Summary

For a positive, continuous, eventually decreasing function $f$, the series $\sum f(n)$ and the improper integral $\int_1^\infty f(x)\,dx$ either both converge or both diverge.

## Prerequisites

[[Calculus/Integrals/Integrals\|Integrals]], improper integrals, [[Calculus/Infinite Series/Sequences\|Sequences]]

## Theorem

Let $f$ be positive, continuous, and decreasing on $[N,\infty)$ for some integer $N\ge 1$. Then

$$
\sum_{n=N}^\infty f(n)\quad\text{converges}\iff\int_N^\infty f(x)\,dx\text{ converges}.
$$

## Worked Example

For $f(x)=x^{-p}$ ($p>0$):

$$
\int_1^\infty x^{-p}\,dx
$$

converges if and only if $p>1$. Thus $\sum 1/n^p$ converges iff $p>1$ (see [[Calculus/Infinite Series/P Series\|P Series]]).

For $\sum 1/\sqrt{n}$, $\int_1^\infty x^{-1/2}\,dx=\infty$, so the series diverges.

## Common Mistakes

- Using the integral’s value as the sum of the series (they are not equal; the integral only decides convergence and bounds remainders).
- Applying the test when $f$ is not eventually decreasing.

## Connections

- [[Calculus/Infinite Series/P Series\|P Series]], [[Calculus/Infinite Series/Harmonic Series\|Harmonic Series]], remainder bounds in [[Calculus/Infinite Series/Estimating Series Sums\|Estimating Series Sums]]

## References

The integral test is in OpenStax Calculus Volume 2.[^openstax-inttest]

[^openstax-inttest]: OpenStax, *Calculus Volume 2*, Section 5.3, https://openstax.org/details/books/calculus-volume-2
