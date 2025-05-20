---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Teste da Razão/","dgPassFrontmatter":true,"created":"2025-05-20T13:30:13.838-03:00"}
---


O **Critério da Razão** (ou Teste da Razão) é um método útil para determinar a convergência absoluta de uma série infinita. Este critério é particularmente eficaz quando os termos da série são expressos em função de números positivos e crescentes.

## Formulação Do Critério

Considere uma série infinita $\sum_{n=1}^{\infty} a_n$, onde $a_n > 0$ para todo $n$. O critério da razão é aplicado ao calcular o limite:
$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|
$$
- Se $L < 1$, a série converge absolutamente.
- Se $L > 1$, a série diverge.
- Se $L = 1$, o critério não fornece informações sobre a convergência.

## Exemplos de Aplicação

### Exemplo 1: Série Geométrica

Considere a série geométrica $\sum_{n=0}^{\infty} \left(\frac{1}{2}\right)^n$.

- Termos da série: $a_n = \left(\frac{1}{2}\right)^n$
- Razão entre termos consecutivos: $\frac{a_{n+1}}{a_n} = \frac{\left(\frac{1}{2}\right)^{n+1}}{\left(\frac{1}{2}\right)^n} = \frac{1}{2}$

Calculando o limite:
$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \frac{1}{2}
$$
Como $L < 1$, a série converge absolutamente.

### Exemplo 2: Série de Fatorial

Considere a série $\sum_{n=1}^{\infty} \frac{n!}{(2n)!}$.

- Termos da série: $a_n = \frac{n!}{(2n)!}$
- Razão entre termos consecutivos:
$$
\frac{a_{n+1}}{a_n} = \frac{(n+1)!(2n)!}{(2(n+1))!n!} = \frac{(n+1)(2n)!}{(2n+2)(2n+1)(2n)!} = \frac{n+1}{(2n+2)(2n+1)}
$$
Calculando o limite:
$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \frac{n+1}{(2n+2)(2n+1)} = \lim_{n \to \infty} \frac{\frac{n+1}{n^2}}{\left(\frac{2n+2}{n}\right)\left(\frac{2n+1}{n}\right)} = \lim_{n \to \infty} \frac{\frac{1}{n} + \frac{1}{n^2}}{4 + \frac{2}{n} + \frac{1}{n^2}} = 0
$$
Como $L < 1$, a série converge absolutamente.

### Exemplo 3: Série de Potências

Considere a série $\sum_{n=1}^{\infty} \left(\frac{x^n}{n}\right)$, onde $x$ é um número real.

- Termos da série: $a_n = \frac{x^n}{n}$
- Razão entre termos consecutivos:
$$
\frac{a_{n+1}}{a_n} = \frac{\frac{x^{n+1}}{n+1}}{\frac{x^n}{n}} = \frac{n x^{n+1}}{(n+1) x^n} = \frac{n x}{n+1}
$$
Calculando o limite:
$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \left| \frac{n x}{n+1} \right| = |x|
$$
- Se $|x| < 1$, a série converge absolutamente.
- Se $|x| > 1$, a série diverge.
- Se $|x| = 1$, o critério não fornece informações sobre a convergência.
