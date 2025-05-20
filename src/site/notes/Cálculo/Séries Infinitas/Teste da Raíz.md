---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Teste da Raíz/","created":"2025-05-20T13:30:13.838-03:00"}
---


O **Teste da Raiz** é um método utilizado para determinar a convergência de séries infinitas, especialmente aquelas com termos do tipo $a_n = n^k$ ou $a_n = \frac{1}{n^k}$, onde $k$ é uma constante. Este teste é particularmente útil quando os termos da série envolvem potências de $n$.

## Formulando o Teste

O **Teste da Raiz** é aplicado à série $\sum_{n=1}^\infty a_n$, onde cada termo $a_n$ pode ser expresso como uma função de $n$. A ideia principal é calcular o limite superior do enésimo raiz dos termos da série:
$$
L = \limsup_{n\to\infty} \sqrt[n]{|a_n|}
$$
Se $L < 1$, a série converge absolutamente. Se $L > 1$, a série diverge. Se $L = 1$, o teste é inconclusivo.

## Exemplos de Aplicação

**Exemplo 1: Série Geométrica**

Considere a série geométrica $\sum_{n=0}^\infty \left(\frac{1}{2}\right)^n$. Aqui, $a_n = \left(\frac{1}{2}\right)^n$.

Applicando o Teste da Raiz:
$$
L = \limsup_{n\to\infty} \sqrt[n]{\left|\left(\frac{1}{2}\right)^n\right|} = \limsup_{n\to\infty} \left(\frac{1}{2}\right) = \frac{1}{2}
$$
Como $L < 1$, a série converge absolutamente.

**Exemplo 2: Série de Potências**

Considere a série $\sum_{n=0}^\infty \frac{n!}{(3n)!}$. Aqui, $a_n = \frac{n!}{(3n)!}$.

Applicando o Teste da Raiz:
$$
L = \limsup_{n\to\infty} \sqrt[n]{\left|\frac{n!}{(3n)!}\right|}
$$
Usando a aproximação factorial $n! \approx \sqrt{2\pi n} \left(\frac{n}{e}\right)^n$, temos:
$$
L = \limsup_{n\to\infty} \sqrt[n]{\frac{\sqrt{2\pi n} \left(\frac{n}{e}\right)^n}{\sqrt{6\pi n} \left(\frac{3n}{e}\right)^{3n}}} = \limsup_{n\to\infty} \frac{1}{3^n} = 0
$$
Como $L < 1$, a série converge absolutamente.

**Exemplo 3: Série de Termos Alternados**

Considere a série $\sum_{n=1}^\infty (-1)^n \frac{n^2}{e^n}$. Aqui, $a_n = (-1)^n \frac{n^2}{e^n}$.

Applicando o Teste da Raiz:
$$
L = \limsup_{n\to\infty} \sqrt[n]{\left|(-1)^n \frac{n^2}{e^n}\right|} = \limsup_{n\to\infty} \frac{\sqrt[n]{n^2}}{e} = \frac{1}{e}
$$
Como $L < 1$, a série converge absolutamente.
