const addButton = document.querySelector('.addButton');
let inputValue = document.querySelector('.input');
const container = document.querySelector('.container');

class Item{
    constructor(itemName){
        this.createDiv(itemName)
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item-input');
        input.type = 'text';

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        
        let editButton = document.createElement('Button');
        editButton.innerHTML = "EDIT"
        editButton.classList.add('editButton');

        let removeButton = document.createElement('Button');
        removeButton.innerHTML = "REMOVE"
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',() => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(itemBox));
    
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item)
    }
    
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) =>{
    if (e.which == 13){
        check()
    }
})

function check(){
    if (inputValue.value != ""){
        new Item (inputValue.value);
        inputValue.value = "";
    }
};

