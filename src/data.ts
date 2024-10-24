import { Food } from "./app/shared/model/Food";

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood','Pizza','Lunch']
    },
    {
        id: '2',
        name: 'Meatball',
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['persia','middle east','china'],
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood','Lunch']
    },
    {
        id: '3',
        name: 'Hamburger',
        cookTime: '10-15',
        price: 5,
        favorite: false,
        origins: ['germany','us'],
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood','Hamburger']
    },
    {
        id: '4',
        name: 'Fried Potatoes',
        cookTime: '15-20',
        price: 2,
        favorite: true,
        origins: ['belgium','france'],
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood','Fry']
    },
    {
        id: '5',
        name: 'Chicken soup',
        cookTime: '40-50',
        price: 11,
        favorite: false,
        origins: ['india','asia'],
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood','Soup']
    },
    {
        id: '6',
        name: 'Vegetables pizza',
        cookTime: '40-50',
        price: 9,
        favorite: false,
        origins: ['italy'],
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood','Pizza','Lunch']
    },
    {
        id: '7',
        name: 'Spicy Cheese Burger',
        cookTime: '20-30',
        price: 12,
        favorite: false,
        origins: ['indian'],
        imageUrl: 'assets/food-7.jpg',
        tags: ['FastFood','Burger','Lunch'],
    },
    {
        id: '8',
        name: 'Vegetables Magento Pizza',
        cookTime: '45-50',
        price: 9,
        favorite: false,
        origins: ['indian'],
        imageUrl: 'assets/food-8.jpg',
        tags: ['FastFood','Pizza','Lunch'],
    }
]