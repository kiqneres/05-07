var minhaLista = [
    "Arroz",
    "Feijão",
    "Batata",
    "Macarrão ",
    "Picanha",
]

    var minhaLista = document.getElementById("lista")
    var produtos = document.getElementById ("produto")

    

function salvar() {
    
     minhaLista.push(produtos.value)
     produtos.value = ''
        
 }


function mostrarLista() {
        
for (var index = 0; minhaLista.length; index++){
    document.write ( "<p>" + minhaLista[index] + "</p>")
}
}