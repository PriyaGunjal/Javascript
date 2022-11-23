var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);
//add Item
function addItem(e)
{
    e.preventDefault();

    //get input values
    var newItem=document.getElementById('item').value;

    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    console.log(li);
    //add text node with input values
    li.appendChild(document.createTextNode(newItem));
    //create del button element
    var deleteBtn=document.createElement('button');

    //add clases to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);
}

//remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}