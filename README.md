<p align="center">

 <img style="background-color: #ff5c1a; border-radius: 5px; "  src="https://dojiw2m9tvv09.cloudfront.net/4/8/img-logos-logo-bsale-blanco-mobile.png?2904" alt="Project logo">
</p>
<h3 align="center">bsale-backend-challenge</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-done-success.svg)]()

</div>

---

<p align="center"> bsale-backend-challenge trabaja en conjunto con bsale-frontend-challenge</a>
</p>

##### 📝 Table of Contents

- [Acerca de](#about)
- [Cómo empezar](#getting_started)
- [Pasos finales](#final-steps)
- [Utilización](#usage)
- [Deployed](#deployed)
- [Construido con](#built_using)
- [Por qué he utilizado estas tecnologías?](#why_this)
- [Database](#database)

##Acerca <a name = "about"></a>

Este endpoint fue desarrollado como parte del proceso de seleccion de BSale. El objetivo principal es determinar si tengo los conocimientos/habilidades para recuperar datos de una base de datos construyendo un backend (API REST) que interactúe con la base de datos proporcionada.

##Cómo empezar<a name = "getting_started"></a>

Para empezar, tendrás que clonar el repositorio e instalar las dependencias.

```
git@github.com:Joycemg/bsale-backend-challenge.git
```

```
npm install
```

## Pasos finales <a name = "final-steps"></a>

Como pasos finales necesitaremos configurar nuestras variables de entorno. En el repositorio se encontrará la estructura del mismo, se puede renombrar la misma quitando el "-structure" y completando variables requeridas.

<ol>
<li>MYSQL_HOST  = host de la base de datos</li> 
<li>MYSQL_DATABASE  = nombre de la base de datos</li>
<li>MYSQL_USER = usuario de la base de datos</li>
<li>MYSQL_PASSWORD  = contraseña de la base de datos</li>
<li>MYSQL_PORT = puerto de la base de datos</li>
<li>PORT  = puerto de nuestro servidor</li>
</ol>

Después de configurar las variables podemos elegir como ejecutar nuestro proyecto con los siguientes comandos:

```
npm run dev - para ejecutar con nodemon -
npm run start
```

##Utilización <a name="usage"></a>

Esta API tiene peticiones a las tablas de product y category

<h4>Product<h4>

<div>
<p style="font-weight: bold; font-size: 2.5vh; background-color: #eee; display: inline;">GET request:</p>
</div>
<p style="font-weight: normal; font-size: 2.2vh">Todos los productos = /API/products/</p>

```JSON
[
  {
    "productId": 6,
    "name": "ENERGETICA RED BULL",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
    "price": 1490,
    "discount": 0,
    "category": { "id": 1, "name": "bebida energetica" }
  },
  {
    "productId": 13,
    "name": "PISCO CAMPANARIO 40º",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/campanario408881.jpg",
    "price": 3990,
    "discount": 20,
    "category": { "id": 2, "name": "pisco" }
  },
```

<p style="font-weight: normal; font-size: 2.2vh">Product by id = /API/products/:id/</p>

```JSON
[
  {
    "productId": 52,
    "name": "Fanta",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/fanta_2lt5236.jpg",
    "price": 1500,
    "discount": 0,
    "category": { "id": 4, "name": "bebida" }
  }
]
```

</br>
<p style="font-weight: normal; font-size: 2.2vh">Buscar productos = /API/products?search=string</p>

<p style="font-weight: normal; font-size: 1.2vh">ejemplo : API/products?search=RON PAMPERO</p>

```JSON
[
  {
    "productId": 32,
    "name": "RON PAMPERO",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/pampero-especial0296.jpg",
    "price": 5490,
    "discount": 20,
    "category": { "id": 3, "name": "ron" }
  },
  {
    "productId": 33,
    "name": "RON PAMPERO ANIVERSARIO",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/ron_pampero_aniversario0311.jpg",
    "price": 20000,
    "discount": 15,
    "category": { "id": 3, "name": "ron" }
  }
```

<h4>Category<h4>

<div>
<p style="font-weight: bold; font-size: 2.5vh; background-color: #eee; display: inline;">GET request:</p>

</div>
</br>
<p style="font-weight: normal; font-size: 2.2vh">Todas las categorias = /API/category/</p>

```JSON
[
  { "id": 1, "name": "bebida energetica" },
  { "id": 2, "name": "pisco" },
  { "id": 3, "name": "ron" },
  { "id": 4, "name": "bebida" },
  { "id": 5, "name": "snack" },
  { "id": 6, "name": "cerveza" },
  { "id": 7, "name": "vodka" }
]

```

<p style="font-weight: normal; font-size: 2.2vh">Todos los productos por categoria = /API/category/:id//</p>

```JSON
[
  {
    "productId": 98,
    "name": "Cerveza Escudo Normal LATA 350CC",
    "url_image": "",
    "price": 600,
    "discount": 0
  },
  {
    "productId": 99,
    "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
    "url_image": "",
    "price": 800,
    "discount": 0
  }
]
```

## Deployed <a name = "deployed"></a>

<p style="font-weight: normal; font-size: 2.2vh">Esta API fue desplegada usando <a href="https://www.heroku.com/">Heroku</a> puedes acceder a la misma usando el siguiente enlace <a href="https://apibsale0.herokuapp.com/">https://apibsale0.herokuapp.com/</a>. Recuerde pasar los parámetros a la URL para las solicitudes como se especifica en la sección de Uso.</p>

##Construido con<a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment -[Sequelize](https://sequelize.org/) - ORM MySQL

## Why did I use this technologies? <a name = "why_this"></a>

<p style="font-weight: normal; font-size: 2.2vh"><b>Node.js:</b> Usé Node.js porque es mi tecnología principal para el Backend debido a que llevo mas tiempo desarrolando en JavaScript debido a la universidad, bootcamp y cursos en general, cabe aclarar que JavaScript es el lenguaje de programacion que mas domino.</p>

<p style="font-weight: normal; font-size: 2.2vh"><b>Express.js:</b> Se puede construir un backend sólo con Node.js, pero Express.js simplifica el trabajo y hace que el código sea más legible.</p>

<p style="font-weight: normal; font-size: 2.2vh"><b>Sequelize.js:</b> Es un orm basado en promesas. Lo he usado en la universidad y estoy desarrollando trabajos finales con la misma, es bastante facil, agil y bastante solida</p>

<p style="font-weight: normal; font-size: 2.2vh">He usado otras librerias como DotEnv, EsLint, cors, morgan, nodemon los he usado simple por comodidad, costumbre y facilitacion</p>

## Database <a name = "base de datos"></a>

<p style="font-weight: normal; font-size: 2.2vh">El administrador de base de datos es <b>MySQL</b> y fue proporcionado por BSale. Las tablas utilizadas son las siguientes</p>
 <img   src="https://i.imgur.com/esP9X0o.png" alt="tablas DB">
