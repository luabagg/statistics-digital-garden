---
{"dg-publish":true,"permalink":"/linear-algebra/linear-algebra/","tags":["linear-algebra","hub"],"dgShowLocalGraph":true,"noteIcon":"","dg-note-properties":{"tags":["linear-algebra","hub"],"aliases":["Linear Algebra","LA"]}}
---



- **[[Linear Algebra/Linear Algebra\|Linear Algebra]]**
	- [[Linear Algebra/Determinants\|Determinants]]
	- [[Linear Algebra/Eigenvalues and Eigenvectors\|Eigenvalues and Eigenvectors]]
	- [[Linear Algebra/Least Squares and QR\|Least Squares and QR]]
	- [[Linear Algebra/Matrices and Row Reduction\|Matrices and Row Reduction]]
	- [[Linear Algebra/Orthogonality and Projections\|Orthogonality and Projections]]
	- [[Linear Algebra/Systems of Linear Equations\|Systems of Linear Equations]]
	- [[Linear Algebra/Vector Spaces and Bases\|Vector Spaces and Bases]]


# Linear Algebra

## Summary

Linear algebra studies linear equations, matrices, vector spaces, and linear maps. It underpins least squares, spectral methods, numerical linear algebra, and much of statistics and machine learning.

## Prerequisites

[[Pre-Calculus/Functions/Functions\|Functions]]; coordinate geometry from [[Analytic Geometry/Analytic Geometry\|Analytic Geometry]] (especially [[Analytic Geometry/Vectors and Dot Product\|Vectors and Dot Product]]). Comfortable algebra with systems of equations.

## Learning order

1. [[Linear Algebra/Systems of Linear Equations\|Systems of Linear Equations]] — solution sets, geometry of intersections
2. [[Linear Algebra/Matrices and Row Reduction\|Matrices and Row Reduction]] — matrix algebra, Gaussian elimination, rank
3. [[Linear Algebra/Determinants\|Determinants]] — volume scaling, invertibility test
4. [[Linear Algebra/Vector Spaces and Bases\|Vector Spaces and Bases]] — span, independence, dimension, coordinates
5. [[Linear Algebra/Eigenvalues and Eigenvectors\|Eigenvalues and Eigenvectors]] — spectral picture of square matrices
6. [[Linear Algebra/Orthogonality and Projections\|Orthogonality and Projections]] — orthonormal bases, projections
7. [[Linear Algebra/Least Squares and QR\|Least Squares and QR]] — inconsistent systems, QR factorization

## Key distinction

A map $f(\mathbf{x}) = A\mathbf{x}$ (matrix–vector product) is **linear**. An affine map $f(\mathbf{x}) = A\mathbf{x} + \mathbf{b}$ with $\mathbf{b}\neq\mathbf{0}$ is **not** linear, though it is affine.

## Next steps

- Numerical methods for systems: topics under [[Numerical Methods/Numerical Methods\|Numerical Methods]] (e.g. Gaussian elimination notes in that tree when present)
- Analytic geometry support: [[Analytic Geometry/Lines and Planes\|Lines and Planes]], [[Analytic Geometry/Vectors and Dot Product\|Vectors and Dot Product]]
- Applications: least squares links to regression and [[Numerical Methods/Curve Fitting/Least Squares\|Least Squares]] when available

## Connections

- Foundations: [[Pre-Calculus/Functions/Functions\|Functions]] and [[Analytic Geometry/Analytic Geometry\|Analytic Geometry]]
- Numerical methods: [[Numerical Methods/Numerical Methods\|Numerical Methods]]
- Statistical applications: [[Probability/Probability\|Probability]]

## References

Core linear algebra structure follows MIT OCW 18.06 and standard matrix-theory curricula.[^mit-1806][^openstax-calc3-la]

[^mit-1806]: MIT OpenCourseWare, *18.06 Linear Algebra* (Strang), https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/
[^openstax-calc3-la]: OpenStax, *Calculus Volume 3* (vectors, matrices overview), https://openstax.org/details/books/calculus-volume-3
