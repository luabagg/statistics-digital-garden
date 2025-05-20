---
{"dg-publish":true,"permalink":"/Métodos Numéricos/Resolução de Sistemas Lineares/Método de Gauss-Seidel/","created":"2025-05-20T13:30:13.844-03:00"}
---


O método iterativo de Gauss-Seidel é uma técnica utilizada para resolver sistemas lineares de equações do tipo $Ax = b$, onde $A$ é uma matriz quadrada, $x$ e $b$ são vetores. Este método é especialmente útil quando a matriz $A$ é grande e esparsa.

## Formulando o Método

Considere um sistema linear $Ax = b$. A matriz $A$ pode ser decomposta em sua forma triangular superior $U$ e inferior $L$, onde $A = L + D + U^T$, com $D$ sendo a diagonal de $A$. O método Gauss-Seidel é baseado na seguinte iteração:
$$
x^{(k+1)}_i = \frac{1}{a_{ii}} \left(b_i - \sum_{j=1}^{i-1} a_{ij} x_j^{(k+1)} - \sum_{j=i+1}^n a_{ij} x_j^{(k)}\right)
$$
Aqui, $x^{(k)}$ representa o vetor de soluções no $k$-ésimo passo. A iteração é realizada até que as diferenças entre os valores das soluções em duas iterações consecutivas sejam menores do que um valor tolerância pré-definido.

### Exemplo

Considere o sistema linear:
$$
\begin{cases}
2x_1 + x_2 - x_3 = 8 \\
-3x_1 + 5x_2 + 2x_3 = -1 \\
x_1 - 2x_2 + 4x_3 = 7
\end{cases}
$$
A matriz $A$ e o vetor $b$ são:
$$
A = \begin{pmatrix}
2 & 1 & -1 \\
-3 & 5 & 2 \\
1 & -2 & 4
\end{pmatrix}, \quad b = \begin{pmatrix} 8 \\ -1 \\ 7 \end{pmatrix}
$$
A decomposição de $A$ em $L$, $D$, e $U^T$ é:
$$
L = \begin{pmatrix}
0 & 0 & 0 \\
-3/2 & 0 & 0 \\
1/2 & -2/5 & 0
\end{pmatrix}, \quad D = \begin{pmatrix}
2 & 0 & 0 \\
0 & 5 & 0 \\
0 & 0 & 4
\end{pmatrix}, \quad U^T = \begin{pmatrix}
1/2 & -3/2 & 1 \\
-1 & 5 & 2 \\
-1 & 2 & 4
\end{pmatrix}
$$
A iteração inicial pode ser $x^{(0)} = (0, 0, 0)^T$. A iteração Gauss-Seidel é então realizada até convergência.

## Convergência e Aplicações

O método de Gauss-Seidel converge para a solução do sistema linear se a matriz $A$ satisfizer certas condições, como ser simétrica positiva definida ou ter uma norma spectral menor que 1. Este método é amplamente utilizado em aplicações práticas, como na resolução de problemas de equilíbrio de redes elétricas e na solução de sistemas de equações diferenciais parciais.

## Limitações

Um dos principais desafios do método Gauss-Seidel é a dependência da ordem das variáveis. A escolha inadequada pode levar a uma convergência muito lenta ou até mesmo não convergência. Além disso, o método requer a decomposição de $A$ em $L$, $D$, e $U^T$, que pode ser computacionalmente caro para matrizes grandes.
