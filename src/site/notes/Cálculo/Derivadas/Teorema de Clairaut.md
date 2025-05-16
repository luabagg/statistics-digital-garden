---
{"dg-publish":true,"permalink":"/Cálculo/Derivadas/Teorema de Clairaut/","dgPassFrontmatter":true,"created":"2025-04-28T09:24:36.013-03:00"}
---

O Teorema de Clairaut, também conhecido como Teorema da Derivada Parcial Interna, é um resultado fundamental na teoria das funções de várias variáveis. Este teorema estabelece que, sob certas condições, as derivadas parciais mistas de uma função são iguais independentemente do caminho pela qual se deriva.

Consideremos uma função $f(x,y)$ de duas variáveis. Se as derivadas parciais mistas $\frac{\partial^2 f}{\partial x \partial y}$ e $\frac{\partial^2 f}{\partial y \partial x}$ existem e são contínuas em um determinado ponto $(a,b)$, então essas derivadas são iguais no ponto:

$$
\frac{\partial^2 f}{\partial x \partial y}(a,b) = \frac{\partial^2 f}{\partial y \partial x}(a,b)
$$

## Exemplo

Considere a função $f(x,y) = x^3y + 2xy - 5$. Vamos calcular as derivadas parciais mistas.

1. **Derivada parcial de $f$ com respeito a $y$:**

   $$ 
   \frac{\partial f}{\partial y} = x^3 + 2x
   $$

2. **Derivada parcial da expressão acima com respeito a $x$:**

   $$
   \frac{\partial^2 f}{\partial x \partial y} = 3x^2 + 2
   $$

3. **Derivada parcial de $f$ com respeito a $x$:**

   $$
   \frac{\partial f}{\partial x} = 3x^2y + 2y
   $$

4. **Derivada parcial da expressão acima com respeito a $y$:**

   $$
   \frac{\partial^2 f}{\partial y \partial x} = 3x^2 + 2
   $$

Como esperado, as derivadas parciais mistas são iguais:

$$
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}
$$

Este exemplo ilustra a aplicação prática do Teorema de Clairaut.
