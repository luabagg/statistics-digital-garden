---
{"dg-publish":true,"permalink":"/calculo/series-infinitas/convergencia-absoluta/","created":"2025-05-20T13:30:13.832-03:00"}
---


Convergência absoluta é um conceito fundamental na teoria das séries numéricas, especialmente em análise matemática e cálculo avançado. Uma série numérica $\sum_{n=1}^{\infty} a_n$ converge absolutamente se a série formada pelos valores absolutos dos termos da série original, $\sum_{n=1}^{\infty} |a_n|$, convergir.

## Exemplos de Convergência Absoluta

1. **Série Geométrica:**
   A série geométrica $\sum_{n=0}^{\infty} \left(\frac{1}{2}\right)^n$ converge absolutamente, pois a série dos valores absolutos é $\sum_{n=0}^{\infty} \left|\left(\frac{1}{2}\right)^n\right| = \sum_{n=0}^{\infty} \left(\frac{1}{2}\right)^n$, que converge para 2.

2. **Série de Potências:**
   A série de potências $\sum_{n=0}^{\infty} \frac{x^n}{n!}$ converge absolutamente para todo $x \in \mathbb{R}$. Isso ocorre porque a série dos valores absolutos, $\sum_{n=0}^{\infty} \left|\frac{x^n}{n!}\right| = \sum_{n=0}^{\infty} \frac{|x|^n}{n!}$, converge para $e^{|x|}$.

## Características Importantes

1. **Convergência Absoluta Implica Convergência:**
   Se uma série $\sum_{n=1}^{\infty} a_n$ convergir absolutamente, então ela também converge (mas não vice-versa). Isso significa que se $\sum_{n=1}^{\infty} |a_n|$ converge, então $\sum_{n=1}^{\infty} a_n$ também converge.

2. **Testes de Convergência Absoluta:**
   Existem vários testes para determinar a convergência absoluta:
   - **Teste da Razão:** Se $\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = L < 1$, então $\sum_{n=1}^{\infty} |a_n|$ converge.
   - **Teste do Raio de Convergência:** Para séries de potências, o raio de convergência $R$ pode ser usado para determinar a convergência absoluta no intervalo $(-R, R)$.

3. **Consequências da Convergência Absoluta:**
   A convergência absoluta tem implicações importantes em cálculos e aplicações matemáticas:
   - Permite a troca de ordem de somatórios sem alterar o resultado.
   - Facilita a manipulação algébrica das séries, como adição, subtração e multiplicação.

## Exemplos de Série que Não Convergem Absolutamente

1. **Série Alternada:**
   A série $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{1}{n}$ converge condicionalmente, mas não converge absolutamente, pois a série dos valores absolutos $\sum_{n=1}^{\infty} \left|\frac{(-1)^{n+1}}{n}\right| = \sum_{n=1}^{\infty} \frac{1}{n}$ (série harmônica) diverge.

2. **Série de Dirichlet:**
   A série $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{\sin(n)}{n}$ converge condicionalmente, mas não converge absolutamente, pois a série dos valores absolutos $\sum_{n=1}^{\infty} \left|\frac{\sin(n)}{n}\right|$ diverge.
