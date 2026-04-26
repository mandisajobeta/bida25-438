

document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(themeToggle) themeToggle.innerText = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.innerText = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
        });
    }

    
    const typeTarget = document.getElementById('typing-name');
    if (typeTarget) {
        const text = "MJ MADE";
        let index = 0;
        typeTarget.innerHTML = "";
        
        function type() {
            if (index < text.length) {
                typeTarget.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 200);
            }
        }
        setTimeout(type, 500);
    }

   
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.style.display = "flex";
            } else {
                backToTopBtn.style.display = "none";
            }
        };

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
