var navMenuAnchorTags=document.querySelectorAll('nav a');
// console.log(navMenuAnchorTags);
for(var i=1;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
        
        var interval=setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}
var animationDone=false;
var progressBars=document.querySelectorAll('.skill-progress>div');
var skillsContainer=document.getElementById('skills-container');

function initializeBars(){
    for(let bar of progressBars){
        bar.style.width=0 +'%';
    }
}
initializeBars();


function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currWidth=0;

        let interval=setInterval(function(){
            if(currWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width=currWidth +'%';

        },20);
    }
}
window.addEventListener('scroll',checkScroll);
function checkScroll(){
    //check if skill container is visible/reached
    var coordinates=skillsContainer.getBoundingClientRect();
    if( !animationDone && coordinates.top<window.innerHeight){  //window.innerHeight==>viewport Height
        //skill container reached
        animationDone=true; 
        fillBars();
    }
    else if(coordinates.top>=window.innerHeight){
        animationDone=false;
        initializeBars();
    }
}