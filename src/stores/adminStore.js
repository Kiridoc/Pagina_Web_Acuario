import {defineStore} from 'pinia';
import {ref} from 'vue';

import showLoboImg from '../assets/img/showLobo.jpg';
import showDelfinImg from '../assets/img/showDelfin.jpg';
import showPayasosYMagos from '../assets/img/showPayaso.jpg';

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
      // Otros shows...
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
