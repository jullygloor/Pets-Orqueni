function addLinha() {
    console.log('vamos adicionar uma linha na tabela');

    const tabela = document.querySelector("#minhaTabela tbody");
    const novaLinha = tabela.insertRow();

    const celulaFoto = novaLinha.insertCell(0);
    const celulaNome = novaLinha.insertCell(1);
    const celulaAnimal = novaLinha.insertCell(2);
    const celulaCodigo = novaLinha.insertCell(3);

    // Solicita a URL da imagem
    const imgUrl = prompt("Digite a URL da imagem:");
    celulaFoto.innerHTML = `<img src="${imgUrl}" alt="Animal" style="width: 50px; height: auto;">`;

    celulaNome.innerText = prompt("Digite o nome:");
    celulaAnimal.innerText = prompt("Digite o tipo de animal:");
    celulaCodigo.innerText = prompt("Digite o código:");
}