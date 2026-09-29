
/* =========================================
   LA BOTANIQUE GALLERY
========================================= */


/*
    ADD YOUR PHOTOS HERE

    Example:

    "mandapam": [
        "images/mandapam/mandapam-1.jpg",
        "images/mandapam/mandapam-2.jpg",
        "images/mandapam/mandapam-3.jpg"
    ]

*/


const galleries = {


    /* =================================
       MANDAPAM
    ================================== */

    mandapam: [

        "images/mandapam/mandapam-1.jpg",

        "images/mandapam/mandapam-2.jpg",

        "images/mandapam/mandapam-3.jpg",

        "images/mandapam/mandapam-4.jpg",

        "images/mandapam/mandapam-5.jpg",

        "images/mandapam/mandapam-6.jpg"

    ],



    /* =================================
       RECEPTION
    ================================== */

    reception: [

        "images/reception/reception-1.jpg",

        "images/reception/reception-2.jpg",

        "images/reception/reception-3.jpg",

        "images/reception/reception-4.jpg",

        "images/reception/reception-5.jpg",

        "images/reception/reception-6.jpg"

    ],



    /* =================================
       HALDI
    ================================== */

    haldi: [

        "images/haldi/haldi-1.jpg",

        "images/haldi/haldi-2.jpg",

        "images/haldi/haldi-3.jpg",

        "images/haldi/haldi-4.jpg",

        "images/haldi/haldi-5.jpg",

        "images/haldi/haldi-6.jpg",

        "images/haldi/haldi-7.jpg"

    ],



    /* =================================
       VALAKKAPU
    ================================== */

    valakkapu: [

        "images/valakkapu/valakkapu-1.jpg",

        "images/valakkapu/valakkapu-2.jpg",

        "images/valakkapu/valakkapu-3.jpg",

        "images/valakkapu/valakkapu-4.jpg",

        "images/valakkapu/valakkapu-5.jpg",

        "images/valakkapu/valakkapu-6.jpg"

    ]

};



/* =========================================
   CATEGORY TITLES
========================================= */

const galleryTitles = {

    mandapam: "Mandapam Stage",

    reception: "Reception Stage",

    haldi: "Haldi Stage",

    valakkapu: "Valakkapu Stage"

};



/* =========================================
   OPEN CATEGORY GALLERY
========================================= */

function openGallery(category) {


    const modal = document.getElementById("gallery-modal");

    const galleryGrid = document.getElementById("gallery-grid");

    const galleryTitle = document.getElementById("gallery-title");


    /* Clear old images */

    galleryGrid.innerHTML = "";


    /* Change gallery title */

    galleryTitle.textContent = galleryTitles[category];


    /* Get images */

    const images = galleries[category];


    /* Create image elements */

    images.forEach(function(image) {


        const item = document.createElement("div");

        item.className = "gallery-item";


        const img = document.createElement("img");

        img.src = image;

        img.alt = galleryTitles[category];


        /* Click image to make it larger */

        item.addEventListener("click", function() {

            openImageViewer(image);

        });


        item.appendChild(img);

        galleryGrid.appendChild(item);


    });


    /* Show gallery */

    modal.classList.add("active");


    /* Prevent background scrolling */

    document.body.style.overflow = "hidden";

}



/* =========================================
   CLOSE CATEGORY GALLERY
========================================= */

function closeGallery() {


    const modal = document.getElementById("gallery-modal");


    modal.classList.remove("active");


    document.body.style.overflow = "";


}



/* =========================================
   CREATE IMAGE VIEWER
========================================= */

function openImageViewer(image) {


    /* Create viewer */

    const viewer = document.createElement("div");

    viewer.className = "image-viewer active";


    /* Create image */

    const img = document.createElement("img");

    img.src = image;


    /* Create close button */

    const closeButton = document.createElement("button");

    closeButton.className = "image-viewer-close";

    closeButton.innerHTML = "&times;";


    closeButton.onclick = function(event) {

        event.stopPropagation();

        viewer.remove();

    };


    /* Close when clicking outside image */

    viewer.onclick = function(event) {

        if (event.target === viewer) {

            viewer.remove();

        }

    };


    viewer.appendChild(img);

    viewer.appendChild(closeButton);


    document.body.appendChild(viewer);

}



/* =========================================
   CLOSE WITH ESC KEY
========================================= */

document.addEventListener("keydown", function(event) {


    if (event.key === "Escape") {


        const modal = document.getElementById("gallery-modal");


        modal.classList.remove("active");


        document.body.style.overflow = "";


        const viewer = document.querySelector(".image-viewer");


        if (viewer) {

            viewer.remove();

        }

    }

});
