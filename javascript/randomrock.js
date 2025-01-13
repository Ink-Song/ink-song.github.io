

const rockNames = ["Adakite", "Andesite", "Alkali feldspar granite", "Anorthosite", "Aplite", "Basalt", "Basaltic trachyandesite", "Mugearite", "Shoshonite", "Basanite", "Blairmorite", "Boninite", "Carbonatite", "Charnockite", "Enderbite", "Dacite", "Diabase", "Diorite", "Napoleonite", "Dunite", "Essexite", "Foidolite", "Gabbro", "Granite", "Granodiorite", "Granophyre", "Harzburgite", "Hornblendite", "Hyaloclastite", "Icelandite", "Ignimbrite", "Ijolite", "Kimberlite", "Komatiite", "Lamproite", "Lamprophyre", "Latite", "Lherzolite", "Monzogranite", "Monzonite", "Nepheline syenite", "Nephelinite", "Norite", "Obsidian", "Pegmatite", "Peridotite", "Phonolite", "Phonotephrite", "Picrite", "Porphyry", "Pumice", "Pyroxenite", "Quartz diorite", "Quartz monzonite", "Quartzolite", "Rhyodacite", "Rhyolite", "Comendite", "Pantellerite", "Scoria", "Shonkinite", "Sovite", "Syenite", "Tachylyte", "Tephriphonolite", "Tephrite", "Tonalite", "Trachyandesite", "Benmoreite", "Trachybasalt", "Hawaiite", "Trachyte", "Troctolite", "Trondhjemite", "Tuff", "Websterite", "Wehrlite", "Turbidite", "Argillite", "Arkose", "Banded iron formation", "Breccia", "Calcarenite", "Chalk", "Chert", "Claystone", "Coal", "Conglomerate", "Coquina", "Diamictite", "Diatomite", "Dolomite", "Evaporite", "Flint", "Geyserite", "Greywacke", "Gritstone", "Itacolumite", "Jaspillite", "Laterite", "Lignite", "Limestone", "Marl", "Mudstone", "Oil shale", "Oolite", "Phosphorite", "Sandstone", "Shale", "Siltstone", "Sylvinite", "Tillite", "Travertine", "Tufa", "Turbidite", "Wackestone", "Anthracite", "Amphibolite", "Blueschist", "Cataclasite", "Eclogite", "Gneiss", "Granulite", "Greenschist", "Hornfels", "Calcflinta", "Litchfieldite", "Marble", "Migmatite", "Mylonite", "Metapelite", "Metapsammite", "Phyllite", "Pseudotachylite", "Quartzite", "Schist", "Serpentinite", "Skarn", "Slate", "Suevite", "Talc carbonate", "Soapstone", "Tectonite", "Whiteschist", "Adamellite", "Appinite", "Aphanite", "Borolanite", "Blue Granite", "Epidosite", "Felsite", "Flint", "Ganister", "Gossan", "Hyaloclastite", "Ijolite", "Jadeitite", "Jasperoid", "Kenyte", "Lapis lazuli", "Larvikite", "Litchfieldite", "Llanite", "Luxullianite", "Mangerite", "Minette", "Novaculite", "Pietersite", "Pyrolite", "Rapakivi granite", "Rhomb porphyry", "Rodingite", "Shonkinite", "Taconite", "Tachylite", "Teschenite", "Theralite", "Unakite", "Variolite", "Vogesite", "Wad (mineral)"]




function getRandomInt(min, max){
    const minCeiled = Math.ceil(min);
    const maxfloored = Math.floor(max);
    return Math.floor(Math.random() * (maxfloored - minCeiled)) + minCeiled;
}


function myFunction(){
    list = document.getElementById("target");
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    const generatedNames = [];
    const amount = 5;
    n = 0;
    while(n < amount){
        generatedNames[n] = rockNames[getRandomInt(0,180)];
        n++;
    }
    arrayToUL(generatedNames);
}

function arrayToUL(arr){
    list = document.getElementById("target");

    arr.forEach((item) => {
        let li = 
            document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
    

}