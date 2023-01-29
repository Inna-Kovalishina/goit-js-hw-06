const numberOfCategories = document.querySelectorAll('#categories.children');
console.log(`Number of categories: ${numberOfCategories.length}`);


const itemList = document.querySelectorAll('.item');
itemList.forEach((item) => {
    console.log("Category:", item.querySelector('h2').textContent);
    console.log("Elements:", item.querySelectorAll('li').length);
});
