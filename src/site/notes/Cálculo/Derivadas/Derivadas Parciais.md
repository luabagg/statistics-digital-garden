---
{"dg-publish":true,"permalink":"/Cálculo/Derivadas/Derivadas Parciais/","created":"2025-05-20T13:30:13.825-03:00"}
---


Derivadas parciais permitem a análise de funções com múltiplas variáveis, permitindo estudar como uma função muda quando apenas uma das suas variáveis é alterada, mantendo as outras constantes.

Consideremos uma função $f(x, y)$ que depende de duas variáveis, $x$ e $y$. A derivada parcial de $f$ com respeito a $x$, denotada por $\frac{\partial f}{\partial x}$, representa o ritmo de mudança da função em relação à variável $x$, considerando que $y$ é mantido constante. Analogamente, a derivada parcial com respeito a $y$, denotada por $\frac{\partial f}{\partial y}$, mede como a função muda quando $y$ varia e $x$ permanece inalterado.

Por exemplo, considere a função $f(x, y) = x^2 + 3xy - 4y^2$. A derivada parcial de $f$ com respeito a $x$ é:

$$
\frac{\partial f}{\partial x} = 2x + 3y.
$$

Aqui, observamos que a variável $y$ é tratada como uma constante durante o cálculo da derivada parcial.

Analogamente, a derivada parcial de $f$ com respeito a $y$ é:

$$
\frac{\partial f}{\partial y} = 3x - 8y.
$$

Neste caso, $x$ é considerado constante durante o cálculo da derivada parcial.

## Regra Geral

Quando você deriva uma função $f(x, y, z, \ldots)$ em relação a uma variável (por exemplo, $x$), **as outras são tratadas como constantes**.

### Derivada Parcial com Respeito a $x$

A derivada parcial de $f$ com respeito a $x$, denotada por $\frac{\partial f}{\partial x}$, representa o ritmo de mudança da função no sentido do eixo $x$. Geometricamente, ela pode ser interpretada como a inclinação da reta tangente ao gráfico de $f$ na direção paralela ao plano $y = c$, onde $c$ é uma constante. Em outras palavras, se você fixar um valor para $y$, a derivada parcial $\frac{\partial f}{\partial x}$ mede como a função varia quando $x$ muda.

**Exemplo:**
Considere a função $f(x, y) = x^2 + y^2$. A derivada parcial com respeito a $x$ é:
$$
\frac{\partial f}{\partial x} = 2x.
$$

Se fixarmos $y = 1$, a função reduz-se a uma curva no plano $y = 1$:

$$
f(x, 1) = x^2 + 1,
$$

e a derivada parcial $\frac{\partial f}{\partial x}\bigg|_{y=1} = 2x$ descreve a inclinação dessa curva no ponto de abscissa $x$.

### Derivada Parcial com Respeito a $y$

Analogamente, a derivada parcial de $f$ com respeito a $y$, denotada por $\frac{\partial f}{\partial y}$, representa o ritmo de mudança da função no sentido do eixo $y$. Geometricamente, ela é a inclinação da reta tangente ao gráfico de $f$ na direção paralela ao plano $x = c$.

**Exemplo:**
Continuando com a função $f(x, y) = x^2 + y^2$, a derivada parcial com respeito a $y$ é:
$$
\frac{\partial f}{\partial y} = 2y.
$$

Se fixarmos $x = 1$, a função reduz-se a uma curva no plano $x = 1$:

$$
f(1, y) = 1 + y^2,
$$

e a derivada parcial $\frac{\partial f}{\partial y}\bigg|_{x=1} = 2y$ descreve a inclinação dessa curva no ponto de ordenada $y$.

### Derivadas Parciais e Superfícies

A combinação das derivadas parciais pode fornecer informações sobre o comportamento geral da superfície. Por exemplo, o gradiente de uma função multivariável é um vetor que contém as derivadas parciais em cada direção.

**Exemplo:**
Para a função $f(x, y) = x^2 + y^2$, o gradiente é:
$$
\nabla f = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right) = (2x, 2y).
$$

### Aplicações Práticas

Derivadas parciais são fundamentais em diversas áreas da ciência e engenharia. Por exemplo, na física, elas podem ser usadas para modelar a velocidade de um objeto em movimento no espaço multidimensional; na economia, para analisar como mudanças nas variáveis econômicas afetam o custo ou a receita.

Essa interpretação geométrica ajuda a visualizar e compreender melhor as funções multivariáveis e suas propriedades.

---

## Exemplo 1: Função Simples com Duas Variáveis

Seja:

	$f(x, y) = x^2 y + 4y^3$

### Derivada Parcial em Relação a $x$

$$
\frac{\partial f}{\partial x} = \frac{\partial}{\partial x} (x^2 y + 4y^3)
$$
- y é constante, então:
- $x^2 y \rightarrow \text{deriva como } 2xy$
- $4y^3 \rightarrow \text{deriva como } 0$ (constante em x)

**Resultado:**
$$
\frac{\partial f}{\partial x} = 2xy
$$

### Derivada Parcial em Relação a $y$

$$
\frac{\partial f}{\partial y} = \frac{\partial}{\partial y} (x^2 y + 4y^3)
$$
- $x^2$ é constante agora
- $x^2 y \rightarrow x^2$
- $4y^3 \rightarrow 12y^2$

**Resultado:**
$$
\frac{\partial f}{\partial y} = x^2 + 12y^2
$$
