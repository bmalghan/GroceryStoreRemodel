// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {
    populateListProductChoices('displayProduct');
    // Get all elements with class="tabcontent" and hide them
    document.getElementById("hm").className += " active";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if (tabName === "Checkout"){
        document.getElementById("check").className += " active";
        document.getElementById("hm").className += " active";
    }
    document.getElementById("check").className.replace(" active", "");
}


// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
    var s1 = document.getElementsByName("restrictions");

    var types = ["grain", "fruit", "other", "protein", "dairy"]
    for (i = 0; i < types.length; i++){
        document.getElementById(types[i]).innerText = "";
    }
    //get restrictions from s1
    var chosenRestrictions = [];
    for (i = 0; i < s1.length; i++) {
        if (s1[i].checked) {
            chosenRestrictions.push(s1[i].value)
        }
    }

    // obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, chosenRestrictions);

    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>

    for (i = 0; i < optionArray[0].length; i++) {

        var productName = optionArray[0][i];
        var productPrice = optionArray[1][i];
        var productImg = optionArray[2][i];
        var productType = optionArray[3][i];

        console.log(productType);
        var s3 = document.getElementById(productType);
        //create food card
        var div = document.createElement("div");
        div.className = "food-card";
        div.id = productName;

        //add image
        var img = document.createElement("img");
        img.className = "food-image";
        img.src = productImg;
        div.appendChild(img);


        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.tagName = productName;
        checkbox.id = "check-".concat(productName);
        checkbox.value = productName;
        div.appendChild(checkbox);

        // create a label for the checkbox, and also add in HTML DOM
        var label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName.concat(" - $" + productPrice)));
        div.appendChild(label);

        s3.appendChild(div);

        // create a breakline node and add in HTML DOM
        //s2.appendChild(document.createElement("br"));
    }
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

    var ele = document.getElementsByName("product");
    var chosenProducts = [];

    var c = document.getElementById("displayCart");
    c.innerHTML = "";

    var d = document.getElementById("checkoutCart");
    d.innerHTML = "";

    var header = document.createElement("h3");
    header.innerText = "Your Cart";
    c.appendChild(header);

    // build list of selected item
    var para = document.createElement("P");
    para.appendChild(document.createElement("br"));
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createTextNode(" -    $".concat(getPrice(ele[i].value))));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }

    // add paragraph and total price
    c.appendChild(para);

    let x = Math.round( getTotalPrice(chosenProducts)* 100) / 100;
    c.appendChild(document.createTextNode("Subtotal is $" + x));
    checkout(x);
}

function checkout(subtotal) {
    var page = document.getElementById("checkoutCart");

    var head = document.createElement("h3");
    head.innerText = "Checkout";

    var sub =  document.createElement("p");
    sub.innerText = "Subtotal: $".concat(subtotal);
    var tax =  document.createElement("p");
    let taxc = Math.round(subtotal*0.13 * 100) / 100;
    tax.innerText = "Tax: $".concat(taxc);
    var lines =  document.createElement("p");
    lines.innerText = "-------------------";
    var total = document.createElement("p");
    let totaln = subtotal + taxc;
    total.innerText = "Total Due: $".concat(totaln);
    console.log(subtotal);

    page.appendChild(head);
    page.appendChild(sub);
    page.appendChild(tax);
    page.appendChild(lines);
    page.appendChild(total);
}


//https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}