---
{"dg-publish":true,"permalink":"/Probabilidade/Sigma-Álgebra/","dgPassFrontmatter":true,"created":"2025-03-22T17:02:11.167-03:00"}
---


Uma **sigma álgebra** (ou $\sigma$-álgebra) é um conceito fundamental na teoria da medida e probabilidade. Formalmente, uma sigma álgebra sobre um conjunto $X$ é uma coleção de subconjuntos de $X$, denotada por $\mathcal{F}$, que satisfaz as seguintes propriedades:

1. **$\emptyset \in \mathcal{F}$**: O conjunto vazio pertence à sigma álgebra.
2. **Se $A \in \mathcal{F}$, então $X \setminus A \in \mathcal{F}$**: Se um subconjunto estiver na sigma álgebra, seu complemento também deve estar presente.
3. **Se $\{A_n\}_{n=1}^{\infty}$ for uma sequência contável de elementos em $\mathcal{F}$, então $\bigcup_{n=1}^{\infty} A_n \in \mathcal{F}$**: A união contável de subconjuntos na sigma álgebra também deve estar presente.

## Exemplos

### Exemplo 1: Espaço Métrico

Considere o conjunto $X = [0, 1]$. Uma sigma álgebra sobre este conjunto pode ser a coleção de todos os subintervalos fechados e abertos em $[0, 1]$.

### Exemplo 2: Conjunto Finito

Seja $X = \{a, b, c\}$. A maior sigma álgebra possível é $\mathcal{P}(X) = \{\emptyset, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\}\}$.

## Aplicações

### Teoria Da Medida

As sigma álgebras são essenciais na definição de medidas. Uma medida $\mu$ é uma função que associa a cada conjunto em uma sigma álgebra um valor não negativo ou infinito, representado por:
$$
\mu: \mathcal{F} \to [0, +\infty]
$$
### Probabilidade

Em probabilidade, as sigma álgebras são usadas para definir eventos e suas probabilidades. Se $\Omega$ é o espaço amostral de um experimento aleatório, uma sigma álgebra sobre $\Omega$ define os eventos que podem ocorrer.
