(function () {
    window.addEventListener('load', ()=> {
        ToggleNav()
    })
    
    function ToggleNav () {
        const toggle = document.querySelector('.menu-icon')
        toggle.addEventListener('click', () => {
            document.querySelector('nav').classList.toggle('active')
        })
    }
})()