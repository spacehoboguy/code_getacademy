/* const app = document.getElementById("app"); */

let progressbar1 = 0;
let progressbar2 = 0;
let progressbar3 = 0;

function updateBarView() {
  document.getElementById("app").innerHTML = /* Html */ `
    <div id="ProfilePic"></div>
    <div id="ProfileName"></div>
    <div id="StartIT"></div>
    <div id="Progressbars"></div>
     `;
}

function updateBars() {
  document.getElementById("Progressbars").innerHTML = /* Html */ `
    
<div id = "prg1">
 <div class ="progBar" id ="progressbar1" style="width:
 ${(progressbar1 / 100) * 300}px">
 ${progressbar1}%
 </div> 
</div>

 <div id = "prg2">
        <div class = "progBar" id="progressbar2" style="width:${
          (progressbar2 / 100) * 300
        }px">${progressbar2}%
        </div>
</div>

<div id = "prg3">
        <div class = "progBar" id = "progressbar3" style="width:${
          (progressbar3 / 100) * 300
        }px">${progressbar3}%
        </div>
</div> 
    
    `;
}
