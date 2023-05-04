const movies=[  
{ name:"falcon and the winter soldier",      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit a assumenda nostrum placeat tempora,hic non quam odit nam veritatis sapiente nemo laudantium? Nam enim quidem nisi animi vel!",      image:"./images/slider 2.png"  },
{ name:"loki",      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit a assumenda nostrum placeat tempora,hic non quam odit nam veritatis sapiente nemo laudantium? Nam enim quidem nisi animi vel!",      image:"./images/slider 1.png"  }, 
{ name:"wanda vision",      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit a assumenda nostrum placeat tempora,hic non quam odit nam veritatis sapiente nemo laudantium? Nam enim quidem nisi animi vel!",      image:"./images/slider 3.png"  },  
{ name:"raya and the last dragon",      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit a assumenda nostrum placeat tempora,hic non quam odit nam veritatis sapiente nemo laudantium? Nam enim quidem nisi animi vel!",      image:"./images/slider 4.png"  },  
{ name:"luca",      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit a assumenda nostrum placeat tempora,hic non quam odit nam veritatis sapiente nemo laudantium? Nam enim quidem nisi animi vel!",      image:"./images/slider 5.png"  }];

const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //creating dom elements
  let slide = document.createElement('div');
  let imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');

  //attaching all the elements
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = 'slider';
  content.className = 'slide-content';
  h1.className = 'movie-title';
  p.className = 'movie-des';

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
  }
}

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards
const videocards = document.querySelectorAll('.video-card');
videocards.forEach((item) => {
  item.addEventListener('mouseover', () => {
    let video = item.children[1];
    if (video) {
      try {
        video.play();
      } catch (error) {
        console.error(error);
      }
    }
  });
  item.addEventListener('mouseleave', () => {
    let video = item.children[1];
    if (video) {
      try {
        video.pause();
      } catch (error) {
        console.error(error);
      }
    }
  });
});


//card sliders
let cardContainers=[...document.querySelectorAll('.card-container')];
let preBtns=[...document.querySelectorAll('.pre-btn')];
let nxtBtns=[...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i)=>{
  let containerDimensions=item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener('click',()=>{
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener('click',()=>{
    item.scrollLeft -= containerWidth + 200;
  });
});
