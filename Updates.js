const nombreArchivo = "Actualizacion 4 de Mayo.txt";
const rutaEscritorio = "C:/Users/59901647/Downloads/";

function verificarActualizacion() {
    const rutaCompletaArchivo = rutaEscritorio + nombreArchivo;

    // Mostrar mensaje de proceso en curso
    alert("Revisando Actualizaciones...");

    // Intentar acceder al archivo local
    fetch(rutaCompletaArchivo)
        .then(response => {
            if (response.ok) {
                // Si el archivo está disponible, mostrar mensaje de completado
                alert("Se completo el proceso, no hay actualizaciones por descargar.");
            } else {
                // Si el archivo no está disponible, mostrar mensaje de actualización por descargar
                alert("Hay actualizaciones por descargar. Revisa si tienes el archivo de la última actualización en la Carpeta Descargas.");
                const confirmacion = confirm("No se encontró el archivo de actualización en tu escritorio. ¿Deseas descargar la última versión?");
                if (confirmacion) {
                    window.location.href = "https://gist.github.com/OceanandWild/bc49aee8d9b760e41682294a11ab9b6e";
                }
            }
        })
        .catch(error => {
            // Mostrar mensaje de error si no se puede acceder al archivo de actualización
            alert("Error de Actualizacion: No se pudo acceder al archivo de actualización. Asegúrate de que el archivo esté en la ruta especificada y tengas los permisos adecuados para acceder a él. La ruta debe de estar en la segunda carpeta despues de la carpeta principal. La ruta del archivo puede ser diferente pero tiene que ir en la carpeta de descargas siempre.");
            console.error(error); // Muestra el error detallado en la consola del navegador para fines de depuración
        });
}

// Llama a la función para verificar la actualización en algún punto de tu aplicación
verificarActualizacion();
