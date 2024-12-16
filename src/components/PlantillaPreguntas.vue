<template>
  <section id="manage-pyr" class="info">
    <div class="container-fluid px-5 mx-5">
      <h1 class="text-center my-5">Administración de Preguntas Frecuentes</h1>
  
      <div class="form-group my-4">
        <label for="newQuestion">Nueva Pregunta</label>
        <input 
          id="newQuestion" 
          v-model="newQuestion" 
          type="text" 
          class="form-control" 
          placeholder="Ingrese la pregunta" 
          :disabled="preguntas.length >= maxQuestions"
        />
      </div>
  
      <div class="form-group my-4">
        <label for="newAnswer">Nueva Respuesta</label>
        <textarea 
          id="newAnswer" 
          v-model="newAnswer" 
          class="form-control" 
          placeholder="Ingrese la respuesta" 
          :disabled="preguntas.length >= maxQuestions"
        ></textarea>
      </div>
  
      <button 
        class="btn btn-primary my-2" 
        @click="addPregunta" 
        :disabled="!newQuestion || !newAnswer || preguntas.length >= maxQuestions"
      >
        Añadir Pregunta
      </button>
  
      <table class="table table-bordered my-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Pregunta</th>
            <th>Respuesta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pregunta, index) in preguntas" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <input 
                v-model="pregunta.pregunta" 
                @input="updatePregunta(index, 'pregunta', pregunta.pregunta)"
                type="text" 
                class="form-control" 
              />
            </td>
            <td>
              <textarea 
                v-model="pregunta.respuesta" 
                @input="updatePregunta(index, 'respuesta', pregunta.respuesta)"
                class="form-control"
              ></textarea>
            </td>
            <td>
              <button class="btn btn-danger" @click="removePregunta(index)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="text-muted registradas">
        {{ preguntas.length }}/{{ maxQuestions }} preguntas registradas.
      </div>
    </div>   
  </section>
</template>

<script>
import { usePreguntasStore } from '../stores/adminStore.js'; // Importar el store de preguntas

export default {
  data() {
    return {
      newQuestion: "",
      newAnswer: "",
      maxQuestions: 6,
    };
  },
  computed: {
    preguntas() {
      const store = usePreguntasStore(); // Acceder al store
      return store.preguntas; // Enlazar las preguntas del store
    },
  },
  methods: {
    addPregunta() {
      if (this.newQuestion && this.newAnswer && this.preguntas.length < this.maxQuestions) {
        const store = usePreguntasStore(); // Acceder al store
        store.agregarPregunta({
          pregunta: this.newQuestion,
          respuesta: this.newAnswer,
        });
        this.newQuestion = "";
        this.newAnswer = "";
      }
    },
    removePregunta(index) {
      const store = usePreguntasStore(); // Acceder al store
      store.eliminarPregunta(index);
    },
    updatePregunta(index, key, value) {
      const store = usePreguntasStore(); // Acceder al store
      store.preguntas[index][key] = value; // Actualizar directamente la pregunta en el store
    },
  },
};
</script>

<style scoped>
.container-fluid {
  max-width: 1500%;
  margin: 0 auto;
}

.info {
  background: linear-gradient(rgba(31, 31, 31, 0.7), rgba(31, 31, 31, 0.7)), url('../assets/img/fondo-info.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 0;
}

h1, label {
  color: #EBE9F6;
}

.text-muted {
  font-size: 1rem;
  margin-top: 10px;
}

.text-muted.registradas {
  color: #EBE9F6 !important;
}

.table {
  margin: 30px auto;
  width: 95%;
  color: black; /* Texto negro permanente en la tabla */
}

.table-bordered th, 
.table-bordered td {
  border-color: rgba(235, 233, 246, 0.5);
}

input[type="text"], 
textarea {
  background-color: white; /* Fondo blanco constante */
  border: 1px solid rgba(0, 0, 0, 0.2); /* Borde gris suave */
  margin-bottom: 10px;
  padding: 10px;
  width: calc(100% - 40px);
  min-height: 120px;
  color: black; /* Texto negro permanente */
}

input[type="text"]:focus, 
textarea:focus {
  outline: none;
  border-color: rgba(0, 0, 0, 0.2); /* Mantener borde igual al enfocarse */
  background-color: white; /* Mantener fondo blanco constante */
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-danger {
  background-color: #6c757d;
  border-color: #6c757d;
  color: white;
}

.btn-danger:hover {
  background-color: #5a6268;
  border-color: #545b62;
}
</style>
