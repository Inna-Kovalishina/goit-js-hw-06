const numberOfCategories = document.querySelector('#categories');
console.log(`Number of categories: ${numberOfCategories.children.length}`);
console.log(numberOfCategories);


const itemList = document.querySelectorAll('.item');
itemList.forEach((item) => {
    console.log("Category:", item.querySelector('h2').textContent);
    console.log("Elements:", item.querySelectorAll('li').length);
});
