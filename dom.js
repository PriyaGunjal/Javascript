//examin document object
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

//get element by id

console.log(document.getElementById('headerTitle'));
var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText='Goodbye';
console.log(headerTitle.innerText);
headerTitle.innerHTML='<h3>Hello</h3>';
headerTitle.style.borderBottom='solid 3 px #000';

//get element by class name

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';
for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='#f4f4f4';
}


