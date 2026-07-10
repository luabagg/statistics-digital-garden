---
{"dg-publish":true,"permalink":"/numerical-methods/linear-systems/solving-linear-systems/","dgShowLocalGraph":true,"noteIcon":"","dg-note-properties":{}}
---


# Solving Linear Systems

## Summary

This path solves linear algebraic systems $Ax=b$ with $A\in\mathbb{R}^{n\times n}$. Direct methods factor or triangularize $A$; iterative methods build a sequence $x^{(k)}\to x$.

## Prerequisites

- Matrix–vector products and elementary row operations
- Norms and the idea of residual $r=b-Ax$

## Linear Maps (Not Affine Lines)

A map $T$ is **linear** when

$$
T(u+v)=T(u)+T(v),\qquad T(cu)=c\,T(u)
$$

for all vectors $u,v$ and scalars $c$.[^lax]

In particular, $T(x)=ax+b$ with $b\neq 0$ is **affine**, not linear, because $T(0)=b\neq 0$. Linear systems in this path are of the form $Ax=b$, where the unknown enters linearly through the matrix $A$. (The system is still called linear when $b\neq 0$.)

## Learning Order

1. [[Numerical Methods/Linear Systems/Direct Methods - Triangular System\|Direct Methods - Triangular System]] — forward/back substitution
2. [[Numerical Methods/Linear Systems/Gaussian Elimination\|Gaussian Elimination]] — triangularization + back substitution
3. [[Numerical Methods/Linear Systems/LU Factorization\|LU Factorization]] — $A=LU$ or $PA=LU$
4. [[Numerical Methods/Linear Systems/Iterative Methods\|Iterative Methods]] — fixed-point form $x^{(k+1)}=Tx^{(k)}+c$
5. [[Numerical Methods/Linear Systems/Gauss-Jacobi Method\|Gauss-Jacobi Method]]
6. [[Numerical Methods/Linear Systems/Gauss-Seidel Method\|Gauss-Seidel Method]]
7. [[Numerical Methods/Linear Systems/Sufficient Convergence Condition for Gauss-Jacobi\|Sufficient Convergence Condition for Gauss-Jacobi]]

## Topic Map



- [[Numerical Methods/Linear Systems/Solving Linear Systems\|Numerical Methods/Linear Systems/Solving Linear Systems]]
	- [[Numerical Methods/Linear Systems/LU Factorization\|LU Factorization]]
	- [[Numerical Methods/Linear Systems/Gaussian Elimination\|Gaussian Elimination]]
	- [[Numerical Methods/Linear Systems/Gauss-Jacobi Method\|Gauss-Jacobi Method]]
	- [[Numerical Methods/Linear Systems/Gauss-Seidel Method\|Gauss-Seidel Method]]
	- [[Numerical Methods/Linear Systems/Direct Methods - Triangular System\|Direct Methods - Triangular System]]
	- [[Numerical Methods/Linear Systems/Iterative Methods\|Iterative Methods]]
	- [[Numerical Methods/Linear Systems/Sufficient Convergence Condition for Gauss-Jacobi\|Sufficient Convergence Condition for Gauss-Jacobi]]



## Direct vs Iterative

| Family | Idea | Typical use |
| --- | --- | --- |
| Direct | Finite arithmetic factorization / elimination | Dense moderate $n$, many $b$ after one factorization |
| Iterative | Split $A=M-N$, iterate $Mx^{(k+1)}=Nx^{(k)}+b$ | Large sparse systems, good initial guesses |

Always check the residual $\|b-Ax\|$ after computing $x$.

## Connections

- Roots of nonlinear systems often linearize to $J\Delta x=-F$
- Least squares solves normal equations $A^\top A\hat a=A^\top y$ (prefer QR in practice)
- Theory: [[Linear Algebra/Linear Algebra\|Linear Algebra]]

## References

[^lax]: Definition of linear maps; standard linear algebra. Numerical methods overview: NIST DLMF Ch. 3, https://dlmf.nist.gov/3
