---
{"dg-publish":true,"permalink":"/Probabilidade/Variável Aleatória/Funções de Variáveis Aleatórias/","dgPassFrontmatter":true,"created":"2025-05-20T13:30:13.854-03:00"}
---


Se $X$ é uma variável aleatória (va) definida em um espaço de probabilidade $\left(\Omega, \mathcal{F}, P\right)$, e $g: \mathbb{R} \rightarrow \mathbb{R}$ é uma função real, então a transformação $Y = g(X)$ também será uma variável aleatória.

## Transformação de Variáveis Aleatórias

A transformação $Y = g(X)$ é uma nova variável aleatória definida como:
$$
 Y(\omega) = g(X(\omega)) 
$$
para todo $\omega \in \Omega$. Isso significa que para cada evento $\omega$ no espaço amostral, a va $Y$ produz um valor real.

A transformação de uma variável aleatória (VA) pode ser analisada em dois contextos principais: quando a VA original é discreta e quando ela é contínua. Em ambos os casos, a transformação $Y = g(X)$ gera uma nova variável aleatória, mas a forma de determinar sua distribuição de probabilidade varia.

  Se $X$ é uma variável aleatória (va) definida em um espaço de probabilidade $(\Omega, \mathcal{F}, P)$, e $g: \mathbb{R} \rightarrow \mathbb{R}$ é uma função real, então a transformação $Y = g(X)$ também será uma variável aleatória.

A transformação $Y = g(X)$ é uma nova variável aleatória definida como:
$$
Y(\omega) = g(X(\omega))
$$
para todo $\omega \in \Omega$. Isso significa que para cada evento $\omega$ no espaço amostral, a va $Y$ produz um valor real.

### Caso Discreto

Se $X$ for uma variável aleatória discreta com valores possíveis $x_1, x_2, \dots$ e função de massa de probabilidade (pmf) $P(X = x_i) = p_i$, então a variável transformada $Y = g(X)$ terá uma distribuição discreta com valores possíveis $y_i = g(x_i)$ e probabilidades:
$$
P(Y = y_i) = P(X = x_i) = p_i
$$
se $g$ for injetora. Caso contrário, se houver valores distintos de $X$ que resultem no mesmo $Y$, devemos somar as probabilidades correspondentes:
$$
P(Y = y) = \sum_{x_i: g(x_i) = y} P(X = x_i)
$$
### Caso Contínuo

Se $X$ for uma variável aleatória contínua com função densidade de probabilidade (pdf) $f_X(x)$, então a densidade de $Y = g(X)$ pode ser obtida da seguinte forma:

Se $g$ for uma função monotônica diferenciável, a função densidade de $Y$ é dada por:
$$
f_Y(y) = f_X(x) \left| \frac{dx}{dy} \right|
$$
onde $x = g^{-1}(y)$.

Se $g$ não for monotônica, a densidade de $Y$ é obtida somando as contribuições de todas as raízes $x_i$ de $y = g(x)$:
$$
f_Y(y) = \sum_{x_i: g(x_i) = y} f_X(x_i) \left| \frac{dx}{dy} \right|_{x_i}
$$
#### Exemplo

Seja $X \sim \mathcal{N}(0,1)$ uma variável aleatória normal padrão e consideremos $Y = X^2$. A densidade de $Y$ pode ser obtida considerando as raízes $x = \pm\sqrt{y}$:
$$
f_Y(y) = f_X(\sqrt{y}) \left| \frac{d}{dy} \sqrt{y} \right| + f_X(-\sqrt{y}) \left| \frac{d}{dy} (-\sqrt{y}) \right|
$$
Substituindo $f_X(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}$:
$$
f_Y(y) = \frac{1}{\sqrt{2\pi}} \left( e^{-y/2} + e^{-y/2} \right) \frac{1}{2\sqrt{y}}
$$
para $y > 0$.
