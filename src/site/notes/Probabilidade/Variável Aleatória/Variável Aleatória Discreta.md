---
{"dg-publish":true,"permalink":"/Probabilidade/Variável Aleatória/Variável Aleatória Discreta/","created":"2025-05-20T13:30:13.855-03:00"}
---


Seja $X: \Omega \to \mathbb{R}$ uma variável aleatória definida em um espaço amostral $\Omega$ equipado com uma probabilidade $P$. A medida induzida por $X$ é denotada por $P_X$, e a função de distribuição acumulada (FDA) associada a $X$ é dada por $F_X(x)$.

Dizemos que $X$ é uma variável aleatória discreta se sua função de distribuição acumulada $F_X(x)$ satisfaz as seguintes propriedades:

## 1. Definição da Fda para Va Discreta

$$
F_X(x) = P(X \leq x)
$$

Esta expressão representa a probabilidade de que o valor da variável aleatória $X$ seja menor ou igual a um determinado ponto $x$.

## 2. Característica Principal de Va Discretas

A FDA de uma variável aleatória discreta é uma função constante por partes, o que significa que ela salta em certos pontos específicos correspondentes aos valores possíveis da variável aleatória.

## 3. Exemplo

Considere $X$ como a variável aleatória que representa o número de caras ao lançar duas moedas justas. Os valores possíveis de $X$ são 0, 1 e 2.  

- Para $x < 0$, $F_X(x) = 0$.  
- Para $0 \leq x < 1$, $F_X(x) = P(X = 0) = \frac{1}{4}$.  
- Para $1 \leq x < 2$, $F_X(x) = P(X = 0) + P(X = 1) = \frac{1}{4} + \frac{1}{2} = \frac{3}{4}$.  
- Para $x \geq 2$, $F_X(x) = 1$.  

Portanto, a FDA de $X$ é:  

$$
F_X(x) =

\begin{cases}

0 & \text{se } x < 0 \\

\frac{1}{4} & \text{se } 0 \leq x < 1 \\

\frac{3}{4} & \text{se } 1 \leq x < 2 \\

1 & \text{se } x \geq 2

\end{cases}
$$

## 4. Interpretação

A função constante por partes da FDA reflete a natureza discreta dos valores que $X$ pode assumir, com saltos significativos em cada valor possível de $X$.

## 5. Consequências Práticas

- A probabilidade de $X$ assumir um valor específico é dada pelo salto na FDA.  
- Por exemplo, a probabilidade de $X = 1$ é:  
$$
P(X = 1) = F_X(1^+) - F_X(1^-) = \frac{3}{4} - \frac{1}{4} = \frac{1}{2}
$$
- Onde $F_X(1^+)$ e $F_X(1^-)$ representam os valores da FDA à direita e à esquerda de 1, respectivamente.
