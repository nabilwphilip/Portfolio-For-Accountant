//active nav-bar ...
const navBar = document.querySelectorAll('header nav a');
const logo = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menu = document.querySelector('#menu');
const navbar_menu = document.querySelector('header nav');

menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar_menu.classList.toggle('active');
})
const activePage = ()=>{
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    //header settimeout
    header.classList.remove('active');
    setTimeout(()=>{
        header.classList.add('active');
    }, 1100);

    navBar.forEach(link =>{
        link.classList.remove('active')
    });

    //Bars-Box settimeout
    barsBox.classList.remove('active');
    setTimeout(()=>{
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section =>{
        section.classList.remove('active')
    });

    menu.classList.remove('bx-x');
    navbar_menu.classList.remove('active');
}

navBar.forEach((link, idx)=>{
    link.addEventListener('click',()=>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(()=>{
                sections[idx].classList.add('active');
            },1100)
        }
    });
});

logo.addEventListener('click',()=>{
    if(!navBar[0].classList.contains('active')){
        activePage();

        navBar[0].classList.add('active');

        setTimeout(()=>{
            sections[0].classList.add('active');
        },1100)
    }
});


//Resume click of button ....
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx) =>{
    btn.addEventListener('click',() => {
        const resumeDetails = document.querySelectorAll('.resume-details')

        resumeBtns.forEach(btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail =>{
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

// Arrow right and left in portfolio section to show projects ...

// 2 variables (arrowRight - arrowLeft) 
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;
const activePortfolio = ()=>{
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-details');


    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 3}rem))`;

    portfolioDetails.forEach(details =>{
        details.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click',()=>{
    if(index < 4){
        index++ ;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled');
    };

    activePortfolio();
});

arrowLeft.addEventListener('click',()=>{
    if(index > 1){
        index-- ;
        arrowRight.classList.remove('disabled');

    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    };

    activePortfolio();
});

