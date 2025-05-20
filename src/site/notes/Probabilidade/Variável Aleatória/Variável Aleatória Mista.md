---
{"dg-publish":true,"permalink":"/Probabilidade/Variável Aleatória/Variável Aleatória Mista/","dgPassFrontmatter":true,"created":"2025-05-20T13:30:13.856-03:00"}
---


Uma **variável aleatória mista** é um tipo especial de variável aleatória que combina características tanto das variáveis aleatórias discretas quanto contínuas. Mais precisamente, uma variável aleatória $X$ é considerada mista se ela pode ser expressa como a soma de uma variável aleatória discreta e uma variável aleatória contínua.

## Estrutura Matemática

Seja $X$ uma variável aleatória mista. Ela pode ser escrita na forma:
$$
X = X_d + X_c,
$$
onde:

- $X_d$ é uma variável aleatória discreta, que assume valores em um conjunto contável.
- $X_c$ é uma variável aleatória contínua, cuja distribuição tem uma função densidade de probabilidade (f.d.p.) definida.

A **função de distribuição acumulada** (f.d.a.) de $X$, denotada por $F_X(x)$, pode ser expressa como:
$$
F_X(x) = P(X \leq x) = P(X_d + X_c \leq x).
$$
### Exemplos

1. **Exemplo 1: Variável Aleatória com Componente Discreta e Contínua**

   Considere uma variável aleatória $X$ que representa o tempo de espera em um sistema, onde:

   - Com probabilidade $\frac{1}{3}$, o tempo é exatamente igual a 5 minutos.
   - Com probabilidade $\frac{2}{3}$, o tempo segue uma distribuição normal com média 10 minutos e desvio padrão 2 minutos.

   Neste caso:

   - $$

X_d = \begin{cases}

      5 & \text{com probabilidade } \frac{1}{3}, \\

      \infty & \text{com probabilidade } \frac{2}{3}.

   \end{cases}
$$
   - $X_c$ segue uma distribuição normal com média 10 e desvio padrão 2.

2. **Exemplo 2: Combinação de Distribuições**

   Considere a variável aleatória $Y$, que representa o tamanho de um determinado tipo de grão em um campo agrícola, onde:

   - Com probabilidade $\frac{1}{4}$, os grãos têm exatamente 5mm.
   - Com probabilidade $\frac{3}{4}$, os tamanhos seguem uma distribuição normal com média 6mm e desvio padrão 0.5mm.

   Aqui:

   -
$$
Y_d = \begin{cases}

      5 & \text{com probabilidade } \frac{1}{4}, \\

      \infty & \text{com probabilidade } \frac{3}{4}.

   \end{cases}
$$
   - $Y_c$ segue uma distribuição normal com média 6 e desvio padrão 0.5.

## Integração de Uma Variável Aleatória Mista

Para calcular a esperança (ou valor esperado) de uma variável aleatória mista, podemos usar a fórmula:
$$
E[X] = \sum_{x_d} x_d P(X = x_d) + \int_{-\infty}^{\infty} x_c f_X(x_c) \, dx_c,
$$
onde:

- $X_d$ são os valores discretos da variável aleatória.
- $P(X = x_d)$ é a probabilidade de $X$ assumir o valor $x_d$.
- $X_c$ é a variável aleatória contínua com função densidade de probabilidade (f.d.p.) $f_X(x_c)$.

### Exemplo 1: Variável Aleatória Com Componente Discreta e Contínua

Considere uma variável aleatória $X$ que representa o tempo de espera em um sistema, onde:

- Com probabilidade $\frac{1}{3}$, o tempo é exatamente igual a 5 minutos.
- Com probabilidade $\frac{2}{3}$, o tempo segue uma distribuição normal com média 10 minutos e desvio padrão 2 minutos.

Neste caso:

- $$

X_d = \begin{cases}

   5 & \text{com probabilidade } \frac{1}{3}, \\

   \infty & \text{com probabilidade } \frac{2}{3}.

\end{cases}
$$
A variável aleatória contínua $X_c$ segue uma distribuição normal com média $\mu = 10$ e desvio padrão $\sigma = 2$. A f.d.p. de $X_c$ é:
$$
f_X(x_c) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x_c - \mu)^2}{2\sigma^2}}.
$$
A esperança de $X$ pode ser calculada como:
$$
E[X] = 5 \cdot \frac{1}{3} + \int_{-\infty}^{\infty} x_c f_X(x_c) \, dx_c.
$$
Primeiro, calculemos a integral para a variável aleatória contínua $X_c$:
$$
\int_{-\infty}^{\infty} x_c f_X(x_c) \, dx_c = \int_{-\infty}^{\infty} x_c \cdot \frac{1}{2\sqrt{2\pi}} e^{-\frac{(x_c - 10)^2}{8}} \, dx_c.
$$
Usando a propriedade da distribuição normal, sabemos que:
$$
\int_{-\infty}^{\infty} x_c f_X(x_c) \, dx_c = \mu = 10.
$$
Portanto,
$$
E[X] = 5 \cdot \frac{1}{3} + 10 \cdot \frac{2}{3} = \frac{5}{3} + \frac{20}{3} = \frac{25}{3} \approx 8.33.
$$
### Exemplo 2: Combinação de Distribuições

Considere a variável aleatória $Y$ que representa o tamanho de um determinado tipo de grão em um campo agrícola, onde:

- Com probabilidade $\frac{1}{4}$, os grãos têm exatamente 5mm.
- Com probabilidade $\frac{3}{4}$, os tamanhos seguem uma distribuição normal com média 6mm e desvio padrão 0.5mm.

Neste caso:
$$
Y_d = \begin{cases}
   5 & \text{com probabilidade } \frac{1}{4}, \\
   \infty & \text{com probabilidade } \frac{3}{4}.

\end{cases}
$$
A variável aleatória contínua $Y_c$ segue uma distribuição normal com média $\mu = 6$ e desvio padrão $\sigma = 0.5$. A f.d.p. de $Y_c$ é:
$$
f_Y(y_c) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(y_c - \mu)^2}{2\sigma^2}}.
$$
A esperança de $Y$ pode ser calculada como:
$$
E[Y] = 5 \cdot \frac{1}{4} + \int_{-\infty}^{\infty} y_c f_Y(y_c) \, dy_c.
$$
Primeiro, calculemos a integral para a variável aleatória contínua $Y_c$:
$$
\int_{-\infty}^{\infty} y_c f_Y(y_c) \, dy_c = \int_{-\infty}^{\infty} y_c \cdot \frac{1}{0.5\sqrt{2\pi}} e^{-\frac{(y_c - 6)^2}{0.5}} \, dy_c.
$$
Usando a propriedade da distribuição normal, sabemos que:
$$
\int_{-\infty}^{\infty} y_c f_Y(y_c) \, dy_c = \mu = 6.
$$
Portanto,
$$
E[Y] = 5 \cdot \frac{1}{4} + 6 \cdot \frac{3}{4} = \frac{5}{4} + \frac{18}{4} = \frac{23}{4} = 5.75.
$$