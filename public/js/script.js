// Placeholder for future JavaScript

document.addEventListener('DOMContentLoaded', (event) => {
    // You can add interactive elements here if needed.
    console.log("DOM fully loaded and parsed");

    // Example: Highlight active nav link (basic implementation)
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.borderBottomColor = '#4dabf7'; // Match hover style
            link.style.color = '#ffffff';
        }
    });
});

// Lógica para el formulario de estimación de proyecto
document.addEventListener('DOMContentLoaded', function() {
    const estimateForm = document.getElementById('estimateForm');
    
    if (estimateForm) {
        estimateForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Recopilar datos del formulario
            const formData = {
                inputTech: document.getElementById('inputTech').value.trim(),
                outputTech: document.getElementById('outputTech').value.trim(),
                feedback: document.getElementById('feedbackText').value.trim(),
                name: document.getElementById('nameInput').value.trim(),
                company: document.getElementById('companyInput').value.trim(),
                email: document.getElementById('emailInput').value.trim(),
                timestamp: new Date().toISOString()
            };
            
            // Guardar los datos
            saveFormData(formData);
        });
    }
    
    function saveFormData(data) {
        // En un entorno real, aquí haríamos una petición AJAX al servidor
        // Ya que estamos guardando localmente, simulamos éxito
        
        try {
            // En producción, esto sería una llamada a una API en el servidor
            // que guardaría los datos en feedback.json
            console.log('Datos del formulario:', data);
            
            // Mostrar mensaje de éxito
            const messageEl = document.getElementById('formMessage');
            messageEl.textContent = '¡Gracias por tu información! Nos pondremos en contacto contigo pronto.';
            messageEl.className = 'form-message success';
            
            // Limpiar el formulario
            document.getElementById('estimateForm').reset();
            
            // En un entorno de producción, haríamos algo como:
            /*
            fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                // Manejar respuesta exitosa
            })
            .catch(error => {
                // Manejar error
            });
            */
            
        } catch (error) {
            console.error('Error al guardar los datos:', error);
            
            // Mostrar mensaje de error
            const messageEl = document.getElementById('formMessage');
            messageEl.textContent = 'Hubo un problema al enviar tu información. Por favor, intenta de nuevo más tarde.';
            messageEl.className = 'form-message error';
        }
    }
}); 