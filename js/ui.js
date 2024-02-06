

export function displayErrorMsg(msg) {
    document.querySelector('#errorMsg').textContent = msg;
}

export function renderListItem(customer) {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = `Name: ${ customer.name }, Email: ${ customer.email }`;

    document.querySelector('#customerList').appendChild(listItemRef);
}