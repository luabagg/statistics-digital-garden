---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Série de Taylor/","dgPassFrontmatter":true,"created":"2025-05-20T13:30:13.836-03:00"}
---


## Definição

Uma série de Taylor de uma função $f(x)$ em torno de um ponto $x = a$ é dada por:
$$
f(x) \approx f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n
$$
Aqui, $f^{(n)}(a)$ representa a $n$-ésima derivada de $f(x)$ avaliada em $x = a$. A série completa é:
$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
$$
## Exemplos

1. **Exponencial:**
   A função exponencial $e^x$ tem uma série de Taylor em torno do ponto $x = 0$ (também conhecida como série de Maclaurin):
$$
   e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$
2. **Cosseno:**
   A função cosseno $\cos(x)$ tem a seguinte série de Taylor em torno do ponto $x = 0$:
$$
   \cos(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}
$$
3. **Seno:**
   A função seno $\sin(x)$ tem a seguinte série de Taylor em torno do ponto $x = 0$:
$$
   \sin(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}
$$
## Aplicações

As séries de Taylor são amplamente utilizadas em cálculos numéricos, onde elas permitem aproximar funções complexas por polinômios mais simples. Além disso, essas séries são cruciais na resolução de equações diferenciais e no desenvolvimento de algoritmos para computação científica.

## Convergência

A convergência das séries de Taylor depende do ponto $a$ escolhido e da função $f(x)$. Para muitas funções, a série converge para a função em um intervalo ao redor de $x = a$, conhecido como o intervalo de convergência.

### Raio de Convergência

Para determinar o raio de convergência de uma série de Taylor, podemos usar o teste do raio de Cauchy (ou teste da razão). O raio de convergência $R$ é dado pela fórmula:
$$
 R = \lim_{n \to \infty} \left| \frac{a_n}{a_{n+1}} \right| 
$$
onde $a_n = \frac{f^{(n)}(a)}{n!}(x-a)^n$ são os coeficientes da série de Taylor.

Vamos aplicar esse método aos exemplos fornecidos:

### Exemplo 1: Função Exponencial $e^x$

A série de Maclaurin (série de Taylor em torno do ponto $x = 0$) para a função exponencial é:
$$
 e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} 
$$
Neste caso, os coeficientes são $a_n = \frac{1}{n!}$.

Para encontrar o raio de convergência, usamos:
$$
 R = \lim_{n \to \infty} \left| \frac{a_n}{a_{n+1}} \right| = \lim_{n \to \infty} \left| \frac{\frac{1}{n!}}{\frac{1}{(n+1)!}} \right| = \lim_{n \to \infty} \left| \frac{(n+1)!}{n!} \right| = \lim_{n \to \infty} (n+1) = \infty 
$$
Portanto, o raio de convergência é $R = \infty$, o que significa que a série converge para toda $x$.

### Exemplo 2: Função Cosseno $\cos(x)$

A série de Taylor em torno do ponto $x = 0$ para a função cosseno é:
$$
 \cos(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!} 
$$
Neste caso, os coeficientes são $a_n = (-1)^n \frac{1}{(2n)!}$.

Para encontrar o raio de convergência, usamos:
$$
 R = \lim_{n \to \infty} \left| \frac{a_n}{a_{n+1}} \right| = \lim_{n \to \infty} \left| \frac{(-1)^n \frac{1}{(2n)!}}{(-1)^{n+1} \frac{1}{(2(n+1))!}} \right| = \lim_{n \to \infty} \left| \frac{(2(n+1))!}{(2n)!} \cdot \frac{1}{-1} \right| = \lim_{n \to \infty} (2n+2)(2n+1) = \infty 
$$
Portanto, o raio de convergência é $R = \infty$, o que significa que a série converge para toda $x$.

### Exemplo 3: Função Seno $\sin(x)$

A série de Taylor em torno do ponto $x = 0$ para a função seno é:
$$
 \sin(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!} 
$$
Neste caso, os coeficientes são $a_n = (-1)^n \frac{1}{(2n+1)!}$.

Para encontrar o raio de convergência, usamos:
$$
 R = \lim_{n \to \infty} \left| \frac{a_n}{a_{n+1}} \right| = \lim_{n \to \infty} \left| \frac{(-1)^n \frac{1}{(2n+1)!}}{(-1)^{n+1} \frac{1}{(2(n+1)+1)!}} \right| = \lim_{n \to \infty} \left| \frac{(2(n+1)+1)!}{(2n+1)!} \cdot \frac{1}{-1} \right| = \lim_{n \to \infty} (2n+3)(2n+2) = \infty 
$$
Portanto, o raio de convergência é $R = \infty$, o que significa que a série converge para toda $x$.

## Desigualdade de Taylor

A desigualdade de Taylor fornece um limite superior para o erro cometido ao aproximar uma função por sua série de Taylor. É uma ferramenta fundamental na análise de convergência e no estudo da precisão das aproximações polinomiais.

### Formulando a Desigualdade

Considere a função $f(x)$ que é $(n+1)$-vezes diferenciável em um intervalo contendo o ponto $a$ e $x$. A desigualdade de Taylor pode ser expressa como:
$$
| f(x) - P_n(x) | \leq \frac{M}{(n+1)!} | x-a |^{n+1}
$$
onde:

- $P_n(x)$ é o polinômio de Taylor de grau $n$ de $f(x)$ em torno de $a$.
- $M$ é uma constante tal que $| f^{(n+1)}(t) | \leq M$ para algum $t$ entre $a$ e $x$.

### Aplicação da Desigualdade

A desigualdade de Taylor é útil em várias situações, como:

- **Estimativa do Erro**: Para quantificar a precisão de uma aproximação polinomial.
- **Convergência de Séries**: Verificar se uma série converge para a função original.

### Exemplos

#### Exemplo 1: Função Cosseno $\cos(x)$

Para a função $\cos(x)$, temos:
$$
\cos(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}
$$
A desigualdade de Taylor para o erro cometido ao aproximar $\cos(x)$ por seu polinômio de Taylor de grau $n$ é:
$$
| \cos(x) - P_n(x) | \leq \frac{M}{(n+1)!} | x-a |^{n+1}
$$
Para encontrar uma constante $M$, notamos que a derivada $(2n+1)$-ésima de $\cos(x)$ é sempre limitada por 1. Portanto, podemos escolher $M = 1$.

#### Exemplo 2: Função Seno $\sin(x)$

Para a função $\sin(x)$, temos:
$$
\sin(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}
$$
A desigualdade de Taylor para o erro cometido ao aproximar $\sin(x)$ por seu polinômio de Taylor de grau $n$ é:
$$
| \sin(x) - P_n(x) | \leq \frac{M}{(n+1)!} | x-a |^{n+1}
$$
Similarmente, a derivada $(2n+2)$-ésima de $\sin(x)$ é sempre limitada por 1. Portanto, podemos escolher $M = 1$.
