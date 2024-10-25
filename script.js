// Função para validar formulário de contato
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    
    return true;
}

// Adicionar evento de clique ao botão de enviar
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
        // Enviar formulário
        alert('Formulário enviado com sucesso!');
    }
});
