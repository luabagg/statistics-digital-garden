---
{"dg-publish":true,"permalink":"/probabilidade/distribuicoes/binomio-de-newton/","created":"2025-04-22T08:53:47.223-03:00"}
---


O **binômio de Newton** é um teorema fundamental da matemática que fornece uma maneira eficiente para expandir expressões do tipo $(a + b)^n$, onde $a$ e $b$ são quaisquer números, variáveis ou expressões algébricas, e $n$ é um número inteiro não-negativo.

A fórmula do binômio de Newton pode ser escrita como:

$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k}b^k,
$$

onde $\binom{n}{k}$ é o coeficiente binomial, que representa o número de maneiras de escolher $k$ elementos de um conjunto com $n$ elementos. Este coeficiente pode ser calculado usando a fórmula:

$$
\binom{n}{k} = \frac{n!}{k!(n-k)!}.
$$

Por exemplo, considere a expansão de $(x + y)^3$. Usando o binômio de Newton, temos:

$$
(x + y)^3 = \sum_{k=0}^{3} \binom{3}{k} x^{3-k}y^k.
$$

Desenvolvendo esta expressão termo a termo, obtemos:

$$
\begin{align*}

(x + y)^3 &= \binom{3}{0}x^3y^0 + \binom{3}{1}x^2y^1 + \binom{3}{2}x^1y^2 + \binom{3}{3}x^0y^3 \\

&= 1 \cdot x^3 \cdot 1 + 3 \cdot x^2 \cdot y + 3 \cdot x \cdot y^2 + 1 \cdot 1 \cdot y^3 \\

&= x^3 + 3x^2y + 3xy^2 + y^3.

\end{align*}
$$

Este exemplo ilustra como o binômio de Newton simplifica a expansão de expressões polinomiais, permitindo que sejam calculadas com facilidade e precisão.
