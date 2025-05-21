---
{"dg-publish":true,"permalink":"/Cálculo/Séries Infinitas/Série Geométrica/","created":"2025-05-20T13:30:13.834-03:00"}
---


Uma série geométrica é caracterizada por ter uma razão constante (r) entre termos consecutivos. A forma geral de uma série geométrica é:

$$
 a + ar + ar^2 + ar^3 + … = \sum_{n=0}^{\infty} ar^n 
$$

Onde 'a' é o primeiro termo e 'r' é a razão da série. A convergência de uma série geométrica depende diretamente do valor absoluto da razão |r|.

## Convergência de Séries Geométricas

Uma série geométrica pode convergir ou divergir dependendo do valor da razão r:

- **Quando |r| < 1:** A série converge para a soma:
$$
 \sum_{n=0}^{\infty} ar^n = \frac{a}{1-r} 
$$
- **Quando |r| ≥ 1:** A série diverge (não tem soma definida)

Exemplo: Para a série geométrica com a = 2 e r = 1/2:

$$
 2 + 1 + \frac{1}{2} + \frac{1}{4} + … 
$$

Como |r| = |1/2| = 0.5 < 1, a série converge e podemos calcular sua soma:

$$
 \frac{2}{1-\frac{1}{2}} = \frac{2}{\frac{1}{2}} = 4 
$$

### Casos Especiais

- **r = 1:** A série diverge para +∞ (se a > 0)
- **r = -1:** A série oscila e diverge
- **r = 0:** A série tem apenas um termo (a) e converge trivialmente
