---
{"dg-publish":true,"permalink":"/Cálculo/Integrais/Soma de Riemann/","created":"2025-05-21T07:58:46.060-03:00"}
---


## Soma de Riemann

A **soma de Riemann** é um método fundamental na teoria da integral, utilizado para aproximar a área sob uma curva. É especialmente útil em cálculo multivariável.

![](/img/user/Cálculo/Integrais/_attachments/soma-de-riemann.webp)

### Definição e Intuição

A soma de Riemann consiste em dividir o domínio de integração em subintervalos pequenos e calcular a soma das áreas dos retângulos formados por esses subintervalos. A ideia é que, à medida que os subintervalos se tornam mais finos, a soma dessas áreas se aproxima cada vez mais da área real sob a curva.

### Funções de Uma Variável

Para uma função $f(x)$ definida em um intervalo $[a, b]$, a soma de Riemann pode ser expressa como:

$$
\sum_{i=1}^{n} f(x_i^*) \Delta x
$$

onde:

- $\Delta x = \frac{b-a}{n}$ é o comprimento do subintervalo,
- $x_i^*$ é um ponto no $i$-ésimo subintervalo.

**Exemplo:**

Considere a função $f(x) = x^2$ em $[0, 1]$. Dividamos este intervalo em 4 subintervalos iguais:

$$
\Delta x = \frac{1-0}{4} = 0.25
$$

Os pontos de divisão são: $x_1=0.25$, $x_2=0.5$, $x_3=0.75$, e $x_4=1$. Se escolhemos os pontos médios como $x_i^*$, temos:

- $f(0.125) = 0.015625$
- $f(0.375) = 0.140625$
- $f(0.625) = 0.390625$
- $f(0.875) = 0.765625$

A soma de Riemann é:

$$
S_4 = \sum_{i=1}^{4} f(x_i^*) \Delta x = (0.015625 + 0.140625 + 0.390625 + 0.765625) \cdot 0.25 = 0.3125
$$

### Funções de Duas Variáveis

Para funções de duas variáveis, a soma de Riemann é estendida para volumes sob superfícies em $\mathbb{R}^3$. Considere uma função $f(x, y)$ definida sobre um retângulo $[a, b] \times [c, d]$.

A soma de Riemann pode ser escrita como:

$$
\sum_{i=1}^{m} \sum_{j=1}^{n} f(x_i^*, y_j^*) \Delta x \Delta y
$$

onde:

- $\Delta x = \frac{b-a}{m}$ e $\Delta y = \frac{d-c}{n}$ são os comprimentos dos subintervalos,
- $(x_i^*, y_j^*)$ é um ponto no $i$-ésimo subintervalo em $x$ e $j$-ésimo subintervalo em $y$.

**Exemplo:**

Considere a função $f(x, y) = xy$ sobre o retângulo $[0, 1] \times [0, 1]$. Dividamos este retângulo em 4 subretângulos iguais:

$$
\Delta x = \frac{1-0}{2} = 0.5, \quad \Delta y = \frac{1-0}{2} = 0.5
$$

Os pontos de divisão são: $x_1=0.25$, $x_2=0.75$ e $y_1=0.25$, $y_2=0.75$. Se escolhemos os pontos médios como $(x_i^*, y_j^*)$, temos:

- $f(0.375, 0.375) = 0.140625$
- $f(0.875, 0.375) = 0.328125$
- $f(0.375, 0.875) = 0.328125$
- $f(0.875, 0.875) = 0.765625$

A soma de Riemann é:

$$
S_4 = \sum_{i=1}^{2} \sum_{j=1}^{2} f(x_i^*, y_j^*) \Delta x \Delta y = (0.140625 + 0.328125 + 0.328125 + 0.765625) \cdot 0.25 \cdot 0.25 = 0.1875
$$

Esses exemplos ilustram como a soma de Riemann pode ser aplicada tanto para funções de uma variável quanto para funções de duas variáveis, aproximando áreas e volumes respectivamente.
