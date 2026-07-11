---
{"dg-publish":true,"permalink":"/numerical-methods/polynomial-interpolation/polynomial-interpolation/","tags":["numerical-methods","interpolation","hub"],"noteIcon":"","dg-note-properties":{"tags":["numerical-methods","interpolation","hub"],"aliases":["Polynomial Interpolation"]}}
---


# Polynomial Interpolation

## Summary

Polynomial interpolation constructs a polynomial that passes through given data points. For distinct nodes, the polynomial of degree at most $n$ through $n+1$ points is unique.

## Prerequisites

[[Pre-Calculus/Polynomials and Rational Functions/Polynomials and Rational Functions\|Polynomials and Rational Functions]], [[Linear Algebra/Systems of Linear Equations\|Systems of Linear Equations]]

## Learning Order

1. [[Numerical Methods/Polynomial Interpolation/Existence and Uniqueness of Interpolating Polynomial\|Existence and Uniqueness of Interpolating Polynomial]]
2. [[Numerical Methods/Polynomial Interpolation/Polynomial Interpolation by Definition\|Polynomial Interpolation by Definition]] (Vandermonde)
3. [[Numerical Methods/Polynomial Interpolation/Lagrange Polynomial\|Lagrange Polynomial]]
4. [[Numerical Methods/Polynomial Interpolation/Newton Polynomial\|Newton Polynomial]]

## Limitations

High-degree equispaced interpolation can oscillate (Runge phenomenon). Piecewise polynomials/splines are often preferable for large data sets (not covered in this hub’s child notes yet).

## Connections

- Contrast with approximate fitting: [[Numerical Methods/Curve Fitting/Curve Fitting\|Curve Fitting]]
- Hub: [[Numerical Methods/Numerical Methods\|Numerical Methods]]

## References

Existence/uniqueness and classical forms are standard numerical analysis.[^dlmf-interp]

[^dlmf-interp]: NIST DLMF, *§3.3 Interpolation*, https://dlmf.nist.gov/3.3
