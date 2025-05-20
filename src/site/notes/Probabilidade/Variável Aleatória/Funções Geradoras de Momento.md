---
{"dg-publish":true,"permalink":"/Probabilidade/Variável Aleatória/Funções Geradoras de Momento/","created":"2025-05-20T13:30:13.854-03:00"}
---


## Definição e Introdução

As funções geradoras de momento (FGM) são ferramentas poderosas em teoria das probabilidades e estatística. Elas permitem a obtenção de informações sobre a distribuição de uma variável aleatória através da análise de suas momentos, que são valores esperados de potências da variável.

## Tipos de Funções Geradoras de Momento

Existem três tipos principais de funções geradoras de momento:

1. **Função Geradora de Momento (MGF)**
2. **Função Geradora de Momento Central (CGF)**
3. **Função Geradora de Momento Asimétrico (AGF)**

### Função Geradora de Momento (MGF)

A função geradora de momento é definida como:
$$
M_X(t) = E(e^{tX})
$$
onde $X$ é uma variável aleatória e $t$ é um parâmetro real. A MGF existe se a esperança $E(e^{tX})$ for finita para algum intervalo de $t$.

**Exemplo:**
Para uma variável aleatória exponencial com parâmetro $\lambda$, a função geradora de momento é:
$$
M_X(t) = \frac{\lambda}{\lambda - t} \quad \text{para} \quad t < \lambda
$$
### Função Geradora de Momento Central (CGF)

A função geradora de momento central é definida como:
$$
C_X(t) = E(e^{tX^2/2})
$$
ela fornece informações sobre a distribuição em termos dos momentos centrados.

**Exemplo:**
Para uma variável aleatória normal $N(\mu, \sigma^2)$, a CGF é:
$$
C_X(t) = e^{\mu t + \frac{1}{2} \sigma^2 t^2}
$$
### Função Geradora de Momento Asimétrico (AGF)

A função geradora de momento asimétrico é definida como:
$$
A_X(t) = E(e^{tX - \mu X})
$$
onde $\mu$ é a média da variável aleatória.

**Exemplo:**
Para uma variável aleatória log-normal, a AGF é:
$$
A_X(t) = e^{\mu t + \frac{1}{2} \sigma^2 t^2}
$$
## Propriedades das Funções Geradoras de Momento

As FGM possuem várias propriedades úteis:

- **Unicidade**: Se $M_X(t) = M_Y(t)$, então $X$ e $Y$ têm a mesma distribuição.
- **Momentos**: Os momentos da variável aleatória podem ser obtidos através das derivadas da função geradora de momento. Por exemplo, o primeiro momento (esperança) é dado por:
$$
  E(X) = M_X'(0)
$$
## Aplicações

As FGM são amplamente utilizadas em várias áreas:

- **Teoria dos Sinais**: Para análise de sistemas lineares e não-lineares.
- **Física Estatística**: Para modelagem de fenômenos físicos.
- **Economia Financeira**: Para análise de riscos e portfólios.

## Conclusão

As funções geradoras de momento são ferramentas essenciais na teoria das probabilidades, permitindo a obtenção de informações sobre distribuições de variáveis aleatórias através da análise de seus momentos.
