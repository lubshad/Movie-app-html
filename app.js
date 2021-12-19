const sliderArrows = document.querySelectorAll(".sliderArrow")
const movieLists = document.querySelectorAll(".movieCarousal")


sliderArrows.forEach((slider, index) => {
    let clickCounter = 0;
    slider.addEventListener("click", () => {
        const screenWidth = window.innerWidth
        const visibleImages = Math.floor(screenWidth / 300)
        const movieList = movieLists[index];
        const moviesCount = movieList.querySelectorAll(".movieCarousalItem").length
        const currentTranslateValue = movieList.computedStyleMap().get("transform")[0].x.value
        const posibleClicks = moviesCount - visibleImages
        if (posibleClicks > clickCounter) {
            movieList.style.transform = `translateX(${currentTranslateValue - 320}px)`
            clickCounter++
        }
        else {
            movieList.style.transform = `translateX(0px)`
            clickCounter = 0
        }
    })

})

const tougleButton = document.querySelector(".tougleButton")
const items = document.querySelectorAll(".movieCarousalTitle,.contentContainer,.sidebar,.tougleBall,.tougleIcon,.tougleButton,.navbar")

tougleButton.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active")
    })
})