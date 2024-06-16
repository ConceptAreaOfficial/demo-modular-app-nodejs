const products: IProduct[] = [
    { id: 1, name: 'Toaster', description: 'A high-quality toaster for your kitchen.', price: 29.99 },
    { id: 2, name: 'Smartphone', description: 'The latest smartphone with advanced features.', price: 599.99 },
    { id: 3, name: 'Laptop', description: 'A powerful laptop for work and entertainment.', price: 999.99 },
    { id: 4, name: 'Coffee Maker', description: 'An automatic coffee maker for brewing delicious coffee.', price: 49.99 },
    { id: 5, name: 'Headphones', description: 'High-fidelity headphones for immersive audio experience.', price: 79.99 },
    { id: 6, name: 'Smart Watch', description: 'A stylish smartwatch with fitness tracking and notifications.', price: 149.99 },
    { id: 7, name: 'Blender', description: 'A versatile blender for making smoothies, soups, and sauces.', price: 39.99 },
    { id: 8, name: 'TV', description: 'A high-definition television for your home entertainment.', price: 499.99 },
    { id: 9, name: 'Digital Camera', description: 'A compact digital camera for capturing memorable moments.', price: 299.99 },
    { id: 10, name: 'Gaming Console', description: 'The latest gaming console with immersive gaming experiences.', price: 399.99 },
    { id: 11, name: 'Tablet', description: 'A portable tablet for productivity and entertainment.', price: 199.99 },
    { id: 12, name: 'Vacuum Cleaner', description: 'An efficient vacuum cleaner for keeping your home clean.', price: 89.99 },
    { id: 13, name: 'Fitness Tracker', description: 'A wearable fitness tracker for monitoring your activity.', price: 49.99 },
    { id: 14, name: 'Portable Speaker', description: 'A portable speaker for enjoying music on the go.', price: 29.99 },
    { id: 15, name: 'Wireless Earbuds', description: 'Wireless earbuds for a tangle-free listening experience.', price: 99.99 },
    { id: 16, name: 'Monitor', description: 'A high-resolution monitor for your computer setup.', price: 199.99 },
    { id: 17, name: 'Electric Kettle', description: 'An electric kettle for quickly boiling water.', price: 19.99 },
    { id: 18, name: 'Air Purifier', description: 'An air purifier for improving air quality in your home.', price: 149.99 },
    { id: 19, name: 'External Hard Drive', description: 'An external hard drive for storing your files.', price: 79.99 },
    { id: 20, name: 'Wireless Router', description: 'A wireless router for high-speed internet connectivity.', price: 59.99 },
    { id: 21, name: 'Power Bank', description: 'A portable power bank for charging your devices on the go.', price: 39.99 },
    { id: 22, name: 'Smart Thermostat', description: 'A smart thermostat for controlling your home temperature.', price: 129.99 },
    { id: 23, name: 'Rice Cooker', description: 'A rice cooker for perfectly cooked rice every time.', price: 34.99 },
    { id: 24, name: 'Electric Toothbrush', description: 'An electric toothbrush for superior oral hygiene.', price: 79.99 },
    { id: 25, name: 'Wireless Mouse', description: 'A wireless mouse for convenient computer navigation.', price: 19.99 },
    { id: 26, name: 'Desk Lamp', description: 'A desk lamp for providing illumination while you work.', price: 24.99 },
    { id: 27, name: 'Digital Alarm Clock', description: 'A digital alarm clock for waking up on time.', price: 14.99 },
    { id: 28, name: 'Backpack', description: 'A durable backpack for carrying your belongings.', price: 49.99 },
    { id: 29, name: 'Water Bottle', description: 'A reusable water bottle for staying hydrated.', price: 9.99 },
    { id: 30, name: 'Electric Fan', description: 'An electric fan for keeping cool during hot days.', price: 49.99 },
    { id: 31, name: 'Cookware Set', description: 'A set of high-quality cookware for your kitchen.', price: 149.99 },
    { id: 32, name: 'Sneakers', description: 'A pair of comfortable sneakers for everyday wear.', price: 69.99 },
    { id: 33, name: 'Hair Dryer', description: 'A hair dryer for drying and styling your hair.', price: 39.99 },
    { id: 34, name: 'Smart Doorbell', description: 'A smart doorbell for monitoring your doorstep.', price: 149.99 },
    { id: 35, name: 'Yoga Mat', description: 'A yoga mat for practicing yoga and meditation.', price: 19.99 },
    { id: 36, name: 'Cooking Utensils Set', description: 'A set of essential cooking utensils for your kitchen.', price: 29.99 },
    { id: 37, name: 'Handheld Vacuum Cleaner', description: 'A handheld vacuum cleaner for quick cleanups.', price: 59.99 },
    { id: 38, name: 'Shower Head', description: 'A high-pressure shower head for a refreshing shower.', price: 29.99 },
    { id: 39, name: 'Sunscreen', description: 'A sunscreen lotion for protecting your skin from UV rays.', price: 14.99 },
    { id: 40, name: 'Travel Mug', description: 'A travel mug for carrying your favorite beverage on the go.', price: 9.99 },
    { id: 41, name: 'Dumbbell Set', description: 'A set of dumbbells for strength training exercises.', price: 49.99 },
    { id: 42, name: 'Wireless Keyboard', description: 'A wireless keyboard for comfortable typing.', price: 29.99 },
    { id: 43, name: 'Puzzle', description: 'A challenging puzzle for hours of entertainment.', price: 19.99 },
    { id: 44, name: 'Grill', description: 'A barbecue grill for outdoor cooking and grilling.', price: 199.99 },
    { id: 45, name: 'Plant', description: 'A potted plant to add greenery to your home or office.', price: 24.99 },
    { id: 46, name: 'Dog Leash', description: 'A durable dog leash for walking your furry friend.', price: 14.99 },
    { id: 47, name: 'Cat Toy', description: 'A fun toy to keep your cat entertained and active.', price: 9.99 },
    { id: 48, name: 'Cooking Book', description: 'A cookbook with delicious recipes for every occasion.', price: 19.99 },
    { id: 49, name: 'Bluetooth Speaker', description: 'A portable Bluetooth speaker for wireless audio streaming.', price: 79.99 },
    { id: 50, name: 'Electric Scooter', description: 'An electric scooter for convenient urban transportation.', price: 299.99 }
];

class ProductRepoasitory {
    private products: IProduct[];

    constructor(initialProducts: IProduct[]) {
        this.products = initialProducts;
    }

    public addProduct(payload: IAddProductPayload): IProduct {
        const newProduct: IProduct = {
            ...payload,
            id: this.products.length + 1
        };
        this.products.push(newProduct);
        return newProduct;
    }

    public getAllProducts(): IProduct[] {
        return this.products;
    }

    public getProductsForTheUser(payload: IGetProductsForTheUserPayload, userCosts: number): IProduct[] {
        return this.products.filter(product => product.price <= userCosts);
    }
}

export default new ProductRepoasitory(products);