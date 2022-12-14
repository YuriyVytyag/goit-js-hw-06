const numberOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numberOfCategories.length);

const headerEl = [...numberOfCategories]
  .map(
    categories =>
      `Category: ${categories.children[0].textContent} Elements: ${categories.children[1].children.length}`
  )
  .join('\n');
console.log(headerEl);
