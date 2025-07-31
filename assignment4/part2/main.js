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
const imgAlternatives={ 'pic1.jpg': 'Closeup of a blue eye',
    'pic2.jpg': 'Rock shaped like a ocean wave',
    'pic3.jpg': 'Beuatiful purple and white flowers',
    'pic4.jpg': 'Ancient Egyptian wall painting',
    'pic5.jpg': 'Moth resting on a green leaf'
};
/* Looping through images */
for(let i=0;i<imageFilenames.length;i++){
    const fileName=imageFilenames[i];
    const altText=imageAlts[fileName];
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
