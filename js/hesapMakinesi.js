let suankiToplam = 0;
let hesap = "0";
let oncekiOperator = null;

const calcScreen = document.querySelector(".hesap-numaralar");

document.querySelector('.hesap-butonlar').addEventListener("click",function(event){
    buttonClick(event.target.innerHTML);
});


function buttonClick(value){
    if(isNaN(parseInt(value))){
        digerSemboller(value);
    }else{
        tutulanSayi(value);
    }
    yenidenGoruntule();
}

function tutulanSayi(value){
    if(hesap === "0"){
        hesap = value;
    }else{
        hesap += value;
    }
}

function tutulanIslem(value){
    const icHesap = parseInt(hesap);

    if (suankiToplam === 0){
        suankiToplam = icHesap;
    }else{
        hesaplamaIslemleri(icHesap);
    }

    oncekiOperator = value;
    hesap = "0";
}

function yenidenGoruntule(){
    calcScreen.value = hesap;
}

function digerSemboller(value){
    switch (value){
        case "C":
            hesap = "0";
            suankiToplam = 0;
            oncekiOperator = null;
            break;
        case "=":
            if(oncekiOperator === null){
                return;
            }
            hesaplamaIslemleri(parseInt(hesap));
            hesap = "" + suankiToplam;
            oncekiOperator = null;
            suankiToplam = 0;
            break;
        case "←":
            if(hesap.length === 1){
                hesap = "0";
            }
            else{
                hesap = hesap.substring(0,hesap.length-1);
            }
            break;
        default:
            tutulanIslem(value);
            break;
    }
}

function hesaplamaIslemleri(icHesap){
    if(oncekiOperator === "+"){
        suankiToplam += icHesap;
    }else if(oncekiOperator === "-"){
        suankiToplam -= icHesap;
    }else if(oncekiOperator === "x"){
        suankiToplam *= icHesap;
    }else{
        suankiToplam /= icHesap;
    }
}