// Detectar o clique na caixa de correio (envelope)
document.getElementById('mailbox').addEventListener('click', function() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    
    // Exibir a mensagem com animação
    if (hiddenMessage.style.display === 'none' || hiddenMessage.style.display === '') {
        hiddenMessage.style.display = 'block';
        hiddenMessage.style.animation = 'fadeInMessage 1s ease-in-out';
    }
    
    // Animação de abrir o envelope
    const flap = document.querySelector('.envelope-flap');
    flap.style.transform = 'rotateX(180deg)';
});
