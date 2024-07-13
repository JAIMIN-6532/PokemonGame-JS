const p1name = document.querySelector("#p1_name");
const p1score = document.querySelector("#p1_score");
const img1 = document.querySelector("#card1 #img");
const name1 = document.querySelector("#card1 #name");
const exp1 = document.querySelector("#card1 #experience");
const ability1 = document.querySelector("#card1 #abilities");

const p2name = document.querySelector("#p2_name");
const p2score = document.querySelector("#p2_score");
const img2 = document.querySelector("#card2 #img");
const name2 = document.querySelector("#card2 #name");
const exp2 = document.querySelector("#card2 #experience");
const ability2 = document.querySelector("#card2 #abilities");

let score1 = 0;
let score2 = 0;
let cnt= 0 ;
document.querySelector(".tryAgain").style.display = "none";

function DisplayCard() {
    fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => {
        if (!response.ok) {
            throw new Error('Id does not match any data');
        } else {
            return response.json();
        }
    }).then((pokemonData) => {
        displayPokemon(pokemonData.results);
    }).catch((error) => {
        console.error(error);
    });
}

function displayPokemon(pokemonDataR) {
    const randomPokemon1 = pokemonDataR[Math.floor(Math.random() * pokemonDataR.length)];
    const randomPokemon2 = pokemonDataR[Math.floor(Math.random() * pokemonDataR.length)];

    let exp1Int, exp2Int;

    // Fetch details for the first Pokémon
    fetch(randomPokemon1.url).then(response => response.json()).then(pokemonDetails1 => {
        name1.textContent = pokemonDetails1.name;
        exp1.textContent = `Experience: ${pokemonDetails1.base_experience}`;
        exp1Int = pokemonDetails1.base_experience;
        ability1.textContent = `Abilities: ${pokemonDetails1.abilities.map(ability => ability.ability.name).join(", ")}`;
        img1.innerHTML = `<img src="${pokemonDetails1.sprites.front_default}" alt="${pokemonDetails1.name}">`;

        // Fetch details for the second Pokémon
        fetch(randomPokemon2.url).then(response => response.json()).then(pokemonDetails2 => {
            name2.textContent = pokemonDetails2.name;
            exp2.textContent = `Experience: ${pokemonDetails2.base_experience}`;
            exp2Int = pokemonDetails2.base_experience;
            ability2.textContent = `Abilities: ${pokemonDetails2.abilities.map(ability => ability.ability.name).join(", ")}`;
            img2.innerHTML = `<img src="${pokemonDetails2.sprites.front_default}" alt="${pokemonDetails2.name}">`;

            // Update scores based on experience comparison
            p1name.textContent = "Alice";
            p2name.textContent = "Bob";

            if (exp1Int > exp2Int) {
                score1++;
            } else if (exp1Int < exp2Int) {
                score2++;
            }
            cnt++;
            p1score.textContent = `Score: ${score1}`;
            p2score.textContent = `Score: ${score2}`;
            
            document.querySelector(".tryAgain").disabled = true;
            if(cnt == 5){
                document.querySelector(".tryAgain").style.display = "block";
                if(score1 > score2){
                    document.querySelector(".winner").textContent = `Alice is winner`;
                }
                else if(score1 === score2)document.querySelector(".winner").textContent = `match is tie!!`;
                else{
                    document.querySelector(".winner").textContent = `Bob is winner`;
                }
                // score1>score2?(`1 is winner`):document.querySelector(".winner").textContent(`2 is winner`);
                document.querySelector("#fight").disabled = true;
                document.querySelector(".tryAgain").disabled = false;
                document.querySelector(".tryAgain").addEventListener("click",()=>{
                    score1=0;
                    score2=0;
                    cnt=0;
                    p1score.textContent = `Score: ${score1}`;
                    p2score.textContent = `Score: ${score2}`;
                    document.querySelector("#fight").disabled = false;
                    document.querySelector(".winner").textContent = "";
                    document.querySelector(".tryAgain").style.display = "none";
                })
            }
        }).catch((error) => {
            console.error(error);
        });
    }).catch((error) => {
        console.error(error);
    });
}

document.querySelector("#fight").addEventListener("click", DisplayCard);


// const p1name = document.querySelector("#p1_name");
// const p1score = document.querySelector("#p1_score");
// const img1 = document.querySelector("#card1 #img");
// const name1 = document.querySelector("#card1 #name");
// const exp1 = document.querySelector("#card1 #experience");
// const ability1 = document.querySelector("#card1 #abilities");

// const p2name = document.querySelector("#p2_name");
// const p2score = document.querySelector("#p2_score");
// const img2 = document.querySelector("#card2 #img");
// const name2 = document.querySelector("#card2 #name");
// const exp2 = document.querySelector("#card2 #experience");
// const ability2 = document.querySelector("#card2 #abilities");

// // let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/");
// let score1 = 0;
// let score2 = 0;


// function DisplayCard() {
//    fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => {
//         if (!response.ok) {
//             throw new Error('Id does not match any data');
//         } else {
//             return response.json();
//         }
//     }).then((pokemonData) => {
//         displayPokemon(pokemonData.results);
//     });
// }

// function displayPokemon(pokemonDataR) {
   
    
    
// //     // Get random Pokémon from the results
//     const randomPokemon1 = pokemonDataR[Math.floor(Math.random() * pokemonDataR.length)];
//     const randomPokemon2 = pokemonDataR[Math.floor(Math.random() * pokemonDataR.length)];
// 	let exp1Int,exp2Int;
// //     // Fetch details for the first Pokémon
//     fetch(randomPokemon1.url).then(response => response.json()).then(pokemonDetails1=>{
//         name1.textContent = pokemonDetails1.name;
//         exp1.textContent = `Experience: ${pokemonDetails1.base_experience}`;
//         exp1Int = pokemonDetails1.base_experience;
//             ability1.textContent = `Abilities: ${pokemonDetails1.abilities.map(ability => ability.ability.name).join(", ")}`;
//             img1.innerHTML = `<img src="${pokemonDetails1.sprites.front_default}" alt="${pokemonDetails1.name}">`;
//     })
    
// //         .then(response => response.json())
// //         .then(pokemonDetails1 => {
// //             name1.textContent = pokemonDetails1.name;
// //             exp1.textContent = `Experience: ${pokemonDetails1.base_experience}`;
// //             ability1.textContent = `Abilities: ${pokemonDetails1.abilities.map(ability => ability.ability.name).join(", ")}`;
// //             img1.innerHTML = `<img src="${pokemonDetails1.sprites.front_default}" alt="${pokemonDetails1.name}">`;
// //         });

// //     // Fetch details for the second Pokémon
//     fetch(randomPokemon2.url)
//         .then(response => response.json())
//         .then(pokemonDetails2 => {
//             name2.textContent = pokemonDetails2.name;
//             exp2.textContent = `Experience: ${pokemonDetails2.base_experience}`;
//         exp2Int = pokemonDetails2.base_experience;
//             ability2.textContent = `Abilities: ${pokemonDetails2.abilities.map(ability => ability.ability.name).join(", ")}`;
//             img2.innerHTML = `<img src="${pokemonDetails2.sprites.front_default}" alt="${pokemonDetails2.name}">`;
//         });
//     p1name.textContent = "Alice";
//      if(exp1Int > exp2Int){   
//         score1++;
//     }else{
//         score2++;
//     }
//     p1score.textContent = `Score: ${score1}`;
//     p2name.textContent = "Bob";
//     p2score.textContent = `Score: ${score2}`;
// }

// document.querySelector("#fight").addEventListener("click", DisplayCard);


// //Implement your code here 
// const p1name = document.querySelector("#p1_name");
// const p1score =  document.querySelector("#p1_score");
// const img1 =  document.querySelector("#card1 #img");
// const name1 =  document.querySelector("#card1 #name");
// const exp1 =  document.querySelector("#card1 #experience");
// const ability1 =  document.querySelector("#card1 #abilities");

// const p2name =  document.querySelector("#p2_name");
// const p2score =  document.querySelector("#p2_score");
// const img2 =  document.querySelector("#card2 #img");
// const name2 =  document.querySelector("#card2 #name");
// const exp2 =  document.querySelector("#card2 #experience");
// const ability2 =  document.querySelector("#card2 #abilities");

// let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/");
// let score1=0;
// let score2=0;

// document.querySelector("#fight").addEventListener("click",DisplayCard);

// function DisplayCard(){
//     pokemon.then((response)=>{
//         if(!response.ok){
//             throw new Error('Id does not match any data'); 
//         }else{
//             return response.json();
//         }
//     }).then((pokemonData)=>{
//         displayPokemon(pokemonData.results);
//     })
// }
// let i=1;
// function displayPokemon(pokemonDataR){
//     p1name.textContent = "Alice";
//     p1score.textContent = `Score :${score1}`;
//     p2name.textContent = "bob";
//     p2score.textContent = `Score :${score2}`;
//     const pimg1 = document.createElement("img");
//     fetch(pokemonDataR.url).then((response)=>response.json).then((imgurl)=>{
//         pimg1.src = imgurl.textContent; 
//         img1.appendChild(pimg1);   
//     })
   
// }

