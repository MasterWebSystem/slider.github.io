const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

let slideActiveIdx = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    slideChange('up')
   
})
downBtn.addEventListener('click', () => {
    slideChange('down')
})

const h = container.clientHeight






function slideChange(direction) {
    if (direction === 'up') {
        slideActiveIdx++
        if (slideActiveIdx === slidesCount) {
            slideActiveIdx = 0
        }   
        mainSlide.style.transform = `translateY(-${slideActiveIdx * h}px)`
        sidebar.style.transform = `translateY(${slideActiveIdx * h}px)`

        return    
    }

    if (direction === 'down') {
        slideActiveIdx--
        if (slideActiveIdx < 0) {
            slideActiveIdx = slidesCount - 1
        }
        mainSlide.style.transform = `translateY(-${slideActiveIdx * h}px)`
        sidebar.style.transform = `translateY(${slideActiveIdx * h}px)`
        
        return
    }
    
}


