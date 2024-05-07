// Variable para verificar si la ULTI está activada
  let ultiActivada = false;

  // Función para cerrar el modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }

// Función para seleccionar un personaje
function seleccionarPersonaje(personaje) {
  closeModal('modalPersonajes');
  alert('Has seleccionado a: ' + personaje);

  // Llamar a la función mostrarHabilidades para actualizar los botones de habilidades según el personaje seleccionado
  mostrarHabilidades2(personaje);
}

 // Función para mostrar las habilidades del personaje seleccionado
function mostrarHabilidadesTrex(personaje) {
  // Definir las habilidades de cada personaje
  switch (personaje) {
    case 'T-Rex':
      document.getElementById('nombrePersonaje').innerText = 'T-Rex:';
      document.getElementById('habilidadesAntesUltiTexto').innerText = 'Habilidad 1, Habilidad 2';
      document.getElementById('habilidadesDuranteUltiTexto').innerText = 'HabilidadesDuranteUlti 1, HabilidadesDuranteUlti 2, HabilidadesDuranteUlti 3, HabilidadesDuranteUlti 4';
      document.getElementById('habilidades2').style.display = 'block'; // Mostrar el div de habilidades
      document.getElementById('habilidadesAntesUlti').style.display = 'block'; // Mostrar las habilidades antes de la ULTI
      document.getElementById('habilidadesDuranteUlti').style.display = 'none'; // Ocultar las habilidades durante la ULTI
      // Mostrar botones de habilidades del T-Rex
      document.getElementById('milGarrasButton').innerText = 'Mil Garras';
      document.getElementById('milGarrasButton').setAttribute('onclick', 'modalVideoMilGarras()');
      document.getElementById('lluviaMeteoritosButton').innerText = 'Lluvia de Meteoritos';
      document.getElementById('lluviaMeteoritosButton').setAttribute('onclick', 'abrirModalLluviadeMeteoritos()');
      document.getElementById('Marca Gradual').style.display = 'block'; // Mostrar habilidad 3
      document.getElementById('Marca Gradual').innerText = 'Marca Gradual';
      document.getElementById('Marca Gradual').setAttribute('onclick', 'MarcaGradual()');
      document.getElementById('Dominio Jurasico').style.display = 'block'; // Mostrar habilidad 4
      document.getElementById('Dominio Jurasico').innerText = 'Dominio Jurasico';
      document.getElementById('Dominio Jurasico').setAttribute('onclick', 'abrirModalDominioJurasico()');
      iniciarRecargaUlti();
      break;
  }
}


  // Función para usar una habilidad
  function usarHabilidad(numeroHabilidad) {
    if (!ultiActivada) {
      // Lógica para habilidades normales
      switch (numeroHabilidad) {
        case 1:
          // Lógica para habilidad 1
          alert('Usaste habilidad 1');
          break;
        case 2:
          // Lógica para habilidad 2
          alert('Usaste habilidad 2');
          break;
        case 3:
          // Lógica para habilidad 3
          alert('Usaste habilidad 3');
          break;
        case 4:
          // Lógica para habilidad 4
          alert('Usaste habilidad 4');
          break;
        default:
          break;
      }
    } else {
      // Lógica para habilidades durante la ULTI
      switch (numeroHabilidad) {
        case 1:
          // Lógica para habilidad 1 durante ULTI
          alert('Usaste habilidad 1 durante la ULTI');
          break;
        case 2:
          // Lógica para habilidad 2 durante ULTI
          alert('Usaste habilidad 2 durante la ULTI');
          break;
        case 3:
          // Lógica para habilidad 3 durante ULTI
          alert('Usaste habilidad 3 durante la ULTI');
          break;
        case 4:
          // Lógica para habilidad 4 durante ULTI
          alert('Usaste habilidad 4 durante la ULTI');
          break;
        default:
          break;
      }
    }
  }

  // Función para iniciar la recarga de la ULTI
  function iniciarRecargaUlti() {
    // Lógica para iniciar la recarga de la ULTI
  }