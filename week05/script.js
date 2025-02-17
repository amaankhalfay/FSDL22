document.addEventListener("DOMContentLoaded", function () {
    const itemForm = document.getElementById("itemForm");
    const cartList = document.getElementById("cartList");
    const totalPriceElement = document.getElementById("totalPrice");
    const errorMessage = document.getElementById("errorMessage");
    const checkoutBtn = document.getElementById("checkoutBtn");
    
    let cart = [];
    
    // Handle form submission
    itemForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const itemName = document.getElementById("itemName").value.trim();
        const itemPrice = parseFloat(document.getElementById("itemPrice").value);
        
        try {
            validateItem(itemName, itemPrice);
            addItemToCart(itemName, itemPrice);
            updateCartDisplay();
            itemForm.reset();
            errorMessage.textContent = "";
        } catch (error) {
            errorMessage.textContent = error.message;
        }
    });
    
    // Validate item input
    function validateItem(name, price) {
        if (!name) {
            throw new Error("Item name cannot be empty!");
        }
        if (isNaN(price) || price <= 0) {
            throw new Error("Item price must be a positive number.");
        }
    }

    // Add item to the cart
    function addItemToCart(name, price) {
        cart.push({ name, price });
    }

    // Update cart display
    function updateCartDisplay() {
        cartList.innerHTML = "";
        let totalPrice = 0;
        
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);
            totalPrice += item.price;
        });
        
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    // Handle checkout
    checkoutBtn.addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty! Add items to checkout.");
            return;
        }
        alert("Order placed successfully! Thank you for shopping.");
        cart = [];
        updateCartDisplay();
    });
});
