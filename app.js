const sliderArrows = document.querySelectorAll(".sliderArrow")
const movieLists = document.querySelectorAll(".movieCarousal")

sliderArrows.forEach((slider, index) => {
    let clickCounter = 0;
    slider.addEventListener("click", () => {
        const movieList = movieLists[index];
        const moviesCount = movieList.querySelectorAll(".movieCarousalItem").length
        const currentTranslateValue = movieList.computedStyleMap().get("transform")[0].x.value
        const posibleClicks = moviesCount - 5
        console.log(moviesCount)
        console.log(posibleClicks)
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