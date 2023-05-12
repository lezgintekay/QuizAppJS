//OOP Nesne Tabanlı Programlama
//Obejct

function Soru(soruMetni, cevapSecenekleri, dogruCevap ) 
{
    this.soruMetni = soruMetni; 
    this.cevapSecenekleri = cevapSecenekleri ; 
    this.dogruCevap = dogruCevap ; 
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}


let sorular = 
[
    new Soru("Hangisi js paket yönetim uygulamasıdır?",{a: "Node.js", b: "TypeScrript", c: "npm"}, "c" ),
    new Soru("Hangisi bles paket yönetim uygulamasıdır?",{a: "Node.js", b: "TypeScrript", c: "npm"}, "c" ),
    new Soru("Hangisi kles paket yönetim uygulamasıdır?",{a: "Node.js", b: "TypeScrript", c: "npm"}, "c" ),
    new Soru("Hangisi cles paket yönetim uygulamasıdır?",{a: "Node.js", b: "TypeScrript", c: "npm"}, "c" )
]

function Quiz(sorular) {

    this.sorular = sorular; 
    this.soruIndex = 0;

}



Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular) ;

document.querySelector(".btn_start").addEventListener("click" , function(){

    if(quiz.sorular.length != quiz.soruIndex){
        document.querySelector(".quiz_box").classList.add("active");
        console.log(quiz.soruGetir());
        quiz.soruIndex+=1;
    }
    else {
        console.log("quiz bitti");
    }
  
})


