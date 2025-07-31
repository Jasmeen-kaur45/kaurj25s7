/*
Name : Jasmeen Kaur
Date: July11,2025
Description: Js for part1 (assignment 4)*/

console.log("part 1")

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText='It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX=['Willy the Goblin',
             'Big Daddy',
             'Father Christmas'];
let insertY=['the soup kitchen',
              'Disneyland',
               'the White House'
];
let insertZ=['spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away'];


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
//Event listenr for button
randomize.addEventListener('click', result);

function result () {
  //Step 1 : creating copy of the story template 
  let newStory=storyText;

  //step 2: selecting random elements from each array
  const xItem= randomValueFromArray(insertX);
  const yItem= randomValueFromArray(insertY);
  const zItem= randomValueFromArray(insertZ);

  //step 3 : replace placeholder with random selections
  newStory=newStory.replaceAll(':insertx',xItem);
  newStory=newStory.replace(':inserty',yItem);
  newStory=newStory.replace(':insertz',zItem);


  //step 4 : replace "bob"
  if(customName.value !== '') {
    const name = customName.value.trim();
    newStory=newStory.replace('Bob',name)

  }
  //step 5 : convert units if UK is selected
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+" stone";
    const temperature =  Math.round((94-32)*5/9)+ " centigrade";
    
    newStory=newStory.replace('94 fahrenheit',temperature);
    newStory=newStory.replace('300 pounds',weight);
  }
  //step 6 : display the story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}