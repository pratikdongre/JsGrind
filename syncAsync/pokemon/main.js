// fetech = function that is used to make http requrest 
// to fetch resources
// (JSON style,data or images , or files)
// simplifies async data fetching in js 
// and use for interating with apis to retrieve
// and send data asynchronously over the web
// fetch(URL, {options} eg {method : "GET"})


// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetched");
//     } else {
//         return response.json();
//     }
// })
    
    
// .then(data => console.log(data))
// .catch(error => console.error(error));


let btn = document.querySelector("#btn");
let inputs = document.querySelector('#input');
inputs.addEventListener('keydown',function(e){
    if(e.key == 'Enter' && !e.shiftKey){
        e.preventDefault();
        btn.dispatchEvent(new Event ('click', {cancelable: true}));
    }
})

// toFetchData();
async function toFetchData(){
    try{
        let input = document.querySelector('#input');

        let pokemonName = input.value.trim().toLowerCase();
        if(!pokemonName){
            throw new Error("Enter a pokemon name");
            return;
            
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetched");
        } else {
                  
        const data = await response.json();
        console.log(data);

        let img =document.querySelector('#PokemonSprite');

        if(!img){
            let img = document.createElement("img");
            document.body.appendChild(img);
        }
       
        img.id = 'PokemonSprite';
        
        img.src = data.sprites.front_default;
        img.alt = 'PokemonSprite';
        img.style.display = 'block';
    
        }   
            
        
    } 
    catch(error){
        console.error(error);
        
    }
}

