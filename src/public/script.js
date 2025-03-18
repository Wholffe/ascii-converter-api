document.getElementById('uploadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const asciiImage = await response.text();
            document.getElementById('asciiOutput').value = asciiImage;
        } else {
            const errorText = await response.text();
            alert(`Fehler: ${errorText}`);
        }
    } catch (error) {
        console.error('Error uploading image:', error);
        alert('Ein Fehler ist beim Hochladen des Bildes aufgetreten.');
    }
});
