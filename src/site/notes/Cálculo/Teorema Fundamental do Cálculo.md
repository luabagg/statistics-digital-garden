---
{"dg-publish":true,"permalink":"/Cálculo/Teorema Fundamental do Cálculo/","tags":["Derivadas","Integrais","Limites"],"created":"2025-05-21T08:21:46.401-03:00"}
---


O Teorema Fundamental do Cálculo é uma das ideias mais importantes e poderosas em matemática, estabelecendo a relação entre a [derivada](Derivadas) e a [integral](Integrais). Ele consiste em dois princípios fundamentais:

1. **Princípio I (Parte 1):** Se $f$ é uma função contínua em um intervalo fechado $[a, b]$, então a função $F$ definida por
$$
   F(x) = \int_a^x f(t) \, dt
$$

   é uma antiderivada de $f$. Isso significa que $F'(x) = f(x)$ para todo $x$ no intervalo $[a, b]$.

2. **Princípio II (Parte 2):** Se $f$ é uma função contínua em um intervalo fechado $[a, b]$, e se $F$ é qualquer antiderivada de $f$ no intervalo $[a, b]$, então
$$
   \int_a^b f(x) \, dx = F(b) - F(a).
$$

## Exemplos

**Exemplo 1:** Considere a função $f(x) = x^2$. Podemos encontrar uma antiderivada de $f$, que é $F(x) = \frac{x^3}{3} + C$. De acordo com o Princípio I, se $G(x) = \int_0^x t^2 \, dt$, então
$$
   G'(x) = x^2.
$$
**Exemplo 2:** Para calcular a integral definida $\int_1^3 (2x + 1) \, dx$, podemos usar o Princípio II. Uma antiderivada de $2x + 1$ é $F(x) = x^2 + x$. Então,
$$
   \int_1^3 (2x + 1) \, dx = F(3) - F(1) = (3^2 + 3) - (1^2 + 1) = 9 + 3 - 1 - 1 = 10.
$$

## Aplicações Práticas

O Teorema Fundamental do Cálculo é crucial em muitas áreas da ciência e engenharia, pois permite a avaliação de integrais definidas sem o uso de limites de somatórios. Isso facilita enormemente o cálculo de áreas sob curvas, volumes de sólidos de revolução, e soluções de problemas envolvendo fluxos, trabalho, energia, entre outros.

## Conclusão

O Teorema Fundamental do Cálculo é uma ferramenta essencial que conecta a teoria da derivada com a teoria da integral, permitindo um entendimento mais profundo dos conceitos fundamentais do cálculo.
