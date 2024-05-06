let isLoggedIn = true;

if (isLoggedIn) {
    const products = ['Toilet Paper', 'Body Wash', 'Dish Soap', 'Laundry Detergent', ];
    let cart = [];

    while (true) {
        let action = prompt("Choose an action: \n1. Add items to shopping list \n2. View cart contents \n3. View total amount of cart \n4. Exit");
        
        if (action === null || action === "4") {
            break; 
        } else if (action === "1") {
            let productIndex = prompt("Enter the index of the product to add to the cart:");
            if (productIndex >= 0 && productIndex < products.length) {
                cart.push(products[productIndex]);
                console.log(`${products[productIndex]} added to cart.`);
            } else {
                console.log("Invalid product index.");
            }
        } else if (action === "2") {
            console.log("Cart contents:");
            console.log(cart.join(', '));
        } else if (action === "3") {
            let totalCost = 0;
            for (let item of cart) {
               
                totalCost += 10;
            }
            console.log(`Total Cost: $${totalCost}`);
        } else {
            console.log("Invalid action. Please choose again.");
        }
    }
} else {
    console.log("Please log in to add items to your cart.");
}

// we assume all the products cost 10 to test