---
{"dg-publish":true,"permalink":"/Métodos Numéricos/Resolução de Sistemas Lineares/Método de Gauss-Jacobi/","dgPassFrontmatter":true,"created":"2025-04-22T10:36:57.260-03:00"}
---


O Método de Gauss-Jacobi é um algoritmo iterativo utilizado para resolver sistemas lineares de equações do tipo $Ax = b$, onde $A$ é uma matriz quadrada, $x$ e $b$ são vetores. Este método é particularmente útil quando a matriz $A$ possui certas propriedades que facilitam sua aplicação.

## Formulando O Problema

Considere um sistema linear de equações representado por:

$$
\begin{align*}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n &= b_2 \\
&\vdots \\
a_{n1}x_1 + a_{n2}x_2 + \cdots + a_{nn}x_n &= b_n
\end{align*}
$$

Podemos expressar este sistema em forma matricial como $Ax = b$, onde:

- $A$ é uma matriz $n \times n$,
- $x$ é um vetor coluna de incógnitas,
- $b$ é um vetor coluna dos termos independentes.

## Aplicação Do Método

O método de Gauss-Jacobi consiste em decompor a matriz $A$ em suas partes diagonal, triangular inferior e triangular superior. Especificamente, podemos escrever:

$$
A = D + L + U,
$$

onde $D$ é a matriz diagonal formada pelos elementos da diagonal principal de $A$, $L$ é a matriz triangular inferior (com zeros na diagonal) e $U$ é a matriz triangular superior (também com zeros na diagonal).

Assim, o sistema original pode ser reescrito como:

$$
Dx = -Lx - Ux + b.
$$

Isolando $x$, obtemos:

$$
x^{(k+1)} = D^{-1}(-Lx^{(k)} - Ux^{(k)} + b),
$$

onde $x^{(k)}$ representa a aproximação do vetor solução no $k$-ésimo passo.

## Exemplo

Considere o sistema linear:

$$
\begin{align*}
2x_1 + x_2 &= 8 \\
x_1 + 3x_2 &= 10
\end{align*}
$$

Em forma matricial, temos $A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$, $b = \begin{pmatrix} 8 \\ 10 \end{pmatrix}$.

Aplicando o método de Gauss-Jacobi:

$$
x_1^{(k+1)} = \frac{1}{2}(8 - x_2^{(k)}) \\
x_2^{(k+1)} = \frac{1}{3}(10 - x_1^{(k)})
$$

### Criterio De Parada Do Método De Gauss-jacobi

O método de Gauss-Jacobi é uma técnica iterativa utilizada para resolver sistemas lineares. O critério de parada desse método é fundamental para determinar quando a solução atinge um nível aceitável de precisão. Este critério pode ser estabelecido considerando as seguintes condições:

1. **Erro Absoluto**:

   $$
\epsilon = \max_{i} |x_i^{(k+1)} - x_i^{(k)}| < \varepsilon
$$

   Aqui, $x_i^{(k+1)}$ e $x_i^{(k)}$ representam os valores das variáveis no $(k+1)$-ésimo e $k$-ésimo iterações, respectivamente. $\varepsilon$ é um valor pequeno definido pelo usuário que serve como a tolerância de erro.

2. **Erro Relativo**:

   $$
\epsilon = \frac{\max_{i} |x_i^{(k+1)} - x_i^{(k)}|}{\max_{i} |x_i^{(k+1)}|} < \varepsilon
$$

   Este critério é útil quando as soluções são de ordens de grandeza diferentes.

3. **Número Máximo de Iterações**:
   O método pode ser interrompido após um número máximo de iterações, $K_{\text{max}}$, seja atingido.

   $$
k \geq K_{\text{max}}
$$

4. **Convergência Garantida**:
   Para garantir a convergência do método de Gauss-Jacobi, é necessário que o sistema linear seja diagonalmente dominante ou que as matrizes associadas sejam simétricas e definidas positivas.

### Exemplos

Considere um sistema linear $Ax = b$ com matriz $A$ diagonalmente dominante. Suponha que a tolerância de erro $\varepsilon = 10^{-6}$, o número máximo de iterações seja $K_{\text{max}} = 50$, e os valores iniciais sejam $x^{(0)} = [0, 0, \ldots, 0]^T$.

- **Erro Absoluto**:

  $$
|x_i^{(k+1)} - x_i^{(k)}| < 10^{-6}
$$

- **Erro Relativo**:

  $$
\frac{|x_i^{(k+1)} - x_i^{(k)}|}{|x_i^{(k+1)}|} < 10^{-6}
$$

### Observações Importantes

- O critério de parada baseado no erro relativo é mais robusto, pois considera a escala dos valores das variáveis.
- A escolha do critério de parada deve levar em conta o problema específico e as características do sistema linear.
