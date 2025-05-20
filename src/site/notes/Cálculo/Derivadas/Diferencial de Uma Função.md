---
{"dg-publish":true,"permalink":"/Cálculo/Derivadas/Diferencial de Uma Função/","created":"2025-05-20T13:30:13.827-03:00"}
---


## Diferencial de Uma Função para Uma Variável

O diferencial de uma função $f(x)$ de uma variável é uma medida aproximada da mudança na função quando a variável independente sofre uma pequena variação. Matematicamente, o diferencial de $f$ em relação a $x$ é denotado por $df$ e está dado por:
$$
df = f'(x) \, dx
$$
Aqui, $f'(x)$ representa a derivada da função $f(x)$ com respeito à variável $x$, e $dx$ é uma pequena variação na variável $x$. O diferencial $df$ fornece uma aproximação linear do incremento da função $f$ quando $x$ sofre uma pequena mudança.

**Exemplo:**

Considere a função $f(x) = x^2 + 3x - 5$. A derivada desta função é:
$$
f'(x) = 2x + 3
$$
Portanto, o diferencial de $f$ em relação a $x$ é:
$$
df = (2x + 3) \, dx
$$
Se $x = 1$ e $dx = 0.1$, então:
$$
df = (2(1) + 3)(0.1) = 5(0.1) = 0.5
$$
## Diferencial de Uma Função para Duas Variáveis

Para funções com duas variáveis, o diferencial é uma generalização do conceito anterior. Considere a função $f(x, y)$ de duas variáveis. O diferencial de $f$ em relação às variáveis $x$ e $y$ é dado por:
$$
df = \frac{\partial f}{\partial x} \, dx + \frac{\partial f}{\partial y} \, dy
$$
Aqui, $\frac{\partial f}{\partial x}$ e $\frac{\partial f}{\partial y}$ são as derivadas parciais de $f$ com respeito a $x$ e $y$, respectivamente. $dx$ e $dy$ representam pequenas variações nas variáveis $x$ e $y$, respectivamente.

**Exemplo:**

Considere a função $f(x, y) = x^2 + 3xy - 4y^2$. As derivadas parciais são:
$$
\frac{\partial f}{\partial x} = 2x + 3y \quad \text{e} \quad \frac{\partial f}{\partial y} = 3x - 8y
$$
Portanto, o diferencial de $f$ é:
$$
df = (2x + 3y) \, dx + (3x - 8y) \, dy
$$
Se $x = 1$, $y = 2$, $dx = 0.1$, e $dy = 0.2$, então:
$$
\begin{align*}

df &= (2(1) + 3(2))(0.1) + (3(1) - 8(2))(0.2) \\

   &= (2 + 6)(0.1) + (3 - 16)(0.2) \\

   &= 8(0.1) + (-13)(0.2) \\

   &= 0.8 - 2.6 \\

   &= -1.8

\end{align*}
$$