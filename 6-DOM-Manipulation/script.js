// Accesing Elements
// by ID
const heading = document.getElementById('heading');

// By Class
// Const heading = document.getElementsByClassName('heading');

// by tag name
// const heading = document.getElementsByTagName('h1');

// console.log(heading);

// const listItems = document.querySelectorAll('#list li');

// console.log(listItems);

// Modifying Elements
// contents using innerHTML
heading.innerHTML = '<em>Learning DOM Manipulation</em>';

// contents using textContent
heading.textContent = 'All About DOM Manipulation';

// Attributes using setAttribute
heading.setAttribute('class', 'highlight')

// Styles using the style property
const button = document.getElementById('btn');
button.style.backgroundColor = "blue";
button.style.color = "white";

// Styles using the style property
const button = document.getElementById('btn');
button.style.backgroundColor = "blue";
button.style.color = "white";

// Creating new elements dynamically
const newParagraph = document.createElement('p')
newParagraph.textContent = "This is a new paragraph";

document.querySelector('.container').appendChild(newParagraph);

// Removing Elements Dynamically
listItems[1].remove();

// Handling Events
button.addEventListener('click', addListItem);

function addListItem() {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = 'New List Item';

    document.getElementById('list').appendChild(newListItem);
}