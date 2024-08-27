document.addEventListener('DOMContentLoaded', function() {
    // Select the first "Remove" button inside any list item
    let firstRemoveBtn = document.querySelector('li .remove-btn');

    // Check if the first "Remove" button exists
    if (firstRemoveBtn) {
        // Navigate up to the parent list item (li)
        let currentListItem = firstRemoveBtn.closest('li');
        
        // Find the previous sibling list item
        let previousListItem = currentListItem.previousElementSibling;
        
        // Check if the previous list item exists and modify it
        if (previousListItem) {
            previousListItem.innerHTML += ' (Fresh)';
        }

        // Example of modifying the next sibling
        let nextListItem = currentListItem.nextElementSibling;
        if (nextListItem) {
            nextListItem.innerHTML += ' (New)';
        }
    }

    // Example of modifying the first and last child of the list
    let List = document.getElementById('List');
    if (List.firstElementChild) {
        List.firstElementChild.style.color = 'green';  // Change the color of the first item
    }
    if (List.lastElementChild) {
        List.lastElementChild.style.color = 'blue';  // Change the color of the last item
    }

    // Example using querySelectorAll to modify all list items
    let allItems = document.querySelectorAll('ul li');
    allItems.forEach(item => {
        item.style.fontWeight = 'bold';  // Make the text of all items bold
    })

    // Example using parentElement to navigate
    let firstItem = document.querySelector('ul li');
    if (firstItem) {
        let listContainer = firstItem.parentElement;  // Get the ul element
        let mainContainer = listContainer.parentElement;  // Get the main container
        mainContainer.style.padding = '1px';  // Add padding to the main container
    }
    
});
