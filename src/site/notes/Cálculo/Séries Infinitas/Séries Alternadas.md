---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Séries Alternadas/","dgPassFrontmatter":true,"created":"2025-03-24T09:01:25.930-03:00"}
---

## Introdução Às Séries Alternadas

Uma série alternada é um tipo especial de série numérica onde os termos são alternadamente positivos e negativos. Essas séries têm a forma geral:

$$\sum_{n=1}^{\infty} (-1)^{n+1} b_n \quad \text{ou} \quad \sum_{n=1}^{\infty} (-1)^n b_n,$$

onde $b_n$ é uma sequência de números reais não-negativos.

### Exemplo

Considere a série alternada:

$$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots.$$

Esta série é conhecida como a **Série Harmônica Alternada**. Ela converge para $\ln(2)$, conforme demonstrado pelo Teorema de Leibniz.

## Convergência Das Séries Alternadas

A convergência de uma série alternada pode ser verificada usando o **Teorema de Leibniz**, que estabelece as seguintes condições:

1. A sequência $b_n$ é monótona decrescente, ou seja, $b_{n+1} \leq b_n$ para todo $n$.
2. $\lim_{n \to \infty} b_n = 0$.

Se ambas as condições forem satisfeitas, a série alternada converge.

## Exemplo De Aplicação

Considere a série:

$$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{2^n} = 1 - \frac{1}{2} + \frac{1}{4} - \frac{1}{8} + \cdots.$$

Aqui, $b_n = \frac{1}{2^n}$.

- A sequência $\left\{\frac{1}{2^n}\right\}$ é monótona decrescente.
- $\lim_{n \to \infty} \frac{1}{2^n} = 0$.

Portanto, pela condição do Teorema de Leibniz, a série converge.

## Teste Da Série Alternada

O **Teste da Série Alternada** é um método utilizado para determinar a convergência condicional de séries infinitas do tipo alternado. Uma série alternada tem a forma geral:

$$\sum_{n=1}^{\infty} (-1)^{n-1} b_n \quad \text{ou} \quad \sum_{n=1}^{\infty} (-1)^n b_n,$$

onde $b_n$ é uma sequência de números reais não-negativos.

### Princípio Do Teste

O teste da série alternada afirma que se a sequência $\{b_n\}$ satisfizer as seguintes condições:

1. **Decrescimento**: $b_{n+1} \leq b_n$ para todo $n$.
2. **Limitação ao zero**: $\lim_{n \to \infty} b_n = 0$.

Então a série alternada converge.

### Exemplos

**Exemplo 1:**

Considere a série:

$$\sum_{n=1}^{\infty} (-1)^{n-1} \frac{1}{n}.$$

Aqui, $b_n = \frac{1}{n}$.

- **Decrescimento**: $\frac{1}{n+1} < \frac{1}{n}$.
- **Limitação ao zero**: $\lim_{n \to \infty} \frac{1}{n} = 0$.

Portanto, a série converge pelo teste da série alternada.

**Exemplo 2:**

Considere a série:

$$\sum_{n=1}^{\infty} (-1)^n \frac{n+1}{n^2 + 1}.$$

Aqui, $b_n = \frac{n+1}{n^2 + 1}$.

- **Decrescimento**: $\frac{(n+1)+1}{(n+1)^2 + 1} < \frac{n+1}{n^2 + 1}$.
- **Limitação ao zero**: $\lim_{n \to \infty} \frac{n+1}{n^2 + 1} = 0$.

Portanto, a série converge pelo teste da série alternada.

### Observações

- O teste não pode ser usado para determinar a convergência absoluta de uma série.
- Se a série não satisfizer as condições do teste (ou seja, se $b_n$ não decresce ou $\lim_{n \to \infty} b_n \neq 0$), o teste é inconclusivo e outras técnicas devem ser utilizadas.

Este método é particularmente útil para séries onde os termos alternam de sinal.

## Estimativa De Somas

A estimativa de somas é um processo usado para aproximar o valor de uma série infinita, especialmente quando a série converge lentamente. Este método é particularmente útil em séries alternadas, onde os termos são alternadamente positivos e negativos.

### Princípio Fundamental

Para uma série alternada que satisfaz as condições do Teorema de Leibniz (monótona decrescente e limitada ao zero), a soma da série pode ser estimada com precisão. A estimativa é baseada no fato de que o erro na aproximação é menor que o valor absoluto do primeiro termo não considerado.

### Formulando a Estimativa

Considere uma série alternada $\sum_{n=1}^{\infty} (-1)^{n+1} b_n$. Se $S$ é a soma exata da série e $S_N = \sum_{n=1}^{N} (-1)^{n+1} b_n$ é a soma parcial até o termo $b_N$, então:

$$|S - S_N| < b_{N+1}.$$

Isso significa que a diferença entre a soma exata e a soma parcial $S_N$ é menor que o próximo termo da sequência, $b_{N+1}$.

### Exemplo De Aplicação

Considere novamente a **Série Harmônica Alternada**:

$$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots.$$

Se quisermos estimar a soma da série até o termo $b_{N}$, podemos usar:

$$S_N = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots + (-1)^{N+1} \frac{1}{N},$$

e o erro na estimativa é menor que $\frac{1}{N+1}$.

### Aplicação Prática

Suponha que queremos estimar a soma da série até $N = 5$:

$$S_5 = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \frac{1}{5}.$$

O erro na estimativa é menor que $\frac{1}{6}$, ou aproximadamente $0.167$. Portanto, a soma da série pode ser estimada com uma precisão de até $0.167$.
``