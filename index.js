// IIFE
(function () {
  console.log('%c here','color:green');
  function recetaDeAlfajores() {
    var imagesArray = document.getElementsByClassName("imagines"); // => array de elementos con clase "imagines"

    console.log('%c imagenes','color:yellow',imagesArray);
    var imgElement0 = imagesArray[0];
    var imgElement1 = imagesArray[1];
    var imgElement2 = imagesArray[2];
    var imgElement3 = imagesArray[3];
    var imgElement4 = imagesArray[4];

    console.log('%c linkFinal','color:red',imgElement0.src)

    var headerSection = {
      "title": "receta de alfajor de maicena",
      "subtitle": "hecho por la maestra de dulces katuchini XD",
      "copy": "Los alfajores son un dulce típico de varios países de América Latina y se caracterizan por obtener una forma redondeada y estar rellenos de crema dulce. Los más famosos son los argentinos y los peruanos pero en la actualidad se preparan alfajores caseros en muchos otros países.",
      "image": {
        "src": "alfajores_de_maicena_45370_600.jpg"
      }
    };

    var ingredientSection = {
      "title": "ingredientes",
      "items": [
        "250 gramos de margarina",
        "150 gramos de azúcar (¾ taza)",
        "3 yemas de huevo",
        "200 gramos de harina",
        "300 gramos de maicena",
        "2 cucharaditas de polvo de hornear",
        "1 limón 🍋",
        "1 puñado de coco rallado",
        "400 gramos de dulce de leche"
      ]
    };

    var preparationSection = {
      "steps": [
        "Para empezar con la preparación de los alfajores, coge un recipiente y mezcla la margarina con el azúcar hasta obtener una crema suave. Para ello, la margarina debe estar a temperatura ambiente.",
        "Ahora, añade una a una las yemas de huevo",
        "Agrega la ralladura de un limón y si quieres vainilla al gusto",
        "Ahora agrega la harina ,la maicena, el polvo para hornear previamente tamizados y pon a precalentar el horno a 180º",
        "Mezcla todos los ingredientes y empieza a amasar con la mano hasta que la masa este consistente ",
        "Estira la masa con un rodillo ,con un ancho de medio centímetro, Luego corta círculos de unos tres o cuatro centímetro ",
        "Cuando ya cortes los círculos, ponlos en una bandeja con aceite cada uno con un centímetro de distancia y metelos en el horno alrededor de 5-7 min⏰",
        "Cuando estén un poco dorados sácalos del horno y despégalos de la bandeja antes que se enfríe ",
        "Ahora échale el dulce de leche con un cuchillo en la parte de debajo de la galleta y ponle otra arriba haciendo un tipo galleta oreo",
        "Y por ultimo ,rueda el alfajor por el coco para que queda pegado en el dulce de leche",
      ]
    };

    var cuerpo = {
      "header": headerSection,
      "ingredients": ingredientSection,
      "preparation": preparationSection,
      "agradecimiento":"espero que te halla gustado 😋🥰",
      "source": {
        "copy": "pagina wed donde sace la receta",
        "href": "https://www.recetasgratis.net/receta-de-alfajores-de-maicena-45370.html"
      }
    };
    
  }
  recetaDeAlfajores();
}());
