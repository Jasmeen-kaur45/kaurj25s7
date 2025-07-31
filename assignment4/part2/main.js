/*
Name : Jasmeen Kaur
Date: July 31,2025
Description: Js for part2 (assignment 4)*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* step1 :Declaring the array of image filenames */
const imageFilenames=['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/*step2: Declaring the alternative text for each image file */
const imageAlts={ 'pic1.jpg': 'Closeup of a blue eye',
    'pic2.jpg': 'Rock shaped like a ocean wave',
    'pic3.jpg': 'Beuatiful purple and white flowers',
    'pic4.jpg': 'Ancient Egyptian wall painting',
    'pic5.jpg': 'Moth resting on a green leaf'
};
/* step 3:Looping through images */
for(let i=0;i<imageFilenames.length;i++){
    const fileName=imageFilenames[i];
    const altText=imageAlts[fileName];


const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/' + fileName);
newImage.setAttribute('alt', altText);
thumbBar.appendChild(newImage);

/* step 4 :add clcik event*/
  newImage.addEventListener('click', function () {
    displayedImage.setAttribute('src', newImage.getAttribute('src'));
    displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
  });}


/*step 5 :  Wiring up the Darken/Lighten button */
btn.addEventListener('click',function(){
    const currentClass=btn.getAttribute('class');
    if (currentClass==='dark'){
        btn.setAttribute('class','light');
        btn.textContent='Lighten';
        overlay.style.backgroundColor='rgb(0 0 0/ 50%)';

    }else{
        btn.setAttribute('class','dark');
        btn.textContent='Darken';
        overlay.style.backgroundColor='rgb(0 0 0 / 0%)';

    }
})


