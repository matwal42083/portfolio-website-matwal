

// functions for light & dark mode feature


const toggle = document.getElementById('toggle-btn');

const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        toggle.innerText = ' Light';
 
        // Change nav links text color to black
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.style.color = 'black';
        });
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
        toggle.innerText = ' Dark';
   
        // Change nav links text color to white
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    }
})





