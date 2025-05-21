---
{"dg-publish":true,"permalink":"/Métodos Numéricos/Zeros de Funções/Método de Newton-Raphson/","created":"2025-05-20T13:30:13.847-03:00"}
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

## Exemplo em Python

``` python
from sympy import symbols, diff, lambdify

def newton_raphson(f, df, x0, tol=1e-6, max_iter=100):
    """
    Find a root of the function f(x) = 0 using the Newton-Raphson method.

    Parameters:
    f        -- Function for which the root is sought (callable)
    df       -- Derivative of f (callable)
    x0       -- Initial guess (float)
    tol      -- Tolerance for stopping criterion (float, default 1e-6)
    max_iter -- Maximum number of iterations (int, default 100)

    Returns:
    result -- Dictionary with keys:
        'root'           : Approximated root (float)
        'function_value' : Value of f at the root (float)
        'iterations'     : Number of iterations performed (int)
        'converged'      : Boolean indicating if the method converged (bool)
    """
    x = x0
    for i in range(1, max_iter + 1):
        fx = f(x)
        dfx = df(x)
        if dfx == 0:
            raise ValueError(f"Zero derivative at x = {x}. Method failed.")
        x_new = x - fx / dfx
        if abs(x_new - x) < tol:
            return {
                'root': x_new,
                'function_value': f(x_new),
                'iterations': i,
                'converged': True
            }
        x = x_new
    return {
        'root': x,
        'function_value': f(x),
        'iterations': max_iter,
        'converged': False
    }

if __name__ == "__main__":
    x = symbols('x')
    # Example: f(x) = x^2 - 2 (root: sqrt(2))
    f_expr = x**2 - 2
    df_expr = diff(f_expr, x)
    # Convert symbolic expressions to numeric functions (for use in the method)
    f = lambdify(x, f_expr, 'math')
    df = lambdify(x, df_expr, 'math')
    print(f"Function: {f_expr}")
    print(f"Derivative: {df_expr}")
    result = newton_raphson(f, df, x0=1.25, tol=1e-4, max_iter=100)
    print(f"Approximate root: {result['root']}")
    print(f"Function value at the root: {result['function_value']}")
    print(f"Number of iterations: {result['iterations']}")
    print(f"Converged: {result['converged']}")
```
