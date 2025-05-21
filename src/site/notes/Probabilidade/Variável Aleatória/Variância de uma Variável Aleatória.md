---
{"dg-publish":true,"permalink":"/probabilidade/variavel-aleatoria/variancia-de-uma-variavel-aleatoria/","created":"2025-05-20T13:30:13.857-03:00"}
---


A variância é uma medida fundamental na teoria das probabilidades e estatística, usada para quantificar a dispersão ou variabilidade dos valores que uma variável aleatória pode assumir. Ela fornece informações sobre a "dispersão" dos dados em relação à média.

## Definição

A variância de uma variável aleatória $X$, denotada por $\text{Var}(X)$ ou $\sigma^2_X$, é definida como:

$$
\text{Var}(X) = E[(X - \mu)^2]
$$

onde:

- $E[\cdot]$ representa a esperança matemática,
- $\mu$ é a média (esperança matemática) da variável aleatória $X$.

## Interpretando a Variância

A variância é sempre não negativa, e seu valor zero indica que todos os valores da variável são iguais à sua média. A unidade de medida da variância é o quadrado da unidade de medida dos dados originais.

### Exemplo 1: Variância de Uma Variável Discreta

Considere a variável aleatória discreta $X$ com valores possíveis $\{x_1, x_2, \ldots, x_n\}$ e probabilidades correspondentes $\{p_1, p_2, \ldots, p_n\}$. A variância de $X$ é:

$$
\text{Var}(X) = \sum_{i=1}^{n} p_i (x_i - \mu)^2
$$

### Exemplo 2: Variância de Uma Variável Contínua

Para uma variável aleatória contínua $X$ com função densidade de probabilidade $f(x)$, a variância é:

$$
\text{Var}(X) = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) \, dx
$$

## Relação com o Desvio Padrão

O desvio padrão ($\sigma_X$) é a raiz quadrada da variância:

$$
\sigma_X = \sqrt{\text{Var}(X)}
$$

## Propriedades da Variância

1. **Propriedade Linear**: Se $a$ e $b$ sã constantes, então:
$$
   \text{Var}(a + bX) = a^2 \cdot \text{Var}(X)
$$
2. **Propriedade de Soma**: Para duas variáveis aleatórias independentes $X$ e $Y$:
$$
   \text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)
$$
3. **Propriedade de Produto (para variáveis independentes)**:
$$
   \text{Var}(XY) = E(X^2)E(Y^2) - [E(X)E(Y)]^2
$$
