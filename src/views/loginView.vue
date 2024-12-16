<template>
    <div class="login-container">
      <v-container class="panel-blur">
        <h1 class="titulo">INICIAR SESIÓN</h1>
  
        <!-- Explicación sobre el login -->
        <p class="descripcion">
          Por favor, ingrese su usuario y contraseña para acceder a su cuenta.
        </p>
  
        <!-- Campo para Usuario -->
        <v-text-field
          label="Usuario"
          v-model="usuario"
          type="text"
          outlined
          class="input"
          :error-messages="usuarioErrorMessages"
        />
  
        <!-- Campo para Contraseña -->
        <v-text-field
          label="Contraseña"
          v-model="password"
          type="password"
          outlined
          class="input"
          :error-messages="passwordErrorMessages"
        />
  
        <!-- Botones -->
        <div class="botones">
          <v-btn 
            @click="iniciarSesion" 
            color="primary" 
            class="btn-enviar"
            :disabled="!usuario || !password"
          >
            Iniciar sesión
          </v-btn>
          <v-btn @click="volverAtras" color="secondary" class="btn-volver">
            Volver
          </v-btn>
        </div>
  
        <!-- Mensaje de error -->
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </v-container>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useUsuariosStore } from '../stores/adminStore.js'; // Importa el store de Pinia
  
  export default {
    data() {
      return {
        usuario: "",
        password: "",
        errorMessage: "", // Mensaje de error
      };
    },
    computed: {
      // Validación de campos vacíos
      usuarioErrorMessages() {
        if (!this.usuario) {
          return ["El usuario no puede estar vacío"];
        }
        return [];
      },
      passwordErrorMessages() {
        if (!this.password) {
          return ["La contraseña no puede estar vacía"];
        }
        return [];
      },
    },
    methods: {
      // Método para iniciar sesión
      iniciarSesion() {
        const usuariosStore = useUsuariosStore(); // Acceder al store de usuarios
  
        // Caso especial: administradora general
        if (this.usuario === "Mabel" && this.password === "1234") {
          alert("Bienvenida, Administradora General.");
          this.$router.push('/adminView'); // Redirigir a la vista de administración
          return;
        }
  
        // Verificar si el usuario existe en la lista del store
        const usuarioExistente = usuariosStore.usuarios.find(
          (user) => user.name === this.usuario
        );
  
        // Validar usuario y contraseña
        if (usuarioExistente && usuarioExistente.password === this.password) {
          alert("Inicio de sesión exitoso.");
          this.$router.push('/adminView');  // Redirigir a la vista de administración
        } else {
          // Mostrar error si el usuario o contraseña son incorrectos
          this.errorMessage = "Usuario o contraseña incorrectos.";
        }
      },
  
      // Método para redirigir a la página de inicio
      volverAtras() {
        this.$router.push("/"); // Redirige a la página de inicio (landingView)
      },
    },
  };
  </script>
  
  <style scoped>
  /* Contenedor principal con fondo */
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url("../assets//img/guia-showDelfin.jpg") no-repeat center center;
    background-size: cover;
    position: relative;
    backdrop-filter: blur(1px); /* Aplica el difuminado */
  }
  
  .login-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Fondo oscuro con transparencia */
    z-index: -1;
  }
  
  /* Panel de login con estilo limpio */
  .panel-blur {
    background: rgba(255, 255, 255, 0.80); /* Fondo blanco con algo de transparencia */
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    width: 90%;
    text-align: center;
  }
  
  /* Título principal */
  .titulo {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  
  /* Descripciones de los campos */
  .descripcion {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    text-align: left;
  }
  
  /* Estilo de los campos de entrada */
  .input {
    margin-bottom: 20px;
  }
  
  /* Mensaje de error */
  .error {
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }
  
  /* Botones */
  .botones {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .btn-enviar {
    background-color: #4caf50;
    color: white;
  }
  
  .btn-volver {
    background-color: #f44336;
    color: white;
  }
  </style>
  
  