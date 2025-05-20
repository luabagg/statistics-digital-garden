---
{"dg-publish":true,"dg-show-local-graph":true,"permalink":"/Métodos Numéricos/Resolução de Sistemas Lineares/Resolução de Sistemas Lineares/","dgShowLocalGraph":true,"dgPassFrontmatter":true,"created":"2025-04-01T10:43:09.237-03:00"}
---




- **[[Métodos Numéricos/Resolução de Sistemas Lineares/Resolução de Sistemas Lineares\|Resolução de Sistemas Lineares]]**
	- [[Métodos Numéricos/Resolução de Sistemas Lineares/Fatoração LU\|Fatoração LU]]
	- [[Métodos Numéricos/Resolução de Sistemas Lineares/Interpolação Polinimial\|Interpolação Polinimial]]
	- [[Métodos Numéricos/Resolução de Sistemas Lineares/Método de Eliminação de Gauss\|Método de Eliminação de Gauss]]
	- [[Métodos Numéricos/Resolução de Sistemas Lineares/Método de Gauss-Jacobi\|Método de Gauss-Jacobi]]
	- [[Métodos Numéricos/Resolução de Sistemas Lineares/Método de Gauss-Seidel\|Método de Gauss-Seidel]]
	- [[Métodos Numéricos/Resolução de Sistemas Lineares/Métodos Diretos - Sistema Triangular\|Métodos Diretos - Sistema Triangular]]
	- [[Métodos Numéricos/Resolução de Sistemas Lineares/Métodos Iterativos\|Métodos Iterativos]]
	- [[Métodos Numéricos/Resolução de Sistemas Lineares/Teorema Condição Suficiente de Converência do Método de Gauss-Jacobi\|Teorema Condição Suficiente de Converência do Método de Gauss-Jacobi]]



## Linearidade De Funções

Uma função $f$ é dita linear se satisfaz as seguintes propriedades:

1. **Aditividade**: Para quaisquer valores $x$ e $y$, temos que
$$
	   f(x + y) = f(x) + f(y).
$$
2. **Homogeneidade de grau 1**: Para qualquer escalar $c$ e valor $x$, temos que
$$
	   f(cx) = cf(x).
$$
A combinação dessas duas propriedades resulta na forma geral de uma função linear, que pode ser expressa como:
$$
	f(x) = ax + b,
$$
onde $a$ e $b$ são constantes. Aqui, $b$ é o intercepto y (o valor da função quando $x=0$), enquanto $a$ é a inclinação da reta.

### Exemplos De Funções Lineares

1. **Função Constante**: A função $f(x) = 5$ é linear com $a = 0$ e $b = 5$. Embora seja uma função linear, ela não satisfaz a propriedade de inclinação (aditividade).
2. **Função de Retas**: A função $g(x) = 3x - 4$ é um exemplo clássico de uma função linear com $a = 3$ e $b = -4$. Ela representa uma reta com inclinação positiva.
