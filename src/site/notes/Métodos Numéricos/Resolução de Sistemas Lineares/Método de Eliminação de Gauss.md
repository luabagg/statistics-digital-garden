---
{"dg-publish":true,"permalink":"/Métodos Numéricos/Resolução de Sistemas Lineares/Método de Eliminação de Gauss/","dgPassFrontmatter":true,"noteIcon":"","created":"2025-05-12T18:56:11.071-03:00"}
---


O Método de Eliminação de Gauss é uma técnica fundamental utilizada para resolver sistemas lineares de equações. Este método consiste em transformar um sistema linear em uma forma triangular superior, facilitando a resolução do mesmo através da substituição retroativa.

## Passos Básicos Do Método

1. **Forma Triangular Superior:**
   - O objetivo é transformar o sistema linear original em uma matriz triangular superior.
   - Isso é feito através de operações elementares nas linhas do sistema, sem alterar a solução do mesmo.

2. **Operações Elementares:**
   - Adição múltipla de uma linha à outra.
   - Troca de duas linhas entre si.
   - Multiplicação de uma linha por um escalar não nulo.

3. **Etapa de Eliminação:**
   - Para cada coluna, a ideia é eliminar os elementos abaixo da diagonal principal.
   - Isso é feito multiplicando a primeira equação pelo fator adequado e subtraindo-a das demais equações correspondentes.

4. **Etapa de Substituição Retroativa:**
   - Após obter a forma triangular superior, o sistema pode ser resolvido facilmente através da substituição retroativa.
   - Começa pela última equação e resolve para a última variável, depois usa esse valor na penúltima equação, e assim por diante.

### Exemplo De Aplicação Do Método De Eliminação De Gauss

Considere o seguinte sistema linear de equações:

$$


\begin{cases}

2x + 3y - z = 1 \\

4x - y + 2z = 7 \\

-2x + 2y + 5z = 0

\end{cases}


$$

#### Passos Básicos Do Método

1. **Forma Triangular Superior:**

   Primeiro, transformamos o sistema em uma matriz aumentada:

   $$


   \left[\begin{array}{ccc|c}

   2 & 3 & -1 & 1 \\

   4 & -1 & 2 & 7 \\

   -2 & 2 & 5 & 0

   \end{array}\right]


$$


   **Etapa de Eliminação:**

   - **Eliminando $x$ na segunda linha:**
     Multiplicamos a primeira linha por 2 e subtraímos da segunda linha:

     $$


     R_2 = R_2 - 2R_1

     
$$

     Resultado:

     $$


     \left[\begin{array}{ccc|c}

     2 & 3 & -1 & 1 \\

     0 & -7 & 4 & 5 \\

     -2 & 2 & 5 & 0

     \end{array}\right]

     

$$

   - **Eliminando $x$ na terceira linha:**
     Multiplicamos a primeira linha por 1 e somamos à terceira linha:

     $$


     R_3 = R_3 + R_1

     
$$

     Resultado:

     $$


     \left[\begin{array}{ccc|c}

     2 & 3 & -1 & 1 \\

     0 & -7 & 4 & 5 \\

     0 & 5 & 4 & 1

     \end{array}\right]

     

$$

   - **Eliminando $y$ na terceira linha:**
     Multiplicamos a segunda linha por $\frac{5}{7}$ e subtraímos da terceira linha:

     $$


     R_3 = R_3 - \frac{5}{7}R_2

     
$$

     Resultado:

     $$


     \left[\begin{array}{ccc|c}

     2 & 3 & -1 & 1 \\

     0 & -7 & 4 & 5 \\

     0 & 0 & \frac{8}{7} & -\frac{18}{7}

     \end{array}\right]

     

$$

   Agora, temos a matriz triangular superior:

   $$

   \left[\begin{array}{ccc|c}

   2 & 3 & -1 & 1 \\

   0 & -7 & 4 & 5 \\

   0 & 0 & \frac{8}{7} & -\frac{18}{7}

   \end{array}\right]

$$

2. **Etapa de Substituição Retroativa:**

   - **Resolvendo a última equação:**
     $$

     \frac{8}{7}z = -\frac{18}{7} \implies z = -\frac{18}{7} \cdot \frac{7}{8} = -\frac{9}{4}
     
$$

   - **Resolvendo a segunda equação:**
     Substituindo $z$ na segunda equação:

     $$

     -7y + 4\left(-\frac{9}{4}\right) = 5 \implies -7y - 9 = 5 \implies -7y = 14 \implies y = -2


$$


   - **Resolvendo a primeira equação:**
     Substituindo $y$ e $z$ na primeira equação:
     $$

     2x + 3(-2) - \left(-\frac{9}{4}\right) = 1 \implies 2x - 6 + \frac{9}{4} = 1 \implies 2x - \frac{24}{4} + \frac{9}{4} = 1 \implies 2x - \frac{15}{4} = 1
     
$$

     $$

     2x = 1 + \frac{15}{4} \implies 2x = \frac{4}{4} + \frac{15}{4} \implies 2x = \frac{19}{4} \implies x = \frac{19}{8}
     

$$

   Portanto, a solução do sistema é:

   $$

   x = \frac{19}{8}, \quad y = -2, \quad z = -\frac{9}{4}

$$

## Algoritmo Em Python

```python
def print_matrix(a, b):
    n = len(b)
    for i in range(n):
        row = "  ".join(f"{a[i][j]:8.4f}" for j in range(n))
        print(f"[ {row} ] | {b[i]:8.4f}")
    print()

def gauss_elimination_verbose(a, b):
    n = len(b)

    print("Initial augmented matrix:")
    print_matrix(a, b)

#### Forward Elimination
    for i in range(n):
        max_row = i + max(range(n - i), key=lambda k: abs(a[i + k][i]))
        if abs(a[max_row][i]) < 1e-12:
            raise ValueError("Matrix is singular or nearly singular")
            
# Swap Rows if Needed
        if max_row != i:
            a[i], a[max_row] = a[max_row], a[i]
            b[i], b[max_row] = b[max_row], b[i]
            print(f"Swapped row {i} with row {max_row}")
            print_matrix(a, b)

# Eliminate Entries below the Pivot
        for j in range(i + 1, n):
            factor = a[j][i] / a[i][i]
            for k in range(i, n):
                a[j][k] -= factor * a[i][k]
            b[j] -= factor * b[i]
            print(f"Eliminated row {j} using row {i} with factor {factor:.4f}")
            print_matrix(a, b)

# Back Substitution
    x = [0 for _ in range(n)]
    print("Back substitution:")
    for i in reversed(range(n)):
        s = sum(a[i][j] * x[j] for j in range(i + 1, n))
        x[i] = (b[i] - s) / a[i][i]
        print(f"x[{i}] = {x[i]:.4f}")

    return x

A = [
    [2.0, 1.0, -1.0],
    [-3.0, -1.0, 2.0],
    [-2.0, 1.0, 2.0]
]
B = [8.0, -11.0, -3.0]

solution = gauss_elimination_verbose([row[:] for row in A], B[:])
print("Final solution:", solution)
```

## Extra

![[Escalonamento.pdf]]
