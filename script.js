const container = document.querySelector('#container')
const img = document.querySelector('img')


container.addEventListener('mousemove',(e) => {
 const x = e.clientX - e.target.offsetLeft
 const y = e.clientY - e.target.offsetTop
//  console.log(e.clientX)
//  console.log(e.target.offsetLeft)

   img.style.transformOrigin = `${x}px ${y}px`
   img.style.transform  = `scale(2)`
})

container.addEventListener('mouseleave',(e) => {
    img.style.transformOrigin = `0 0`
    img.style.transform  = `scale(1)`})


    console.log("H")
    //note 
    //clientX start from edge of the page and go at the point we hover;
    //e.target.offsetLeft only means for the image margin from the left of the page