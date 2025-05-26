---
{"dg-publish":true,"permalink":"/metodos-numericos/interpolacao-polinimial/teorema-de-existencia-e-unicidade-do-polinomio-de-interpolacao/","created":"2025-05-23T11:15:07.293-03:00"}
---


## Definição e Contexto

O teorema de existência e unicidade do polinômio de interpolação é um resultado fundamental na teoria da interpolação numérica. Este teorema garante que, sob certas condições, existe exatamente um polinômio de grau $n$ que passa por $n+1$ pontos distintos no plano complexo.

### Notação e Suposições

Sejam $x_0, x_1, \ldots, x_n$ pontos distintos em $\mathbb{R}$ (ou $\mathbb{C}$) e $y_0, y_1, \ldots, y_n$ valores associados a esses pontos. O problema de interpolação consiste em encontrar um polinômio $P(x)$ de grau menor ou igual a $n$ que satisfaz as condições:

$$
P(x_i) = y_i, \quad i = 0, 1, \ldots, n.
$$

## Enunciado Do Teorema

**Teorema (Existência e Unicidade):** Sejam $x_0, x_1, \ldots, x_n$ pontos distintos em $\mathbb{R}$ (ou $\mathbb{C}$). Então, existe exatamente um polinômio $P(x)$ de grau menor ou igual a $n$ que interpola esses pontos.

### Demonstração Intuitiva

A existência do polinômio de interpolação pode ser demonstrada usando o método dos coeficientes indeterminados. Suponha que $P(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$. Então, as condições de interpolação dão um sistema linear de equações:

$$
\begin{cases}
a_n x_i^n + a_{n-1} x_i^{n-1} + \cdots + a_1 x_i + a_0 = y_i & \text{para } i = 0, 1, \ldots, n.
\end{cases}
$$

Como os pontos $x_i$ são distintos, o sistema é regular e tem solução única.

### Unicidade Do Polinômio de Interpolação

A unicidade segue diretamente da regularidade do sistema linear. Se houvessem dois polinômios diferentes $P(x)$ e $Q(x)$ que interpola os mesmos pontos, a diferença entre eles seria um polinômio não nulo de grau menor ou igual a $n$ que se anula em $n+1$ pontos distintos. Isso é impossível, pois um polinômio não nulo só pode ter raízes contando multiplicidades.

## Forma Do Polinômio

O polinômio de interpolação pode ser expresso usando a forma de Lagrange:

$$
P(x) = \sum_{i=0}^{n} y_i L_i(x),
$$

onde $L_i(x)$ são os polinômios de Lagrange, definidos como:

$$
L_i(x) = \prod_{\substack{0 \leq j \leq n \\ j \neq i}} \frac{x - x_j}{x_i - x_j}.
$$

### Exemplo

Considere os pontos $(1, 2)$ e $(3, 5)$. O polinômio de interpolação é um polinômio linear $P(x) = ax + b$ que passa por esses pontos. Podemos encontrar $a$ e $b$ resolvendo o sistema:

$$
\begin{cases}
a \cdot 1 + b = 2, \\
a \cdot 3 + b = 5.
\end{cases}
$$

Resolvendo este sistema, obtemos $a = \frac{3}{2}$ e $b = \frac{1}{2}$. Portanto,

$$
P(x) = \frac{3}{2}x + \frac{1}{2}.
$$
