// In-memory singleton mock database for the food items.
const foods = [
    { id: 1, name: "Pizza", price: 12.99 },
    { id: 2, name: "Burger", price: 10.99 },
    { id: 3, name: "Pasta", price: 14.99 },
    { id: 4, name: "Salad", price: 8.99 },
    { id: 5, name: "Soup", price: 7.99 }
];

// Returns all food items from the mock database.
function getAll() {
    return foods;
}

// Export the database methods so the server can use them.
module.exports = {
    getAll
};