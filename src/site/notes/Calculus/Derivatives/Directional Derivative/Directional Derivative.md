---
{"dg-publish":true,"permalink":"/calculus/derivatives/directional-derivative/directional-derivative/","tags":["calculus","derivatives","multivariable"],"dgShowLocalGraph":true,"noteIcon":"","dg-note-properties":{"tags":["calculus","derivatives","multivariable"]}}
---



- **[[Calculus/Derivatives/Directional Derivative/Directional Derivative\|Directional Derivative]]**
	- [[Calculus/Derivatives/Directional Derivative/Maximum Rate of Directional Derivative\|Maximum Rate of Directional Derivative]]



# Directional Derivative

## Summary

The directional derivative measures the rate of change of a scalar function in a specified direction. When the function is differentiable, it equals the **dot product** of the gradient with a unit direction vector.

## Prerequisites

[[Calculus/Derivatives/Partial Derivatives\|Partial Derivatives]], [[Calculus/Derivatives/Differentiability of a Function\|Differentiability of a Function]]

## Definition

For $f:\mathbb{R}^n\to\mathbb{R}$, a point $\mathbf{a}$, and a unit vector $\mathbf{u}$,

$$
D_{\mathbf{u}}f(\mathbf{a})=\lim_{h\to 0}\frac{f(\mathbf{a}+h\mathbf{u})-f(\mathbf{a})}{h},
$$

when the limit exists.

## Formula

If $f$ is differentiable at $\mathbf{a}$, then

$$
D_{\mathbf{u}}f(\mathbf{a})=\nabla f(\mathbf{a})\cdot\mathbf{u},
$$

where

$$
\nabla f(\mathbf{a})=\Bigl(\frac{\partial f}{\partial x_1}(\mathbf{a}),\ldots,\frac{\partial f}{\partial x_n}(\mathbf{a})\Bigr).
$$

This is a scalar (dot product), not a cross product or a separate “vector product rule.”

## Conditions / Assumptions

- $\mathbf{u}$ should be a unit vector for the geometric rate-of-change interpretation per unit length.
- Existence of all partials does not guarantee directional derivatives in every direction; differentiability does guarantee the gradient formula above.

## Worked Example

Let $f(x,y)=x^2+y^2$ and $\mathbf{a}=(1,1)$. Then $\nabla f(1,1)=(2,2)$. For $\mathbf{u}=(1/\sqrt{2},1/\sqrt{2})$,

$$
D_{\mathbf{u}}f(1,1)=(2,2)\cdot\Bigl(\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\Bigr)=2\sqrt{2}.
$$

Along the coordinate unit vector $\mathbf{i}=(1,0)$, $D_{\mathbf{i}}f=f_x$, recovering the partial derivative.

## Common Mistakes

- Calling $\nabla f\cdot\mathbf{u}$ a “vector product.”
- Using a non-unit direction without scaling: for a general nonzero $\mathbf{v}$, the rate in direction $\mathbf{v}$ per unit length is $\nabla f\cdot(\mathbf{v}/\|\mathbf{v}\|)$.

## Connections

- Maximum rate: [[Calculus/Derivatives/Directional Derivative/Maximum Rate of Directional Derivative\|Maximum Rate of Directional Derivative]]
- Related: [[Calculus/Derivatives/Tangent Plane\|Tangent Plane]], [[Calculus/Derivatives/Differential of a Function\|Differential of a Function]]

## References

Directional derivatives and the gradient formula appear in OpenStax Calculus Volume 3.[^openstax-dir]

[^openstax-dir]: OpenStax, *Calculus Volume 3*, Section 4.6, https://openstax.org/details/books/calculus-volume-3
