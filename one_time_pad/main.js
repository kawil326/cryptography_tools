function fun() {
    var in_szyfr = "asd";

    in_tekst = document.getElementById('input_tekst').value;
    in_szyfr = document.getElementById('input_szyfr').value;
    
    tem_tekst = in_tekst.split('');
    tem_szyfr = in_szyfr.split('');

    var alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var alfabet_szyfr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    for(var i=0; i < in_szyfr.length; i++) {
        for(var j = 0; j< 26; j++) {
            if(tem_szyfr[i] == alfabet[j]) {
                [alfabet_szyfr[i], alfabet_szyfr[j]] = [alfabet_szyfr[j], alfabet_szyfr[i]];
            }
        }
    }

    document.getElementById('rozw').innerHTML = alfabet_szyfr;
}