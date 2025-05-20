---
{"dg-publish":true,"permalink":"/Probabilidade/Variável Aleatória/Variável Aleatória Contínua/","created":"2025-05-20T13:30:13.855-03:00"}
---


Seja $X$ uma variável aleatória com função de distribuição acumulada (FDA) $F_X(x)$ absolutamente contínua. Dizemos que $X$ é uma variável aleatória contínua.  

## Definição

Se $X$ é uma variável aleatória contínua, então existe uma função não negativa $f$, chamada **função densidade de probabilidade (PDF - Probability Density Function)**, tal que:  
$$
F_X(x) = \int_{-\infty}^{x} f(t) dt, \quad \forall x \in \mathbb{R}
$$
Essa relação garante que a FDA pode ser obtida a partir da integral da densidade $f(x)$.  

## Probabilidades para Intervalos

Seja $X$ uma variável aleatória contínua com função de densidade $f_X(x)$. Para quaisquer $a, b \in \mathbb{R}$, com $a \leq b$, a probabilidade de $X$ assumir valores no intervalo $[a, b]$ é dada por:
$$
P(a \leq X \leq b) = \int_a^b f_X(x) dx
$$