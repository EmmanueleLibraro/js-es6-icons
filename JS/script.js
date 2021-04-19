/******************************************************************************
 * ICONE DISPLAY
 * ***************************************************************************/
 
const icons = [
    { 
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    { 
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    { 
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    { 
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    { 
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    { 
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    { 
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    { 
        name: 'user-secret',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
];

const colors = [
    '#001858',
    '#8bd3dd',
    '#f582ae',
];

//CONTAINER ICON
const container = document.querySelector('.icon');  //CHIAMIAMO IL DIV CHE AVVOLGE CON CLASS 'ICON'


//1. STAMPARE LE ICONE A SCHERMO
//printIcons(icons, container);    //I DUE PARAMETRI CHE PORTEREMO GIU NELLE FUNZIONI

//2. STAMPARE ICON
const iconeColor = colorIcons(icons, colors);









/*******************************************************************************
 * FUNZIONI
 *******************************************************************************/
//STAMPARE A SCHERMO
function printIcons(icons, container){
     //GENERARE MARKUP ICONE
    let html = '';               //VAR VUOTA PER GENERARE MARKUP
    icons.forEach( (icon) => {
        const {family, prefix, name} = icon;    //DESTRUTTURIAMO PER PRENDERE GLI OGGETTI INDICATI CHE POI VERRANNO INSERITI NELL'HTML PER RENDERLO DINAMICO
        html +=                                             //COPIAMO PARTE DELL'HTML PER RENDERLO DINAMICO CON JS/                                                    
        `<div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: #333"></i>       
            <div class="title">${name}</div>
        </div>`;
        
    });//console.log(html);

    //AGGIUNTA ICONE AL CONTAINER
    container.innerHTML = html;
};


//COLLEZIONE ICONE COLORATE
function colorIcons (icons, colors){
    const types = getType(icons);        //CHIAMIAMO LA FUNZIONE SOTTO PER ITERARCI SOPRA 

    //ASSEGNARE COLORE PER TIPO
    const colorIcons = icons.map( (icon) =>{
        const indexTyper = types.indexOf(icon.type);

        return{
            ...icon                                 //USIAMO LO SPREAD '...' PER COPIARE L'ARRAY COSI DA PERMMETTERCI DI COLORARE LE ICONE
            
        }
    });
    return colorIcons
};

//PREPARAZIONE ICONE COLORATE
function getType(icons){
    const types = [];
    icons.forEach( (icon) =>{
        if(! types.includes(icon.type) ){          //SE NON C'E' TYPE LO PUSHA NELL'ARRAU TYPES
            types.push(icon.type);
        };
    });
    return types;
};