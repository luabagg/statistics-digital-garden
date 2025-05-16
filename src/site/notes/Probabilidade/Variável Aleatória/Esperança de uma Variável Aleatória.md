---
{"dg-publish":true,"permalink":"/Probabilidade/Variável Aleatória/Esperança de uma Variável Aleatória/","dgPassFrontmatter":true,"created":"2025-03-27T11:21:13.320-03:00"}
---

Seja $X$ uma variável aleatória discreta com função de probabilidade $P_X(x)$, a esperança (ou média, ou valor esperado) de $X$ é definida como

$$


E(X) = \sum_{x \in \mathrm{Im}(X)} x.P(X=x)


$$

onde $\mathrm{Im}(X)$ representa o conjunto de todos os valores possíveis que a variável aleatória $X$ pode assumir. Esta fórmula calcula a soma ponderada dos valores possíveis de $X$, onde cada valor é multiplicado pela sua respectiva probabilidade.

Por exemplo, considere uma v.a. discreta $X$ que representa o número de caras ao lançar duas moedas justas. As possíveis saídas são: 0 caras (ambas coroas), 1 cara (uma cara e outra coroa), ou 2 caras (ambas caras). A função de probabilidade para cada resultado é:

$$


P(X=0) = \frac{1}{4}, \quad P(X=1) = \frac{1}{2}, \quad P(X=2) = \frac{1}{4}


$$

A esperança $E(X)$ pode ser calculada como:

$$


E(X) = 0 \cdot P(X=0) + 1 \cdot P(X=1) + 2 \cdot P(X=2)


$$

$$


E(X) = 0 \cdot \frac{1}{4} + 1 \cdot \frac{1}{2} + 2 \cdot \frac{1}{4}


$$

$$


E(X) = 0 + \frac{1}{2} + \frac{1}{2} = 1


$$

Portanto, a esperança da v.a. $X$ neste exemplo é 1.

## Esperança De Funções De Variáveis Aleatórias Discretas

Agora que entendemos como calcular a esperança de uma variável aleatória discreta, vamos explorar como calcular a esperança de uma função dessa variável. Seja $g(X)$ uma função qualquer definida em $\mathrm{Im}(X)$. A esperança da função $g(X)$ é dada por:

$$
E(g(X)) = \sum_{x \in \mathrm{Im}(X)} g(x).P_X(x)
$$

Esta fórmula indica que a esperança de uma função de variável aleatória é a soma ponderada dos valores da função $g$ em cada possível valor de $X$, onde os pesos são as respectivas probabilidades.

### Exemplo: Função Quadrática

Considere o mesmo exemplo anterior, onde $X$ representa o número de caras ao lançar duas moedas justas. Agora, vamos calcular a esperança da função quadrática $g(X) = X^2$. As possíveis saídas e suas probabilidades são:

$$
P(X=0) = \frac{1}{4}, \quad P(X=1) = \frac{1}{2}, \quad P(X=2) = \frac{1}{4}
$$

A esperança de $g(X)$ pode ser calculada como:

$$
E(g(X)) = E(X^2) = 0^2 \cdot P(X=0) + 1^2 \cdot P(X=1) + 2^2 \cdot P(X=2)
$$

Substituindo os valores, temos:

$$
E(X^2) = 0^2 \cdot \frac{1}{4} + 1^2 \cdot \frac{1}{2} + 2^2 \cdot \frac{1}{4}
$$

$$
E(X^2) = 0 + \frac{1}{2} + \frac{4}{4} = \frac{1}{2} + 1 = \frac{3}{2}
$$

Portanto, a esperança da função quadrática $g(X) = X^2$ neste exemplo é $\frac{3}{2}$.

### Propriedades Importantes

1. **Linearidade**: A esperança é uma operação linear, ou seja,

   $$
   E(aX + b) = aE(X) + b \quad \text{para constantes } a \text{ e } b.
   $$

2. **Esperança de Função Constante**: Se $g(X) = c$ (uma constante), então

   $$
   E(g(X)) = E(c) = c.
   $$

3. **Esperança da Variável Aleatória Elevada ao Quadrado**:

   $$
   \mathrm{Var}(X) = E(X^2) - [E(X)]^2,
   $$

   onde $\mathrm{Var}(X)$ é a variância de $X$.

Estas propriedades são úteis para simplificar cálculos e entender melhor as relações entre diferentes funções de variáveis aleatórias.

## Esperança De Variáveis Aleatórias Contínuas

Agora que você já tem uma boa compreensão da esperança para variáveis aleatórias discretas, vamos explorar como calcular a esperança para variáveis aleatórias contínuas. As ideias são semelhantes, mas agora envolvem integrais em vez de somas.

### Definição

A esperança (ou valor esperado) de uma variável aleatória contínua $X$ com função de densidade de probabilidade $f_X(x)$ é dada por:

$$


E(X) = \int_{-\infty}^{\infty} x f_X(x) \, dx


$$

Essa integral representa a soma ponderada dos valores possíveis de $X$, onde os pesos são as respectivas densidades de probabilidade.

### Exemplo: Variável Aleatória Uniforme

Considere uma variável aleatória contínua $X$ que segue uma distribuição uniforme no intervalo $[0, 1]$. A função de densidade de probabilidade é:

$$


f_X(x) = 

\begin{cases} 

1 & \text{se } 0 \leq x \leq 1 \\

0 & \text{caso contrário}

\end{cases}


$$

A esperança $E(X)$ pode ser calculada como:

$$


E(X) = \int_{-\infty}^{\infty} x f_X(x) \, dx


$$

Como $f_X(x) = 0$ fora do intervalo $[0, 1]$, a integral simplifica para:

$$


E(X) = \int_{0}^{1} x \cdot 1 \, dx = \int_{0}^{1} x \, dx


$$

Calculando o integral:

$$


E(X) = \left[ \frac{x^2}{2} \right]_0^1 = \frac{1^2}{2} - \frac{0^2}{2} = \frac{1}{2}


$$

Portanto, a esperança da variável aleatória $X$ é $\frac{1}{2}$.

## Esperança De Funções De Variáveis Aleatórias Contínuas

Agora vamos calcular a esperança de uma função $g(X)$ de uma variável aleatória contínua $X$. Se $g(X)$ for uma função qualquer, a esperança é dada por:

$$


E(g(X)) = \int_{-\infty}^{\infty} g(x) f_X(x) \, dx


$$

### Exemplo: Função Quadrática

Considere novamente a variável aleatória $X$ que segue uma distribuição uniforme no intervalo $[0, 1]$. Vamos calcular a esperança da função quadrática $g(X) = X^2$.

A função de densidade de probabilidade é:

$$


f_X(x) = 

\begin{cases} 

1 & \text{se } 0 \leq x \leq 1 \\

0 & \text{caso contrário}

\end{cases}


$$

A esperança $E(X^2)$ pode ser calculada como:

$$


E(X^2) = \int_{-\infty}^{\infty} x^2 f_X(x) \, dx


$$

Como $f_X(x) = 0$ fora do intervalo $[0, 1]$, a integral simplifica para:

$$


E(X^2) = \int_{0}^{1} x^2 \cdot 1 \, dx = \int_{0}^{1} x^2 \, dx


$$

Calculando o integral:

$$


E(X^2) = \left[ \frac{x^3}{3} \right]_0^1 = \frac{1^3}{3} - \frac{0^3}{3} = \frac{1}{3}


$$

Portanto, a esperança da função quadrática $g(X) = X^2$ é $\frac{1}{3}$.

## Propriedades Importantes

As propriedades importantes da esperança para variáveis aleatórias contínuas são as mesmas das discretas:

1. **Linearidade**: A esperança é uma operação linear, ou seja,

   $$


   E(aX + b) = aE(X) + b \quad \text{para constantes } a \text{ e } b.

$$


2. **Esperança de Função Constante**: Se $g(X) = c$ (uma constante), então

   $$

   E(g(X)) = E(c) = c.

$$

3. **Relação com Variância**:

   $$

   E(X^2) - [E(X)]^2 = \text{Var}(X)

$$

   Onde $\text{Var}(X)$ é a variância de $X$.

Essas propriedades permitem calcular a variância de uma variável aleatória contínua, que é um conceito importante em estatística e probabilidade.

### Resumo

- **Discreta**: 
  $$

  E(X) = \sum_{x} x f_X(x)

$$
  $$

  E(g(X)) = \sum_{x} g(x) f_X(x)

$$

- **Contínua**:
  $$

  E(X) = \int_{-\infty}^{\infty} x f_X(x) \, dx

$$
  $$

  E(g(X)) = \int_{-\infty}^{\infty} g(x) f_X(x) \, dx

$$

Qualquer dúvida ad
