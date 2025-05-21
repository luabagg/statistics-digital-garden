---
{"dg-publish":true,"permalink":"/calculo/derivadas/diferenciabilidade-de-uma-funcao/","created":"2025-05-20T13:30:13.827-03:00"}
---


A **diferenciabilidade** de uma função real de uma variável em um ponto $x_0$ é definida pela existência de um número real $L$ tal que:

$$
\lim_{h \to 0} \frac{f(x_0 + h) - f(x_0) - Lh}{h} = 0.
$$

Esse limite expressa que a função $f$ pode ser bem aproximada, em uma vizinhança de $x_0$, por uma função linear de inclinação $L$, que é exatamente a derivada $f’(x_0)$. Isso significa que a reta tangente ao gráfico de $f$ no ponto $(x_0, f(x_0))$ tem coeficiente angular $L$.

A função é **diferenciável** em um intervalo se for diferenciável em todos os seus pontos. Vale destacar que:

- Se $f$ é diferenciável em $x_0$, então $f$ é contínua em $x_0$.
- O recíproco não é verdadeiro: uma função pode ser contínua em $x_0$ e não ser diferenciável nesse ponto.

    _Exemplo clássico_: $f(x) = |x|$ é contínua em todo $\mathbb{R}$, mas não é diferenciável em $x = 0$.

---

Para uma função de **duas variáveis**, $f: \mathbb{R}^2 \to \mathbb{R}$, dizemos que ela é **diferenciável** em um ponto $(x_0, y_0)$ se existem números reais $A$ e $B$ tais que:

$$
f(x, y) = f(x_0, y_0) + A(x - x_0) + B(y - y_0) + r(x, y),
$$

com:

$$
\lim_{(x, y) \to (x_0, y_0)} \frac{r(x, y)}{\sqrt{(x - x_0)^2 + (y - y_0)^2}} = 0.
$$

Os números $A$ e $B$ correspondem às **derivadas parciais** da função em $(x_0, y_0)$:

$$
A = \frac{\partial f}{\partial x}(x_0, y_0), \quad B = \frac{\partial f}{\partial y}(x_0, y_0).
$$

Ou seja, a função $f$ é diferenciável em $(x_0, y_0)$ se ela pode ser bem aproximada por seu **plano tangente** naquela vizinhança, com um erro $r(x, y)$ que é desprezível em comparação com a distância euclidiana entre $(x, y)$ e $(x_0, y_0)$.

---

## **Teorema Da Diferenciabilidade (Funções de Duas variáveis)**

Se $f: \mathbb{R}^2 \to \mathbb{R}$ possui as derivadas parciais $\frac{\partial f}{\partial x}$ e $\frac{\partial f}{\partial y}$ em uma vizinhança de $(x_0, y_0)$, **e essas derivadas parciais são contínuas em $(x_0, y_0)$**, então $f$ é diferenciável em $(x_0, y_0)$.

Esse resultado garante que a continuidade das derivadas parciais é uma **condição suficiente**, mas **não necessária**, para a diferenciabilidade.

---

## **Exemplo:**

Considere a função:

$$
f(x, y) = x^2 + y^2.
$$

As derivadas parciais são:

$$
\frac{\partial f}{\partial x} = 2x, \quad \frac{\partial f}{\partial y} = 2y.
$$

Essas derivadas são contínuas em todo o plano $\mathbb{R}^2$, logo, pelo teorema da diferenciabilidade, $f$ é diferenciável em todo $\mathbb{R}^2$.

A aproximação linear de $f$ em $(x_0, y_0)$ é:

$$
f(x, y) \approx f(x_0, y_0) + 2x_0(x - x_0) + 2y_0(y - y_0),
$$

e o termo de erro $r(x, y)$ satisfaz:

$$
\lim_{(x, y) \to (x_0, y_0)} \frac{r(x, y)}{\sqrt{(x - x_0)^2 + (y - y_0)^2}} = 0.
$$
