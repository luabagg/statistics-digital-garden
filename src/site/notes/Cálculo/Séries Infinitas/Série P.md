---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Série P/","dgPassFrontmatter":true,"created":"2025-04-16T05:05:31.311-03:00"}
---


A série harmônica geral, conhecida como **p-série**, é uma série infinita da forma:
$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$
onde $p$ é um número real positivo. A convergência ou divergência dessa série depende do valor de $p$:

- **Caso $p > 1$**: A série converge. Um exemplo é a série harmônica dupla com $p = 2$, que é:
$$
\sum_{n=1}^{\infty} \frac{1}{n^2}
$$
Esta série converge para um valor finito, conhecido como a constante zeta de Riemann para $s = 2$:
$$
\zeta(2) = \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$
- **Caso $p = 1$**: A série é a série harmônica simples:
$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$
Esta série diverge, o que pode ser demonstrado usando o teste da comparação ou o teste do termo geral não-nulo.

- **Caso $0 < p < 1$**: A série diverge. Por exemplo, para $p = \frac{1}{2}$:
$$
\sum_{n=1}^{\infty} \frac{1}{\sqrt{n}}
$$
Esta série diverge mais rapidamente do que a série harmônica simples.

- **Caso $p \leq 0$**: A série diverge. Por exemplo, para $p = -1$:
$$
\sum_{n=1}^{\infty} n
$$
Esta é uma série aritmética crescente e claramente divergente.

A convergência da p-série pode ser demonstrada usando o teste do termo geral não-nulo ou o teste de comparação. Nota-se que a p-série desempenha um papel crucial na teoria dos números e em várias aplicações matemáticas, incluindo a análise de séries e integrais relacionados.
