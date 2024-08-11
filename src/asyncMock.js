const products = [
  {
    id: "1",
    name: "Conjunto deportivo Kelme",
    price: 6500,
    category: "hombres",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3Cx_CPjqi4k7CQhjhiy0zFX3xD3SCVCCX20uM-1M6d4MKz6N5PFII0xpPe6laBG9NBE&usqp=CAU",
    stock: 25,
    description: "Campera y pantalon deportivo marca Kelme para hombre.",
  },
  {
    id: "2",
    name: "Championes New Ballance",
    price: 3800,
    category: "hombres",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9wIgvcviRlw0kHSar5WkXyr87PCkByaT8fCmUzYCAKp7UuIerz0MouT6XSeSAa6-gJo&usqp=CAU",
    stock: 16,
    description: "Calzado deportivo de hombres New Ballance.",
  },
  {
    id: "3",
    name: "Remera deportiva Adidas",
    price: 2200,
    category: "hombres",
    img: "https://tupadel.com/17117-medium_default/camiseta-adidas-padel-g-azul-hombre.jpg",
    stock: 33,
    description: "Remera deportiva de hombre marca Adidas.",
  },
  {
    id: "4",
    name: "Calza deportiva Adidas",
    price: 2000,
    category: "damas",
    img: "https://www.tuproducto.com.uy/imgs/productos/productos31_9674.jpg",
    stock: 6,
    description: "Calza deportiva Adidas para dama.",
  },
  {
    id: "5",
    name: "Campera deportiva Kelme",
    price: 2900,
    category: "damas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PuZlOvzunpva0O03V804gGxUXzOG9at8EKVIpt9sdvKyX13klDHGD3bAuyMVirI4EmQ&usqp=CAU",
    stock: 8,
    description: "Campera de dama deportiva marca Kelme.",
  },
  {
    id: "6",
    name: "Championes deportivos Puma",
    price: 5600,
    category: "damas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYVJTDG13EHgPHNLPWEWf1bwNZIocdze40w&usqp=CAU",
    stock: 6,
    description: "Championes de dama marca Puma deportivos.",
  },
  {
    id: "7",
    name: "Pijama de monstruo infantil",
    price: 3100,
    category: "niños",
    img: "https://www.madeinchina.com.uy/imgs/productos/productos31_10291.jpg",
    stock: 11,
    description: "Pijama para niños varias colores y diseños.",
  },
  {
    id: "8",
    name: "Short deportivo niño Head",
    price: 1500,
    category: "niños",
    img: "https://www.portaldelprado.com.uy/imgs/productos/productos31_9938.jpg",
    stock: 9,
    description: "Short Head para niños.",
  },
  {
    id: "9",
    name: "Championes de basquetball",
    price: 3300,
    category: "niños",
    img: "https://f.fcdn.app/imgs/6c37f8/elreydelentretenimiento.com/erdeuy/9c0c/original/catalogo/1735772233_blanco_3/1500-1500/calzado-de-basket-championes-deportivo-ninos-blanco.jpg",
    stock: 7,
    description: "calzado de basquetball para niños.",
  },
  {
    id: "10",
    name: "Pelota de futbol Adidas mundial 2022",
    price: 1200,
    category: "deportes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bml0ryKdkZiURug1y4SCjjIgG5G-vuPtiBfYBQQeyEPV_8_xEQ5lgsHpcZ4u7nnmVF4&usqp=CAU",
    stock: 40,
    description: "Balon de futbol Adidas.",
  },
  {
    id: "11",
    name: "Red de futbol-tenis",
    price: 900,
    category: "deportes",
    img: "https://www.ditinformatica.com.uy/productos/imgs/set-red-futbol-tenis-medidas-2mts-29954-31.jpg",
    stock: 21,
    description: "red de futbol tenis para espacios abiertos.",
  },
  {
    id: "12",
    name: "Raqueta de tennis Head",
    price: 4200,
    category: "deportes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUVYdWhp1yAbD2XCrLfQ_UXLaqgud8w031MF0yKHtHymhGtFaBsJBwkYNthqlfUl9MvA&usqp=CAU",
    stock: 9,
    description: "Raqueta de tennis Head",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
  });
};