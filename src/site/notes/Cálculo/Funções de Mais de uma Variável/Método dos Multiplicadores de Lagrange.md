---
{"dg-publish":true,"permalink":"/Cálculo/Funções de Mais de uma Variável/Método dos Multiplicadores de Lagrange/","created":"2025-05-20T13:30:13.829-03:00"}
---


## Introdução ao Método dos Multiplicadores de Lagrange

O Método dos Multiplicadores de Lagrange é uma técnica utilizada em cálculo para encontrar extremos (máximos ou mínimos) de uma função sujeita a restrições. Este método é especialmente útil quando se deseja otimizar uma função multivariável com condições restritivas.

### Formulando o Problema

Considere uma função $f(x_1, x_2, \ldots, x_n)$ que queremos maximizar ou minimizar sujeita a uma restrição $g(x_1, x_2, \ldots, x_n) = c$. O problema pode ser formulado como:
$$
\text{Maximizar/Minimizar } f(x_1, x_2, \ldots, x_n)
$$
sujeto a
$$
g(x_1, x_2, \ldots, x_n) = c.
$$
### Definição Do Método

O método consiste em introduzir um novo parâmetro, chamado multiplicador de Lagrange ($\lambda$), e formar uma nova função, conhecida como função auxiliar:
$$
L(x_1, x_2, \ldots, x_n, \lambda) = f(x_1, x_2, \ldots, x_n) - \lambda (g(x_1, x_2, \ldots, x_n) - c).
$$
### Encontrando Os Extremos

Para encontrar os extremos da função $f$ sujeita à restrição $g$, devemos resolver o sistema de equações:
$$
\begin{align*}

\frac{\partial L}{\partial x_i} &= 0, \quad i = 1, 2, \ldots, n \\

\frac{\partial L}{\partial \lambda} &= 0.

\end{align*}
$$
Essas equações são conhecidas como as condições de Lagrange e fornecem os pontos críticos do problema.

### Exemplo

Considere o seguinte exemplo: maximizar a função $f(x, y) = x^2 + y^2$ sujeita à restrição $g(x, y) = x + y - 1 = 0$. A função auxiliar é:
$$
L(x, y, \lambda) = x^2 + y^2 - \lambda (x + y - 1).
$$
As condições de Lagrange são:
$$
\begin{align*}

\frac{\partial L}{\partial x} &= 2x - \lambda = 0 \\

\frac{\partial L}{\partial y} &= 2y - \lambda = 0 \\

\frac{\partial L}{\partial \lambda} &= -(x + y - 1) = 0.

\end{align*}
$$
Resolvendo esse sistema, obtemos:
$$
2x = \lambda, \quad 2y = \lambda, \quad x + y = 1.
$$
Substituindo $\lambda$ em $2x = \lambda$ e $2y = \lambda$, temos $2x = 2y$, ou seja, $x = y$. Substituindo em $x + y = 1$, obtemos:
$$
2x = 1 \implies x = \frac{1}{2}, \quad y = \frac{1}{2}.
$$
Portanto, o ponto crítico é $(\frac{1}{2}, \frac{1}{2})$.

### Aplicações

O Método dos Multiplicadores de Lagrange tem diversas aplicações em áreas como economia, física e engenharia. Por exemplo, pode ser usado para determinar a configuração ótima de um sistema com restrições, como o dimensionamento de uma estrutura ou a alocação de recursos.
