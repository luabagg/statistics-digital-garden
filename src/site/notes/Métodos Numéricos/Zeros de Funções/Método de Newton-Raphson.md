---
{"dg-publish":true,"permalink":"/Métodos Numéricos/Zeros de Funções/Método de Newton-Raphson/","dgPassFrontmatter":true,"created":"2025-03-25T11:09:15.992-03:00"}
---


Considere a equação $f(x) = 0$, onde $f$ é uma função derivável no intervalo de interesse. O método de Newton-Raphson busca aproximar as raízes dessa equação através da seguinte fórmula iterativa:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

Aqui, $x_n$ é a estimativa atual e $x_{n+1}$ é a próxima estimativa. A função derivada $f'(x)$ é necessária para calcular o passo de atualização.

## Passos Do Método

1. **Escolha Inicial**: Escolha um valor inicial $x_0$ próximo à raiz desejada.
2. **Iteração**: Para cada iteração $n$, calcule a próxima estimativa usando a fórmula:

   $$
   x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
   $$

3. **Convergência**: O processo é repetido até que a diferença entre as estimativas consecutivas seja menor do que um valor de tolerância $\epsilon$:

   $$
   |x_{n+1} - x_n| < \epsilon
   $$

## Limitações

- **Derivada Nula**: O método falha se a derivada for zero em algum ponto.
- **Convergência Local**: A convergência é rápida perto da raiz, mas pode ser lenta ou não ocorrer longe dela.
- **Escolha Inicial**: A escolha inadequada do valor inicial pode levar à divergência.

## Exemplo Em Python

``` python
def newton_raphson(f, df, x0, tol=1e-6, max_iter=100):
    x = x0
    for i in range(max_iter):
        fx = f(x)
        dfx = df(x)
        
        if dfx == 0:
            raise ValueError(f"Derivada nula em x = {x}. O método falhou.")
        
        x_new = x - fx / dfx
        
        if abs(x_new - x) < tol:
            print(f"Convergiu em {i + 1} iterações.")
            return x_new
        
        x = x_new

    raise ValueError("Número máximo de iterações excedido.")

# Exemplo: f(x) = x^2 - 2 (raiz: sqrt(2))
f = lambda x: x**2 - 2
df = lambda x: 2*x

raiz = newton_raphson(f, df, x0=1.0)
	print(f"A raiz aproximada é: {raiz}")
```
