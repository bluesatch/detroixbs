const themeBtn = document.getElementById('themeBtn')

themeBtn.addEventListener('click', ()=> {
    
    const html = document.getElementsByTagName('html')[0]

    const theme = html.getAttribute('data-bs-theme')

    theme === 'light' ? html.setAttribute('data-bs-theme', 'dark') : html.setAttribute('data-bs-theme', 'light')

    
})