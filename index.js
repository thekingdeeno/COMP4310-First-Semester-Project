

let hambugerMenuStatus = false
const hamburgerIcon= document.getElementsByClassName('hamburger-icon');

function toggleHamburgerMenu(){
    const subNav = document.getElementsByClassName('sub-navbar-content');
    if (!hambugerMenuStatus) {
            subNav[0].classList.remove('closed');
            subNav[0].classList.add('opened');
            hambugerMenuStatus = true
            hamburgerIcon[0].children[0].setAttribute('src', '../public/assets/hamburger-menu-close.svg') 
    } else {
        subNav[0].classList.remove('opened');
        subNav[0].classList.add('closed');
        hambugerMenuStatus = false;
        hamburgerIcon[0].children[0].setAttribute('src', '../public/assets/hamburger-menu.svg') 
    }
}




const spaceShuttleBoxes = document.getElementsByClassName('shuttle-box');

function displayShuttle(clickedBox){
    let shuttle = clickedBox.target.id;
    
    if (!shuttle) {
        if (['H3','P'].includes(clickedBox.target.tagName)) {
            shuttle = clickedBox.target.parentElement.parentElement.id;
            console.log(shuttle);
            
        }
         else if (clickedBox.target.className === 'intext-box') {
            shuttle = clickedBox.target.parentElement.id;
        }
    }
    
    const basePathUrl = '../public/images'
    let imgFileName = ''

    if (shuttle === 'shuttle-1') {
        imgFileName = 'colombia'
    } else if (shuttle === 'shuttle-2') { 
        imgFileName = 'discovery'
    } else if (shuttle === 'shuttle-3') {
        imgFileName = 'challenger'
    } else if (shuttle === 'shuttle-4') {
        imgFileName = 'atlantis'
    }

    const imageUrl = `${basePathUrl}/${imgFileName}.jpg`
    
    const fullScreenOverlay = document.getElementById('space-shuttle-overlay');
    const shuttleImageElement = document.getElementById('shuttle-fullscreen-image');
    shuttleImageElement.setAttribute('src', imageUrl)
    fullScreenOverlay.style.display = 'flex'
    fullScreenOverlay.style.opacity = 1

    fullScreenOverlay.addEventListener('click', ()=>{
        fullScreenOverlay.style.opacity = 0
        setTimeout(()=>{
            fullScreenOverlay.style.display = 'none'
        }, 300)

    })
}

for (let i = 0; i < spaceShuttleBoxes.length; i++) {
    const element = spaceShuttleBoxes[i];
    element.addEventListener('click', displayShuttle)
}









const apolloMissionsData = [
    {
        id: 1,
        name:'Apollo 1',
        memo: 'On Jan. 27, 1967, tragedy struck on the launch pad at Cape Kennedy during a preflight test for Apollo 204.'
    },
    {
        id: 4,
        name: 'Apollo 4',
        memo: 'The uncrewed Apollo 4 mission was the first all-up test of the three-stage Saturn V rocket.'
    },
    {
        id: 5,
        name: 'Apollo 5',
        memo: 'The primary goal of the uncrewed Apollo 5 mission was to complete the first test flight of the Lunar Module. '
    },
    {
        id: 6,
        name: 'Apollo 6',
        memo: 'The uncrewed Apollo 6 mission was the final qualification of the Saturn V launch vehicle and Apollo spacecraft for crewed Apollo missions.'
    },
    {
        id: 7,
        name: 'Apollo 7',
        memo: 'The first crewed mission of the Apollo program lifted off on October 11, 1968, for a 10-day flight in Earth orbit.'
    },
    {
        id: 8,
        name: 'Apollo 8',
        memo: 'Frank Borman, James Lovell, and William Anders made the first crewed mission to the vicinity of the Moon in December 1968.'
    },
    {
        id: 9,
        name: 'Apollo 9',
        memo: 'James McDivitt, Russell Schweickart, and David Scott make the first flight of the full Apollo spacecraft in March 1969.'
    },
    {
        id: 10,
        name: 'Apollo 10',
        memo: 'Astronauts Thomas Stafford, John Young, and Eugene Cernan test all the components for a lunar landing mission, except landing on the Moon, in May 1969.'
    },
    {
        id: 11,
        name: 'Apollo 11',
        memo: 'Neil Armstrong, Edwin"Buzz" Aldrin, and Michael Collins make history as Armstrong and Aldrin become the first humans to walk on the Moon in July 1969.'
    },
    {
        id: 12,
        name: 'Apollo 12',
        memo: 'The second lunar landing of the Apollo Program was completed by Charles "Pete" Conrad, Richard Gordon, and Alan Bean in November 1969.'
    },
    {
        id: 13,
        name: 'Apollo 13',
        memo: 'An explosion on board forced Apollo 13 to circle the Moon without landing. Through the valiant efforts of the crew and ground team, the astronauts safely returned to Earth.'
    },
    {
        id: 14,
        name: 'Apollo 14',
        memo: "In January 1971, astronauts walked on the Moon for the third time, this time with Alan Shepard and Edgar Mitchell visiting the Moon's Fra Mauro region."
    },
    {
        id: 15,
        name: 'Apollo 15',
        memo: 'David Scott, Alfred Worden, and James Irwin launched to the Moon for the fourth Apollo lunar landing in July 1971. It was the first time the Lunar Roving Vehicle was driven on the Moon.'
    },
    {
        id: 16,
        name: 'Apollo 16',
        memo: "In April 1972, John Young, Charles Duke and Ken Mattingly made the penultimate lunar landing mission of the Apollo Program, visiting the Moon's Descartes Highlands."
    },
    {
        id: 17,
        name: 'Apollo 17',
        memo: 'The final Apollo mission to the Moon took place in December 1972. Astronauts Eugene Cernan and Harrison Schmitt collected a record amount of lunar samples over three moonwalks.'
    },
]

let current = 0;
let prev = apolloMissionsData.length -1
let next = 1

const carouselBody = document.getElementById('carousel-items');

for (let i = 0; i < apolloMissionsData.length; i++) {
    const mission = apolloMissionsData[i];
    const newCarousel = document.createElement('div')
    const newCarouselImage = document.createElement('img')

    const backgroundFade = document.createElement('div');
    const newCarouselTitle = document.createElement('h1');

    backgroundFade.style.position = 'absolute'
    backgroundFade.style.height = '100%'
    backgroundFade.style.width = '100%'
    backgroundFade.style.bottom = '0px'
    backgroundFade.style.left = '0px'
    backgroundFade.style.backgroundColor = '#000000b3'
    backgroundFade.style.display = 'flex'
    backgroundFade.style.alignItems = 'center'
    backgroundFade.style.justifyContent = 'center'

    newCarouselTitle.classList.add('carousel-item-title')
    newCarouselTitle.innerHTML = mission.name.toLocaleUpperCase();

    backgroundFade.appendChild(newCarouselTitle)


    newCarousel.classList.add('carousel-item')
    newCarousel.setAttribute('id', `carousel-${mission.id}`)
    newCarouselImage.setAttribute('src', `../public/images/apollo-${mission.id}.jpg`)
    newCarousel.appendChild(newCarouselImage);
    newCarousel.appendChild(backgroundFade)



    const carouselIndicators = document.getElementById('active-carousel-indicator');
    const indicator = document.createElement('span');
    indicator.addEventListener('click', ()=>gotoNum(i))
    indicator.classList.add('carousel-indicator');
    carouselIndicators.appendChild(indicator)

    function missionFullscreen(){
        const carouselFullscreen = document.getElementById('active-mission-sidesheet');
        const sectionOne = document.createElement('div')
        sectionOne.setAttribute('id', 'section-one')
        const missionImage = document.createElement('img');
        missionImage.setAttribute('src', `../public/images/apollo-${mission.id}.jpg`) 
        sectionOne.appendChild(missionImage)
        
        const sectionTwo = document.createElement('div')
        sectionTwo.setAttribute('id', 'section-two')
        const closeButton = document.createElement('button')
        closeButton.innerText = 'CLOSE'
        const missionTitle = document.createElement('h1')
        const missionDescription = document.createElement('p')
        
        missionTitle.innerText = mission.name.toLocaleUpperCase();
        missionDescription.innerText = mission.memo;

        sectionTwo.appendChild(missionTitle);
        sectionTwo.appendChild(missionDescription);
        sectionTwo.appendChild(closeButton);

        carouselFullscreen.classList.remove('hidden')
        carouselFullscreen.classList.add('show')

        carouselFullscreen.appendChild(sectionOne)
        carouselFullscreen.appendChild(sectionTwo)
        closeButton.addEventListener('click', function(){
            carouselFullscreen.classList.remove('show')
            carouselFullscreen.classList.add('hidden')
            carouselFullscreen.removeChild(sectionOne)
            carouselFullscreen.removeChild(sectionTwo)
        })
    }

    newCarousel.addEventListener('click', missionFullscreen)

        carouselBody.appendChild(newCarousel)

};

const indicators = document.getElementsByClassName('carousel-indicator');

indicators[current].classList.add('active-indicator');


const newCarouselElements = document.getElementsByClassName('carousel-item');
newCarouselElements[0].classList.add('active');
newCarouselElements[1].classList.add('next');
newCarouselElements[apolloMissionsData.length-1].classList.add('prev');


const slider = document.getElementsByClassName("items");
const slides = document.getElementsByClassName("carousel-item");
const button = document.getElementsByClassName("button");


const totalMissions = slides.length;


for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => {gotoNum(prev); clearInterval(carouselSlideshowInterval)};

const gotoNext = () => {gotoNum(next); clearInterval(carouselSlideshowInterval)};

const gotoNum = number => {
	current = number;
	prev = current - 1 < 0 ? totalMissions - 1 : current - 1;
	next = current + 1 > totalMissions - 1 ? 0 : current + 1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		slides[i].classList.remove("prev");
		slides[i].classList.remove("next");
        indicators[i].classList.remove('active-indicator');
	}

    indicators[current].classList.add('active-indicator');
	slides[current].classList.add("active");
	slides[prev].classList.add("prev");
	slides[next].classList.add("next");
}


const carouselSlideshowInterval = setInterval(()=>gotoNum(next), 4000)