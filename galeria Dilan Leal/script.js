const imagenes=[

    'bingus.jfif','bingus 2.jfif','bingus 3.jfif'

]

let indiceActual=0;



function cambiarImagen(direccion){

    indiceActual+=direccion;
if (indiceActual<0){
indiceActual=imagenes.length -1;
}else if( indiceActual>=imagenes.length){
 indiceActual=0;

}
document.getElementById('imagen').src = imagenes[indiceActual];
document.getElementById('contador').textContent = indiceActual +1;
}
document.getElementById('total').textContent=imagenes.length;