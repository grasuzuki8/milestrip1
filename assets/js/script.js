document.getElementById('mileageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const programa = document.getElementById('programa').value;
    const quantidade = document.getElementById('quantidade').value;
    const resultadoDiv = document.getElementById('resultado');

    // Valor fictício por milheiro (1.000 milhas)
    const valorMilheiro = {
        'latam': 25.50,
        'smile': 18.00,
        'tudoazul': 21.00
    };

    if (quantidade >= 1000) {
        const valorEstimado = (quantidade / 1000) * valorMilheiro[programa];
        
        resultadoDiv.innerHTML = `
            <div style="margin-top:20px; padding:15px; background:#e8f4fd; border-radius:5px;">
                <p>Olá <strong>${nome}</strong>!</p>
                <p>Estimativa para ${quantidade} milhas no programa ${programa.toUpperCase()}:</p>
                <h3 style="color:#28a745;">R$ ${valorEstimado.toFixed(2)}</h3>
                <small>*Valor sujeito a alteração de mercado.</small>
            </div>
        `;
    } else {
        alert("A quantidade mínima para venda costuma ser de 1.000 milhas.");
    }
});