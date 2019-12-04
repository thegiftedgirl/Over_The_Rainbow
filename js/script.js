// Input Process Output


//input pieces of data that are constant

const URL_ENDPOINT="https://images-api.nasa.gov/search?q="


//the data that can change


let input, images;// items



/********* Cached Elements **********/
const $collectionListElement = $('#collection');
const $inputElement = $('input');
const $imageListElement = $('#images-list');

//array of elements to store
//call function to print images in array
//add image tag to DOM



/********* Event Listeners **********/

$('#submit-btn').on('click', handleClick);
$('#more-images-btn').on('click', render);


/******** Functions ****************/



function handleClick(){
     input = $inputElement.val();
     if(!input) return;
     getAPIData(); 

}

function getAPIData(){
    const response = $.ajax({
        url: URL_ENDPOINT + input
    });
    response.then(function(data){
        images = data.collection.items;
        render();
    });
}

function generateImageUI() {
    const firstFive = images.splice(0, 1);
    return firstFive.map(function(element){
        return `<img src="${element.links[0].href}"> <div>"${element.data[0].description}"</div>`
    }).join("");
    
}

function render() {
    if(images.length === 0) return;
    const imageHtml = generateImageUI();
    $imageListElement.append(imageHtml);
}