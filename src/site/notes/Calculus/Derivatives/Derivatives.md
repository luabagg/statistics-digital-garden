---
{"dg-publish":true,"permalink":"/calculus/derivatives/derivatives/","tags":["calculus","derivatives"],"dgShowLocalGraph":true,"noteIcon":"","dg-note-properties":{"tags":["calculus","derivatives"]}}
---



- **[[Calculus/Derivatives/Derivatives\|Derivatives]]**
	- [[Calculus/Derivatives/Chain Rules\|Chain Rules]]
	- [[Calculus/Derivatives/Differentiability of a Function\|Differentiability of a Function]]
	- [[Calculus/Derivatives/Differential of a Function\|Differential of a Function]]
	- **[[Calculus/Derivatives/Directional Derivative/Directional Derivative\|Directional Derivative]]**
	- [[Calculus/Derivatives/Higher-Order Derivatives\|Higher-Order Derivatives]]
	- [[Calculus/Derivatives/Implicit Differentiation\|Implicit Differentiation]]
	- [[Calculus/Derivatives/Partial Derivatives\|Partial Derivatives]]
	- [[Calculus/Derivatives/Tangent Plane\|Tangent Plane]]



# Derivatives

## Summary

The derivative measures the instantaneous rate of change of a function and the slope of its tangent line. It is defined by a limit of difference quotients and extends to partial and directional derivatives in several variables.

## Prerequisites

[[Calculus/Limits/Limits\|Limits]], [[Calculus/Limits/Fundamental Limits of Calculus\|Fundamental Limits of Calculus]]

## Definition

$$
f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h},
$$

when the limit exists. Then $f$ is differentiable at $a$, and $f'(a)$ is the slope of the tangent line to $y=f(x)$ at $x=a$.

## Conditions / Assumptions

- Differentiability at $a$ implies continuity at $a$; the converse is false (e.g. $|x|$ at $0$).
- Standard differentiation rules require the component functions to be differentiable on the relevant domain.

## Worked Example

For $f(x)=x^2$,

$$
f'(x)=\lim_{h\to 0}\frac{(x+h)^2-x^2}{h}=\lim_{h\to 0}(2x+h)=2x.
$$

Standard results: $(e^x)'=e^x$ and $(\ln x)'=1/x$ for $x>0$.

## Common Mistakes

- Treating the derivative as average rate of change over a large interval.
- Differentiating without checking domain issues (absolute value corners, vertical tangents).

## Connections

- Next: [[Calculus/Derivatives/Chain Rules\|Chain Rules]], [[Calculus/Derivatives/Implicit Differentiation\|Implicit Differentiation]], [[Calculus/Derivatives/Higher-Order Derivatives\|Higher-Order Derivatives]]
- Multivariable: [[Calculus/Derivatives/Partial Derivatives\|Partial Derivatives]], [[Calculus/Derivatives/Directional Derivative/Directional Derivative\|Directional Derivative]]
- Inverse operation: [[Calculus/Integrals/Integrals\|Integrals]], [[Calculus/Fundamental Theorem of Calculus\|Fundamental Theorem of Calculus]]

## References

The difference-quotient definition and basic rules are in OpenStax Calculus Volume 1.[^openstax-deriv]

[^openstax-deriv]: OpenStax, *Calculus Volume 1*, Chapter 3, https://openstax.org/details/books/calculus-volume-1
