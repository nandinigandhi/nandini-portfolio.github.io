var img = document.querySelectorAll('img')
let total = img.length
let counter = 0

function loaded() {
    console.log(img);
    counter++
    if(counter == total) {
        document.querySelector(".loading").remove()
    }
}

function error(){
    alert('error');
}

for(x of img){
    if (x.complete) {
        loaded();
      } else {
        x.addEventListener('load', loaded);
        x.addEventListener('error', error);
      }
}