---
{"dg-publish":true,"permalink":"/calculus/integrals/integrals/","tags":["calculus","integrals"],"dgShowLocalGraph":true,"noteIcon":"","dg-note-properties":{"tags":["calculus","integrals"]}}
---



- **[[Calculus/Integrals/Integrals\|Integrals]]**
	- **[[Calculus/Integrals/Double Integrals/Double Integrals\|Double Integrals]]**
	- **[[Calculus/Integrals/Triple Integrals/Triple Integrals\|Triple Integrals]]**
	- [[Calculus/Integrals/Fubini's Theorem\|Fubini's Theorem]]
	- [[Calculus/Integrals/Integration by Parts\|Integration by Parts]]
	- [[Calculus/Integrals/Riemann Sum\|Riemann Sum]]


# Integrals

## Summary

Integrals measure accumulation: areas under curves, net change, and higher-dimensional mass/volume. Indefinite integrals denote families of antiderivatives; definite integrals are limits of Riemann sums and are evaluated with the Fundamental Theorem when an antiderivative is known.

## Prerequisites

[[Calculus/Limits/Limits\|Limits]], [[Calculus/Derivatives/Derivatives\|Derivatives]], [[Calculus/Fundamental Theorem of Calculus\|Fundamental Theorem of Calculus]]

## Definition

### Indefinite integral

$$
\int f(x)\,dx=F(x)+C,\qquad F'=f.
$$

### Definite integral

$$
\int_a^b f(x)\,dx=\lim_{\|P\|\to 0}\sum f(x_i^*)\Delta x_i
$$

when the limit exists (e.g. $f$ continuous on $[a,b]$).

## Conditions / Assumptions

- Continuity on $[a,b]$ guarantees Riemann integrability.
- Improper integrals need separate limit analysis at singularities or infinite bounds.

## Worked Example

$$
\int 3x^2\,dx=x^3+C,\qquad
\int_0^1 x^2\,dx=\Bigl[\frac{x^3}{3}\Bigr]_0^1=\frac{1}{3}.
$$

Integration by parts: $\int u\,dv=uv-\int v\,du$ (see [[Calculus/Integrals/Integration by Parts\|Integration by Parts]]).

## Common Mistakes

- Dropping $+C$ for indefinite integrals.
- Applying FTC without an antiderivative valid on the whole interval.

## Connections

- Building blocks: [[Calculus/Integrals/Riemann Sum\|Riemann Sum]], [[Calculus/Fundamental Theorem of Calculus\|Fundamental Theorem of Calculus]]
- Techniques: [[Calculus/Integrals/Integration by Parts\|Integration by Parts]]
- Multivariable: [[Calculus/Integrals/Double Integrals/Double Integrals\|Double Integrals]], [[Calculus/Integrals/Fubini's Theorem\|Fubini's Theorem]], [[Calculus/Integrals/Triple Integrals/Triple Integrals\|Triple Integrals]]

## References

Integral calculus is developed in OpenStax Calculus Volumes 1–2.[^openstax-int]

[^openstax-int]: OpenStax, *Calculus Volume 1*, Chapters 4–5; *Volume 2*, Chapter 1, https://openstax.org/details/books/calculus-volume-1
