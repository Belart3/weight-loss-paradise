
var slides1 = document.querySelectorAll(".mansion-1slides")
var slides2 = document.querySelectorAll(".mansion-2slides")
var slides3 = document.querySelectorAll(".mansion-3slides")

var slide1Indicator = document.querySelectorAll(".indicator__slide1")
var slide2Indicator = document.querySelectorAll(".indicator__slide2")
var slide3Indicator = document.querySelectorAll(".indicator__slide3")

var currentIndex = 0;

function toggleSideBar () {
    var sidebar = document.querySelector(".sidebar")
    var body = document.querySelector("body")
    sidebar.classList.remove("d-none")
    sidebar.classList.add("animate__fadeInDown")
    sidebar.classList.remove("animate__fadeOutUp")
    body.classList.toggle("stop-scroll")
}

function toggleFadeUp () {
    var sidebar = document.querySelector(".sidebar")
    sidebar.classList.remove("animate__fadeInDown")
    sidebar.classList.add("animate__fadeOutUp")
}

// function to the first mansion carousel
function showMansion1Slides(index) {
    slides1.forEach((slide, i) => {
        slide.classList.remove('active');
        i === index ? slide.classList.add('active') : null
    });
    slide1Indicator.forEach((indicator, i) => {
        indicator.classList.remove('indicator--orange')
        i == index ? (indicator.classList.add('indicator--orange') , currentIndex = index ) : null     
    })
}

function showMansion2Slides(index) {
    slides2.forEach((slide, i) => {
        slide.classList.remove('active');
        i === index ? slide.classList.add('active') : null
    });
    slide2Indicator.forEach((indicator, i) => {
        indicator.classList.remove('indicator--orange')
        i == index ? (indicator.classList.add('indicator--orange') , currentIndex = index ) : null     
    })
}

function showMansion3Slides(index) {
    slides3.forEach((slide, i) => {
        slide.classList.remove('active');
        i === index ? slide.classList.add('active') : null
    });
    slide3Indicator.forEach((indicator, i) => {
        indicator.classList.remove('indicator--orange')
        i == index ? (indicator.classList.add('indicator--orange') , currentIndex = index ) : null     
    })
}

// function to the first mansion carousel previous button
function mansion1PrevSlide() {
    currentIndex > 0 ? currentIndex-- : currentIndex = slides1.length - 1;
    showMansion1Slides(currentIndex);
    console.log(currentIndex)

    slide1Indicator.forEach((indicator, i) => {
        indicator.classList.remove('indicator--orange')
        currentIndex === i ? indicator.classList.add('indicator--orange') : null
    });
};

// function to the second mansion carousel previous button
function mansion2PrevSlide() {
    currentIndex > 0 ? currentIndex-- : currentIndex = slides2.length - 1;
    showMansion2Slides(currentIndex);
    console.log(currentIndex)

    slide2Indicator.forEach((indicator, i) => {
        indicator.classList.remove('indicator--orange')
        currentIndex === i ? indicator.classList.add('indicator--orange') : null
    });
};

// function to the third mansion carousel previous button
function mansion3PrevSlide() {
    currentIndex > 0 ? currentIndex-- : currentIndex = slides3.length - 1;
    showMansion3Slides(currentIndex);
    console.log(currentIndex)

    slide3Indicator.forEach((indicator, i) => {
        indicator.classList.remove('indicator--orange')
        currentIndex === i ? indicator.classList.add('indicator--orange') : null
    });
};

//function to the first mansion carousel next button
function mansion1NextSlide() {
    currentIndex < slides1.length - 1 ? currentIndex++ : currentIndex = 0 ;
    showMansion1Slides(currentIndex);
    console.log(currentIndex)
    
    slide1Indicator.forEach((indicator, i) => {
        indicator.classList.remove('indicator--orange')
        currentIndex === i ? indicator.classList.add('indicator--orange') : null
    });
};

//function to the second mansion carousel next button
function mansion2NextSlide() {
    currentIndex < slides2.length - 1 ? currentIndex++ : currentIndex = 0 ;
    showMansion2Slides(currentIndex);
    console.log(currentIndex)
    
    slide2Indicator.forEach((indicator, i) => {
        indicator.classList.remove('indicator--orange')
        currentIndex === i ? indicator.classList.add('indicator--orange') : null
    });
};

//function to the third mansion carousel next button
function mansion3NextSlide() {
    currentIndex < slides3.length - 1 ? currentIndex++ : currentIndex = 0 ;
    showMansion3Slides(currentIndex);
    console.log(currentIndex)
    
    slide3Indicator.forEach((indicator, i) => {
        indicator.classList.remove('indicator--orange')
        currentIndex === i ? indicator.classList.add('indicator--orange') : null
    });
};
