function renameItem () {
    var newItemText = prompt("What should this item be renamed to?");
    if (newItemText) {
        this.innerHTML = newItemText;
    }
}

function deleteItem () {
    var id = this.id.replace("deleter_", "");
    document.getElementById("li_" + id).style.display = "none";
}

function changeStateItem () {
    var checkboxId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_" + checkboxId);
    
    if (this.checked) {
        itemText.className = "clicked";
    } else {
        itemText.className = "itemText";
    }
}

function addNewItem (list, itemText) {
    var date = new Date();
    var id = date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
    
    var listItem = document.createElement("li");
    listItem.id = "li_" + id;
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "cb_" + id;
    
    var span = document.createElement("span");
    span.id = "item_" + id;
    span.className = "itemText";
    span.innerHTML = itemText;
    span.ondblclick = renameItem;
    
    var deleter = document.createElement("span");
    deleter.id = "deleter_" + id;
    deleter.className = "deleter";
    deleter.innerHTML = "X";
    deleter.onclick = deleteItem;
    
    list.appendChild(listItem);
    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleter);
    
    checkbox.onclick = changeStateItem;
}

document.getElementById("btnNewItem").onclick = function () {
    var textField = document.getElementById("textField");
    if (textField.value) {
        addNewItem(document.getElementById("todoList"), textField.value);
        textField.focus();
        textField.value = "";
    }
}

document.getElementById("textField").onkeyup = function (e) {
    var textField = document.getElementById("textField");
    
    if (e.which == 13 && (textField.value)) {
        addNewItem(document.getElementById("todoList"), textField.value);
        textField.focus();
        textField.value = "";
    }
}