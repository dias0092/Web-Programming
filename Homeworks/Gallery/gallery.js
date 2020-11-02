let galleryImage = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImage){
    galleryImage.forEach(function(image , index) {
        image.onclick = function(){
          let getElementCss = window.getComputedStyle(image);
          let getFullImg = getElementCss.getPropertyValue("background-image");
          let getImageUrlPos = getFullImg.split("/img/");
          let setNewImgUrl = getImageUrlPos[1].replace('")', '');

          getLatestOpenedImg = index + 1;

          let container = document.body;
          let newImgWindow = document.createElement("div");
          container.appendChild(newImgWindow);
          newImgWindow.setAttribute("class" , "img-window");
          newImgWindow.setAttribute("onclick" , "closeImg()");

          let newImg = document.createElement("img");
          newImgWindow.appendChild(newImg);
          newImg.setAttribute("src", "img/" + setNewImgUrl)
        }
    });

}

function closeImg(){
    document.querySelector(".img-window").remove();
}
