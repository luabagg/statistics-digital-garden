---
{"dg-publish":true,"permalink":"/Métodos Numéricos/Resolução de Sistemas Lineares/Métodos Diretos - Sistema Triangular/","created":"2025-05-20T13:30:13.844-03:00"}
---


Os métodos diretos têm por objetivo transformar a matriz A (coeficiente) numa matriz triangular (superior ou inferior), dessa forma a obtenção do vetor-solução dar-se-á de forma trivial. Esses métodos são fundamentais na resolução eficiente de sistemas lineares, pois permitem encontrar as soluções através de operações elementares que simplificam o sistema.

## Triangularização da Matriz a

1. **Eliminação Gaussiana**: Este método consiste em transformar a matriz $A$ em uma matriz triangular superior (ou inferior) através de operações elementares linha-a-linha. As operações elementares incluem:
   - Multiplicação de uma linha por um escalar não nulo.
   - Adição de múltiplos de uma linha a outra linha.

2. **Eliminação Gauss-Jordan**: Este método é semelhante à eliminação Gaussiana, mas leva o sistema a uma forma triangular reduzida, onde tanto as linhas superiores quanto inferiores são zeros exceto pelo pivô.

## Exemplo

Considere o sistema linear:
$$
\begin{cases}
2x + 3y - z = 1 \\
4x - y + 2z = 5 \\
-2x + 2y + 3z = 0
\end{cases}
$$
Aplicando a eliminação Gaussiana, podemos transformar a matriz $A$ em uma forma triangular superior:
$$
\begin{pmatrix}
2 & 3 & -1 & | & 1 \\
4 & -1 & 2 & | & 5 \\
-2 & 2 & 3 & | & 0
\end{pmatrix} \rightarrow 
\begin{pmatrix}
2 & 3 & -1 & | & 1 \\
0 & -7 & 3 & | & 3 \\
0 & 8 & 4 & | & 2
\end{pmatrix}
$$
Agora, o sistema pode ser resolvido de forma trivial através do backward-substitution.

## Resolução de Matriz Triangular Superior

```python
import numpy as np

def backward_substitution(U, b):
    """ Resolve Ux = b onde U é uma matriz triangular superior """
    n = len(b)
    x = np.zeros(n)

    for i in range(n-1, -1, -1):
        x[i] = (b[i] - np.dot(U[i, i+1:], x[i+1:])) / U[i, i]

    return x

U = np.array([[3, -1, 2],
              [0, 4, 1],
              [0, 0, 5]], dtype=float)
b = np.array([5, 6, 10], dtype=float)

x = backward_substitution(U, b)
print("Solução:", x)
```

## Resolução de Matriz Triangular Inferior

```python
import numpy as np

def forward_substitution(L, b):
    """ Resolve Lx = b onde L é uma matriz triangular inferior """
    n = len(b)
    x = np.zeros(n)

    for i in range(n):
        x[i] = (b[i] - np.dot(L[i, :i], x[:i])) / L[i, i]

    return x

L = np.array([[2, 0, 0],
              [3, 5, 0],
              [1, -2, 4]], dtype=float)
b = np.array([4, 9, -3], dtype=float)

x = forward_substitution(L, b)
print("Solução:", x)
```
