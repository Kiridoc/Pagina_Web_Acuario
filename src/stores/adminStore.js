import {defineStore} from 'pinia';
import {ref} from 'vue';

import showLoboImg from '../assets/img/showLobo.jpg';
import showDelfinImg from '../assets/img/showDelfin.jpg';
import showPayasosYMagos from '../assets/img/showPayaso.jpg';

import eventoCorales from '../assets/img/evento-corales.jpg';
import eventoBuceo from '../assets/img/evento-buceo.jpg';
import eventoOrigami from '../assets/img/evento-origami.jpg';
import eventoBiodiversidad from '../assets/img/evento-biodiversidad.jpg';

//ABIERTO_CERRADO_AUTO
export const useEstadoStore = defineStore('estado', {
  state: () => ({
    estado: 1, // Valor inicial del estado (Automático)
  }),
  actions: {
    cambiarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
    },
  },
});

//EVENTOS
export const useEventosStore = defineStore('eventos', {
  state: () => ({
    eventos: [
      { 
        nombre: "Siembra de Corales", 
        titulo: "Restauración de Arrecifes", 
        descripcion: "Participa en la siembra de corales para restaurar los arrecifes dañados.", 
        fecha: "2024-12-11", 
        imagen: eventoCorales
      },
      { 
        nombre: "Introducción Buceo", 
        titulo: "Curso de Buceo", 
        descripcion: "Aprende los conceptos básicos del buceo en un ambiente seguro.", 
        fecha: "2025-05-20", 
        imagen: eventoBuceo 
      },
      { 
        nombre: "Origami y Naturaleza", 
        titulo: "Taller de Origami", 
        descripcion: "Explora el arte del origami inspirado en la naturaleza.", 
        fecha: "2025-01-20", 
        imagen: eventoOrigami
      },
      { 
        nombre: "Biodiversidad Marina", 
        titulo: "Seminario", 
        descripcion: "Un seminario sobre la biodiversidad marina y su importancia.", 
        fecha: "2024-02-12", 
        imagen: eventoBiodiversidad
      },
    ], // Los eventos predefinidos.
  }),
  actions: {
    setEventos(nuevosEventos) {
      this.eventos = nuevosEventos;
    },
    agregarEvento(evento) {
      this.eventos.push(evento);
    },
    eliminarEvento(index) {
      this.eventos.splice(index, 1);
    },
    eliminarTodos() {
      this.eventos = [];
    },
    actualizarImagen(index, nuevaImagen) {
      if (this.eventos[index]) {
        this.eventos[index].imagen = nuevaImagen;
      }
    },
  },
});

//BUZÓN
export const useCorreosStore = defineStore('correos', {
  state: () => ({
    correos: [
      { id: 1, correo: "usuario1@example.com", pregunta: "¿Cuáles son los horarios del acuario?" },
      { id: 2, correo: "usuario2@example.com", pregunta: "¿Hay espectáculos con delfines?" },
      { id: 3, correo: "usuario3@example.com", pregunta: "¿El acuario está abierto los domingos?" },
      { id: 4, correo: "usuario4@example.com", pregunta: "¿Tienen descuento para grupos?" },
    ], // Los correos con preguntas por defecto.
  }),
  actions: {
    agregarCorreo(nuevoCorreo) {
      this.correos.push(nuevoCorreo);
    },
    eliminarCorreo(index) {
      this.correos.splice(index, 1);
    },
    setCorreos(nuevosCorreos) {
      this.correos = nuevosCorreos;
    },
  },
});



//PREGUNTAS
export const usePreguntasStore = defineStore('preguntas', {
  state: () => ({
    preguntas: [
      { 
        pregunta: "¿Dónde está ubicado el Acuario Nacional de Cuba?", 
        respuesta: "El Acuario Nacional de Cuba se encuentra en la provincia de La Habana, municipio Playa, calle 3ra entre 60 y 62.", 
      },
      { 
        pregunta: "¿Cuánto cuesta la entrada al centro?", 
        respuesta: "El precio del boleto de entrada al centro es de $50 para los adultos y $25 para los niños. Los menores de 5 años no pagan entrada.", 
      },
      { 
        pregunta: "¿Qué es la interacción con mamíferos marinos?", 
        respuesta: "La interacción con mamíferos marinos es un servicio adicional que es posible adquirir en el buró de información junto a la entrada. Dicho servicio se realiza justo después del show y permite pasar a la plataforma del delfinario o lobario junto al entrenador para poder tocar, acariciar y sacarse fotos con los animales (con sus propios teléfonos o cámaras).", 
      },
      { 
        pregunta: "¿A partir de qué edad se puede hacer la interacción?", 
        respuesta: "La interacción puede realizarla cualquier visitante mayor a 5 años. Los menores de 5 años no pagan interacción, no pueden tocar a los animales ya que podrían hacerles daño tocándoles los ojos y vías respiratorias. Si algún adulto realiza la interacción y toma fotos, puede llevar al menor de 5 años para que salga en la foto.", 
      },
      { 
        pregunta: "¿Hasta qué edad se considera niño a un visitante?", 
        respuesta: "Se considera niño a cualquier visitante cuya edad esté comprendida entre 5 y 12 años. Los mayores de 12 y menores de 18 años, a pesar de ser menores de edad, pagan precios como adultos.", 
      },
      { 
        pregunta: "¿Si necesito ayuda o indicaciones en la instalación, a quién debo dirigirme?", 
        respuesta: "Nuestro centro cuenta con técnicos capacitados para atender sus necesidades e inquietudes. Puede encontrarlos en el buró de información junto a la entrada principal.", 
      },
    ], // Las preguntas predefinidas.
  }),
  actions: {
    setPreguntas(nuevosPreguntas) {
      this.preguntas = nuevasPreguntas;
    },
    agregarPregunta(pregunta) {
      this.preguntas.push(pregunta);
    },
    eliminarPregunta(index) {
      this.preguntas.splice(index, 1);
    },
  },
});

//USUARIOS
export const useUsuariosStore = defineStore('usuarios', {
  state: () => ({
    usuarios: [
      { name: 'Angelita', phone: '58693703', password: '1234' },
      { name: 'Santa', phone: '569911123', password: '1234' },
    ],
  }),
  actions: {
    addUser(user) {
      if (!this.usuarios.some(existingUser => existingUser.name === user.name)) {
        this.usuarios.push(user);
      } else {
        alert("El usuario ya existe.");
      }
    },
    deleteUser(userToDelete) {
      const index = this.usuarios.findIndex(user => user.name === userToDelete.name);
      if (index !== -1) {
        this.usuarios.splice(index, 1); // Usando splice para mantener reactividad
      }
    },
    findUserByName(name) {
      return this.usuarios.find(user => user.name === name);
    }
  }
});





//SHOWS
export const useShowsStore = defineStore('shows', {
  state: () => ({
    shows: [
      {
        id: 1,
        title: 'Show de Delfines',
        description: '¡Ven a ver a nuestros delfines hacer magia en el agua!',
        image: showDelfinImg,
        schedules: [
          {
            name: 'Show de la mañana',
            available: false,
            time: '10:30 - 11:15',
            location: 'Delfinario',
            cost: '$120',
            interactionCost: { child: '$1200', adult: '$1500' }
          },
          {
            name: 'Show de la tarde',
            available: true,
            time: '3:00 - 3:45',
            location: 'Delfinario',
            cost: '$120',
            interactionCost: { child: '$1200', adult: '$1500' }
          }
        ]
      },
      {
        id: 2,
            title: 'Show de Lobos Marinos',
            description: '¡Los lobos marinos están listos para hacerte reir y sorprenderte!',
            image: showLoboImg,
            schedules: [
              {
                name: 'Show de la mañana',
                available: true,
                time: '11:30 - 12:15',
                location: 'Lobario',
                cost: '$100',
                interactionCost: { child: '$1000', adult: '$1300' }
              },
              {
                name: 'Show de la tarde',
                available: true,
                time: '3:50 - 4:35',
                location: 'Lobario',
                cost: '$100',
                interactionCost: { child: '$1000', adult: '$1300' }
              }
            ]
      },
      {
        id: 3,
            title: 'Show de Payasos y Magos',
            description: '¡Diversión para toda la familia!',
            image: showPayasosYMagos,
            schedules: [
              {
                name: 'Show de la mañana',
                available: true,
                time: '9:30 - 10:15',
                location: 'Lobario',
                cost: '$120',
                interactionCost: { child: '', adult: '' }
              },
              {
                name: 'Show de la tarde',
                available: false,
                time: '4:00 - 4:45',
                location: 'Lobario',
                cost: '$120',
                interactionCost: { child: '', adult: '' }
              }
            ]

      }
    ],
  }),
  actions: {
    toggleAvailability(showId, scheduleIndex) {
      const show = this.shows.find((s) => s.id === showId);
      if (show) {
        show.schedules[scheduleIndex].available = !show.schedules[scheduleIndex].available;
      }
    },
    updateSchedule(showId, scheduleIndex, updatedData) {
      const show = this.shows.find((s) => s.id === showId);
      if (show) {
        Object.assign(show.schedules[scheduleIndex], updatedData);
      }
    }
  }
});
