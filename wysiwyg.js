var domTarget = document.getElementById("container");
var inputTarget = document.getElementById("userInput");
var global;
function MakePerson(title, name, bio, image, life) {
    this.title = title;
    this.name = name;
    this.bio = bio;
    this.image = image;
    this.life = life;
}
var aristotle = new MakePerson("Father of Biology", "Aristotle", "Ancient Greek philosopher Aristotle was born circa 384 B.C. in Stagira, a small town on the northern coast of Greece that was once a seaport. Aristotle's father, Nicomachus, was court physician to the Macedonian king Amyntas II.", "http://www.bachelorandmaster.com/media/show/314", "384 - 322 BC");
var lavoisier = new MakePerson("Father of Modern Chemistry", "Antoine Lavoisier", "A French nobleman and chemist central to the 18th-century chemical revolution and had a large influence on both the history of chemistry and the history of biology.", "http://www.abamm.org/images01/lavoisier01.jpg", "1743 - 1794");
var copernicus = new MakePerson("Father of Astronomy", "Nicolaus Copernicus", "Copernicus developed his own celestial model of a heliocentric planetary system. Around 1514, he shared his findings in the Commentariolus.", "http://images.socratica.com/icon/6488274486951936.png", "1473 - 1508");
var boole = new MakePerson("Father of Computer Science", "George Boole", "English mathematician who helped establish modern symbolic logic and whose algebra of logic, now called Boolean algebra, is basic to the design of digital computer circuits.", "http://i875.photobucket.com/albums/ab317/jlgmx/GeorgeBoole.jpg", "1815 - 1864");
var galileo = new MakePerson("Father of Science", "Galileo Galilei", "A  Italian polymath: astronomer, physicist, engineer, philosopher, and mathematician. He played a major role in the scientific revolution of the seventeenth century.", "http://glassicgifts.com/wp-content/uploads/2013/12/Galileo-e1389128463550.jpg", "1564 - 1642");
var sceintistHolder = [aristotle, lavoisier, copernicus, boole, galileo];

sceintistHolder.forEach(function(i) {
    var mockUp = `<div class="holder"><header class="title">${i.title}${i.name}</header><section><p class="bio">${i.bio}</p><img src="${i.image}" class="bio-image"></img></section><footer class="life">${i.life}</footer></div>`;
    domTarget.innerHTML += mockUp;
    var holder = document.getElementsByClassName('holder');
    for(var j = 0; j < holder.length; j++) {
        holder[j].addEventListener("click", dotBorder);
    }
});
function dotBorder(event) {
    global = event.currentTarget;
    event.currentTarget.classList.toggle("coolBorder");
    event.currentTarget.childNodes[1].childNodes[0].classList.toggle("writeHere");
    inputTarget.focus();
}
inputTarget.addEventListener("keyup", writeBio)
function writeBio() {
    var writeHereClasses = document.getElementsByClassName("writeHere");
    for(var x = 0; x < writeHereClasses.length; x++) {
        writeHereClasses[x].innerHTML = inputTarget.value;
    }
}
inputTarget.addEventListener("keypress", looseFocus);
function looseFocus() {
    if (event.keyCode == 13) {
        var holder = document.getElementsByClassName('holder');
        global.classList.toggle("coolBorder");
        inputTarget.value = "";
        }
}
