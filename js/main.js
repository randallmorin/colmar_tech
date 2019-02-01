displayNav();
displayTestimonial();
showCourses();
showLogin();
let j = 0;
marquee();
showApplication();

//smooth scrolling
$(document).ready(function() {
  let navHeight = document.querySelector('.main-nav-container').offsetHeight;
  let menuButton = document.querySelector('#menu-button');
  let linkContainer = document.getElementById('mobile-links');
  $('.academics').on('click', function(e) {
    menuButton.classList.remove('fa-times');
    menuButton.classList.add('fa-bars');
    //collapse menu
    linkContainer.style.height = '0px';
    linkContainer.style.transition = 'height 150ms linear';
    e.preventDefault();
    let hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - navHeight
    }, 400);
  });
});

// Navigation
function displayNav() {
  let linkContainer = document.getElementById('mobile-links'),
      links = document.getElementsByClassName('nav-link'),
      totalLinkHeight = 0,
      menuButton = document.getElementById('menu-button');

  //calculate heights for links
  for (i = 0; i < links.length; i++) {
    totalLinkHeight += links[i].offsetHeight;
  }

  //open menu on click of the menu button, if it contains the close icon, close it
  menuButton.addEventListener('click', function() {
    //open menu and change menu button to a close button
    if (menuButton.classList.contains('fa-bars')) {
      //replace bars with close button
      menuButton.classList.remove('fa-bars');
      menuButton.classList.add('fa-times');
      //expand menu
      linkContainer.style.height = totalLinkHeight + 'px';
      linkContainer.style.transition = 'height 150ms linear';
    } else {
      //replace close with menu bars
      menuButton.classList.remove('fa-times');
      menuButton.classList.add('fa-bars');
      //collapse menu
      linkContainer.style.height = '0px';
      linkContainer.style.transition = 'height 150ms linear';
    }
  });
}

// Testimonials
function displayTestimonial() {
  let testimonialContainer = document.querySelector('.testimonials-section'),
      testimonialHeight = document.querySelector('.testimonial').clientHeight,
      testimonialButton = document.querySelector('.testimonials-link');

  testimonialButton.addEventListener('click', function() {
    //if section is closed, expand it
    if (testimonialContainer.classList.contains('collapsed')) {
      testimonialContainer.classList.remove('collapsed');
      testimonialContainer.style.height = testimonialHeight + 'px';
      testimonialContainer.style.transition = 'height 200ms linear';
      //add close text to button
      testimonialButton.innerHTML = 'Close';
    } else {
      testimonialContainer.classList.add('collapsed');
      testimonialContainer.style.height = '0';
      testimonialContainer.style.transition = 'height 200ms linear';
      //remove close text and replace with click text
      testimonialButton.innerHTML = 'See why our students love Colmar Tech!';
    }
  });
}

// courses
function showCourses() {
  let showAllButton = document.querySelector('.show-all'),
      columnContainer = document.querySelector('.column-container'),
      minorOnly = document.querySelector('.minor-only'),
      coursesContainer = document.querySelector('.majors-minors'),
      gradientSpace = document.querySelector('.gradient-space'),
      totalHeight = columnContainer.clientHeight + minorOnly.clientHeight;

  showAllButton.addEventListener('click', function() {
    if (coursesContainer.classList.contains('collapsed')) {
      coursesContainer.style.height = totalHeight + 'px';
      coursesContainer.style.transition = 'height 200ms linear';
      showAllButton.innerHTML = 'Show Less';
      //remove collapsed class
      coursesContainer.classList.remove('collapsed');
      gradientSpace.style.display = 'none';
    } else {
      coursesContainer.style.height = 6 * 16 + 'px';
      coursesContainer.style.transition = 'height 200ms linear';
      coursesContainer.classList.add('collapsed');
      gradientSpace.style.display = 'block';
      showAllButton.innerHTML = 'Show More';
    }
  });
}

function showLogin() {
  let loginLink = document.querySelector('.current-students'),
      signInBox = document.querySelector('.sign-in-box'),
      signInContainer = document.querySelector('.sign-in'),
      closeSignIn = document.querySelector('.close'),
      linkContainer = document.getElementById('mobile-links'),
      menuButton = document.getElementById('menu-button');
  //add event listener for the click
  loginLink.addEventListener('click', function() {
    //close Navigation
    menuButton.classList.remove('fa-times');
    menuButton.classList.add('fa-bars');
    linkContainer.style.height = '0px';

    //extend the sign in container
    signInContainer.style.height = '100%';
    signInContainer.style.top = '0px';
    //delay the background color changing until the sign in box is in the middle
    setTimeout(function() {
      signInContainer.style.backgroundColor = 'rgba(0, 0, 0, .5)';
      signInContainer.style.transition = 'background-color 100ms linear';
    }, 500);
    //drop the sign in box
    signInBox.style.top = '50%';
    signInBox.style.transition = 'top 500ms ease-out';

    //prevent body from being scrolled
    document.body.style.overflow = 'hidden';
  });

  closeSignIn.addEventListener('click', function() {
    //pull sign in box up
    signInBox.style.top = '-100%';
    // signInBox.style.transition = 'top 500ms ease-out';
    //allow scrolling again
    document.body.style.overflow = 'scroll';

    setTimeout(function() {
      signInContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      signInContainer.style.top = '-100%';
    }, 300);
  });
}



function marquee() {
  let images = document.getElementsByClassName('landing-image'),
      imageWidth = images[0].clientWidth,
      landingContainer = document.getElementsByClassName('landing-container')[0],
      classes = ['collaborate', 'students', 'campus', 'graduate'],
      messageText = [
        'Collaborate with students and professors!',
        'Explore your passions with fellow students!',
        'Welcome to Colmar Tech!',
        'Congrats, class of 2018!'
      ],
      messages = document.getElementsByClassName('messages');
      newElement = document.createElement('div'),
      newMessage = document.createElement('p'),
      firstImage = landingContainer.firstElementChild;

  landingContainer.removeChild(firstImage);
  newMessage.classList.add('messages');
  newMessage.innerHTML = messageText[j];
  newElement.classList.add('landing-image', classes[j]);
  newElement.appendChild(newMessage);
  landingContainer.appendChild(newElement);

  for (let i = 0; i < images.length; i++) {
    images[i].style.left = (i - 1) * imageWidth + 'px';
    images[i].style.transition = 'left 600ms ease-in-out';
  }

  j++;
  if (j == images.length) {
    j = 0;
  }
  setTimeout(marquee, 8000);
}


//show application
function showApplication() {
  let applyButton = document.querySelector('.apply');
  let applicationContainer = document.querySelector('.application-container');
  let applicationForm = document.querySelector('.application');
  let closeButton = document.querySelector('#close');
  let linkContainer = document.getElementById('mobile-links');
  let menuButton = document.getElementById('menu-button');

  //animation styling for application container
  applicationContainer.style.transition = 'top 400ms ease-in, background-color 100ms linear';

  applyButton.addEventListener('click', function() {
    applicationForm.scrollTop = 0;
    applicationContainer.style.height = 100 + '%';
    applicationContainer.style.top = 0 + '%';
    setTimeout(function() {
      applicationContainer.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    }, 400);

    //prevent body from being scrolled
    document.body.style.overflow = 'hidden';

    //close the navigation
    menuButton.classList.remove('fa-times');
    menuButton.classList.add('fa-bars');
    linkContainer.style.height = '0px';
  });

  closeButton.addEventListener('click', function() {
    applicationContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    setTimeout(function() {
      applicationContainer.style.top = -100 + '%';
    }, 100);
    //enable scrolling body again
    document.body.style.overflow = 'scroll';
  });
}






//
