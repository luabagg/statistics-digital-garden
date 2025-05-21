---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Testes de Comparação/","created":"2025-05-20T13:30:13.838-03:00"}
---


Testes de comparação são ferramentas úteis na análise da convergência de séries infinitas. Esses testes permitem comparar a série em questão com uma série conhecida, cuja convergência ou divergência já seja estabelecida.

## Teste Direto de Comparação

O **Teste Direto de Comparação** é aplicado quando se pode comparar diretamente as termos da série com os termos de outra série cuja convergência é conhecida.

- **Formulação**: Sejam $\sum a_n$ e $\sum b_n$ duas séries infinitas tais que $0 \leq a_n \leq b_n$ para todo $n$. Então:
  - Se $\sum b_n$ converge, então $\sum a_n$ também converge.
  - Se $\sum a_n$ diverge, então $\sum b_n$ também diverge.

**Exemplo**: Considere a série $\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$. Podemos comparar com a série geométrica $\sum_{n=1}^{\infty} \frac{1}{2^n}$, que converge. Note que:
$$
\frac{1}{n(n+1)} < \frac{1}{2^n}
$$

  para $n$ suficientemente grande. Como a série geométrica converge e os termos da série original são menores ou iguais aos termos da série geométrica, podemos concluir que $\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$ também converge.

## Teste de Comparação Assintótico

O **Teste de Comparação Assintótico** é útil quando a série em questão tem termos que se comportam como uma função conhecida para grandes valores de $n$. Se $a_n \sim b_n$ (ou seja, $\lim_{n\to\infty} \frac{a_n}{b_n} = 1$), então as séries $\sum a_n$ e $\sum b_n$ convergem ou divergem juntas.

**Exemplo**: Considere a série $\sum_{n=2}^{\infty} \frac{1}{\ln(n)}$. Podemos comparar com a série harmônica $\sum_{n=2}^{\infty} \frac{1}{n}$, que diverge. Note que:
$$
\lim_{n\to\infty} \frac{\frac{1}{\ln(n)}}{\frac{1}{n}} = \lim_{n\to\infty} \frac{n}{\ln(n)} = +\infty
$$

  o que indica que $\frac{1}{\ln(n)}$ cresce mais rápido do que $\frac{1}{n}$, mas a divergência da série harmônica implica na divergência de nossa série original.

## Teste de Comparação pelo Mínimo

O **Teste de Comparação pelo Mínimo** é útil quando se pode encontrar um termo mínimo $m_n$ que seja maior ou igual a todos os termos subsequentes e cuja convergência possa ser estabelecida.

- **Formulação**: Sejam $\sum a_n$ e $\sum b_n$ duas séries infinitas tais que $0 \leq a_n \leq m_n$ para todo $n$, onde $\{m_n\}$ é uma sequência decrescente que converge para zero. Então:
  - Se $\sum m_n$ converge, então $\sum a_n$ também converge.
  - Se $\sum a_n$ diverge, então $\sum m_n$ também diverge.

**Exemplo**: Considere a série $\sum_{n=1}^{\infty} \frac{1}{n^2 + n}$. Podemos comparar com a série $\sum_{n=1}^{\infty} \frac{1}{n^2}$, que converge. Note que:
$$
\frac{1}{n^2 + n} < \frac{1}{n^2}
$$

 para todo $n$. Como a série $\sum_{n=1}^{\infty} \frac{1}{n^2}$ converge e os termos da série original são menores ou iguais aos termos dessa série, podemos concluir que $\sum_{n=1}^{\infty} \frac{1}{n^2 + n}$ também converge.
