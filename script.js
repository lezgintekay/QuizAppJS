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
    new Soru("Hangisi js paket yönetim uygulamasıdır?",{a: "Node.js", b: "TypeScrript", c: "npm", d: "nuget"}, "c" ),
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
         document.querySelector(".quiz_box").classList.add("active");
        soruGoster(quiz.soruGetir());
})

document.querySelector(".next_btn").addEventListener("click" , function(){
    if(quiz.sorular.length != quiz.soruIndex+1){
        quiz.soruIndex+=1;
        soruGoster(quiz.soruGetir());
        
    }
    else {
        console.log("quiz bitti");
    }

})


function soruGoster (soru) {
    let question = 
    `<span>${soru.soruMetni}</span>
    `

    let options = ''; 

    for ( let cevap in soru.cevapSecenekleri) {
        options += `
        <div class="options">
            <span><b>${cevap} : ${soru.cevapSecenekleri[cevap]}</b></span>
            <div class="icon"> <i class="fas fa-check"></i></div>
          </div>
        `
    }

    document.querySelector(".question_text").innerHTML = question ;
    document.querySelector(".option_list").innerHTML = options ;

}
