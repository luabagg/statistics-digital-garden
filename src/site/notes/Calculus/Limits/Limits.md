---
{"dg-publish":true,"permalink":"/calculus/limits/limits/","tags":["calculus","limits"],"dgShowLocalGraph":true,"noteIcon":"","dg-note-properties":{"tags":["calculus","limits"]}}
---



- **[[Calculus/Limits/Limits\|Limits]]**
	- [[Calculus/Limits/Fundamental Limits of Calculus\|Fundamental Limits of Calculus]]
	- [[Calculus/Limits/Limits and Continuity of Two-Variable Functions\|Limits and Continuity of Two-Variable Functions]]
	- [[Calculus/Limits/Squeeze Theorem\|Squeeze Theorem]]



# Limits

## Summary

A limit describes the value a function approaches as its input approaches a point (or infinity). Limits define continuity, derivatives, and definite integrals.

## Prerequisites

Prerequisites: functions, absolute value, and basic algebra of inequalities.

## Definition

We write $\lim_{x\to a}f(x)=L$ if for every $\varepsilon>0$ there exists $\delta>0$ such that

$$
0<|x-a|<\delta \implies |f(x)-L|<\varepsilon.
$$

The value of $f$ at $x=a$ is irrelevant to the limit; only nearby values matter.

## Conditions / Assumptions

- One-sided limits $\lim_{x\to a^-}$ and $\lim_{x\to a^+}$ must agree for the two-sided limit to exist (finite case).
- Algebraic limit laws require that the individual limits exist (finite).

## Worked Example

1. $\lim_{x\to 3}x^2=9$ by continuity of polynomials.
2. For $g(x)=\dfrac{x^2-1}{x-1}$ ($x\neq 1$),

$$
\lim_{x\to 1}g(x)=\lim_{x\to 1}(x+1)=2,
$$

even though $g(1)$ is undefined.

## Common Mistakes

- Confusing $\lim_{x\to a}f(x)$ with $f(a)$.
- Applying quotient limit laws when the denominator limit is zero without further analysis.

## Connections

- Child notes: [[Calculus/Limits/Fundamental Limits of Calculus\|Fundamental Limits of Calculus]], [[Calculus/Limits/Squeeze Theorem\|Squeeze Theorem]], [[Calculus/Limits/Limits and Continuity of Two-Variable Functions\|Limits and Continuity of Two-Variable Functions]]
- Next: [[Calculus/Derivatives/Derivatives\|Derivatives]]

## References

The $\varepsilon$–$\delta$ definition and basic limit laws are standard in first-semester calculus.[^openstax-limits]

[^openstax-limits]: OpenStax, *Calculus Volume 1*, Chapter 2 (Limits), https://openstax.org/details/books/calculus-volume-1
