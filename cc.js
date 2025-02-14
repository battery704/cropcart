// var swiper = new Swiper(".slide-content", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   slidesPerGroup: 4,
//   loop: false,
//   loopFillGroupWithBlank: true,
//   pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//   },
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },
// });

// openFormBtn.addEventListener('click', () => {
//   formContainer.style.display = 'block';
// });

// // Close the form
// closeFormBtn.addEventListener('click', () => {
//   formContainer.style.display = 'none';
// });

// let productIdCounter = 20; // Start ID from 20

// document.getElementById("contactForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent page reload

//   // Get form values
//   let name = document.getElementById("productName").value;
//   let location = document.getElementById("productLocation").value;
//   let seller = document.getElementById("sellerName").value;
//   let price = document.getElementById("productPrice").value;
//   let phone = document.getElementById("phoneNumber").value;
//   let imageUrl = document.getElementById("productImage").value;
//   let category = document.getElementById("productCategory").value;

//   if (!imageUrl) {
//       alert("Please select an image.");
//       return;
//   }

//   // Increment product ID
//   let productId = productIdCounter++;

//   // Create a new product card for listings
//   let card = document.createElement("div");
//   card.classList.add("swiper-slide");
//   card.id = "product-" + productId; // Unique ID
//   card.innerHTML = `
//       <div class="image-content">
//           <div class="card-image">
//               <img src="${imageUrl}" alt="" class="card-img">
//               <button class="delete-btn" onclick="deleteCard('${productId}')">&#128465;</button>
//               <button class="cart-btn" onclick="addToCart('${productId}', '${name}', '${price}', '${imageUrl}')">🛒 Add to Cart</button>
//           </div>
//       </div>
//       <div class="card-content">
//           <h2 class="product">${name}</h2>
//           <h4 class="location">${location}</h4>
//           <h4 class="name">${seller}</h4>
//           <h4 class="price">₹${price}</h4>
//           <h4 class="phone">${phone}</h4>
//       </div>
//   `;

//   // Insert the card into the respective category section
//   let section = document.getElementById(category);
//   if (section) {
//       let wrapper = section.querySelector(".swiper-wrapper");
//       if (wrapper) {
//           wrapper.appendChild(card);
//       }
//   }

//   // Show submission alert
//   let alertBox = document.createElement("div");
//   alertBox.textContent = "Product submitted successfully!";
//   alertBox.style.cssText = "position: fixed; top: 10px; left: 50%; transform: translateX(-50%); background: green; color: white; padding: 10px; border-radius: 5px; z-index: 1000;";
//   document.body.appendChild(alertBox);
//   setTimeout(() => {
//       alertBox.remove();
//   }, 3000); // Remove alert after 3 seconds

//   // Reset form and close it
//   document.getElementById("contactForm").reset();
//   formContainer.style.display = 'none';
// });

// // Function to delete a card by ID
// function deleteCard(productId) {
//   let card = document.getElementById("product-" + productId);
//   if (card) {
//       card.remove();
//   }

//   // Remove from Cart as well
//   let cartItem = document.getElementById("cart-" + productId);
//   if (cartItem) {
//       cartItem.remove();
//   }
// }

// // Function to add item to cart
// function addToCart(productId, name, price, imageUrl) {
//   let cartContainer = document.getElementById("cart");

//   // Check if item is already in cart
//   if (document.getElementById("cart-" + productId)) {
//       alert("This item is already in your cart.");
//       return;
//   }

//   let cartItem = document.createElement("div");
//   cartItem.classList.add("cart-item");
//   cartItem.id = "cart-" + productId; // Unique cart ID
//   cartItem.innerHTML = `
//       <div class="cart-image">
//           <img src="${imageUrl}" alt="${name}">
//       </div>
//       <div class="cart-details">
//           <h4>${name}</h4>
//           <p>Price: ₹${price}</p>
//           <button class="remove-btn" onclick="removeFromCart('${productId}')">Remove</button>
//       </div>
//   `;

//   cartContainer.appendChild(cartItem);
// }

// // Function to remove item from cart
// function removeFromCart(productId) {
//   let cartItem = document.getElementById("cart-" + productId);
//   if (cartItem) {
//       cartItem.remove();
//   }
// }

// // Open Image Selection Popup
// document.getElementById("chooseImageBtn").addEventListener("click", function () {
//   document.getElementById("imagePopup").style.display = "block";
// });

// // Close Image Popup
// document.getElementById("closePopup").addEventListener("click", function () {
//   document.getElementById("imagePopup").style.display = "none";
// });

// // Select an Image from Grid
// function selectImage(imageUrl) {
//   document.getElementById("productImage").value = imageUrl;
//   document.getElementById("imagePopup").style.display = "none";
// }
var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

openFormBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
});

// Close the form
closeFormBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
});

// Product ID counter
let productIdCounter = 20;

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Get form values
  let name = document.getElementById("productName").value;
  let location = document.getElementById("productLocation").value;
  let seller = document.getElementById("sellerName").value;
  let price = document.getElementById("productPrice").value;
  let phone = document.getElementById("phoneNumber").value;
  let imageUrl = document.getElementById("productImage").value;
  let category = document.getElementById("productCategory").value;

  if (!imageUrl) {
      alert("Please select an image.");
      return;
  }

  // Generate unique product ID
  let productId = productIdCounter++;

  // Create new product card
  let card = document.createElement("div");
  card.classList.add("swiper-slide");
  card.id = `product-${productId}`;
  card.innerHTML = `
      <div class="image-content">
          <div class="card-image">
              <img src="${imageUrl}" alt="" class="card-img">
              <button class="delete-btn" onclick="deleteCard('${productId}')">&#128465;</button>
              
          </div>
      </div>
      <div class="card-content">
          <h2 class="product">${name}</h2>
          <h4 class="location">${location}</h4>
          <h4 class="name">${seller}</h4>
          <h4 class="price">₹${price}</h4>
          <h4 class="phone">${phone}</h4>
      </div>
  `;

  // Insert the card into the correct category section
  let section = document.getElementById(category);
  if (section) {
      let wrapper = section.querySelector(".swiper-wrapper");
      if (wrapper) {
          wrapper.appendChild(card);
      }

      // Update Swiper instance dynamically
      let swiperInstance = section.querySelector(".slide-content").swiper;
      if (swiperInstance) {
          swiperInstance.update();
      }
  }

  // Show success alert
  showTemporaryAlert("Product submitted successfully!", "green");

  // Reset form and close it
  document.getElementById("contactForm").reset();
  formContainer.style.display = "none";
});

// Function to delete a product card
function deleteCard(productId) {
  let card = document.getElementById(`product-${productId}`);
  if (card) {
      card.remove();
  }

  // Remove from Cart as well
  removeFromCart(productId);
}



// Function to remove an item from the cart
function removeFromCart(productId) {
  let cartItem = document.getElementById(`cart-${productId}`);
  if (cartItem) {
      cartItem.remove();
  }
}

// Show temporary alert
function showTemporaryAlert(message, color) {
  let alertBox = document.createElement("div");
  alertBox.textContent = message;
  alertBox.style.cssText = `
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background: ${color};
      color: white;
      padding: 10px;
      border-radius: 5px;
      z-index: 1000;
  `;
  document.body.appendChild(alertBox);
  setTimeout(() => alertBox.remove(), 3000);
}

// Open Image Selection Popup
document.getElementById("chooseImageBtn").addEventListener("click", function () {
  document.getElementById("imagePopup").style.display = "block";
});

// Close Image Popup
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("imagePopup").style.display = "none";
});

// Select an Image from Grid
function selectImage(imageUrl) {
  document.getElementById("productImage").value = imageUrl;
  document.getElementById("imagePopup").style.display = "none";
}
