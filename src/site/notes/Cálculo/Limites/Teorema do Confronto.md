---
{"dg-publish":true,"permalink":"/Cálculo/Limites/Teorema do Confronto/","created":"2025-05-20T13:30:13.831-03:00"}
---


O Teorema do Confronto de Limites é um importante resultado no cálculo que permite determinar o limite de uma função ao compará-la com outra cujo limite já seja conhecido. Este teorema é útil para resolver problemas complexos de limites sem recorrer a métodos mais avançados.

Sejam $f(x)$ e $g(x)$ duas funções definidas no entorno de um ponto $a$ (ou em todo o domínio real, se $a = \infty$), e suponha que $\lim_{x \to a} g(x) = L$, onde $L$ é um número real ou infinito. Então:

1. **Se** $0 \leq f(x) \leq g(x)$ para todo $x$ no entorno de $a$ (exceto possivelmente em $a$), então $\lim_{x \to a} f(x) = L$.
2. **Se** $f(x) \geq 0$ e $g(x) \geq 0$ para todo $x$ no entorno de $a$, e se $\lim_{x \to a} g(x) = 0$, então $\lim_{x \to a} f(x) = 0$.

## Exemplos

1. **Exemplo 1:**
   Considere as funções $f(x) = x^2\sin(\frac{1}{x})$ e $g(x) = x^2$. Sabemos que $\lim_{x \to 0} g(x) = 0$. Como $-1 \leq \sin(\frac{1}{x}) \leq 1$, temos:
$$
 -x^2 \leq x^2\sin(\frac{1}{x}) \leq x^2.
$$
   Aplicando o Teorema do Confronto de Limites, concluímos que $\lim_{x \to 0} f(x) = 0$.

2. **Exemplo 2:**
   Considere as funções $f(x) = e^{-x^2}$ e $g(x) = x^4$. Sabemos que $\lim_{x \to \infty} g(x) = \infty$. Como $e^{-x^2} > 0$ para todo $x$, temos:
$$
 0 < e^{-x^2} < x^4.
$$
   Aplicando o Teorema do Confronto de Limites, concluímos que $\lim_{x \to \infty} f(x) = \infty$.

Este teorema é uma ferramenta poderosa para resolver limites complexos e é frequentemente usado em cálculos avançados.
