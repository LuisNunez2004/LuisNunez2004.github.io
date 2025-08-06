const textos = {
    Arduino: "Probablemente mi primer acercamiento a la programación, la primera vez que utilicé Arduino fue durante el transcurso de mi último año en Liceo.\n Junto con un amigo utilizamos este microcontrolador para desarrollar un sistema hidropónico. \n Además, a través del curso de mi carrera he utilizado Arduino en proyectos, como un sistema Pick To Light, por lo que tengo cierto nivel de experiencia en el uso de distintos tipos de motores y sensores.",
    Python: "En este lenguaje de programación me desenvolví, en primer lugar, de manera autodidacta, enfocándome específicamente en la creación de aplicaciones móviles haciendo uso del módulo Kivy, por lo que tengo la capacidad de realizar aplicaciones simples para móviles. \n Luego, en la carrera, pude abordar este lenguaje desde otros ángulos, en sectores donde son más utilizados. A parte de las bases del lenguaje, tuve la posibilidad de participar de cursos de Inteligencia Artificial y de Data Science provistos por UTEC, en los que llegué a analizar datos y realizar IAs básicas de predicción.",
    Assembler: "En el curso de mi carrera hice uso de el lenguaje ensamblador para la pogramación de microcontroladores, específicamente el microcontrolador ATMEGA328P. \n Dentro de mis habilidades en este lenguaje se encuentra el uso de distintos tipos de interrupciones, la comunicación USART, el uso de Look-Up Tables, etc.",
    C: "En este lenguaje profundicé aún más en la programación de microcontroladores, ya que además de poder realizar todo lo que sé hacer en lenguaje ensamblador, tengo experiencia en el uso de distintos sensores, distintos tipos de motores, distintos tipos de comunicaciones, distintos tipos de ahorro de energía, etc",
    HTML: "En el caso de los lenguajes de programacion utilizados para el desarrollo web front-end, como lo son HTML, CSS y JavaScript, el curso de jóvenes a programar es mi primer contacto, por lo que mis conocimientos en estos lenguajes aún son bastantes básicos.",
    JavaScript: "En el caso de los lenguajes de programacion utilizados para el desarrollo web front-end, como lo son HTML, CSS y JavaScript, el curso de jóvenes a programar es mi primer contacto, por lo que mis conocimientos en estos lenguajes aún son bastantes básicos.",
    CSS: "En el caso de los lenguajes de programacion utilizados para el desarrollo web front-end, como lo son HTML, CSS y JavaScript, el curso de jóvenes a programar es mi primer contacto, por lo que mis conocimientos en estos lenguajes aún son bastantes básicos."
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img[alt]").forEach(img => {
        img.addEventListener("click", () => {
            const lenguaje = img.getAttribute("alt");
            const texto = textos[lenguaje];
            const parrafos = texto.split('\n').map(p => `<p>${p}</p>`).join('');
            document.getElementById("texto").innerHTML = `<h2>${lenguaje}</h2>${parrafos}`;
            const textoDiv = document.getElementById("texto");

            textoDiv.style.opacity = 0;
    setTimeout(() => {
        textoDiv.innerHTML = `<h2>${lenguaje}</h2>${parrafos}`;
        textoDiv.style.opacity = 1;
    }, 300);
        });
    });
    let header = document.getElementById('encabezado');
    header.addEventListener("click", () => {
        document.getElementById("texto").innerHTML = '<p>A pesar de que el curso de Jóvenes a Programar es mi primer acercamiento al mundo del desarrollo web, he tenido otras instancias en la que he podido desenvolverme en la programación en distintos ámbitos.</p><p>Gracias a la carrera de ingeniería que estoy cursando, he tenido la posibilidad de abordar la programación de microprocesadores, tanto en lenguaje ensamblador como en lenguaje c, además de contemplar las bases de la programación en python.</p><p>Para saber más sobre mi experiencia en cada lenguaje de programación, haga click en los íconos que se ven en pantalla.</p>'
    })
});
