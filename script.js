function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

function submitDriverForm(event) {
    event.preventDefault();
    const successMsg = document.getElementById('driver-success');
    successMsg.style.display = 'block';
    event.target.reset();
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
}

function submitCustomerForm(event) {
    event.preventDefault();
    const successMsg = document.getElementById('customer-success');
    successMsg.style.display = 'block';
    event.target.reset();
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
}

function submitContactForm(event) {
    event.preventDefault();
    const successMsg = document.getElementById('contact-success');
    successMsg.style.display = 'block';
    event.target.reset();
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
}
