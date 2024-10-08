// URL de la API
const apiUrl = 'https://formullario-smd-back.onrender.com/hospitales';

const dropdown = document.getElementById('hospitales-dropdown');

// Función para cargar los datos en el dropdown
async function cargarHospitales() {
    try {
        
        const response = await fetch(apiUrl);

        
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }

        const hospitales = await response.json();

        hospitales.forEach(hospital => {
            const option = document.createElement('option');
            option.id = hospital.id;
            option.nombre = hospital.nombre;
            option.direccion = hospital.direccion;
            option.telefono = hospital.telefono;
            option.mapsuri = hospital.mapsuri;
            dropdown.appendChild(option);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

window.onload = cargarHospitales;
