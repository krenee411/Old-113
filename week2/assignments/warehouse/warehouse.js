const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

// list of each part number and qty for check-off in the "detailsList" element
function Items(){
for (i=0; i< parts.length; i++){
    console.log("Part:" + parts[i].partDescr + " Quanity:" + parts[i].qty)
}}
Items();
console.log("----------------------------------")
// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element
function Special(){
for (i=0; i< parts.length; i++){
   if(parts[i].aisle == 'B3'){
    console.log(parts[i].partDescr)
   }}}
   Special();
     console.log("-------------------------------")
// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element
function Haz(){
for (i=0; i< parts.length; i++){
    if(parts[i].aisle == 'J4'){
     console.log("**HAZARDOUS** " + parts[i].partDescr + ": You will need gloves to handle this item!")
    }}}
    Haz();
    console.log("---------------------------------")

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1
function Small(){
for (i=0; i< parts.length; i++){
    if(parts[i].aisle == 'H1'){
     console.log("**SMALL PARTS** " + parts[i].partDescr + ": Alise: H1-- Dont forget you will need a basket!")
    }}}
    Small();
    console.log("-----------------------------")
// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element
function Heavy(){
for (i=0; i< parts.length; i++){
    if(parts[i].aisle == 'S'|'T'|'U'){
     console.log("**FORKLIFT NEEDED** " + parts[i].partDescr)
    }}}
    Heavy();
// sum up the total number of parts and append that number to the text already in "totalItems" element
function Total(){
for (i=0; i< parts.length; i++){
     console.log("Total Items:" + parts.length *1)
}}
Total();

let click= document.getElementsByClassName('sidebar')
let detail= document.getElementById('detailsList')
let special=document.getElementById('specialPackaging')
let hazardous=document.getElementById('hazardousMaterials')
let smallItem=document.getElementById('smallItemsOnly')
let fork= document.getElementById('forkiftNeeded' )
let all= document.getElementById('totalItems')