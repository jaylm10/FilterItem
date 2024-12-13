const items = [
  { name: "Smartphone", price: 699, category: "electronics" ,img:"./img/smartphone.jpg"},
  { name: "Laptop", price: 1299, category: "electronics",img:"./img/Laptop.avif" },
  { name: "Smartwatch", price: 199, category: "electronics",img:"./img/Smartwatch.jpg" },
  { name: "Headphones", price: 149, category: "electronics",img:"./img/Headphones.jpg" },
  { name: "Bluetooth Speaker", price: 99, category: "electronics",img:"./img/Bluetooth Speaker.jpg" },
  { name: "T-Shirt", price: 25, category: "fashion",img:"./img/T-Shirt.jpg" },
  { name: "Jeans", price: 50, category: "fashion",img:"./img/Jeans.jpg" },
  { name: "Jacket", price: 100, category: "fashion",img:"./img/Jacket.jpg" },
  { name: "Sneakers", price: 80, category: "fashion",img:"./img/Sneakers.jpg" },
  { name: "Handbag", price: 60, category: "fashion",img:"./img/Handbag.jpg" },
  { name: "Sofa", price: 500, category: "home items",img:"./img/Sofa.jpg" },
  { name: "Dining Table", price: 750, category: "home items",img:"./img/Dining Table.jpg" },
  { name: "Desk Lamp", price: 40, category: "home items",img:"./img/Desk Lamp.jpg" },
  { name: "Curtains", price: 70, category: "home items",img:"./img/Curtains.jpg" },
  { name: "Rug", price: 120, category: "home items",img:"./img/Rug.jpg" },
  { name: "Tablet", price: 350, category: "electronics",img:"./img/Tablet.jpg" },
  { name: "Blender", price: 150, category: "home items",img:"./img/Blender.jpg" },
  { name: "Sunglasses", price: 120, category: "fashion",img:"./img/Sunglasses.jpg" },
  { name: "Gaming Console", price: 499, category: "electronics",img:"./img/Gaming Console.jpg" },
  { name: "Bookshelf", price: 200, category: "home items",img:"./img/Bookshelf.jpg" },
];


let home = document.querySelector(".home");
function contentPrinter(product) {
    product.forEach((item) => {
        let card = document.createElement("div");
        card.classList.add("card");
        
        let image = document.createElement("div");
        image.classList.add("img");
        
        let img = document.createElement("img");
        img.src = `${item.img}`;
        
        image.appendChild(img);
    home.appendChild(card);
    card.appendChild(image);
    
    let content = document.createElement("div");
    content.classList.add("content");
    card.appendChild(content);
    
    let name = document.createElement("h3");
    name.innerText = `${item.name}`;
    
    let price = document.createElement("p");
    price.innerHTML = `<b>Price:</b> $${item.price}`;
    
    let category = document.createElement("p");
    category.innerHTML = `<b>Catagory:</b> ${item.category}`;
    
    content.appendChild(name);
    content.appendChild(price);
    content.appendChild(category);
});
}

contentPrinter(items);
let filter = [];
let catagory = document.getElementById("catagory");
catagory.addEventListener("change", () => {
  home.innerHTML = "";
  if (catagory.value === "all") {
    contentPrinter(items);
  } else {
    filter = items.filter((item) => {
      return catagory.value === item.category;
    });
    contentPrinter(filter);
  }
});
