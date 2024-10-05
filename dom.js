// Examine document object. //
    // console.dir(document);
    // console.log(document.domain);
    // console.log(document.URL);
    // console.log(document.title);
    // console.log(document.doctype);
    // console.log(document.head);
    // console.log(document.body);
    // console.log(document.all);

// GetElementByID //
    // console.log(document.getElementById('main'));
    // let headerTitle =document.getElementById('header-title');
    // console.log(headerTitle);
    // headerTitle.textContent = 'Hi';
    // headerTitle.innerText = 'Bye';
    // headerTitle.style.backgroundColor ='red'
    
// GetElementsByClassName //
    // let items = document.getElementsByClassName('list-group-item');
    // console.log(items[2]);
    // items[1].textContent = "Hello"
    // console.log(items[1]);
    // items[2].style.color = 'white'
    
    // To loop over a nodelist, we can't just alter items //
    // for (let item of items){
    // item.style.backgroundColor = "red"
    // }

// GetElementsByTagName //
 // GetElementsByClassName //
//  let li = document.getElementsByTagName('li');
 // console.log(li[2]);
 // li[1].textContent = "Hello"
 // console.log(li[1]);
 // li[2].style.color = 'white'
 
 // To loop over a nodelist, we can't just alter li //
//  for (let item of li){
//  item.style.backgroundColor = "red"
//  }

// QuerySelector //
    // let header = document.querySelector("#main-header")
    // header.style.borderBottom = '4px solid black'

    // let input = document.querySelector('input');
    // input.value = 'Hello'

    // let submit = document.querySelector('input[type ="submit"]')
    // submit.value = 'SEND';

    // let item = document.querySelector(".list-group-item:nth-child(2)")
    // item.style.color = "red"

// QuerySelectorAll //
    // let titles = document.querySelectorAll(".title");
    // console.log(titles);

    // let odd = document.querySelectorAll("li:nth-child(odd)")
    // for (let item of odd){
    //     item.style.backgroundColor = 'red';
    // }

// TRAVERSING DOM //
    let itemlist = document.querySelector("#items")
    // parentNode property
        // console.log(itemlist.parentNode);
        // itemlist.parentNode.style.backgroundColor ='grey';
        // console.log(items.parentNode.parentNode.parentNode);
    // parentElement property
        // console.log(itemlist.parentElement);
        // itemlist.parentElement.style.backgroundColor ='grey';
        // console.log(items.parentElement.parentElement.parentElement);
    // childNodes property and children property
        // console.log(itemlist.childNodes)
        // console.log(itemlist.children);
        // console.log(itemlist.children[2]);
        // itemlist.children[2].style.backgroundColor = 'yellow';
    // firstChild property kinda useless though
        // console.log(itemlist.firstChild)
    //  firstElementChild
        // console.log(itemlist.firstElementChild)
    //  lastElementChilde
        // console.log(itemlist.lastElementChild)
    //  lastChild kinda useless as well
        // console.log(itemlist.lastChild)
    // nextSibling property
        // console.log(itemlist.nextSibling)
    // nextElementSibling property
        // console.log(itemlist.nextElementSibling)
    // previousSibling property
        // console.log(itemlist.previousSibling)
    // previousElementSibling property
        // console.log(itemlist.previousElementSibling)

// createElement Method
let newDiv= document.createElement('div');
// Add class
newDiv.className = 'hello';
console.log(newDiv);

// Add id
newDiv.id = "hi"

// Add attribute
newDiv.setAttribute('title', "Hello Div");

// Create text node
let newDivText = document.createTextNode("Hello, World");

// Add text to div
 newDiv.appendChild(newDivText);

// Insert div into the DOM
let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);
