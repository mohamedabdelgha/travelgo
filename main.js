const parallax =document.querySelectorAll('.parallax');
let xValue=0, yValue=0;
let rotateDegree = 0;

window.addEventListener('DOMContentLoaded',()=>{
    animationFunc(0);
    parallax.forEach(images=>{
        const timeload=()=>{
            document.querySelector('.text').classList.add('animated')
            images.classList.add('animated')
            setTimeout(() => {
                document.querySelector('.text').classList.remove('animated')
                images.classList.remove('animated')
            }, 2500);
        }
        timeload();        
    })
})

function animationFunc(processClient){
    parallax.forEach((images) =>{
        let speedx =images.dataset.speedx;
        let speedy=images.dataset.speedy;
        let speedz=images.dataset.speedz;
        let rotation=images.dataset.rotation;
        let isLeft = parseFloat(getComputedStyle(images).left) < window.innerWidth/2 ?1: -1;
        let zValue = (processClient - parseFloat(getComputedStyle(images).left)) * isLeft *0.1;

        images.style.transform= 
        `translateX(calc(-50% + ${-xValue * speedx}px))
        translateY(calc(-50% + ${-yValue * speedy}px))
        rotateY(${rotateDegree * rotation}deg)
        perspective(2300px) translateZ(calc(${zValue * speedz}px))`;
    })
}
window.addEventListener('mousemove',(e)=>{
xValue=e.clientX-window.innerWidth / 2;
    yValue=e.clientY-window.innerHeight / 2;
    rotateDegree = xValue /(window.innerWidth / 2) *20;
    animationFunc(e.clientX)
})

const first_content = document.getElementById('start');
const img_divs = document.querySelectorAll('.img-content div');
    function imagesAnimation(){
        img_divs.forEach(img_div =>{
            const transition = img_div.getAttribute('meta-trans');
            img_div.style.animation=`showimages ${transition}s ease-in-out  0.4s 1 forwards`;
        })    
    }
    //--------------------------- navbar customization functions ---------------------------//
    const sections = document.querySelectorAll('.section');
    const nav_links = document.querySelectorAll('nav li a');
    window.onscroll=()=>{
        sections.forEach(sec =>{
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if(top >= offset && top < offset + height){
                nav_links.forEach(link =>{
                    link.classList.remove('selected');
                    const allNavs = document.querySelectorAll('nav li a[href*='+id+']');
                    allNavs.forEach(allNav =>{
                        allNav.classList.add('selected');
                    })
                })
                }
            })
        //--------------------------- animation onscroll functions ---------------------------//
        let top = window.scrollY;
        let offset = first_content.offsetTop;
        let height = first_content.offsetHeight;
        if(top >= offset && top < offset + height){
            imagesAnimation()
        }
    }