const API_URL = 'http://localhost:3000/api';

const form = document.getElementById('occurrenceForm');
const occurrencesList = document.getElementById('occurrencesList');

async function loadOccurrences() {

    const response = await fetch(`${API_URL}/occurrences`);
    const data = await response.json();

    occurrencesList.innerHTML = '';

    data.forEach(item => {

        occurrencesList.innerHTML += `
            <div class="card">
                <h3>${item.type}</h3>
                <p><strong>Cidadão:</strong> ${item.citizen_name}</p>
                <p><strong>Descrição:</strong> ${item.description}</p>
                <p><strong>Local:</strong> ${item.location}</p>
               <p><strong>Status:</strong> ${item.status}</p>

<select onchange="updateStatus(${item.id}, this.value)">
    <option value="">Alterar status</option>
    <option value="Aberta">Aberta</option>
    <option value="Em análise">Em análise</option>
    <option value="Resolvida">Resolvida</option>
</select>
            </div>
        `;
    });
}

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const occurrence = {
        citizen_name: document.getElementById('citizen_name').value,
        type: document.getElementById('type').value,
        description: document.getElementById('description').value,
        location: document.getElementById('location').value
    };

    const response = await fetch(`${API_URL}/occurrences`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(occurrence)
    });

    if (response.ok) {
        alert('Ocorrência registrada com sucesso!');
        form.reset();
        loadOccurrences();
    } else {
        alert('Erro ao registrar ocorrência.');
    }
});

loadOccurrences();

    async function updateStatus(id, status) {

    if (!status) return;

    const response = await fetch(
        `${API_URL}/occurrences/${id}/status`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        }
    );

    if (response.ok) {
        loadOccurrences();
    } else {
        alert('Erro ao atualizar status.');
    }
}