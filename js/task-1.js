const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories:${categories.length}`);

categories.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elem = item.querySelectorAll('li').length;

    console.log(`Categories: ${title}`);
    console.log(`Elements ${elem}`);
})
