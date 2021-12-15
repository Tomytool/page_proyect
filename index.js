$(document).ready(function () {
  let datos = {};
  let urlPdf = '';
  $.get('./datos.json', function (data) {
    console.log(data);
    data.forEach((element) => {
      let imagen = element.url;
      let img = `<img src="${imagen}" alt="">`;
      let descripcion = `<h4>${element.Producto}</h4>`;
      let sku = `<p><strong>Codigo:</strong> ${element.SKU}</p>`;
      let georeferencia = `<div class="ubicacion"><p><strong>Pasillo:</strong> ${element.Pasillo}</p><p><strong>Metro:</strong> ${element.Metro}</p></div>`;

      $('#root').append(
        `<div class="card">${img}${descripcion}${sku}${georeferencia}</div>`
      );

      console.table(imagen);
    });
    let informacion = `<iframe  src="https://www.youtube.com/embed/AvfLTGZtoGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    let accion = `<a href="" class="btn btn-primary">Ver mas</a>`;
    $('#opciones').append(informacion);
  });
});
