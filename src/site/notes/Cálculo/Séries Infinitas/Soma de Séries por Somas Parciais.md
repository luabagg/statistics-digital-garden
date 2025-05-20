---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Soma de Séries por Somas Parciais/","dgPassFrontmatter":true,"created":"2025-03-18T02:17:13.061-03:00"}
---


Para entender melhor como uma série converge para sua soma, podemos analisar suas somas parciais. Uma soma parcial é a soma dos n primeiros termos de uma série.

## Definição De Soma Parcial

Para uma série ∑aₖ, a n-ésima soma parcial Sₙ é definida como:
$$
 S_n = \sum_{k=1}^{n} a_k = a_1 + a_2 + … + a_n 
$$
## Exemplo Com Série Geométrica

Considere a série geométrica com a = 1 e r = 1/2:
$$
 1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + … 
$$
As somas parciais seriam:

- S₁ = 1
- S₂ = 1 + 1/2 = 1.5
- S₃ = 1 + 1/2 + 1/4 = 1.75
- S₄ = 1 + 1/2 + 1/4 + 1/8 = 1.875

Podemos observar que as somas parciais se aproximam cada vez mais de 2, que é o valor limite da série:
$$
 \lim_{n \to \infty} S_n = \frac{1}{1-\frac{1}{2}} = 2 
$$
## Fórmula Geral Para Soma Parcial De Série Geométrica

Para uma série geométrica com primeiro termo a e razão r, a n-ésima soma parcial é dada por:
$$
 S_n = a\frac{1-r^n}{1-r}, \text{ para } r \neq 1 
$$
Esta fórmula nos permite calcular exatamente a soma dos n primeiros termos e verificar o comportamento da série conforme n aumenta.
