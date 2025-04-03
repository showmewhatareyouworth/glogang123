document.addEventListener("DOMContentLoaded", () => {
    // Данные о продуктах
    const products = {
      // Толстовки
      hoodie: {
        name: "Glory Thorn Fullzip Hoodie",
        price: "$89.99",
        image:
          "https://glogangworldwide.com/cdn/shop/files/GLORY-THORN-FULLZIP-HOODIE-01.jpg?v=1742327698&width=1946",
        description:
          "Эксклюзивная толстовка Glory Thorn с полной молнией. Изготовлена из высококачественного хлопка с добавлением полиэстера для комфорта и долговечности. Идеально подходит для повседневной носки.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Черный", "Белый"],
      },
      black: {
        name: "Glory Olympics Hoodie Black",
        price: "$79.99",
        image:
          "https://glogangofficials.com/wp-content/uploads/2024/07/Glory-Olympics-Hoodie-Black.png",
        description:
          "Стильная черная толстовка Glory Olympics с капюшоном. Особый дизайн с олимпийской тематикой. Теплая и комфортная для холодной погоды.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Черный"],
      },
      grey: {
        name: "Heart Glo Full Zip Black",
        price: "$84.99",
        image:
          "https://glogangworldwide.com/cdn/shop/files/Heart-Glo-Full-Zip-Black-01.jpg?v=1739573721&width=823",
        description:
          "Черная толстовка Heart Glo с полной молнией. Уникальный дизайн с сердечным мотивом. Изготовлена из премиум материалов для максимального комфорта.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Черный"],
      },
      pinq: {
        name: "Heart Glo Full Zip Pink",
        price: "$84.99",
        image:
          "https://glogangworldwide.com/cdn/shop/files/Heart-Glo-Full-Zip-Pink-01.jpg?v=1739573726&width=823",
        description:
          "Розовая толстовка Heart Glo с полной молнией. Яркий цвет и уникальный дизайн с сердечным мотивом. Идеальна для создания стильного образа.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Розовый"],
      },
  
      // Куртки
      greenjack: {
        name: "Satin Bomber Vintage Green",
        price: "$129.99",
        image:
          "https://glogangofficials.com/wp-content/uploads/2024/07/Glo-Gang-Satin-Bomber-Vintage-Green.png",
        description:
          "Винтажная зеленая куртка-бомбер из сатина. Классический стиль с современными деталями. Легкая подкладка для комфорта в прохладную погоду.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Зеленый"],
      },
      bluejack: {
        name: "Galaxy Varsity Jacket Turquoise",
        price: "$149.99",
        image:
          "https://glogangofficials.com/wp-content/uploads/2024/07/Glorious-Galaxy-Varsity-Jacket-Turquoise.png",
        description:
          "Бирюзовая университетская куртка Galaxy. Уникальный галактический дизайн и высококачественные материалы. Идеальна для создания яркого образа.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Бирюзовый"],
      },
      darkjack: {
        name: "Galaxy Varsity Jacket Black",
        price: "$149.99",
        image:
          "https://glogangofficials.com/wp-content/uploads/2024/07/Glorious-Galaxy-Varsity-Jacket-Black.png",
        description:
          "Черная университетская куртка Galaxy. Элегантный дизайн с галактическими мотивами. Премиум качество и комфорт для повседневной носки.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Черный"],
      },
      redjack: {
        name: "Thot Varsity Jacket Red",
        price: "$149.99",
        image:
          "https://glogangofficials.com/wp-content/uploads/2024/07/Glorious-Thot-Varsity-Jacket-Red.png",
        description:
          "Красная университетская куртка Thot. Яркий цвет и уникальный дизайн. Высококачественные материалы для максимального комфорта и стиля.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Красный"],
      },
  
      // Спортивные штаны
      whitepant: {
        name: "Gangs Don't Die Bones Sweatpants",
        price: "$69.99",
        image:
          "https://glogangofficials.com/wp-content/uploads/2024/07/Gangs-Dont-Die-Bones-Sweatpants-Grey.png",
        description:
          "Белые спортивные штаны Gangs Don't Die Bones. Уникальный дизайн с принтом костей. Комфортный крой и мягкий материал для повседневной носки.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Белый"],
      },
      greenpant: {
        name: "Glo Sun Font Sweatpants",
        price: "$59.99",
        image:
          "https://glogangofficials.com/wp-content/uploads/2024/07/Glo-Gang-Glo-Sun-Font-Sweatpants.png",
        description:
          "Зеленые спортивные штаны Glo Sun Font. Стильный дизайн с фирменным шрифтом. Идеальны для создания комфортного повседневного образа.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Зеленый"],
      },
      redpant: {
        name: "Almighty Glo Gang Sweatpants Red",
        price: "$64.99",
        image:
          "https://glogangofficials.com/wp-content/uploads/2024/07/Almighty-Glo-Gang-Sweatpants-Red.png",
        description:
          "Красные спортивные штаны Almighty Glo Gang. Яркий цвет и уникальный дизайн. Комфортный крой для активного образа жизни.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Красный"],
      },
      bluepant: {
        name: "Glo Galaxy Sweatpants Blue",
        price: "$64.99",
        image:
          "https://glogangofficials.com/wp-content/uploads/2024/07/Glo-Galaxy-Sweatpants-Vintage-Blue.png",
        description:
          "Синие спортивные штаны Glo Galaxy. Галактический дизайн и премиум качество. Мягкий материал для максимального комфорта.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Синий"],
      },
  
      // Обувь
      whiteshoe: {
        name: "Glo Gang White Shoes",
        price: "$119.99",
        image:
          "https://glogangworldwide.com/cdn/shop/files/Shoe-White-1.jpg?v=1696608987&width=823",
        description:
          "Белые кроссовки Glo Gang. Стильный дизайн и высококачественные материалы. Комфортная подошва для повседневной носки.",
        sizes: ["40", "41", "42", "43", "44", "45"],
        colors: ["Белый"],
      },
      blackshoe: {
        name: "Glo Gang Black Shoes",
        price: "$119.99",
        image:
          "https://glogangworldwide.com/cdn/shop/files/Shoe-Black-1.jpg?v=1696608990&width=713",
        description:
          "Черные кроссовки Glo Gang. Элегантный дизайн и премиум качество. Идеальны для создания стильного образа.",
        sizes: ["40", "41", "42", "43", "44", "45"],
        colors: ["Черный"],
      },
      yellowshoe: {
        name: "Glo Gang Yellow Shoes",
        price: "$119.99",
        image:
          "https://glogangworldwide.com/cdn/shop/products/Yellow-shoe-3-final.jpg?v=1689724443&width=713",
        description:
          "Желтые кроссовки Glo Gang. Яркий цвет и уникальный дизайн. Комфортная подошва для активного образа жизни.",
        sizes: ["40", "41", "42", "43", "44"],
        colors: ["Желтый"],
      },
      redshoe: {
        name: "Glo Gang Red Shoes",
        price: "$119.99",
        image:
          "https://glogangworldwide.com/cdn/shop/products/red-shoe-7-final.jpg?v=1689724439&width=823",
        description:
          "Красные кроссовки Glo Gang. Яркий цвет и стильный дизайн. Высококачественные материалы для максимального комфорта.",
        sizes: ["40", "41", "42", "43", "44", "45"],
        colors: ["Красный"],
      },
    }
  
    // Инициализация корзины
    let cart = []
  
    // Загрузка корзины из localStorage при загрузке страницы
    function loadCart() {
      const savedCart = localStorage.getItem("gloGangCart")
      if (savedCart) {
        cart = JSON.parse(savedCart)
        updateCartCount()
        updateCartDisplay()
      }
    }
  
    // Сохранение корзины в localStorage
    function saveCart() {
      localStorage.setItem("gloGangCart", JSON.stringify(cart))
      updateCartCount()
    }
  
    // Обновление счетчика товаров в корзине
    function updateCartCount() {
      const cartCount = document.querySelector(".cart-count")
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
      cartCount.textContent = totalItems
  
      // Показать/скрыть элементы корзины в зависимости от наличия товаров
      const cartEmpty = document.getElementById("cart-empty")
      const cartSummary = document.getElementById("cart-summary")
  
      if (totalItems === 0) {
        cartEmpty.style.display = "block"
        cartSummary.style.display = "none"
      } else {
        cartEmpty.style.display = "none"
        cartSummary.style.display = "block"
      }
    }
  
    // Добавление товара в корзину
    function addToCart(product, quantity, size, color) {
      // Проверяем, есть ли уже такой товар в корзине
      const existingItemIndex = cart.findIndex(
        (item) => item.id === product.name && item.size === size && item.color === color,
      )
  
      if (existingItemIndex !== -1) {
        // Если товар уже есть, увеличиваем количество
        cart[existingItemIndex].quantity += quantity
      } else {
        // Если товара нет, добавляем новый
        cart.push({
          id: product.name,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity,
          size: size,
          color: color,
        })
      }
  
      // Сохраняем корзину и обновляем отображение
      saveCart()
      updateCartDisplay()
    }
  
    // Удаление товара из корзины
    function removeFromCart(index) {
      cart.splice(index, 1)
      saveCart()
      updateCartDisplay()
    }
  
    // Изменение количества товара в корзине
    function updateCartItemQuantity(index, quantity) {
      if (quantity <= 0) {
        removeFromCart(index)
      } else {
        cart[index].quantity = quantity
        saveCart()
        updateCartDisplay()
      }
    }
  
    // Расчет общей стоимости корзины
    function calculateCartTotal() {
      return cart
        .reduce((total, item) => {
          // Извлекаем числовое значение цены (убираем символ $)
          const price = Number.parseFloat(item.price.replace("$", ""))
          return total + price * item.quantity
        }, 0)
        .toFixed(2)
    }
  
    // Обновление отображения корзины
    function updateCartDisplay() {
      const cartItemsContainer = document.getElementById("cart-items")
      const cartTotalPrice = document.getElementById("cart-total-price")
  
      // Очищаем контейнер
      cartItemsContainer.innerHTML = ""
  
      // Добавляем каждый товар
      cart.forEach((item, index) => {
        const cartItemElement = document.createElement("div")
        cartItemElement.className = "cart-item"
  
        cartItemElement.innerHTML = `
              <div class="cart-item-image">
                  <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="cart-item-details">
                  <div class="cart-item-name">${item.name}</div>
                  <div class="cart-item-options">
                      ${item.size ? `Размер: ${item.size}` : ""}
                      ${item.color ? `, Цвет: ${item.color}` : ""}
                  </div>
                  <div class="cart-item-price">${item.price}</div>
              </div>
              <div class="cart-item-quantity">
                  <button class="cart-quantity-btn decrease-cart">-</button>
                  <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1" max="10">
                  <button class="cart-quantity-btn increase-cart">+</button>
              </div>
              <button class="cart-item-remove"><i class="fas fa-trash"></i></button>
          `
  
        cartItemsContainer.appendChild(cartItemElement)
  
        // Добавляем обработчики событий для кнопок
        const decreaseBtn = cartItemElement.querySelector(".decrease-cart")
        const increaseBtn = cartItemElement.querySelector(".increase-cart")
        const quantityInput = cartItemElement.querySelector(".cart-quantity-input")
        const removeBtn = cartItemElement.querySelector(".cart-item-remove")
  
        decreaseBtn.addEventListener("click", () => {
          updateCartItemQuantity(index, item.quantity - 1)
        })
  
        increaseBtn.addEventListener("click", () => {
          updateCartItemQuantity(index, item.quantity + 1)
        })
  
        quantityInput.addEventListener("change", () => {
          updateCartItemQuantity(index, Number.parseInt(quantityInput.value))
        })
  
        removeBtn.addEventListener("click", () => {
          removeFromCart(index)
        })
      })
  
      // Обновляем общую стоимость
      cartTotalPrice.textContent = `$${calculateCartTotal()}`
    }
  
    // Модальное окно регистрации
    const registerModal = document.getElementById("registerModal")
    const openRegisterBtn = document.getElementById("openRegisterModal")
    const closeRegisterBtn = registerModal.querySelector(".close-modal")
    const registerForm = document.getElementById("registerForm")
  
    openRegisterBtn.addEventListener("click", () => {
      registerModal.style.display = "flex"
      document.body.style.overflow = "hidden"
    })
  
    closeRegisterBtn.addEventListener("click", () => {
      registerModal.style.display = "none"
      document.body.style.overflow = "auto"
    })
  
    window.addEventListener("click", (event) => {
      if (event.target === registerModal) {
        registerModal.style.display = "none"
        document.body.style.overflow = "auto"
      }
    })
  
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const username = document.getElementById("username").value
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const confirmPassword = document.getElementById("confirmPassword").value
  
      if (password !== confirmPassword) {
        alert("Пароли не совпадают!")
        return
      }
  
      alert(`Регистрация успешна! Добро пожаловать, ${username}!`)
      registerModal.style.display = "none"
      document.body.style.overflow = "auto"
      registerForm.reset()
    })
  
    // Модальное окно корзины
    const cartModal = document.getElementById("cartModal")
    const openCartBtn = document.getElementById("openCartModal")
    const closeCartBtn = cartModal.querySelector(".close-modal")
    const continueShoppingBtn = document.querySelector(".continue-shopping")
    const checkoutBtn = document.querySelector(".checkout-btn")
  
    openCartBtn.addEventListener("click", () => {
      cartModal.style.display = "flex"
      document.body.style.overflow = "hidden"
    })
  
    closeCartBtn.addEventListener("click", () => {
      cartModal.style.display = "none"
      document.body.style.overflow = "auto"
    })
  
    continueShoppingBtn.addEventListener("click", () => {
      cartModal.style.display = "none"
      document.body.style.overflow = "auto"
    })
  
    window.addEventListener("click", (event) => {
      if (event.target === cartModal) {
        cartModal.style.display = "none"
        document.body.style.overflow = "auto"
      }
    })
  
    checkoutBtn.addEventListener("click", () => {
      alert("Спасибо за заказ! Общая сумма: $" + calculateCartTotal())
      cart = []
      saveCart()
      cartModal.style.display = "none"
      document.body.style.overflow = "auto"
    })
  
    // Кнопки "В корзину"
    const addToCartButtons = document.querySelectorAll(".add-to-cart")
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productCard = this.closest(".product-card")
        const productName = productCard.querySelector("h3").textContent
  
        // Находим соответствующий продукт в нашем объекте products
        const productKey = Object.keys(products).find((key) => products[key].name === productName)
  
        if (productKey && products[productKey]) {
          // Открываем модальное окно товара для выбора размера и цвета
          openProductModal(productKey)
        }
      })
    })
  
    // Модальное окно товара
    const productModal = document.getElementById("productModal")
    const closeProductBtn = productModal.querySelector(".close-modal")
  
    // Получаем все кнопки с изображениями товаров
    const productButtons = document.querySelectorAll(".product-image")
  
    // Добавляем обработчик клика для каждой кнопки товара
    productButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Получаем класс продукта
        const productClass = Array.from(this.classList).find((cls) => products[cls] !== undefined)
  
        if (productClass && products[productClass]) {
          openProductModal(productClass)
        }
      })
    })
  
    // Функция открытия модального окна товара
    function openProductModal(productKey) {
      const product = products[productKey]
      if (!product) return
  
      // Устанавливаем содержимое модального окна
      document.querySelector("#modal-product-name").textContent = product.name
      document.querySelector("#modal-product-price").textContent = product.price
      document.querySelector("#modal-product-description").textContent = product.description
      document.querySelector(".product-modal-image img").src = product.image
      document.querySelector(".product-modal-image img").alt = product.name
  
      // Сбрасываем количество
      document.querySelector(".quantity-input").value = 1
  
      // Создаем опции размеров
      const sizeOptionsContainer = document.querySelector("#modal-size-options")
      sizeOptionsContainer.innerHTML = ""
      product.sizes.forEach((size) => {
        const sizeBtn = document.createElement("button")
        sizeBtn.className = "size-option"
        sizeBtn.textContent = size
        sizeBtn.addEventListener("click", function () {
          // Удаляем активный класс со всех кнопок размеров
          document.querySelectorAll(".size-option").forEach((btn) => {
            btn.classList.remove("active")
          })
          // Добавляем активный класс нажатой кнопке
          this.classList.add("active")
        })
        sizeOptionsContainer.appendChild(sizeBtn)
      })
  
      // Создаем опции цветов
      const colorOptionsContainer = document.querySelector("#modal-color-options")
      colorOptionsContainer.innerHTML = ""
  
      // Показываем/скрываем секцию цветов в зависимости от количества цветов
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
            // Удаляем активный класс со всех кнопок цветов
            document.querySelectorAll(".color-option").forEach((btn) => {
              btn.classList.remove("active")
            })
            // Добавляем активный класс нажатой кнопке
            this.classList.add("active")
          })
          colorOptionsContainer.appendChild(colorBtn)
        })
      }
  
      // Показываем модальное окно
      productModal.style.display = "flex"
      document.body.style.overflow = "hidden"
    }
  
    // Закрываем модальное окно при нажатии на кнопку закрытия
    closeProductBtn.addEventListener("click", closeProductModal)
  
    // Закрываем модальное окно при клике вне содержимого модального окна
    productModal.addEventListener("click", function (event) {
      if (event.target === this) {
        closeProductModal()
      }
    })
  
    // Функция закрытия модального окна товара
    function closeProductModal() {
      productModal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  
    // Управление количеством
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
  
    // Кнопка "Добавить в корзину" в модальном окне
    document.querySelector(".add-to-cart-modal").addEventListener("click", () => {
      const productName = document.querySelector("#modal-product-name").textContent
      const productPrice = document.querySelector("#modal-product-price").textContent
      const quantity = Number.parseInt(document.querySelector(".quantity-input").value)
  
      // Получаем выбранный размер
      const selectedSize = document.querySelector(".size-option.active")
      const sizeText = selectedSize ? selectedSize.textContent : ""
  
      // Получаем выбранный цвет
      const selectedColor = document.querySelector(".color-option.active")
      const colorText = selectedColor ? selectedColor.textContent : ""
  
      // Проверяем, выбран ли размер
      if (!selectedSize) {
        alert("Пожалуйста, выберите размер")
        return
      }
  
      // Проверяем, выбран ли цвет (если цвета доступны)
      if (document.querySelector(".product-modal-colors").style.display !== "none" && !selectedColor) {
        alert("Пожалуйста, выберите цвет")
        return
      }
  
      // Находим продукт в нашем объекте products
      const productKey = Object.keys(products).find((key) => products[key].name === productName)
  
      if (productKey && products[productKey]) {
        // Добавляем товар в корзину
        addToCart(products[productKey], quantity, sizeText, colorText)
  
        // Показываем сообщение
        alert(`Товар "${productName}" добавлен в корзину!`)
  
        // Закрываем модальное окно товара
        closeProductModal()
      }
    })
  
    // Кнопка "В избранное" в модальном окне
    document.querySelector(".add-to-wishlist").addEventListener("click", () => {
      const productName = document.querySelector("#modal-product-name").textContent
      alert(`Товар "${productName}" добавлен в избранное!`)
    })
  
    // Плавная прокрутка к разделам
    document.querySelectorAll(".nav-button a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const headerHeight = document.querySelector(".header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Адаптивное меню для мобильных устройств
    function checkScreenSize() {
      const header = document.querySelector(".header")
      if (window.innerWidth <= 768) {
        header.classList.add("mobile-header")
      } else {
        header.classList.remove("mobile-header")
      }
    }
  
    // Проверяем размер экрана при загрузке и изменении размера окна
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
  
    // Загружаем корзину при загрузке страницы
    loadCart()
  })
  
  