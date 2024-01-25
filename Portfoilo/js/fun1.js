





const toggle = document.getElementById('toggle-btn');
const body = document.querySelector('body');

function toggleMode() {
    body.classList.toggle('dark-mode');
 
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    toggle.innerText = isDarkMode ? 'Light' : 'Dark';

    // Change nav links text color
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.style.color = isDarkMode ? 'white' : 'black';
    });

    // Change nav links, <i> icons and <a> tags text color
    const elementsToChange = document.querySelectorAll('.nav a, i, a');
    elementsToChange.forEach(element => {
        element.style.color = isDarkMode ? 'white' : 'black';
    });
}

toggle.addEventListener('click', toggleMode);

// Check if user preference is stored in localStorage
const isDarkMode = localStorage.getItem('darkMode');

// Set initial mode based on user preference
if (isDarkMode === 'true') {
    toggleMode();
}


function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
    toggle.innerText = 'Dark';
}

function enableLightMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
    toggle.innerText = 'Light';
}


// Set initial mode based on user preference
isDarkMode === 'true' ? enableDarkMode() : enableLightMode();


toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        toggle.innerText = ' Light';



        toggle.addEventListener('click', function() {
            // Toggle between dark and light mode
            if (body.classList.contains('dark-mode')) {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        }); 
        // Change nav links text color to black
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.style.color = 'black';
            // Change nav links, <i> icons and <a> tags text color to black
        const elementsToChange = document.querySelectorAll('.nav a, i, a');
        elementsToChange.forEach(element => {
        element.style.color = 'black';
            });
        });
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
        toggle.innerText = ' Dark';
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
        toggle.innerText = ' Dark';
   
        // Change nav links text color to white
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
        // Change nav links, <i> icons and <a> tags text color to white
        const elementsToChange = document.querySelectorAll('.nav a, i, a');
        elementsToChange.forEach(element => {
            element.style.color = 'white';
        });
    }
});

/*
        
      
    } else {
      
   
                });
            }
        });
    }
});




toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        toggle.innerText = ' Light';

        */