---
{"dg-publish":true,"permalink":"/probabilidade/variavel-aleatoria/espaco-de-probabilidade-produzido-por-variavel-aleatoria/","created":"2025-05-20T13:30:13.853-03:00"}
---


## Introdução

Seja $(\Omega, \mathcal{F}, \mathcal{P})$ um modelo de probabilidade e considere $X: \Omega \to \mathbb{R}$ uma variável aleatória definida em $(\Omega, \mathcal{F})$. A medida de probabilidade induzida por $X$, denotada por $\mu_X$, é definida como:

$$
\mu_X(B) = \mathcal{P}(X^{-1}(B)) \quad \text{para todo } B \in \mathcal{B}(\mathbb{R}),
$$

onde $\mathcal{B}(\mathbb{R})$ representa a sigma-álgebra das partes borelianas de $\mathbb{R}$, e $X^{-1}(B) = \{\omega \in \Omega : X(\omega) \in B\}$ é o conjunto inverso de $X$. Em outras palavras, $\mu_X(B)$ fornece a probabilidade de que a variável aleatória $X$ assuma um valor pertencente ao conjunto boreliano $B$.

Por exemplo, se $X$ é uma variável aleatória contínua com função densidade de probabilidade $f_X(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$, então a medida de probabilidade induzida por $X$ pode ser expressa como:

$$
\mu_X(B) = \int_B f_X(x) \, dx.
$$

Neste caso, $\mu_X((0, 1))$ representa a probabilidade de que $X$ assuma um valor entre 0 e 1.

### Exemplo

Seja $(\Omega, \mathcal{F}, \mathcal{P})$ um modelo de probabilidade e considere $X: \Omega \to \mathbb{R}$ uma variável aleatória definida em $(\Omega, \mathcal{F})$. A medida de probabilidade induzida por $X$, denotada por $\mu_X$, é definida como:

$$
\mu_X(B) = \mathcal{P}(X^{-1}(B)) \quad \text{para todo } B \in \mathcal{B}(\mathbb{R}),
$$

onde $\mathcal{B}(\mathbb{R})$ representa a sigma-álgebra das partes borelianas de $\mathbb{R}$, e $X^{-1}(B) = {\omega \in \Omega : X(\omega) \in B}$ é o conjunto inverso de $X$. Em outras palavras, $\mu_X(B)$ fornece a probabilidade de que a variável aleatória $X$ assuma um valor pertencente ao conjunto boreliano $B$.

Por exemplo, se $X$ é uma variável aleatória contínua com função densidade de probabilidade

$$
f_X(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}},
$$

então a medida de probabilidade induzida por $X$ pode ser expressa como:

$$
\mu_X(B) = \int_B f_X(x) , dx.
$$

Neste caso, $\mu_X((0,1))$ representa a probabilidade de que $X$ assuma um valor entre 0 e 1.

## Propriedades

**1. Não negatividade**

A medida $\mu_X$ é sempre não negativa, ou seja, para qualquer conjunto boreliano $B$, temos:

$$
\mu_X(B) \geq 0.
$$
**2. Normalização**

A medida de probabilidade total deve ser 1, ou seja:

$$
\mu_X(\mathbb{R}) = \mathcal{P}(X^{-1}(\mathbb{R})) = \mathcal{P}(\Omega) = 1.
$$
**3. Aditividade contável (ou σ-aditividade)**

Se ${B_i}_{i \in \mathbb{N}}$ for uma sequência de conjuntos borelianos disjuntos dois a dois, então:

$$
\mu_X\left(\bigcup_{i=1}^{\infty} B_i\right) = \sum_{i=1}^{\infty} \mu_X(B_i).
$$
**4. Probabilidade de um ponto (caso discreto)**

Se $X$ for uma variável aleatória discreta assumindo valores em um conjunto finito ou enumerável ${x_1, x_2, \dots}$ com probabilidades $\mathcal{P}(X = x_i) = p_i$, então a medida induzida é dada por:

$$
\mu_X(B) = \sum_{x_i \in B} p_i.
$$
**5. Formulação via função de distribuição**

A medida de probabilidade $\mu_X$ pode ser descrita em termos da função de distribuição acumulada (FDA) de $X$, definida como:

$$
F_X(x) = \mathcal{P}(X \leq x).
$$

Neste caso, para um intervalo $B = (a, b]$, temos:

$$
\mu_X((a, b]) = F_X(b) - F_X(a).
$$
**6. Relação com a função densidade (caso contínuo)**

Se $X$ for uma variável aleatória contínua com função densidade de probabilidade $f_X(x)$, então:

$$
\mu_X(B) = \int_B f_X(x) , dx.
$$

Isso significa que a medida de probabilidade induzida é absolutamente contínua em relação à medida de Lebesgue.

**7. Transformação de Variáveis Aleatórias**

Seja $Y = g(X)$ uma nova variável aleatória obtida aplicando uma função $g$ à variável $X$. A medida de probabilidade de $Y$ pode ser expressa em termos da medida de $X$ da seguinte forma:

$$
\mu_Y(B) = \mu_X(g^{-1}(B)).
$$

Se $X$ for contínua e $g$ for diferenciável e estritamente monótona, então a densidade de $Y$ pode ser obtida pela fórmula da mudança de variáveis:

$$
f_Y(y) = f_X(x) \left| \frac{dx}{dy} \right|, \quad \text{onde } x = g^{-1}(y).
$$
