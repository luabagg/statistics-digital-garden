---
{"dg-publish":true,"permalink":"/Métodos Numéricos/Resolução de Sistemas Lineares/Fatoração LU/","dgPassFrontmatter":true,"created":"2025-04-11T10:37:01.883-03:00"}
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

### Passo a Passo Da Fatoração Lu (sem pivoteamento)

Seja $A$ uma matriz quadrada de ordem $n$.

#### **1. Inicialização**

- Crie uma matriz identidade $L$ de ordem $n$.
- Faça uma cópia da matriz $A$ e chame-a de $U$.

#### **2. Eliminação De Gauss Para Formar $U$ E Preencher $L$**

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

- $$L = \begin{pmatrix}

1 & 0 & 0 \\

2 & 1 & 0 \\

3 & 9 & 1

\end{pmatrix}$$

- $$U = \begin{pmatrix}

2 & 3 & 1 \\

0 & 1 & 5 \\

0 & 0 & 2

\end{pmatrix}$$

## Pivoteamento Parcial Na Fatoração Lu

O **pivoteamento parcial** é uma técnica utilizada na fatoração LU para **evitar divisões por zero** e **minimizar erros numéricos** causados por pivôs pequenos. Ele consiste em **trocar linhas da matriz** $A$ (e consequentemente de $L$ e $b$, se estiver resolvendo $Ax = b$) de modo que o maior valor absoluto na coluna corrente seja usado como pivô.

---

### Passo a Passo Com Pivoteamento Parcial

Dado $A \in \mathbb{R}^{n \times n}$, o algoritmo com pivoteamento parcial segue:

#### **1. Inicialização**

- Crie $L = I_n$ (matriz identidade), $U = A.copy()$, e $P = I_n$ (matriz de permutação).

#### **2. Para Cada Coluna $i$ De $0$ Até $n-1$:**

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

### Forma Final Da Decomposição Com Pivoteamento

A fatoração LU com pivoteamento parcial produz:

$$

PA = LU

$$

- $P$ é a **matriz de permutação** que representa as trocas de linha.
- $L$ é a matriz triangular inferior com 1s na diagonal.
- $U$ é a matriz triangular superior.

---

### Exemplo Em Python Com Pivoteamento

```python
import numpy as np

def lu_decomposition_pivot(A):
    n = A.shape[0]
    L = np.eye(n)
    U = A.copy().astype(float)
    P = np.eye(n)

    for i in range(n):
        # Find the index of the row with the largest absolute value in column i
        pivot = np.argmax(np.abs(U[i:, i])) + i
        if U[pivot, i] == 0:
            raise ValueError("Singular matrix.")
        
        # Swap rows in U
        U[[i, pivot]] = U[[pivot, i]]
        # Swap rows in P
        P[[i, pivot]] = P[[pivot, i]]
        # Swap rows in L (only for previously computed columns)
        if i > 0:
            L[[i, pivot], :i] = L[[pivot, i], :i]

        # Elimination process
        for j in range(i+1, n):
            m = U[j, i] / U[i, i]
            L[j, i] = m
            U[j] = U[j] - m * U[i]

    return P, L, U

# Example usage
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
```
