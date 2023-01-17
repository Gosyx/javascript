const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
<img src="${product.img}">
<h3>${product.nombre}</h3>
<p class="price">${product.precio}  $</p>
`;
  shopContent.append(content);

  let agregar = document.createElement("button");
  agregar.innerText = "Agregar";
  agregar.className = "Agregar";

  content.append(agregar);

  agregar.addEventListener("click", () => {
    carrito.push({
      id: product.id,
      nombre: product.nombre,
      img: product.img,
      precio: product.precio,
    });
    console.log(carrito);
    saveLocal();
  });
});
verCarrito.addEventListener("click", () => {
  (modalContainer.innerHTML = ""), (modalContainer.style.display = "flex");
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
  <h1 class="modal-header-title">Carrito.</h1>
  `;
  modalContainer.append(modalHeader);
  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";
  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  modalHeader.append(modalbutton);
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <p>${product.precio} $</p>
  `;

    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `total a pagar: ${total} $`;
  modalContainer.append(totalBuying);
});

//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
//get item
JSON.parse(localStorage.getItem("carrito"));
