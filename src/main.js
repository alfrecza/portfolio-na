const openButton = document.querySelector('.openButton');
const openIcon = document.querySelector('.open')
const closeIcon = document.querySelector('.close')
const mobileMenu = document.querySelector('.mobileMenu')

addEventListeners()
function addEventListeners() {
    openButton.addEventListener('click', () => {
        if(openIcon.classList.contains('hidden')){
            closeIcon.classList.remove('block')
            closeIcon.classList.add('hidden')
            openIcon.classList.remove('hidden')
            openIcon.classList.add('block')
            mobileMenu.classList.add('hidden')
            
        } else {
            openIcon.classList.remove('block')
            openIcon.classList.add('hidden')
            closeIcon.classList.remove('hidden')
            closeIcon.classList.add('block')
            mobileMenu.classList.add('md:hidden')
            mobileMenu.classList.remove('hidden')

        }
        
    })

    
}

    
    

