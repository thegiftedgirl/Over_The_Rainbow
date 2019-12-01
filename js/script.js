// Input Process Output


//input pieces of data that are constant

const URL_ENDPOINT="https://images-api.nasa.gov/search?q={q}api_key=eS3Ga2uKrrsAaXEbuFmfuewbDskcR1Q6nliWC6Kt"


//the data that can change


let input, images;



/********* Cached Elements **********/
const $planetsListElement = $('#planets');
const $inputELement = $('input');

document.querySelector('planets');

/********* Event Listeners **********/

$('#controls').on('click', 'button', handleClick);


/******** Functions ****************/







function handleClick(){
  
     getAPIData(); 
     alert($(this).val());  
}

function getAPIData(){
    const response = $.ajax({
        url: "https://images-api.nasa.gov/search?q={q}api_key=eS3Ga2uKrrsAaXEbuFmfuewbDskcR1Q6nliWC6Kt"
    });
    response.then(function(data){
        console.log(data);
        console.log(response);
    });
} 