---
{"dg-publish":true,"permalink":"/probability/distributions/discrete/discrete/","tags":["probability","distributions","discrete"],"dgShowLocalGraph":true,"noteIcon":"","dg-note-properties":{"tags":["probability","distributions","discrete"],"aliases":["Discrete Distributions","Discretas"]}}
---



- **[[Probability/Distributions/Discrete/Discrete\|Discrete]]**
	- [[Probability/Distributions/Discrete/Bernoulli Distribution\|Bernoulli Distribution]]
	- [[Probability/Distributions/Discrete/Binomial Distribution\|Binomial Distribution]]
	- [[Probability/Distributions/Discrete/Geometric Distribution\|Geometric Distribution]]
	- [[Probability/Distributions/Discrete/Hypergeometric Distribution\|Hypergeometric Distribution]]
	- [[Probability/Distributions/Discrete/Negative Binomial Distribution\|Negative Binomial Distribution]]
	- [[Probability/Distributions/Discrete/Poisson Distribution\|Poisson Distribution]]
	- [[Probability/Distributions/Discrete/Uniform Distribution\|Uniform Distribution]]


# Discrete Distributions

Compact study note.

## Summary

Discrete distributions assign probability mass to finite or countably infinite support points. They model counts, categories encoded as numbers, and repeated Bernoulli-trial mechanisms.[^openstax-discrete]

## Prerequisites

- [[Probability/Random Variable/Discrete Random Variable\|Discrete Random Variable]]

## Notation and Assumptions

Use $p_X(x)=P(X=x)$ and require $\sum_xp_X(x)=1$ over the support.

## Essential Result

Match the sampling mechanism: Bernoulli for single success/failure trial, binomial for fixed independent trials, geometric for waiting to first success, and Poisson for event counts at fixed rate.

## Small Example

One fair die has a discrete uniform distribution over $\{1,2,3,4,5,6\}$.

## Common Mistakes

- Using a continuous density for count data.
- Leaving support implicit.

## Connections

- [[Probability/Distributions/Discrete/Bernoulli Distribution\|Bernoulli Distribution]]
- [[Probability/Distributions/Discrete/Binomial Distribution\|Binomial Distribution]]
- [[Probability/Distributions/Discrete/Poisson Distribution\|Poisson Distribution]]
- [[Probability/Distributions/Discrete/Uniform Distribution\|Discrete Uniform Distribution]]

## References

[^openstax-discrete]: OpenStax, *Introductory Statistics 2e*, "Chapter 4: Discrete Random Variables", https://openstax.org/books/introductory-statistics-2e/pages/4-introduction
