const items = document.querySelectorAll('.item');

let counter = 1;
setInterval(() => {
    let showingItem = document.querySelector('.show');
    showingItem.classList.remove('show');

    if(counter >= items.length){
        items[0].classList.add('show');
        counter = 1;
    }else{
        showingItem.nextElementSibling.classList.add('show');
        counter++;
    }
}, 2000);


// querySelectorAll