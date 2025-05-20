---
{"dg-publish":true,"dg-show-local-graph":true,"permalink":"/Cálculo/Derivadas/Derivada Direcional/Derivada Direcional/","dgShowLocalGraph":true,"dgPassFrontmatter":true,"created":"2025-05-10T20:07:56.445-03:00"}
---




- **[[Cálculo/Derivadas/Derivada Direcional/Derivada Direcional\|Derivada Direcional]]**
	- [[Cálculo/Derivadas/Derivada Direcional/Taxa Máxima da Derivada Direcional\|Taxa Máxima da Derivada Direcional]]



A derivada direcional é uma generalização da noção de derivada unidimensional para funções multivariáveis. Ela permite calcular a taxa de mudança de uma função em uma direção específica no espaço, fornecendo uma medida mais precisa do comportamento local da função.

## Definição Formal

Considere uma função escalar $f: \mathbb{R}^n \to \mathbb{R}$ e um ponto $\mathbf{a} = (a_1, a_2, \ldots, a_n) \in \mathbb{R}^n$. A derivada direcional de $f$ em $\mathbf{a}$ na direção do vetor unitário $\mathbf{u} = (u_1, u_2, \ldots, u_n)$ é definida como:
$$
D_{\mathbf{u}} f(\mathbf{a}) = \lim_{h \to 0} \frac{f(\mathbf{a} + h\mathbf{u}) - f(\mathbf{a})}{h}
$$
Esta definição representa a taxa de mudança média da função $f$ ao se mover em direção $\mathbf{u}$, a partir do ponto $\mathbf{a}$, quando o deslocamento é pequeno ($h \to 0$).

## Intuição Geométrica

Geometricamente, a derivada direcional representa o declive da reta tangente à superfície definida por $f$ no ponto $\mathbf{a}$ na direção do vetor unitário $\mathbf{u}$. Se $\mathbf{u}$ for um dos vetores canônicos (por exemplo, $(1, 0, \ldots, 0)$), a derivada direcional reduz à derivada parcial correspondente. Por exemplo, para $f(x, y) = x^2 + y^2$, a derivada parcial em relação a $x$ no ponto $\mathbf{a} = (1, 1)$ é:
$$
\frac{\partial f}{\partial x}(1, 1) = 2 \cdot 1 = 2
$$
## Cálculo Da Derivada Direcional

Para calcular $D_{\mathbf{u}} f(\mathbf{a})$, pode-se usar a regra do produto vetorial:
$$
D_{\mathbf{u}} f(\mathbf{a}) = \nabla f(\mathbf{a}) \cdot \mathbf{u}
$$
onde $\nabla f(\mathbf{a})$ é o gradiente de $f$ em $\mathbf{a}$, definido como:
$$
\nabla f(\mathbf{a}) = \left( \frac{\partial f}{\partial x_1}(\mathbf{a}), \frac{\partial f}{\partial x_2}(\mathbf{a}), \ldots, \frac{\partial f}{\partial x_n}(\mathbf{a}) \right)
$$
O gradiente é um vetor que aponta na direção do maior aumento da função $f$ no ponto $\mathbf{a}$ e seu módulo representa a taxa de mudança máxima nessa direção.

## Exemplo

Considere a função $f(x, y) = x^2 + y^2$ e o ponto $\mathbf{a} = (1, 1)$.

1. **Gradiente de $f$:**
$$
   \nabla f(x, y) = \left( \frac{\partial}{\partial x}(x^2 + y^2), \frac{\partial}{\partial y}(x^2 + y^2) \right) = (2x, 2y)
$$
   Em $\mathbf{a} = (1, 1)$:
$$
   \nabla f(1, 1) = (2, 2)
$$
2. **Derivada direcional na direção do vetor unitário $\mathbf{u} = \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right)$:**
$$
   D_{\mathbf{u}} f(1, 1) = (2, 2) \cdot \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right) = 2 \cdot \frac{1}{\sqrt{2}} + 2 \cdot \frac{1}{\sqrt{2}} = 2\sqrt{2}
$$
Este exemplo ilustra como a derivada direcional pode ser calculada usando o gradiente e um vetor unitário, fornecendo uma medida da taxa de mudança da função em qualquer direção no espaço.
