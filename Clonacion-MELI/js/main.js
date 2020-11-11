//element es el "this" que le pasamos desde el HTML
window.changeClass = function (element) {
    //getElementsByClassName Sirve para agarrar todos los elemntos que tengan esa clase
    const elementWithClass = document.getElementsByClassName("withBorder");
  
    //guardo el elemento de la imagen expandida para despues ponerle el SRC
    const imageExpanded = document.getElementById("expand");
  
    //Agarro el primer elemento que encontro con la clase "withBorder" y se la saco
    if (elementWithClass[0]) {
      elementWithClass[0].classList.remove("withBorder");
    }
  
    //children es un array de los hijos de ese elemento
    //entonces en la pocicion 0 esta la imagen
    //Agarro el SRC del IMG hijo del div y se lo copio a la imagen expandida
    if (element.children[0].src) {
      imageExpanded.src = element.children[0].src;
    }
  
    //Le agrego la clase al elemento
    element.classList.add("withBorder");
  };
  
  (function () {
    //Agarro el contenedor de las miniaturas
    const element = document.getElementById("thumbnails");
    //Creo un evento
    const event = new Event("mouseover");
    //Le disparo el evento al primero hijo del contenedor de miniaturas
    element.children[0].dispatchEvent(event);
  })();
  