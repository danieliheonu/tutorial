// // console.log(document.domain);



// // // QuerySelector
// // var header = document.querySelector('#main-header');
// // header.style.borderBottom = 'solid 4px #ccc';


// // var input = document.querySelector('input');
// // input.value = 'Hello World'

// // var sumit = document.querySelector('input[type="submit"]')
// // sumit.value = 'SEND'

// // var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// // secondItem.style.color = 'blue'
// // // secondItem.style.backgroundColor = 'grey'



// // // QuerySelectorAll
// // var titles = document.querySelectorAll('.title')
// // console.log(titles)

// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // var even = document.querySelectorAll('li:nth-child(even)');
// // for(var i = 0; i < odd.length; i++){
// //     odd[i].style.backgroundColor = '#f4f4f4';
// //     even[i].style.backgroundColor = '#ccc';
// // }




// // // // // // // // /// // TRAVERSING THE DOM
// var itemList = document.querySelector('#items')

// // // // // // // // // /// // //parentNode
// // // console.log(itemList.parentNode);
// // // itemList.parentNode.style.backgroundColor = '#f4f4f4';

// // // // // // // /// // PARENTELEMENT
// // console.log(itemList.parentElement);
// // itemList.parentNode.style.backgroundColor = '#f4f4f4';

// // children
// // console.log(itemList.children);

// // firstElementChild
// // console.log(itemList.firstElementChild)

// // // previousElementSibling
// // console.log(itemList.previousElementSibling);

// // // createElement

// // // a new div
// // var newDiv = document.createElement('div')
// // console.log(newDiv)

// // // add a class
// // newDiv.className = 'Hello mb-2 bg-secondary text-center text-capitalize'

// // // create text node
// // var newDivText = document.createTextNode('Hello World')

// // // add text to the div
// // newDiv.appendChild(newDivText)

// // // add it to the dom and not console
// // var container = document.querySelector('header .container')
// // var h1 = document.querySelector('header h1')
// // container.insertBefore(newDiv, h1)








// // //// // // // // // / // / // Event
// var button = document.getElementById('button');
// button.addEventListener('click', buttonClick);

// function buttonClick(e){
//     // document.getElementById('header-title').textContent = 'Changed'
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.classList);
//     console.log('EVENT TYPE: '+e.type);
//     console.log(e.target.value)
// }

// var itemInput = document.querySelector('input[type="text"]')
// var form = document.querySelector('form')

// itemInput.addEventListener('keydown', buttonClick)




















// // // // // // // // // // // // THE MAIN PROJECT // // // // // // // // // // // 
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// add submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
    // prevent default
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // create button
    var btn = document.createElement('button');
    // add class
    btn.className = 'btn btn-danger btn-sm float-right delete';
    // add text node to the btn
    btn.appendChild(document.createTextNode('X'));
    // add button to the li
    li.appendChild(btn)

    // append li to list
    itemList.appendChild(li);
}


// delete item
function removeItem(e) {
    // prevent the default behaviour
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}





// filter items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get list
    var items = itemList.getElementsByTagName('li')
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}






























