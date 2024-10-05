let form = document.getElementById("addform");
let itemlist = document.getElementById("items");
let filter = document.getElementById("filter")
// Form sumbit event
form.addEventListener("submit", addItem);

// Delete event
itemlist.addEventListener("click", removeItem);

//  Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    let newitem = document.getElementById("item").value;

    // Create new element
    let li =document.createElement('li');
    li.className = 'list-group-item';

    // Add textnode with input value
    li.appendChild(document.createTextNode(newitem))
    // Create delete btn 
    let deleteBtn = document.createElement("button")
    // Add class to it
    deleteBtn.className = 'btn delete'

    //Add textnode 
    deleteBtn.appendChild(document.createTextNode('X'))

    // Append button to li
    li.appendChild(deleteBtn)

    //  Append li to list
    itemlist.appendChild(li)
}

//  Remove Item
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            let li = e.target.parentElement;
            li.remove();
        }
    }
}

// Filter items
function filterItems(e){
    // Convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get all li elemets in itemlist
    let items = itemlist.getElementsByTagName("li");
    // Turn to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'flex';
        }
        else{
            item.style.display = 'none';
        }
    });

}