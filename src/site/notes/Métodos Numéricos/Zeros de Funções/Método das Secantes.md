---
{"dg-publish":true,"permalink":"/metodos-numericos/zeros-de-funcoes/metodo-das-secantes/","created":"2025-05-20T13:30:13.847-03:00"}
---


O método das secantes é uma técnica iterativa utilizada para encontrar as raízes de uma função não-linear $f(x)$. É semelhante ao método da secante geométrica, onde se traça uma reta que passa por dois pontos consecutivos na curva da função e usa essa reta para aproximar a solução.

## Formulação Do Método

A fórmula iterativa do método das secantes é dada por:

$$
x_{n+1} = x_n - \frac{f(x_n)(x_n - x_{n-1})}{f(x_n) - f(x_{n-1})}
$$

onde:

- $x_n$ e $x_{n-1}$ são os valores de $x$ na iteração atual e anterior, respectivamente.
- $f(x)$ é a função cuja raiz estamos buscando.

## Passos Do Método

1. **Escolha Inicial dos Pontos:**
   - Selecione dois pontos iniciais próximos à raiz, geralmente denotados por $x_0$ e $x_1$.

2. **Iteração:**
   - Para cada iteração $n$, calcule o próximo valor de $x_{n+1}$ usando a fórmula acima.

3. **Convergência:**
   - A iteração continua até que a diferença entre os valores consecutivos seja menor do que um critério de parada $\epsilon$:
$$
 |x_{n+1} - x_n| < \epsilon
$$
4. **Exemplo:**
   Considere a função $f(x) = x^3 - 2x - 5$. Sejam os pontos iniciais $x_0 = 2$ e $x_1 = 2.5$.

   - Iteração 1:
$$
f(2) = 2^3 - 2\cdot2 - 5 = -1
$$

$$
f(2.5) = (2.5)^3 - 2\cdot2.5 - 5 = 4.875 
$$

$$
x_2 = 2.5 - \frac{4.875(2.5 - 2)}{4.875 + 1} \approx 2.094
$$
   - Iteração 2:
$$
f(2.094) \approx (2.094)^3 - 2\cdot2.094 - 5 \approx -0.678
$$

$$
x_3 = 2.094 - \frac{-0.678(2.094 - 2.5)}{-0.678 + 4.875} \approx 2.094551
$$

   Aproximadamente, a raiz é $x \approx 2.094551$.

## Exemplo em Python

```python
import math
import numpy


def secant_method(f, x0, x1, tol=1e-6, max_iter=100):
    """
    Find a root of the function f(x) = 0 using the Secant method.

    Parameters:
    f        -- Function for which the root is sought (callable)
    x0, x1   -- Initial approximations (floats)
    tol      -- Tolerance for stopping criterion (float, default 1e-6)
    max_iter -- Maximum number of iterations (int, default 100)

    Returns:
    result -- Dictionary with keys:
        'root'           : Approximated root (float)
        'function_value' : Value of f at the root (float)
        'iterations'     : Number of iterations performed (int)
        'converged'      : Boolean indicating if the method converged (bool)
    """
    fx0 = f(x0)
    fx1 = f(x1)
    iteration = 0
    while iteration < max_iter:
	# Check If The Denominator Is Too Close To Zero
        if abs(fx1 - fx0) < tol:
            return {
                'root': x1,
                'iterations': iteration,
                'function_value': fx1,
                'converged': abs(fx1) < tol
            }
		# Secant Method Formula
        x_new = x1 - fx1 * (x1 - x0) / (fx1 - fx0)
		# Update Values For Next Iteration
        x0, x1 = x1, x_new
        fx0, fx1 = fx1, f(x_new)
        iteration += 1
		# Check For Convergence
        if abs(fx1) < tol or (iteration > 0 and abs(x1 - x0) < tol):
            break
    return {
        'root': x1,
        'iterations': iteration,
        'function_value': fx1,
        'converged': iteration < max_iter
    }


if __name__ == "__main__":
    def example_function(x):
        return numpy.cos(x) - x

    result = secant_method(example_function, 0.5, 1, tol=1e-4)
    print(f"Approximate root: {result['root']}")
    print(f"Function value at the root: {result['function_value']}")
    print(f"Number of iterations: {result['iterations']}")
    print(f"Converged: {result['converged']}")
```

## Arquivo Adicional

![[Método Secantes.pdf]]
