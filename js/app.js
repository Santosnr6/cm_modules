'use strict';

import { validate } from './validation.js';
import { displayErrorMsg as displayMsg, renderListItem } from './ui.js';
import { addCustomer, getCustomers } from './customers.js';

window.addEventListener('load', () => {
    document.querySelector('#submitBtn').addEventListener('click', (event) => {
        event.preventDefault();
        console.log('hej');
        let nameRef = document.querySelector('#fullName');
        let emailRef = document.querySelector('#email');

        const response = validate(nameRef.value, emailRef.value);

        if(response === true) {
            console.log(nameRef);
            displayMsg('');
            const customer = addCustomer(nameRef.value, emailRef.value);
            renderListItem(customer);
            nameRef.value = '';
            emailRef.value = '';

            console.log(getCustomers());
        } else {
            console.log(response);
            displayMsg(response);

        }
    });
});