---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Séries de Potências/","dgPassFrontmatter":true,"created":"2025-04-11T09:37:33.515-03:00"}
---

Uma série de potências é uma representação da forma:

$$\sum_{n=0}^{\infty} a_n (x - c)^n,$$

onde $a_n$ são os coeficientes, $c$ é o centro da série e $x$ é a variável.

## Raio De Convergência

O raio de convergência, denotado por $R$, é um número não negativo que define o intervalo em torno do centro $c$ onde a série converge absolutamente. Para calcular $R$, usamos a fórmula:

$$\frac{1}{R} = \lim_{n \to \infty} \left| \frac{a_n}{a_{n+1}} \right|.$$

Se o limite não existe, podemos usar outros métodos como o teste da razão ou o teste do radicando.

## Intervalo De Convergência

O intervalo de convergência é a sequência de números $x$ para os quais a série converge. Ele é determinado pelo raio de convergência $R$ e pode ser expresso no formato:

$$c - R < x < c + R.$$

É importante verificar os extremos do intervalo, pois a série pode ou não convergir nessas posições.

## Exemplo

Considere a série de potências:

$$\sum_{n=0}^{\infty} \frac{(x-2)^n}{3^n}.$$

1. **Raio de Convergência:**

   $$R = \lim_{n \to \infty} \left| \frac{a_n}{a_{n+1}} \right| = \lim_{n \to \infty} \left| \frac{\frac{1}{3^n}}{\frac{1}{3^{n+1}}} \right| = 3.$$

   Portanto, $R = 3$.

2. **Intervalo de Convergência:**
   O intervalo inicial é:

   $$-3 < x - 2 < 3,$$

   que simplifica para:

   $$-1 < x < 5.$$

3. **Verificação dos Extremos:**
   - Para $x = -1$, a série se torna $\sum_{n=0}^{\infty} \frac{(-3)^n}{3^n}$, que é uma série geométrica com razão $-1$. A série converge.
   - Para $x = 5$, a série se torna $\sum_{n=0}^{\infty} \frac{(3)^n}{3^n}$, que também é uma série geométrica com razão $1$. A série diverge.

Portanto, o intervalo de convergência final é:

$$-1 \leq x < 5.$$

Essa análise mostra como calcular e interpretar o raio e o intervalo de convergência para uma série de potências.
