---
{"dg-publish":true,"permalink":"/Cálculo/Derivadas/Regras da Cadeia/","dgPassFrontmatter":true,"created":"2025-05-05T08:41:45.697-03:00"}
---

Imagine que você tem uma função $z$, e ela depende de uma variável $x$. Só que, por sua vez, $x$ também depende de outra variável, que é $y$. Ou seja, $z$ é afetado por $x$, e $x$ é afetado por $y$ — logo, **$z$ também depende de $y$, mesmo que de forma indireta**.

É aí que entra a **regra da cadeia**: ela nos ajuda a entender **como** uma mudança em $y$ influencia $z$, passando por $x$ no caminho. Esse tipo de raciocínio é comum quando lidamos com **funções compostas**, ou seja, funções dentro de funções.

## Um Exemplo prático

Suponha que você tenha:

- $z = f(x, y)$ (uma função que depende de $x$ e $y$)

- $x = g(y)$ (ou seja, $x$ depende de $y$)

Você quer saber: **“Se eu mudar um pouquinho o valor de $y$, o que acontece com $z$?”**

A resposta é dada pela regra da cadeia:

$$

\frac{\partial z}{\partial y} = \frac{\partial z}{\partial x} \cdot \frac{\partial x}{\partial y}

$$

Esse cálculo diz que você precisa ver:

1. **Quanto $z$ muda em relação a $x$** ($\frac{\partial z}{\partial x}$), e

2. **Quanto $x$ muda em relação a $y$** ($\frac{\partial x}{\partial y}$)

Multiplicando essas duas coisas, você obtém **quanto $z$ muda em relação a $y$**.

---

## Fórmula Específica

A fórmula:

$$

\frac{\partial z}{\partial y} = -\frac{f_x}{f_y}

$$

parece diferente, mas ela aparece em **casos bem específicos**. Ela sugere que a relação entre $x$ e $y$ é tal que a mudança em um “anula” a do outro, mantendo $z$ constante — por isso o sinal de menos.

Isso acontece, por exemplo, em situações onde você tem uma **equação implícita** (tipo $f(x, y) = c$, com $c$ constante). Nesses casos, $z$ não está explicitamente definido como função de $x$ e $y$, mas mesmo assim é possível deduzir como uma variável afeta a outra.
