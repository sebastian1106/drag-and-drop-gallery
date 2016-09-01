(function() {

// Json object holding images
var data = {
    "images": [
        {"bannerImg": "images/1.png"},
        {"bannerImg": "images/2.png"},
        {"bannerImg": "images/3.png"},
        {"bannerImg": "images/4.png"},
        {"bannerImg": "images/5.png"},
        {"bannerImg": "images/6.png"},
        {"bannerImg": "images/7.png"},
        {"bannerImg": "images/8.png"},
        {"bannerImg": "images/9.png"},
        {"bannerImg": "images/10.png"},
        {"bannerImg": "images/11.png"},
        {"bannerImg": "images/12.png"},
    ]
};

// Once the document is finished loading call the createGrid() function
window.onload = createGrid();

// This function will create the grid of images and divs needed
function createGrid() {

    // get reference of container waiting in HTML file
    var mainContainer = document.getElementById("main-container");

    data.images.forEach(function (obj) {

        // create div element which will hold each image
        var iDiv = document.createElement('div');
        iDiv.className = 'inline-container';

        // create image that goes inside <div> element
        var img = document.createElement('img');
        img.src = obj.bannerImg;

        // insert image into div
        iDiv.appendChild(img);

        // insert div into main
        mainContainer.appendChild(iDiv);
    });

}


// Below are the function for DnD

var dragSrcEl = null;

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    dragSrcEl = this;
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function drop(e) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
}

var cols = document.querySelectorAll('#main-container .inline-container');
[].forEach.call(cols, function (col) {
    col.addEventListener('dragstart', drag, false);
    col.addEventListener('dragover', allowDrop, false);
    col.addEventListener('drop', drop, false);
});

})();