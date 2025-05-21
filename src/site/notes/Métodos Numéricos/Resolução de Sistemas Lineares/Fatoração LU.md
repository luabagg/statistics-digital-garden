---
{"dg-publish":true,"permalink":"/Métodos Numéricos/Resolução de Sistemas Lineares/Fatoração LU/","created":"2025-05-20T13:30:13.842-03:00"}
---


## Fatoração Lu (Lower-Upper)

A **fatoração LU** é um método que decompõe uma matriz quadrada $A$ como o produto de duas matrizes triangulares:

$$
A = LU
$$

onde:

- $L$ é uma **matriz triangular inferior** com 1s na diagonal principal.
- $U$ é uma **matriz triangular superior**.

---

### Passo a Passo da Fatoração Lu (sem pivoteamento)

Seja $A$ uma matriz quadrada de ordem $n$.

#### **1. Inicialização**

- Crie uma matriz identidade $L$ de ordem $n$.
- Faça uma cópia da matriz $A$ e chame-a de $U$.

#### **2. Eliminação de Gauss para Formar $U$ e Preencher $L$**

Para cada linha $i = 0$ até $n - 1$:

- Para cada linha $j = i + 1$ até $n - 1$:
  1. Calcule o **fator multiplicador**:
$$
m = \frac{U[j, i]}{U[i, i]}
$$
  2. Subtraia $m$ vezes a linha $i$ da linha $j$ em $U$:
$$
U[j] \leftarrow U[j] - m \cdot U[i]
$$
  3. Atribua esse multiplicador à posição $L[j, i]$:
$$
L[j, i] = m
$$
---

### Exemplo Numérico

Considere a matriz $A$:

$$
A = \begin{pmatrix}
2 & 3 & 1 \\
4 & 7 & 7 \\
6 & 18 & 22
\end{pmatrix}
$$

#### **Passo 1: Inicialização**

- $L = I_3$ (matriz identidade 3×3)
- $U = A$

#### **Passo 2: Eliminação**

##### Iteração $i = 0$

- $m_{10} = 4/2 = 2$
- Linha 1: $U[1] = U[1] - 2 \cdot U[0]$
- $L[1, 0] = 2$
- $m_{20} = 6/2 = 3$
- Linha 2: $U[2] = U[2] - 3 \cdot U[0]$
- $L[2, 0] = 3$

##### Iteração $i = 1$

- $m_{21} = (U[2, 1]) / (U[1, 1]) = 9 / 1 = 9$
- Linha 2: $U[2] = U[2] - 9 \cdot U[1]$
- $L[2, 1] = 9$

#### **Resultado Final**

$$
L = \begin{pmatrix}
1 & 0 & 0 \\
2 & 1 & 0 \\
3 & 9 & 1
\end{pmatrix}
$$

$$
U = \begin{pmatrix}
2 & 3 & 1 \\
0 & 1 & 5 \\
0 & 0 & 2
\end{pmatrix}
$$

## Pivoteamento Parcial na Fatoração Lu

O **pivoteamento parcial** é uma técnica utilizada na fatoração LU para **evitar divisões por zero** e **minimizar erros numéricos** causados por pivôs pequenos. Ele consiste em **trocar linhas da matriz** $A$ (e consequentemente de $L$ e $b$, se estiver resolvendo $Ax = b$) de modo que o maior valor absoluto na coluna corrente seja usado como pivô.

---

### Passo a Passo Com Pivoteamento Parcial

Dado $A \in \mathbb{R}^{n \times n}$, o algoritmo com pivoteamento parcial segue:

#### **1. Inicialização**

- Crie $L = I_n$ (matriz identidade), $U = A.copy()$, e $P = I_n$ (matriz de permutação).

#### **2. Para Cada Coluna $i$ de $0$ Até $n-1$:**

1. **Escolha do Pivô:**

   - Encontre o índice da linha com o maior valor absoluto na coluna $i$, a partir da linha $i$:
$$
p = \arg\max_{k \geq i} |U[k, i]|
$$
1. **Troque as linhas $i$ e $p$ de $U$ e $P$:**

   - $U[[i, p], :] \leftarrow U[[p, i], :]$

   - $P[[i, p], :] \leftarrow P[[p, i], :]$

   - Se $i > 0$, troque as linhas anteriores de $L$ também:

     - $L[[i, p], :i] \leftarrow L[[p, i], :i]$

1. **Eliminação de Gauss como antes:**

   - Para cada linha $j > i$:

     - $m = U[j, i] / U[i, i]$

     - $U[j] = U[j] - m \cdot U[i]$

     - $L[j, i] = m$

---

### Forma Final da Decomposição Com Pivoteamento

A fatoração LU com pivoteamento parcial produz:

$$
PA = LU
$$
- $P$ é a **matriz de permutação** que representa as trocas de linha.
- $L$ é a matriz triangular inferior com 1s na diagonal.
- $U$ é a matriz triangular superior.

---

### Exemplo em Python Com Pivoteamento

```python
import numpy as np

def lu_decomposition_pivot(A):
    """
    Perform LU decomposition with partial pivoting on matrix A.
    Decomposes PA = LU, where P is a permutation matrix, L is lower triangular, and U is upper triangular.

    Parameters:
    A -- Square matrix (numpy.ndarray)

    Returns:
    P -- Permutation matrix (numpy.ndarray)
    L -- Lower triangular matrix (numpy.ndarray)
    U -- Upper triangular matrix (numpy.ndarray)
    """
    n = A.shape[0]
    L = np.eye(n)
    U = A.copy().astype(float)
    P = np.eye(n)

    for i in range(n):
		# Find The Index Of The Row With The Largest Absolute Value In Column I
        pivot = np.argmax(np.abs(U[i:, i])) + i
        if U[pivot, i] == 0:
            raise ValueError("Singular matrix.")
		# Swap Rows In U
        U[[i, pivot]] = U[[pivot, i]]
		# Swap Rows In P
        P[[i, pivot]] = P[[pivot, i]]
		# Swap Rows In L (only For Previously Computed columns)
        if i > 0:
            L[[i, pivot], :i] = L[[pivot, i], :i]
		# Elimination Process
        for j in range(i+1, n):
            m = U[j, i] / U[i, i]
            L[j, i] = m
            U[j] = U[j] - m * U[i]
    return P, L, U

def solve_with_lu(P, L, U, b):
    """
    Solve the linear system Ax = b using LU decomposition with pivoting.

    Parameters:
    P, L, U -- The factors of A such that PA = LU
    b -- The right-hand side vector

    Returns:
    result -- Dictionary with keys:
        'solution'   : Solution vector (numpy.ndarray)
        'residual'   : Final residual norm (float)
    """
	# Step 1: Apply The Permutation To B
    Pb = np.dot(P, b)

	# Step 2: Forward Substitution To Solve Ly = Pb
    n = L.shape[0]
    y = np.zeros(n)
    for i in range(n):
        y[i] = Pb[i]
        for j in range(i):
            y[i] -= L[i, j] * y[j]

	# Step 3: Back Substitution To Solve Ux = Y
    x = np.zeros(n)
    for i in range(n-1, -1, -1):
        x[i] = y[i]
        for j in range(i+1, n):
            x[i] -= U[i, j] * x[j]
        x[i] /= U[i, i]

    residual = np.linalg.norm(np.dot(A, x) - b, ord=np.inf) if 'A' in globals() else None
    return {'solution': x, 'residual': residual}

if __name__ == "__main__":
	# Example Usage
    A = np.array([
        [0, 3, 1],
        [4, 7, 7],
        [6, 18, 22]
    ], dtype=float)
    P, L, U = lu_decomposition_pivot(A)
    print("P =\n", P)
    print("\nL =\n", L)
    print("\nU =\n", U)
    print("\nVerification: P·A =\n", np.dot(P, A))
    print("\nL·U =\n", np.dot(L, U))
	# Define a Right-hand Side Vector B
    b = np.array([2, 4, 3], dtype=float)
	# Solve The System Ax = B
    result = solve_with_lu(P, L, U, b)
    print("\nSolution x =\n", result['solution'])
    print("\nFinal residual norm =", result['residual'])
    print("\nVerification: A·x =\n", np.dot(A, result['solution']))
```
