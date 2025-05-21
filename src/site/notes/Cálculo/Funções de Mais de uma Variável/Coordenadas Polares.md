---
{"dg-publish":true,"permalink":"/calculo/funcoes-de-mais-de-uma-variavel/coordenadas-polares/","created":"2025-05-20T13:30:13.829-03:00"}
---


## 1. Conversão de Coordenadas Polares para Cartesianas

Se você tem um ponto $P$ em coordenadas polares representado por $(r, \theta)$, onde:

- $r$ é a **distância do ponto à origem**.
- $\theta$ é o **ângulo entre o eixo x e a reta que liga a origem ao ponto**, medido em radianos ou graus.

Então, para converter essas coordenadas polares em coordenadas cartesianas $(x, y)$, você pode usar as seguintes fórmulas:

$$
x = r \cos(\theta) 
$$

$$
y = r \sin(\theta)
$$

## 2. Conversão de Coordenadas Cartesianas para Polares

Se você tem um ponto $(x, y)$ em coordenadas cartesianas, as coordenadas polares $(r, \theta)$ podem ser encontradas usando:

$$
r = \sqrt{x^2 + y^2}
$$

$$
\theta = \tan^{-1}\left(\frac{y}{x}\right) \quad \text{(atenção ao quadrante!)}
$$
- O valor de $\theta$ precisa ser ajustado dependendo do quadrante onde o ponto está.
- Em Python, por exemplo, você pode usar a função `atan2(y, x)` para já considerar corretamente o quadrante.

## 3. Observação Importante

Em coordenadas polares, um mesmo ponto pode ser representado de várias formas. Por exemplo:

- $(r, \theta)$ e $(-r, \theta + \pi)$ representam o mesmo ponto.

Essa flexibilidade é uma característica importante das coordenadas polares, permitindo múltiplas representações para um único ponto no plano.
