function gerar() {
    const valor3 = document.getElementById('valor').value;

    const valor2 = parseFloat(valor3);

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });

    document.getElementById('recibo_valor').innerHTML = formatter.format(valor3);
    document.getElementById('recibo_nome').innerHTML = document.getElementById('nome-pagador').value;
    document.getElementById('recibo_cpfpagador').innerHTML = document.getElementById('cpf-pagador').value
    document.getElementById('recibo_Referente').innerHTML = document.getElementById('referente').value;
    document.getElementById('recibo_emissor').innerHTML = document.getElementById('nome-emissor').value;
    document.getElementById('recibo_pagamento').innerHTML = document.getElementById('pagamento').value;
    document.getElementById('recibo_cidade').innerHTML = document.getElementById('cidade').value;
    document.getElementById('recibo_assinatura_emissor').innerHTML = document.getElementById('nome-emissor').value;
    document.getElementById('recibo_cpfemissor').innerHTML = document.getElementById('cpf-emissor').value;
    document.getElementById('recibo_telefone').innerHTML = document.getElementById('telefone').value;
    document.getElementById('recibo_obs').innerHTML = document.getElementById('obs').value;
    //formatando numero por extenso
    const formatter3 = new Intl.NumberFormat('pt-br');
    var input = document.querySelector("#valor")
    var texto = input.value;
    var valor = formatter3.format(texto);
    var valorr = valor.extenso(true);
    
    document.getElementById('recibo_valorext').innerHTML = valorr;

    //formatando data
    const data1 = document.getElementById('data').value;
    const data2 = new Date();
    const formatter1 = Intl.DateTimeFormat("pt-BR" , {
        dateStyle: "long",
    });
    document.getElementById('recibo_data').innerHTML = formatter1.format(data2);
    window.print();
}


//código para formatar CPF e telefone
const input = document.getElementById('cpf-pagador') 

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    // MAX LENGHT 14  CPF
    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'
    }else if (inputLength == 11) {
        input.value += '-'
    }
})

const input1 = document.getElementById('cpf-emissor')

input1.addEventListener('keypress', () => {
    let inputLength = input1.value.length

    // MAX LENGHT 14  CPF
    if (inputLength == 3 || inputLength == 7) {
        input1.value += '.'
    }else if (inputLength == 11) {
        input1.value += '-'
    }
})

const input2 = document.getElementById('telefone')

input2.addEventListener('keypress', () => {
    let inputLength = input2.value.length

    // MAX LENGHT 14  CPF
    if (inputLength == 0) {
        input2.value += '('
    }else if (inputLength == 3) {
        input2.value += ')'
    }else if (inputLength == 9){
        input2.value += '-'
    }
})

//código numero por extenso
String.prototype.extenso = function(c){
	var ex = [
		["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
		["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
		["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
		["mil", "milhão", "bilh�o", "trilh�o", "quadrilh�o", "quintilh�o", "sextilh�o", "setilh�o", "octilh�o", "nonilh�o", "decilh�o", "undecilh�o", "dodecilh�o", "tredecilh�o", "quatrodecilh�o", "quindecilh�o", "sedecilh�o", "septendecilh�o", "octencilh�o", "nonencilh�o"]
	];
	var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
	for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
		j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
		if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
		for(a = -1, l = v.length; ++a < l; t = ""){
			if(!(i = v[a] * 1)) continue;
			i % 100 < 20 && (t += ex[0][i % 100]) ||
			i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
			s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
			((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("�o", "�es") : ex[3][t]) : ""));
		}
		a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
		a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
	}
	return r.join(e);
}


