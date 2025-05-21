---
{"dg-publish":true,"permalink":"/Métodos Numéricos/Resolução de Sistemas Lineares/Métodos Iterativos/","created":"2025-05-20T13:30:13.844-03:00"}
---


## Formato Geral: $x^{(k+1)} = Cx^{(k)} + g$

Neste formato, $x^{(k)}$ representa a solução aproximada no $k$-ésimo passo da iteração. A matriz $C$ e o vetor $g$ são parâmetros do método iterativo que podem variar dependendo do problema específico.

### Relação Com Os Métodos Iterativos Discutidos

1. **Método de Gauss-Seidel**:
   O Método de Gauss-Seidel pode ser expresso no formato $x^{(k+1)} = Cx^{(k)} + g$. Aqui, a matriz $C$ é formada pelos elementos da matriz original $A$, mas com as entradas abaixo da diagonal nulas. O vetor $g$ contém os termos independentes do sistema.

2. **Método de Jacobi**:
   Similar ao Método de Gauss-Seidel, o Método de Jacobi também pode ser expresso no formato $x^{(k+1)} = Cx^{(k)} + g$. A principal diferença é que na Jacobi, a matriz $C$ contém apenas os elementos da diagonal principal e acima dela (ou abaixo, dependendo do sistema), enquanto o vetor $g$ contém os termos independentes.

3. **Método de Conjugados Gradientes (CG)**:
   Embora o CG seja mais complexo e não se encaixe diretamente no formato $x^{(k+1)} = Cx^{(k)} + g$, ele pode ser visto como um método iterativo que minimiza a função quadrática associada ao sistema linear. No entanto, para simplificar, podemos considerar o CG como uma forma de resolver sistemas lineares iterativamente.

4. **Método da Relaxação Sazonal (SOR)**:
   O SOR é uma extensão do Método de Gauss-Seidel e pode ser expresso no formato $x^{(k+1)} = Cx^{(k)} + g$. Aqui, a matriz $C$ inclui um fator de relaxação $\omega$, que acelera a convergência. O vetor $g$ contém os termos independentes do sistema.

5. **Método de Precondicionamento**:
   O precondicionamento envolve a introdução de uma matriz $M$ para acelerar a convergência. No formato $x^{(k+1)} = Cx^{(k)} + g$, a matriz $C$ é formada pela inversa da matriz de pré-condicionamento $M^{-1}$.

## Convergência e Estabilidade

A convergência dos métodos iterativos depende das seguintes condições:

- **Diagonal Dominância**: Se a matriz $A$ for diagonal dominante, os métodos iterativos geralmente convergem.
- **Matriz Simétrica Definida Positiva (SPD)**: Para sistemas SPD, o Método de Conjugados Gradientes é particularmente eficaz.
- **Fator de Relaxação**: No caso do SOR, o fator $\omega$ deve ser escolhido adequadamente para garantir a convergência.

## Exemplo

Considere um sistema linear simples:

$$
 A = \begin{pmatrix} 4 & -1 \\ -1 & 3 \end{pmatrix}, \quad b = \begin{pmatrix} 2 \\ 5 \end{pmatrix} 
$$

O Método de Gauss-Seidel pode ser expresso como:

$$
 x^{(k+1)}_1 = \frac{1}{4}(2 + x^{(k)}_2) 
$$

$$
x^{(k+1)}_2 = \frac{1}{3}(5 + x^{(k)}_1)
$$

Em forma matricial, isso pode ser escrito como:

$$
x^{(k+1)} = Cx^{(k)} + g
$$

onde

$$
C = \begin{pmatrix} 0 & \frac{1}{4} \\ \frac{1}{3} & 0 \end{pmatrix}, \quad g = \begin{pmatrix} \frac{1}{2} \\ \frac{5}{3} \end{pmatrix}
$$

### Exemplos de Métodos Iterativos

1. **Método da Relaxação Sazonal (SOR - Successive Over-Relaxation)**:
   O SOR é uma extensão do método de Gauss-Seidel, onde um fator de relaxação $\omega$ é introduzido para acelerar a convergência. A fórmula geral é dada por:
$$
x^{(k+1)}_i = (1 - \omega) x^{(k)}_i + \frac{\omega}{a_{ii}} \left(b_i - \sum_{j=1}^{i-1} a_{ij}x^{(k+1)}_j - \sum_{j=i+1}^n a_{ij}x^{(k)}_j\right)
$$

   onde $x^{(k)}$ é o vetor solução na iteração $k$, e $\omega$ é um parâmetro de relaxação.

2. **Método de Conjugados Gradientes (CG - Conjugate Gradient)**:
   O CG é particularmente eficaz para sistemas simétricos definidos positivos. A ideia central é gerar uma sequência de direções conjugadas que minimizam a função quadrática associada ao sistema linear.

3. **Método de Precondicionamento**:
   O precondicionamento envolve a introdução de um operador $M$ para acelerar a convergência do método iterativo. A solução é obtida resolvendo o sistema modificado:
$$
M^{-1}Ax = M^{-1}b
$$
