---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Série Harmônica/","dgPassFrontmatter":true,"created":"2025-05-20T13:30:13.834-03:00"}
---


Série harmônica é um conceito matemático importante, frequentemente utilizado em física e engenharia. É a série infinita definida pela soma dos inversos das sequências de números naturais:
$$
\sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \cdots
$$
Esta série é divergente, o que significa que a soma total não converge para um valor finito. No entanto, seu comportamento pode ser analisado de várias maneiras:

- **Crescimento lento**: A soma parcial da série harmônica cresce muito lentamente. Por exemplo, a soma dos primeiros 100 milhões de termos é apenas cerca de 23.
- **Teste do logaritmo natural**: Um teste útil para determinar a divergência da série harmônica é o teste do logaritmo natural:
$$
\sum_{n=1}^{\infty} \frac{1}{n} > \int_1^{\infty} \frac{1}{x} dx = \lim_{b \to \infty} [\ln(b) - \ln(1)] = \infty
$$
- **Aplicações em física**: A série harmônica aparece em diversos contextos físicos, como na descrição do comportamento de sistemas vibratórios e na solução da equação de onda.
- **Série harmônica parcial**: As somas parciais da série harmônica são conhecidas como números harmônicos. Por exemplo:
$$
H_n = \sum_{k=1}^{n} \frac{1}{k}
$$
  Para $n = 5$, temos:
$$
H_5 = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} = \frac{137}{60}
$$
- **Convergência condicional**: Embora a série harmônica em si seja divergente, algumas de suas somas parciais podem convergir para valores finitos. Por exemplo, a série harmônica condicionada pode ser rearranjada para convergir para qualquer valor real.

Estes são alguns dos aspectos fundamentais da série harmônica e sua importância na matemática e nas ciências aplicadas.
