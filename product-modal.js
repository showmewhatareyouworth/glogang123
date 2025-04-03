document.addEventListener("DOMContentLoaded", () => {
  // Product data
  const products = {
    // Hoodies
    hoodie: {
      name: "Glory Thorn Fullzip Hoodie",
      price: "$89.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Эксклюзивная толстовка Glory Thorn с полной молнией. Изготовлена из высококачественного хлопка с добавлением полиэстера для комфорта и долговечности. Идеально подходит для повседневной носки.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Черный", "Белый"],
    },
    black: {
      name: "Glory Olympics Hoodie Black",
      price: "$79.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Стильная черная толстовка Glory Olympics с капюшоном. Особый дизайн с олимпийской тематикой. Теплая и комфортная для холодной погоды.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Черный"],
    },
    grey: {
      name: "Heart Glo Full Zip Black",
      price: "$84.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Черная толстовка Heart Glo с полной молнией. Уникальный дизайн с сердечным мотивом. Изготовлена из премиум материалов для максимального комфорта.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Черный"],
    },
    pinq: {
      name: "Heart Glo Full Zip Pink",
      price: "$84.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Розовая толстовка Heart Glo с полной молнией. Яркий цвет и уникальный дизайн с сердечным мотивом. Идеальна для создания стильного образа.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Розовый"],
    },

    // Jackets
    greenjack: {
      name: "Satin Bomber Vintage Green",
      price: "$129.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Винтажная зеленая куртка-бомбер из сатина. Классический стиль с современными деталями. Легкая подкладка для комфорта в прохладную погоду.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Зеленый"],
    },
    bluejack: {
      name: "Galaxy Varsity Jacket Turquoise",
      price: "$149.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Бирюзовая университетская куртка Galaxy. Уникальный галактический дизайн и высококачественные материалы. Идеальна для создания яркого образа.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Бирюзовый"],
    },
    darkjack: {
      name: "Galaxy Varsity Jacket Black",
      price: "$149.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Черная университетская куртка Galaxy. Элегантный дизайн с галактическими мотивами. Премиум качество и комфорт для повседневной носки.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Черный"],
    },
    redjack: {
      name: "Thot Varsity Jacket Red",
      price: "$149.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Красная университетская куртка Thot. Яркий цвет и уникальный дизайн. Высококачественные материалы для максимального комфорта и стиля.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Красный"],
    },

    // Sweatpants
    whitepant: {
      name: "Gangs Don't Die Bones Sweatpants",
      price: "$69.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Белые спортивные штаны Gangs Don't Die Bones. Уникальный дизайн с принтом костей. Комфортный крой и мягкий материал для повседневной носки.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Белый"],
    },
    greenpant: {
      name: "Glo Sun Font Sweatpants",
      price: "$59.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Зеленые спортивные штаны Glo Sun Font. Стильный дизайн с фирменным шрифтом. Идеальны для создания комфортного повседневного образа.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Зеленый"],
    },
    redpant: {
      name: "Almighty Glo Gang Sweatpants Red",
      price: "$64.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Красные спортивные штаны Almighty Glo Gang. Яркий цвет и уникальный дизайн. Комфортный крой для активного образа жизни.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Красный"],
    },
    bluepant: {
      name: "Glo Galaxy Sweatpants Blue",
      price: "$64.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Синие спортивные штаны Glo Galaxy. Галактический дизайн и премиум качество. Мягкий материал для максимального комфорта.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Синий"],
    },

    // Footwear
    whiteshoe: {
      name: "Glo Gang White Shoes",
      price: "$119.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Белые кроссовки Glo Gang. Стильный дизайн и высококачественные материалы. Комфортная подошва для повседневной носки.",
      sizes: ["40", "41", "42", "43", "44", "45"],
      colors: ["Белый"],
    },
    blackshoe: {
      name: "Glo Gang Black Shoes",
      price: "$119.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Черные кроссовки Glo Gang. Элегантный дизайн и премиум качество. Идеальны для создания стильного образа.",
      sizes: ["40", "41", "42", "43", "44", "45"],
      colors: ["Черный"],
    },
    yellowshoe: {
      name: "Glo Gang Yellow Shoes",
      price: "$119.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Желтые кроссовки Glo Gang. Яркий цвет и уникальный дизайн. Комфортная подошва для активного образа жизни.",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["Желтый"],
    },
    redshoe: {
      name: "Glo Gang Red Shoes",
      price: "$119.99",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Красные кроссовки Glo Gang. Яркий цвет и стильный дизайн. Высококачественные материалы для максимального комфорта.",
      sizes: ["40", "41", "42", "43", "44", "45"],
      colors: ["Красный"],
    },
  }

  // Create modal container
  const modalContainer = document.createElement("div")
  modalContainer.id = "productModal"
  modalContainer.className = "product-modal"
  modalContainer.style.display = "none"

  // Create modal HTML
  modalContainer.innerHTML = `
        <div class="product-modal-content">
            <button class="close-modal">&times;</button>
            <div class="product-modal-body">
                <div class="product-modal-image">
                    <img src="/placeholder.svg" alt="Product Image">
                </div>
                <div class="product-modal-details">
                    <h2 id="modal-product-name"></h2>
                    <p class="product-modal-price" id="modal-product-price"></p>
                    <p class="product-modal-description" id="modal-product-description"></p>
                    
                    <div class="quantity-selector">
                        <label>Количество:</label>
                        <div class="quantity-controls">
                            <button class="quantity-btn decrease">-</button>
                            <input type="number" class="quantity-input" value="1" min="1" max="10">
                            <button class="quantity-btn increase">+</button>
                        </div>
                    </div>
                    
                    <div class="product-modal-options">
                        <div class="product-modal-sizes">
                            <h3>Размеры:</h3>
                            <div class="size-options" id="modal-size-options">
                                <!-- Size options will be added dynamically -->
                            </div>
                        </div>
                        
                        <div class="product-modal-colors">
                            <h3>Цвета:</h3>
                            <div class="color-options" id="modal-color-options">
                                <!-- Color options will be added dynamically -->
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-modal-actions">
                        <button class="add-to-cart-modal">Добавить в корзину</button>
                        <button class="add-to-wishlist">
                            <i class="fas fa-heart"></i> В избранное
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `

  // Add modal to body
  document.body.appendChild(modalContainer)

  // Get all product buttons
  const productButtons = document.querySelectorAll(
    ".hoodie, .black, .grey, .pinq, .greenjack, .bluejack, .darkjack, .redjack, .whitepant, .greenpant, .redpant, .bluepant, .whiteshoe, .blackshoe, .yellowshoe, .redshoe",
  )

  // Add click event to each product button
  productButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get product class name
      const productClass = Array.from(this.classList).find((cls) => products[cls] !== undefined)

      if (productClass && products[productClass]) {
        openProductModal(productClass)
      }
    })
  })

  // Function to open product modal
  function openProductModal(productKey) {
    const product = products[productKey]
    if (!product) return

    // Set modal content
    document.querySelector("#modal-product-name").textContent = product.name
    document.querySelector("#modal-product-price").textContent = product.price
    document.querySelector("#modal-product-description").textContent = product.description
    document.querySelector(".product-modal-image img").src = product.image
    document.querySelector(".product-modal-image img").alt = product.name

    // Reset quantity
    document.querySelector(".quantity-input").value = 1

    // Create size options
    const sizeOptionsContainer = document.querySelector("#modal-size-options")
    sizeOptionsContainer.innerHTML = ""
    product.sizes.forEach((size) => {
      const sizeBtn = document.createElement("button")
      sizeBtn.className = "size-option"
      sizeBtn.textContent = size
      sizeBtn.addEventListener("click", function () {
        // Remove active class from all size buttons
        document.querySelectorAll(".size-option").forEach((btn) => {
          btn.classList.remove("active")
        })
        // Add active class to clicked button
        this.classList.add("active")
      })
      sizeOptionsContainer.appendChild(sizeBtn)
    })

    // Create color options
    const colorOptionsContainer = document.querySelector("#modal-color-options")
    colorOptionsContainer.innerHTML = ""

    // Show/hide colors section based on number of colors
    const colorsSection = document.querySelector(".product-modal-colors")
    if (product.colors.length <= 1) {
      colorsSection.style.display = "none"
    } else {
      colorsSection.style.display = "block"
      product.colors.forEach((color) => {
        const colorBtn = document.createElement("button")
        colorBtn.className = "color-option"
        colorBtn.textContent = color
        colorBtn.addEventListener("click", function () {
          // Remove active class from all color buttons
          document.querySelectorAll(".color-option").forEach((btn) => {
            btn.classList.remove("active")
          })
          // Add active class to clicked button
          this.classList.add("active")
        })
        colorOptionsContainer.appendChild(colorBtn)
      })
    }

    // Show modal
    const modal = document.getElementById("productModal")
    modal.style.display = "flex"
    document.body.style.overflow = "hidden"
  }

  // Close modal when clicking the close button
  document.querySelector(".close-modal").addEventListener("click", closeProductModal)

  // Close modal when clicking outside the modal content
  document.getElementById("productModal").addEventListener("click", function (event) {
    if (event.target === this) {
      closeProductModal()
    }
  })

  // Function to close product modal
  function closeProductModal() {
    const modal = document.getElementById("productModal")
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }

  // Quantity controls
  document.querySelector(".decrease").addEventListener("click", () => {
    const input = document.querySelector(".quantity-input")
    const value = Number.parseInt(input.value)
    if (value > 1) {
      input.value = value - 1
    }
  })

  document.querySelector(".increase").addEventListener("click", () => {
    const input = document.querySelector(".quantity-input")
    const value = Number.parseInt(input.value)
    if (value < 10) {
      input.value = value + 1
    }
  })

  // Add to cart button in modal
  document.querySelector(".add-to-cart-modal").addEventListener("click", () => {
    const productName = document.querySelector("#modal-product-name").textContent
    const productPrice = document.querySelector("#modal-product-price").textContent
    const quantity = document.querySelector(".quantity-input").value

    // Get selected size
    const selectedSize = document.querySelector(".size-option.active")
    const sizeText = selectedSize ? selectedSize.textContent : ""

    // Get selected color
    const selectedColor = document.querySelector(".color-option.active")
    const colorText = selectedColor ? selectedColor.textContent : ""

    // Check if size is selected
    if (!selectedSize) {
      alert("Пожалуйста, выберите размер")
      return
    }

    // Check if color is selected (if colors are available)
    if (document.querySelector(".product-modal-colors").style.display !== "none" && !selectedColor) {
      alert("Пожалуйста, выберите цвет")
      return
    }

    // Create message
    let message = `Товар "${productName}" (${productPrice}) добавлен в корзину!\n`
    message += `Количество: ${quantity}\n`
    message += `Размер: ${sizeText}\n`

    if (colorText) {
      message += `Цвет: ${colorText}`
    }

    alert(message)
    closeProductModal()
  })

  // Add to wishlist button in modal
  document.querySelector(".add-to-wishlist").addEventListener("click", () => {
    const productName = document.querySelector("#modal-product-name").textContent
    alert(`Товар "${productName}" добавлен в избранное!`)
  })
})

