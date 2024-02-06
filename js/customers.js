const customers = [];

function addCustomer(name, email) {
    const newCustomer = {
        name : name,
        email : email
    }

    customers.push(newCustomer);
    return newCustomer;
}

function getCustomers() {
    return customers;
}

export {addCustomer, getCustomers};