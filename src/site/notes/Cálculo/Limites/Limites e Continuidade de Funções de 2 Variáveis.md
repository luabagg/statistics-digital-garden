---
{"dg-publish":true,"permalink":"/Cálculo/Limites/Limites e Continuidade de Funções de 2 Variáveis/","dgPassFrontmatter":true,"created":"2025-04-23T08:06:53.099-03:00"}
---


## Definição De Limite

O limite de uma função $f(x, y)$ em um ponto $(a, b)$ é o valor que a função se aproxima quando as variáveis $x$ e $y$ se aproximam do ponto $(a, b)$. Matematicamente, dizemos que:
$$
\lim_{(x,y) \to (a,b)} f(x, y) = L
$$
se para todo $\epsilon > 0$, existe um $\delta > 0$ tal que:
$$
0 < \sqrt{(x-a)^2 + (y-b)^2} < \delta \implies |f(x, y) - L| < \epsilon
$$
## Cálculo De Limites

Para calcular limites de funções bidimensionais, é comum usar a substituição direta ou métodos como o uso de caminhos. Por exemplo:

- **Substituição Direta**: Se $f(a, b)$ está definida e finita, então $\lim_{(x,y) \to (a,b)} f(x, y) = f(a, b)$.
- **Caminhos Diferentes**: Verificar se o limite é o mesmo ao seguir diferentes caminhos pode indicar a existência do limite. Por exemplo:
  - Ao considerar $y = mx$, temos $\lim_{(x,y) \to (a,b)} f(x, mx)$.
  - Ao considerar $y = x^2$, temos $\lim_{(x,y) \to (a,b)} f(x, x^2)$.

## Exemplo

Considere a função:
$$
f(x, y) = \frac{x^2 - y^2}{x^2 + y^2}
$$
Para calcular $\lim_{(x,y) \to (0,0)} f(x, y)$, podemos usar diferentes caminhos:

- **Caminho $y = 0$**:
$$
\lim_{x \to 0} f(x, 0) = \lim_{x \to 0} \frac{x^2}{x^2} = 1
$$
- **Caminho $y = x$**:
$$
\lim_{x \to 0} f(x, x) = \lim_{x \to 0} \frac{0}{2x^2} = 0
$$
Como os limites são diferentes para caminhos distintos, concluímos que o limite não existe.

## Continuidade De Funções De Duas Variáveis

### Definição De Continuidade

ma função $f(x, y)$ é contínua em um ponto $(a, b)$ se:
$$
\lim_{(x,y) \to (a,b)} f(x, y) = f(a, b)
$$
Isso significa que a função tem um valor definido no ponto e que esse valor é igual ao limite da função quando as variáveis $x$ e $y$ se aproximam do ponto $(a, b)$.

### Exemplos De Funções Contínuas E Não-contínuas

1. **Função Contínua**:
   - Considere a função $f(x, y) = x^2 + y^2$.
     - Esta função é polinomial em duas variáveis.
     - Polinômios são contínuos em todo ponto do plano cartesiano.
     - Portanto, $f(x, y) = x^2 + y^2$ é contínua em todo ponto $(x, y)$.

2. **Função Não-Contínua**:
   - Considere a função:
$$
     f(x, y) = \begin{cases} 

     \frac{x^2 - y^2}{x^2 + y^2} & \text{se } (x, y) \neq (0, 0) \\

     1 & \text{se } (x, y) = (0, 0)

     \end{cases}
$$
  - **Análise do Limite em $(0, 0)$**:
     - Para verificar a continuidade em $(0, 0)$, precisamos calcular o limite da função quando $(x, y) \to (0, 0)$.
     - Usando diferentes caminhos, encontramos resultados diferentes:
       - **Caminho $y = 0$**:
$$
         \lim_{(x,y) \to (0,0)} f(x, 0) = \lim_{x \to 0} \frac{x^2}{x^2} = 1
$$
       - **Caminho $y = x$**:
$$
         \lim_{(x,y) \to (0,0)} f(x, x) = \lim_{x \to 0} \frac{x^2 - x^2}{x^2 + x^2} = \lim_{x \to 0} \frac{0}{2x^2} = 0
$$
     - Como os limites são diferentes para caminhos distintos, concluímos que o limite não existe em $(0, 0)$.
     - Portanto, a função $f(x, y)$ é **não-continua** no ponto $(0, 0)$.

### Continuidade De Funções Racionais Em Duas Variáveis

Funções racionais bidimensionais são formadas pela divisão de polinômios em duas variáveis. Elas são contínuas em todo ponto do plano cartesiano onde o denominador não é zero.

- **Exemplo**:
  - Considere a função $f(x, y) = \frac{x^2 + y^2}{x^2 + y^2 + 1}$.
    - O denominador $x^2 + y^2 + 1$ nunca é zero para qualquer ponto $(x, y)$ no plano cartesiano.
    - Portanto, a função é contínua em todo ponto do plano.
