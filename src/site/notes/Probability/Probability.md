---
{"dg-publish":true,"permalink":"/probability/probability/","tags":["probability","hub"],"dgShowLocalGraph":true,"noteIcon":"","dg-note-properties":{"tags":["probability","hub"],"aliases":["Probability","Probabilidade"]}}
---



- **[[Probability/Probability\|Probability]]**
	- **[[Probability/Distributions/Distributions\|Distributions]]**
	- **[[Probability/Random Variable/Random Variable\|Random Variable]]**
	- [[Probability/Borel Sigma-Algebra\|Borel Sigma-Algebra]]
	- [[Probability/Central Limit Theorem\|Central Limit Theorem]]
	- [[Probability/Conditional Probability\|Conditional Probability]]
	- [[Probability/Covariance and Correlation\|Covariance and Correlation]]
	- [[Probability/De Morgan Laws\|De Morgan Laws]]
	- [[Probability/IID Random Variables\|IID Random Variables]]
	- [[Probability/Independence\|Independence]]
	- [[Probability/Joint Marginal and Conditional Distributions\|Joint Marginal and Conditional Distributions]]
	- [[Probability/Law of Large Numbers\|Law of Large Numbers]]
	- [[Probability/Probability Space\|Probability Space]]
	- [[Probability/Quantiles\|Quantiles]]
	- [[Probability/Sample Space and Events\|Sample Space and Events]]
	- [[Probability/Sigma-Algebra\|Sigma-Algebra]]
	- [[Probability/Total Probability and Bayes Theorem\|Total Probability and Bayes Theorem]]


# Probability

Compact study note.

## Summary

Probability assigns coherent numerical weights to uncertain events. Modern probability starts with sample space, event sigma-algebra, and probability measure.[^mit-prob]

## Prerequisites

- Prerequisites: None

## Notation and Assumptions

Use $(\Omega, \mathcal{F}, P)$ for probability space notation: outcomes live in $\Omega$, events live in $\mathcal{F}$, and $P$ maps events to numbers in $[0,1]$.

## Essential Result

The core workflow is: define outcomes, choose measurable events, assign probabilities, then study random variables and distributions derived from those events.

## Small Example

For fair die roll, $\Omega=\{1,2,3,4,5,6\}$ and $P(\{2,4,6\})=3/6=1/2$ for event 'even result'.

## Common Mistakes

- Treating outcome $3$ and event $\{3\}$ as identical objects.
- Using formulas before checking the event belongs to the chosen sigma-algebra.

## Connections

- [[Probability/Sample Space and Events\|Sample Space and Events]]
- [[Probability/Probability Space\|Probability Space]]
- [[Probability/Conditional Probability\|Conditional Probability]]
- [[Probability/Distributions/Distributions\|Distributions]]
- [[Probability/Random Variable/Random Variable\|Random Variables]]

## References

[^mit-prob]: MIT OpenCourseWare, "6.041SC Probabilistic Systems Analysis and Applied Probability", Fall 2013, https://ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/
