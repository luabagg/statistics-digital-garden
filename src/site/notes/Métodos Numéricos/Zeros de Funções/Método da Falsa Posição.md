---
{"dg-publish":true,"permalink":"/metodos-numericos/zeros-de-funcoes/metodo-da-falsa-posicao/","created":"2025-05-20T13:30:13.846-03:00"}
---


O método da falsa posição, também conhecido como método dos segmentos ou método das retas secantes, é um algoritmo numérico utilizado para encontrar raízes aproximadas de uma função contínua. Este método combina a simplicidade do método das retas secantes com a eficiência do método da bisseção.

## Aplicação e Contexto

Este método é especialmente útil quando se tem duas aproximações iniciais $a$ e $b$ tais que $f(a)$ e $f(b)$ têm sinais opostos, garantindo assim a existência de pelo menos uma raiz no intervalo $[a, b]$. A função $f(x)$ deve ser contínua em todo o intervalo considerado.

## Formulação Do Método

O método da falsa posição envolve iterativamente reduzir o tamanho do intervalo onde a raiz está localizada. Na cada iteração, uma nova aproximação para a raiz é calculada usando a fórmula:

$$
x_n = \frac{a_{n-1}f(b_{n-1}) - b_{n-1}f(a_{n-1})}{f(b_{n-1}) - f(a_{n-1})}
$$

onde $a_{n-1}$ e $b_{n-1}$ são os valores dos extremos do intervalo atual, e $x_n$ é a nova aproximação.

### Exemplo de Aplicação

Considere a função $f(x) = x^3 - 2x - 5$. Sejam as aproximações iniciais $a_0 = 1$ e $b_0 = 2$, pois $f(1) < 0$ e $f(2) > 0$.

- **Iteração 1:**
$$
x_1 = \frac{1 \cdot f(2) - 2 \cdot f(1)}{f(2) - f(1)} = \frac{1 \cdot (8 - 3) - 2 \cdot (-2 - 5)}{(8 - 3) - (-2 - 5)} = \frac{5 + 14}{11 + 7} = \frac{19}{18} \approx 1.056
$$
- **Iteração 2:**
$$
x_2 = \frac{1 \cdot f(1.056) - 1.056 \cdot f(1)}{f(1.056) - f(1)}
$$

  Calculando $f(1.056)$:

$$
f(1.056) = (1.056)^3 - 2(1.056) - 5 \approx -4.87
$$

  Então:

$$
x_2 = \frac{1 \cdot (-4.87) - 1.056 \cdot (-2)}{-4.87 - (-2)} = \frac{-4.87 + 2.112}{-4.87 + 2} = \frac{-2.758}{-2.87} \approx 0.963
$$

### Exemplo em Python

```python
import math

def false_position(f, a, b, tol=1e-6, max_iter=100):
    """
    Find a root of the function f(x) = 0 in the interval [a, b] using the Regula Falsi (False Position) method.

    Parameters:
    f        -- Function for which the root is sought (callable)
    a, b     -- Interval endpoints (floats), must satisfy f(a)*f(b) < 0
    tol      -- Tolerance for stopping criterion (float, default 1e-6)
    max_iter -- Maximum number of iterations (int, default 100)

    Returns:
    result -- Dictionary with keys:
        'root'           : Approximated root (float)
        'function_value' : Value of f at the root (float)
        'iterations'     : Number of iterations performed (int)
        'converged'      : Boolean indicating if the method converged (bool)
    """
    if f(a) * f(b) >= 0:
        raise ValueError("The function must change sign in the interval [a, b].")
    
    iter_count = 0
    fa = f(a)
    fb = f(b)
    error = tol + 1
    c_previous = None
    c = a  # Initialize c in case the loop does not run
    fc = f(c)
    
    while error > tol and iter_count < max_iter:
        c = (a * fb - b * fa) / (fb - fa)
        fc = f(c)
        
        if c_previous is not None:
            error = abs(c - c_previous)
        else:
            error = abs(fc)

        if abs(fc) < tol:
            break
        
        if fa * fc < 0:
            b = c
            fb = fc
        else:
            a = c
            fa = fc
        
        c_previous = c
        iter_count += 1
    
    return {
        "root": c,
        "function_value": fc,
        "iterations": iter_count,
        "converged": abs(fc) < tol or error < tol,
    }

def example1(x):
    """
    Example function: f(x) = x + 3*cos(x) - exp(x)
    """
    return x + 3*math.cos(x) - math.exp(x)

if __name__ == "__main__":
    result = false_position(example1, 0, 1, tol=0.001)
    print(f"Approximate root: {result['root']}")
    print(f"Function value at the root: {result['function_value']}")
    print(f"Number of iterations: {result['iterations']}")
    print(f"Converged: {result['converged']}")
```

## Arquivo Adicional

![[Método Falsa Posição.pdf]]
