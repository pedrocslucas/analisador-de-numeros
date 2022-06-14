var num = document.querySelector('input#txtnum')
var lista = document.getElementById('flista')
var res = document.querySelector('div#res')
let valores = [ ]

//Função para verificar se o valor digitado é um número válido.
function isNumero(numero){
        if(Number(numero) >= 1 && Number(numero) <= 100){
                return true
        } else {
                return false
        }
}

//Função para verificar se o valor está na lista
function inLista(numero, lista){
        if(lista.indexOf(Number(numero)) != -1){
                return true
        } else {
                return false
        }
}

function adicionarElemento(){
        if(isNumero(num.value) && !inLista(num.value, valores)){
                valores.push(Number(num.value))
                let item = document.createElement('option')
                item.text = `Valor ${num.value} foi adicionado.`
                lista.appendChild(item)
                res.innerHTML = ''
        }else{
                window.alert('Valor Inválido ou Já Encontrado na Lista.')
        }
        num.value = ' '
        num.focus()
}

function finalizar(){
        if(valores.length == 0){
                alert('Adicione valores antes de finalizar')
        } else {
                let tamanho = valores.length
                let maior = valores[0]
                let menor = valores[0]
                var soma =  0
                var media = 0
                for(let pos in valores){
                        soma += valores[pos]
                        if(valores[pos] > maior){
                                maior = valores[pos]
                        }
                        if(valores[pos] < menor){
                                menor = valores[pos]
                        }
                }
                media = soma/tamanho

                res.innerHTML = ''
                res.innerHTML += `<p>Ao todo temos ${tamanho} números cadastrados.</p>`
                res.innerHTML += `<p>O maior valor da lista é ${maior}.</p>`
                res.innerHTML += `<p>O menor valor da lista é ${menor}.</p>`
                res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
                res.innerHTML += `<p>A média dos valores é ${media}</p>`
        }
}