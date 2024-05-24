<div align='center'>
  <h1>Respuestas</h1>

  <i>Parte 1 - Conceptos Teóricos</i>

  <sup>Desarrollador Front-end</sup>

</div>

---

## Índice

- [Índice](#índice)
    - [HTML/CSS](#htmlcss)
        - [Explica la diferencia entre margin y padding en CSS.](#explica-la-diferencia-entre-margin-y-padding-en-css)
        - [¿Qué es el modelo de caja en CSS y cuáles son sus componentes principales?](#qué-es-el-modelo-de-caja-en-css-y-cuáles-son-sus-componentes-principales)
    - [Javascript](#javascript)
        - [Explique el concepto de "hoisting" en JavaScript.](#explique-el-concepto-de-hoisting-en-javascript)
        - [¿Cuál es la diferencia entre let, const y var en la declaración de variables?](#cuál-es-la-diferencia-entre-let-const-y-var-en-la-declaración-de-variables)
        - [Describa cómo funciona el event bubbling en el contexto de eventos de JavaScript.](#describa-cómo-funciona-el-event-bubbling-en-el-contexto-de-eventos-de-javascript)
    - [Responsive Web Design](#responsive-web-design)
        - [¿Qué son los media queries y cómo se utilizan en CSS para crear un diseño receptivo?](#qué-son-los-media-queries-y-cómo-se-utilizan-en-css-para-crear-un-diseño-receptivo)
        - [Menciona al menos dos técnicas para hacer que las imágenes sean receptivas en unapágina web.](#menciona-al-menos-dos-técnicas-para-hacer-que-las-imágenes-sean-receptivas-en-una-página-web)

---

### HTML/CSS

#### Explica la diferencia entre margin y padding en CSS.

<strong>Margin:</strong> Imaginando que un elemento es una caja. El margen es el espacio exterior a la caja, como el área libre que rodea una caja en un mueble.
<strong>Padding:</strong> Dentro de la misma caja, el padding es como el relleno o acolchonado que protege el contenido interno de la caja, manteniendo el contenido separado de las paredes de la caja.

**[⬆ Volver a índice](#índice)**

---

#### ¿Qué es el modelo de caja en CSS y cuáles son sus componentes principales?

Es una representación conceptual que define cómo los elementos HTML se estructuran y se disponen en una página web, a cada elemento se le trata como una caja rectangular y describe cómo se calculan y combinan las dimensiones y el espaciado dentro y alrededor de cada caja. Los componentes principales son:

- **Content**: La región donde se muestra el contenido real del elemento.
- **Padding**: El espacio entre el contenido del elemento y su borde. Este espacio interno se añade al tamaño del contenido, proporcionando una separación adicional antes del borde.
- **Border**: La línea que rodea el padding y el contenido del elemento.
- **Margin**: El espacio exterior alrededor del borde del elemento, que separa la caja de otros elementos vecinos. Los márgenes no afectan el tamaño de la caja misma, pero influyen en la distancia entre cajas adyacentes.

**[⬆ Volver a índice](#índice)**

---

### Javascript

#### Explique el concepto de "hoisting" en JavaScript.

Significa que las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código, por lo que pueden ser referenciadas antes de su aparición en el código. En otras palabras, una variable puede ser declarada después de ser utilizada. Sin embargo, solo la declaración se eleva, no la inicialización. Por lo tanto, si se intenta acceder a una variable antes de que se haya declarado, se devolverá `undefined`.


**[⬆ Volver a índice](#índice)**

---

#### ¿Cuál es la diferencia entre let, const y var en la declaración de variables?

- **VAR**: Permite redeclaración y reasignación.
- **LET**: Permite reasignación pero no redeclaración dentro del mismo ámbito.
- **CONST**: Similar a *let* en cuanto al ámbito de bloque. Debe ser inicializada en el momento de la declaración y no permite reasignación ni redeclaración.

**[⬆ Volver a índice](#índice)**

---

#### Describa cómo funciona el event bubbling en el contexto de eventos de JavaScript.

Ocurre cuando un evento desencadenado en un elemento se propaga hacia arriba a través del árbol del DOM. Es decir, si haces clic en un botón dentro de un *div*, el evento *click* primero se dispara en el botón, luego en el *div* contenedor, y así sucesivamente hasta el *document*.

**[⬆ Volver a índice](#índice)**

---

### Responsive Web Design

#### ¿Qué son los media queries y cómo se utilizan en CSS para crear un diseño receptivo?

Es una técnica en CSS que permite definir diferentes reglas de estilo basadas en condiciones específicas sobre el entorno de visualización. (Pantalla, Monitor, Tableta o Celular) que se aplican solo cuando se cumplen ciertas condiciones, como el ancho de la pantalla, la orientación del dispositivo (horizontal o vertical).

```css
    /* Estilos generales */
    body {
        background-color: #f0f0f0;
    }

    /* Estilos para dispositivos móviles */
    @media (max-width: 600px) {
        body {
            background-color: #fff;
        }
    }

    /* Estilos para tabletas */
    @media (min-width: 601px) and (max-width: 1024px) {
        body {
            background-color: #ccc;
        }
    }

    /* Estilos para dispositivos de escritorio */
    @media (min-width: 1025px) {
        body {
            background-color: #000;
        }
    }
```

**[⬆ Volver a índice](#índice)**

---

#### Menciona al menos dos técnicas para hacer que las imágenes sean receptivas en una página web.

- **max-width**: Establecer la propiedad *max-width* en el 100% asegura que la imagen no se desborde del contenedor padre y se escale proporcionalmente según el tamaño del contenedor.

- **picture**: Permite al navegador elegir la imagen más apropiada según las condiciones especificadas, como el tamaño de la pantalla o la densidad de píxeles. Y eso se debe mostrar en función de las características del dispositivo.

**[⬆ Volver a índice](#índice)**

---
