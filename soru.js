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
];