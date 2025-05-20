---
{"dg-publish":true,"permalink":"/Cálculo/Derivadas/Plano Tangente/","dgPassFrontmatter":true,"created":"2025-04-28T09:37:47.102-03:00"}
---


O **plano tangente** é uma aplicação direta do cálculo diferencial. Ele representa um plano que toca (ou seja, é tangente) a uma superfície em um ponto específico.

## Definição Matemática

Seja $z = f(x, y)$ uma função de duas variáveis definida no ponto $(x_0, y_0, z_0)$. O plano tangente ao gráfico dessa função no ponto $(x_0, y_0, z_0)$ é dado por:
$$
z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)
$$
## Derivadas Parciais

- $f_x(x_0, y_0)$ é a derivada parcial de $f$ em relação a $x$, avaliada no ponto $(x_0, y_0)$.
- $f_y(x_0, y_0)$ é a derivada parcial de $f$ em relação a $y$, avaliada no ponto $(x_0, y_0)$.

## Exemplo

Considere a função $z = x^2 + y^2$. Para encontrar o plano tangente nesse ponto, precisamos calcular as derivadas parciais:
$$
f_x(x, y) = 2x \quad \text{e} \quad f_y(x, y) = 2y
$$
No ponto $(1, 1, 2)$ (pois $z = 1^2 + 1^2 = 2$), temos:
$$
f_x(1, 1) = 2 \quad \text{e} \quad f_y(1, 1) = 2
$$
Portanto, o plano tangente é dado por:
$$
z - 2 = 2(x - 1) + 2(y - 1)
$$
Simplificando, obtemos:
$$
z = 2x + 2y - 2
$$
## Equações Diferenciais E Derivadas Implícitas

### Equação Diferencial Implícita

Uma equação diferencial implícita é uma relação entre as variáveis $x$, $y$ e suas derivadas, que não pode ser facilmente resolvida para a função $y(x)$.

### Exemplo De Derivada Implícita

Considere a equação:
$$
x^2 + y^2 = 1
$$
Para encontrar $\frac{dy}{dx}$, usamos a regra da cadeia e derivamos ambos os lados com respeito a $x$:
$$
\frac{d}{dx}(x^2) + \frac{d}{dx}(y^2) = \frac{d}{dx}(1)
$$
Aplicando as regras de derivação, obtemos:
$$
2x + 2y \frac{dy}{dx} = 0
$$
Resolvendo para $\frac{dy}{dx}$, temos:
$$
\frac{dy}{dx} = -\frac{x}{y}
$$
### Aplicação Ao Plano Tangente

Para encontrar o plano tangente a uma superfície definida implicitamente, usamos as derivadas implícitas. Seja $F(x, y, z) = 0$ a equação da superfície. O gradiente de $F$, $\nabla F$, é normal ao plano tangente no ponto $(x_0, y_0, z_0)$.

O vetor normal ao plano tangente é:
$$
\nabla F(x_0, y_0, z_0) = \left( \frac{\partial F}{\partial x}, \frac{\partial F}{\partial y}, \frac{\partial F}{\partial z} \right)
$$
O plano tangente pode então ser escrito como:
$$
\frac{\partial F}{\partial x}(x_0, y_0, z_0)(x - x_0) + \frac{\partial F}{\partial y}(x_0, y_0, z_0)(y - y_0) + \frac{\partial F}{\partial z}(x_0, y_0, z_0)(z - z_0) = 0
$$