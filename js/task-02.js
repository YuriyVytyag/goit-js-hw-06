/* Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients */

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulElement = document.querySelector('ul');
const listOfIngridients = array => {
  return array.map(vegetable => {
    const liItem = document.createElement('li');
    liItem.textContent = vegetable;
    liItem.classList.add('item');
    return liItem;
  });
};
ulElement.append(...listOfIngridients(ingredients));
