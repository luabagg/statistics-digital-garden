---
{"dg-publish":true,"permalink":"/numerical-methods/root-finding/root-finding/","tags":["numerical-methods","roots","hub"],"dgShowLocalGraph":true,"noteIcon":"","dg-note-properties":{"tags":["numerical-methods","roots","hub"],"aliases":["Roots of Functions"]}}
---



- **[[Numerical Methods/Root Finding/Root Finding\|Root Finding]]**
	- [[Numerical Methods/Root Finding/Bisection Method\|Bisection Method]]
	- [[Numerical Methods/Root Finding/Bolzano's Theorem\|Bolzano's Theorem]]
	- [[Numerical Methods/Root Finding/False Position Method\|False Position Method]]
	- [[Numerical Methods/Root Finding/Graphical Method\|Graphical Method]]
	- [[Numerical Methods/Root Finding/Newton-Raphson Method\|Newton-Raphson Method]]
	- [[Numerical Methods/Root Finding/Secant Method\|Secant Method]]


# Roots of Functions

## Summary

Root-finding algorithms approximate solutions of $f(x)=0$. Bracket methods need a sign change; open methods need a good initial guess and often a derivative.

## Prerequisites

[[Calculus/Limits/Limits\|Limits]], [[Calculus/Derivatives/Derivatives\|Derivatives]], continuity concepts.

## Learning Order

1. [[Numerical Methods/Root Finding/Bolzano's Theorem\|Bolzano's Theorem]] / [[Numerical Methods/Root Finding/Graphical Method\|Graphical Method]] — existence and rough location
2. [[Numerical Methods/Root Finding/Bisection Method\|Bisection Method]] — guaranteed linear convergence on a bracket
3. [[Numerical Methods/Root Finding/False Position Method\|False Position Method]] — bracket with secant-like updates
4. [[Numerical Methods/Root Finding/Secant Method\|Secant Method]] — derivative-free open method
5. [[Numerical Methods/Root Finding/Newton-Raphson Method\|Newton-Raphson Method]] — locally quadratic for simple roots

## Comparison Snapshot

| Method | Needs | Speed | Guarantee |
|---|---|---|---|
| Bisection | sign change | slow | yes on bracket |
| False position | sign change | often faster than bisection | stays bracketed |
| Secant | two starts | superlinear typical | local |
| Newton | $f'$ and one start | quadratic near simple root | local |

## Connections

- Hub: [[Numerical Methods/Numerical Methods\|Numerical Methods]]
- Optimization uses roots of derivatives: [[Calculus/Multivariable Functions/Maxima and Minima\|Maxima and Minima]]

## References

Root-finding methods are classical numerical analysis.[^dlmf3]

[^dlmf3]: NIST DLMF, *Chapter 3 Numerical Methods*, https://dlmf.nist.gov/3
