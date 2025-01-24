let eyes = document.querySelectorAll('.eye')

document.querySelector('body').addEventListener('mousemove', (e) => {
  eyes.forEach( (eye) => {
    let x = eye.offsetLeft + eye.clientWidth / 2
    let y = eye.offsetTop + eye.clientHeight / 2
    let deg = Math.atan2(e.y - y , e.x - x )/ (2 * Math.PI)* 360+180

   eye.style.transform = `rotate(${deg}deg)`
  })
})