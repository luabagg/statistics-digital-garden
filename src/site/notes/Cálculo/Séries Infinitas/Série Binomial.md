---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Série Binomial/","created":"2025-05-20T13:30:13.833-03:00"}
---


A **série binomial** é um importante conceito na teoria dos números e em cálculo, que permite expandir expressões do tipo $(1 + x)^n$ para qualquer número real ou complexo $n$. Esta série é uma generalização da fórmula do binômio de Newton.

## Definição da Série Binomial

A **série binomial** pode ser definida como:

$$
(1 + x)^n = \sum_{k=0}^{+\infty} \binom{n}{k} x^k,
$$

onde $\binom{n}{k}$ é o coeficiente binomial, dado por:

$$
\binom{n}{k} = \frac{n!}{k!(n-k)!}.
$$

## Exemplos de Série Binomial

1. **Para $n=0$**:
$$
   (1 + x)^0 = 1.
$$
2. **Para $n=1$**:
$$
   (1 + x)^1 = 1 + x.
$$
3. **Para $n=2$**:
$$
   (1 + x)^2 = 1 + 2x + x^2.
$$
4. **Para $n=-\frac{1}{2}$**:
$$
   \left(1 + x\right)^{-\frac{1}{2}} = 1 - \frac{1}{2}x + \frac{\frac{1}{2}\cdot\frac{3}{2}}{2!}x^2 - \cdots.
$$

## Relação com a [[Cálculo/Séries Infinitas/Série de Maclaurin\|Série de Maclaurin]]

A **série de Maclaurin** é uma série infinita que representa uma função $f(x)$ em torno do ponto $x=0$. A forma geral da série de Maclaurin para uma função $f(x)$ é:

$$
f(x) = \sum_{k=0}^{+\infty} \frac{f^{(k)}(0)}{k!} x^k,
$$

onde $f^{(k)}(0)$ representa a $k$-ésima derivada de $f(x)$ avaliada em $x=0$.

A **série binomial** pode ser vista como uma aplicação específica da série de Maclaurin. Por exemplo, para $(1 + x)^n$, podemos escrever:

$$
(1 + x)^n = \sum_{k=0}^{+\infty} \binom{n}{k} x^k,
$$

onde $\binom{n}{k}$ é o coeficiente binomial e pode ser interpretado como a $k$-ésima derivada de $(1+x)^n$ avaliada em $x=0$, dividido por $k!$. Isso mostra claramente a relação entre a série binomial e a série de Maclaurin.

## Intervalo de Convergência

O **intervalo de convergência** da série binomial refere-se ao conjunto de valores de $x$ para os quais a série converge. Para a série binomial $(1 + x)^n$, o intervalo de convergência depende do valor de $n$. Em geral, a série converge se $|x| < 1$.

### Exemplos de Intervalos de Convergência

1. **Para $n=0$**:

   A série é:

$$
   (1 + x)^0 = \sum_{k=0}^{+\infty} \binom{0}{k} x^k = 1.
$$

   Esta série converge para todos os valores de $x$, pois não depende de $x$.

1. **Para $n=1$**:

   A série é:

$$
   (1 + x)^1 = \sum_{k=0}^{+\infty} \binom{1}{k} x^k = 1 + x.
$$

   Esta série converge para todos os valores de $x$, pois é uma série finita.

1. **Para $n=2$**:

   A série é:

$$
   (1 + x)^2 = \sum_{k=0}^{+\infty} \binom{2}{k} x^k = 1 + 2x + x^2.
$$

   Esta série converge para todos os valores de $x$, pois é uma série finita.

1. **Para $n=-\frac{1}{2}$**:

   A série é:

$$
   \left(1 + x\right)^{-\frac{1}{2}} = \sum_{k=0}^{+\infty} \binom{-\frac{1}{2}}{k} x^k.
$$

   O coeficiente binomial $\binom{-\frac{1}{2}}{k}$ é dado por:

$$
   \binom{-\frac{1}{2}}{k} = (-1)^k \frac{\left(\frac{1}{2}\right)\left(\frac{3}{2}\right) \cdots \left(\frac{1}{2} + k - 1\right)}{k!}.
$$

   A série converge para $|x| < 1$.

### Exemplo de Aplicação

Considere o caso onde $n = -\frac{1}{2}$:

$$
(1 + x)^{-\frac{1}{2}} = 1 - \frac{1}{2}x + \frac{\frac{1}{2}\cdot\frac{3}{2}}{2!}x^2 - \cdots.
$$

A série converge para $|x| < 1$. Por exemplo, se $x = \frac{1}{2}$:

$$
(1 + \frac{1}{2})^{-\frac{1}{2}} = \left(\frac{3}{2}\right)^{-\frac{1}{2}} = \sqrt{\frac{2}{3}}.
$$
