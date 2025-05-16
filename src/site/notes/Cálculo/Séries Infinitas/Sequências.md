---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Sequências/","dgPassFrontmatter":true,"created":"2025-03-22T17:02:11.163-03:00"}
---

## Introdução Às Sequências no Cálculo

As sequências são estruturas fundamentais na matemática e desempenham um papel crucial no campo do cálculo. Uma sequência é definida como uma lista ordenada de números, onde cada número é chamado de termo da sequência. Matematicamente, podemos representar uma sequência como $\{a_n\}_{n=1}^{\infty}$, onde $a_n$ denota o $n$-ésimo termo da sequência.

### Tipos De Sequências

Existem vários tipos de sequências com propriedades e comportamentos distintos:

- **Sequências Aritméticas**: Essas sequências têm uma diferença constante entre seus termos consecutivos. Por exemplo, a sequência $1, 3, 5, 7, \ldots$ é aritmética, com uma razão de 2.
- **Sequências Geométricas**: Aqui, cada termo é obtido multiplicando o termo anterior por um número constante chamado razão. Por exemplo, a sequência $2, 6, 18, 54, \ldots$ é geométrica, com uma razão de 3.
- **Sequências Recursivas**: Essas sequências são definidas em termos dos próprios termos anteriores. Por exemplo, a sequência de Fibonacci $0, 1, 1, 2, 3, 5, \ldots$ é definida por $F_n = F_{n-1} + F_{n-2}$ para $n > 1$, com $F_0 = 0$ e $F_1 = 1$.

### Aplicações Das Sequências

Sequências têm inúmeras aplicações no cálculo e em outras áreas da matemática:

- **Séries Infinitas**: As séries infinitas são somas de termos de uma sequência. Por exemplo, a série geométrica $\sum_{n=0}^{\infty} x^n$ converge para $\frac{1}{1-x}$ quando $|x| < 1$.
- **Convergência e Divergência**: Determinar se uma sequência converge ou diverge é crucial. Uma sequência convergente tem um limite finito, enquanto uma divergente não tem esse limite.

### Exemplos De Sequências

- **Sequência Aritmética**: $a_n = 2n - 1$ (exemplo: 1, 3, 5, 7, …)
- **Sequência Geométrica**: $b_n = 3^n$ (exemplo: 3, 9, 27, 81, …)
- **Sequência Recursiva**: $c_n = c_{n-1} + n$, com $c_0 = 0$ (exemplo: 0, 1, 3, 6, 10, …)

Estas sequências ilustram a diversidade e importância das sequências no cálculo.

## Convergência E Limites

Um conceito fundamental no cálculo é o limite de uma sequência. Um limite de uma sequência $\{a_n\}_{n=1}^{\infty}$ é um número real $L$ tal que os termos da sequência se aproximam arbitrariamente próximo a $L$ à medida que $n$ aumenta indefinidamente.

- **Exemplo**: A sequência $a_n = \frac{1}{n}$ tem limite 0, pois $\lim_{n \to \infty} \frac{1}{n} = 0$.

O estudo da convergência de sequências é fundamental no cálculo. Uma sequência converge quando seus termos se aproximam cada vez mais de um valor específico (limite).

Uma sequência pode ser:

- **Convergente:** Possui um limite finito
- **Divergente:** Não possui limite ou tende ao infinito
