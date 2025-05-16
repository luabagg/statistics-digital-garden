---
{"dg-publish":true,"permalink":"/Métodos Numéricos/Resolução de Sistemas Lineares/Teorema Condição Suficiente de Converência do Método de Gauss-Jacobi/","dgPassFrontmatter":true,"created":"2025-04-25T10:55:38.405-03:00"}
---


O método de Gauss-Jacobi é uma técnica iterativa utilizada para resolver sistemas lineares da forma:

$$

A\mathbf{x} = \mathbf{b}

$$

onde $A$ é uma matriz quadrada de ordem $n$, $\mathbf{b}$ é o vetor dos termos independentes, e $\mathbf{x}$ é o vetor incógnita que queremos determinar.

## Ideia Do Método

A partir da decomposição da matriz $A$ em três componentes:

- $D$: matriz diagonal de $A$
- $L$: parte inferior (triangular) de $A$ com sinal negativo
- $U$: parte superior (triangular) de $A$ com sinal negativo

Podemos reescrever:

$$

A = D + L + U

$$

A fórmula iterativa do método de Gauss-Jacobi é:

$$

\mathbf{x}^{(k+1)} = D^{-1}(-L - U)\mathbf{x}^{(k)} + D^{-1}\mathbf{b}

$$

## Condição Suficiente De Convergência

Uma condição suficiente para garantir a convergência do método é que a matriz $A$ seja **diagonal dominante**, ou seja:

$$

|a_{ii}| > \sum_{j \neq i} |a_{ij}|

$$

para todo $i = 1, 2, \dots, n$.

Se essa condição for satisfeita, o método de Gauss-Jacobi converge para a solução do sistema, independentemente da escolha do vetor inicial $\mathbf{x}^{(0)}$.

## Norma Matricial E Condição Necessária

Outra forma de analisar a convergência do método é usando a norma matricial. Seja:

$$

T = D^{-1}(L + U)

$$

O método converge se a **norma** de $T$ for estritamente menor que 1:

$$

|T| < 1

$$

Uma norma comum utilizada é a norma infinita (ou norma do máximo):

$$

|T|_\infty = \max_{1 \leq i \leq n} \sum_{j=1}^n |t_{ij}|

$$

Se $|T|_\infty < 1$, o método converge. Isso é uma **condição suficiente**, mas não necessária. De forma mais geral, a **condição necessária e suficiente** é que o **raio espectral** da matriz $T$ seja menor que 1:

$$

\rho(T) = \max_i |\lambda_i(T)| < 1

$$

onde $\lambda_i(T)$ são os autovalores da matriz $T$.

## Exemplo 1

Considere o sistema linear:

$$

\begin{cases}

2x_1 + x_2 - x_3 = 5 \

-x_1 + 4x_2 + x_3 = 7 \

x_1 - x_2 + 6x_3 = 8

\end{cases}

$$

A matriz $A$ e o vetor $\mathbf{b}$ são:

$$

A = \begin{pmatrix}

2 & 1 & -1 \

-1 & 4 & 1 \

1 & -1 & 6

\end{pmatrix}, \quad

\mathbf{b} = \begin{pmatrix}

5 \

7 \

8

\end{pmatrix}

$$

Verificando a diagonal dominância:

- $|2| > |1| + |-1| \Rightarrow 2 > 2$ (falso)
- $|4| > |-1| + |1| \Rightarrow 4 > 2$ (verdadeiro)
- $|6| > |1| + |-1| \Rightarrow 6 > 2$ (verdadeiro)

A matriz não é estritamente diagonal dominante na primeira linha, mas o método pode ainda assim convergir dependendo do raio espectral de $T$.

## Exemplo 2

Considere o sistema:

$$

\begin{cases}

2x_1 - x_2 = 1 \

-x_1 + 3x_2 - x_3 = 2 \

-2x_2 + 4x_3 = 3

\end{cases}

$$

Neste caso:

$$

A = \begin{pmatrix}

2 & -1 & 0 \

-1 & 3 & -1 \

0 & -2 & 4

\end{pmatrix}, \quad

\mathbf{b} = \begin{pmatrix}

1 \

2 \

3

\end{pmatrix}

$$

As matrizes $D$, $L$ e $U$ são:

$$

D = \begin{pmatrix}

2 & 0 & 0 \

0 & 3 & 0 \

0 & 0 & 4

\end{pmatrix}

$$

$$

L = \begin{pmatrix}

0 & 0 & 0 \

-1 & 0 & 0 \

0 & -2 & 0

\end{pmatrix}, \quad

U = \begin{pmatrix}

0 & -1 & 0 \

0 & 0 & -1 \

0 & 0 & 0

\end{pmatrix}

$$

Calculando $T = D^{-1}(L + U)$, é possível verificar se a norma é menor que 1 e garantir a convergência.

## Critérios Práticos De Parada

Na prática, a convergência do método é controlada por um critério de parada, como:

1. Erro absoluto entre iterações:

$$

|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}| < \varepsilon

$$

1. Erro residual:

$$

|\mathbf{b} - A\mathbf{x}^{(k)}| < \varepsilon

$$

onde $\varepsilon$ é uma tolerância previamente estabelecida.
