//Traverse DOM
var itemList=document.querySelector('#items');
//parentnode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

//parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//child nodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='Yellow';

//firstchild
console.log(itemList.firstChild);

//first element child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';

//lastChild
console.log(itemList.lastChild);

//last element child
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

//next sibling
console.log(itemList.nextSibling);

//next element sibling
console.log(itemList.nextElementSibling);

//previous sibling
console.log(itemList.previousSibling);

//previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//create div
var newDiv=document.createElement('div');
//add class
newDiv.className='Hello';

//add id
newDiv.id='hello1';

//add attr
newDiv.setAttribute('title','Hello div');

//create text node
var newDivText=document.createTextNode('Hello world');
//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

var parentnode=document.getElementById('items');
parentnode.innerHTML='<li>Hello 1</li><li>Item 2</li><li>Item 3</li><li>Hello 4</li>';
parentnode.innerHTML='<li>Hello world</li>'+parentnode.innerHTML;