---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Série de Maclaurin/","dgPassFrontmatter":true,"created":"2025-04-07T08:45:29.005-03:00"}
---


## Introdução à Série De Maclaurin

A **Série de Maclaurin** é um caso especial da [[Cálculo/Séries Infinitas/Série de Taylor\|Série de Taylor]], que permite aproximar uma função matemática usando um polinômio infinito. Essa série é particularmente útil para calcular valores aproximados de funções complexas, especialmente quando a função pode ser expressa em termos de sua derivada no ponto zero.

A forma geral da **Série de Maclaurin** para uma função $f(x)$ é dada por:

$$
f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots
$$

### Exemplos De Série De Maclaurin

1. **Exemplo 1: Função $e^x$**
   A função exponencial $e^x$ tem uma série de Maclaurin que é bastante simples e útil:

   $$
   e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
   $$

2. **Exemplo 2: Função $\sin(x)$**
   A função seno tem a seguinte série de Maclaurin:

   $$
   \sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots
   $$

3. **Exemplo 3: Função $\cos(x)$**
   A função cosseno também pode ser representada por uma série de Maclaurin:

   $$
   \cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots
   $$

### Raio De Convergência

O **Raio de Convergência** é um valor $R$ que determina o intervalo em torno do ponto zero onde a série converge. Para uma série de Maclaurin, se a série converge para $x = R$, então ela converge absolutamente para todos os valores $|x| < R$. O raio de convergência pode ser calculado usando testes como o Teste da Raiz ou o Teste do Termo Consecutivo.

Por exemplo, considerando a série de Maclaurin para $e^x$:

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

Podemos usar o Teste da Raiz para encontrar que o raio de convergência é infinito, indicando que a série converge para todos os valores de $x$.

Em resumo, as séries de Maclaurin são ferramentas poderosas na matemática aplicada e teórica, permitindo a aproximação de funções complexas por polinômios. O raio de convergência é crucial para entender em qual intervalo essas aproximações são válidas.
