const shoesData = [
    {
      id: 1,
      name: "Air force 1",
      price: "$450.000",
      sizes: ['38', '39', '40', '41'],
      colors: ['White', 'black', 'coconutmilk', 'oilgreen'],
      imageId: "card-image-2-mujer",
      category: "Mujer Hombre"
    },
    {
      id: 2,
      name: "Dunk Low ",
      price: "$550.000",
      sizes: ['38', '39', '40', '41'],
      colors: ['white-black', 'white-Blue', 'white-Red', 'white-purple', 'white-green', 'Dustyolive'],
      imageId: "card-image-1-hombre",
      category: "hombre"
    },
    {
      id: 3,
      name: "Nike Free Metcon 6 ",
      price: "$410.000",
      sizes: ['38', '39', '40', '41'],
      colors: ['White', 'white-black'],
      imageId: "card-image-3-nike",
      category: "mujer",
    },
    {
        id: 4,
        name: "Air Jordan Low ",
        price: "$600.000",
        sizes: ['38', '39', '40', '41'],
        colors: ['White-gray', 'white-brown', 'white-pink', 'white-morado'],
        imageId: "card-image-4-airjordanlow",
        category: "mujer",
      },
      {
        id: 5,
        name: "Air Jordan 1 High Og ",
        price: "$600.000",
        sizes: ['38', '39', '40', '41'],
        colors: ['black-red', 'White-black', 'white-blue-black', 'white-green-black', 'white-piel-black', 'black-brown', 'white-orange-black'],
        imageId: "card-image-5-airjordanhighog",
        category: "hombre",
      }
    
  ];
  
  function generateCard(shoe) {
    return `
      <div class="card" data-category="${shoe.category}" data-id="${shoe.id}">
          <div class="image-container">
              <img id="${shoe.imageId}" alt="Card Image" class="card-image">
              <button class="prev-image" onclick="changeCardImage('prev', '${shoe.imageId}'); event.stopPropagation(); return false;" aria-label="Previous Image">
                  <span class="material-symbols-outlined">arrow_back_ios</span>
              </button>
              <button class="next-image" onclick="changeCardImage('next', '${shoe.imageId}'); event.stopPropagation(); return false;" aria-label="Next Image">
                  <span class="material-symbols-outlined">arrow_forward_ios</span>
              </button>
          </div>
          <p class="card-name" id="card-name">${shoe.name} <span>${shoe.category}</span></p>
          <div class="size-buttons" id="size-buttons-${shoe.imageId}">
            <p>Size: </p>
            ${shoe.sizes.map(size => `
            <button class="size-btn" onclick="selectSize('${size}', '${shoe.name}', '${shoe.price}', '${shoe.imageId}')" aria-label="Size ${size}">${size}</button>
           `).join('')}
          </div>
          <div class="color-buttons" id="color-buttons-${shoe.imageId}">
              <p>Color: </p>
              ${shoe.colors.map(color => `
               <button class="color-btn-${color.toLowerCase()}" onclick="selectColor('${color}', '${shoe.name}', '${shoe.price}', '${shoe.imageId}'); changeShoeColor(${shoe.colors.indexOf(color)}, '${shoe.imageId}')" aria-label="${color} Color"></button>
             `).join('')}
          </div>

          <p class="card-price">${shoe.price}</p>
          <div class="bottons-buy">
              <button class="buy" id="save-button-${shoe.id}" onmouseover="showMessage(${shoe.id})" onmouseout="hideMessage(${shoe.id})" onclick="saveShoeDetails('${shoe.imageId}')" disabled>Buy Now <div id="shoe-details-${shoe.id}" style="display: none;"></div></button>
              
              <button class="buy" id="save-carrito-${shoe.id}" onclick="agregarItemAlCarrito('${shoe.name}', '${shoe.price}', document.getElementById('${shoe.imageId}').src, selectedColor${shoe.id}, selectedSize${shoe.id})" disabled>Add to cart<span class="material-symbols-outlined">shopping_cart</span></button>
          </div>
      </div>
    `;
  }
  
  function renderCards() {
    const container = document.getElementById("cards-container");
    shoesData.forEach(shoe => {
      container.innerHTML += generateCard(shoe);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderCards);
  
  
  
