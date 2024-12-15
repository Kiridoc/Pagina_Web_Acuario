<template>
      <v-card class="pa-5 background" max-width="400">
        <v-card-title>
          <h3 style="text-align: center;">Gestión de Usuarios</h3>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <!-- Campo Nombre -->
            <v-text-field
              v-model="user.name"
              label="Nombre"
              :rules="[rules.required]"
              outlined
              required
            ></v-text-field>
  
            <!-- Campo Contraseña con ícono personalizado -->
            <v-text-field
              v-model="user.password"
              :type="showPassword ? 'text' : 'password'"
              label="Contraseña"
              outlined
              required
              :rules="[rules.required]"
            >
              <template #append>
                <!-- Ícono personalizado -->
                <span class="iconoPassword"
                  style="cursor: pointer; color: black;"
                  @click="togglePasswordVisibility"
                >
                  {{ showPassword ? '🔎' : '🔎' }}
                </span>
              </template>
            </v-text-field>
  
            <!-- Campo Número Telefónico -->
            <v-text-field
              v-model="user.phone"
              label="Número Telefónico"
              outlined
              required
              :rules="[rules.required, rules.numeric]"
              type="tel"
            ></v-text-field>
          </v-form>
        </v-card-text>
  
        <v-card-actions>
          <v-btn class="btnUserDel btnUser" @click="clearFields">Eliminar</v-btn>
          <v-spacer></v-spacer>
          <v-btn class="btnUserAdd btnUser" :disabled="!valid" @click="addUser">Añadir</v-btn>
        </v-card-actions>
      </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        valid: false,
        showPassword: false,
        user: {
          name: '',
          password: '',
          phone: ''
        },
        rules: {
          required: value => !!value || 'Campo requerido.',
          numeric: value => !isNaN(Number(value)) || 'Solo se permiten números.'
        }
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      clearFields() {
        this.user = {
          name: '',
          password: '',
          phone: ''
        };
      },
      addUser() {
        // Aquí puedes manejar la lógica para agregar al usuario
        alert(`Usuario añadido:\nNombre: ${this.user.name}\nTeléfono: ${this.user.phone}`);
        this.clearFields();
      }
    }
  };
  </script>
  
  <style scoped>
  .background {
    background-color: rgba(255, 255, 255, 0.5); /* Fondo translúcido */
    backdrop-filter: blur(8px); /* Desenfoque de fondo */
  }
  
  .v-card {
    margin: auto;
    max-width: 400px;
    border-radius: 15px;
  }

  .btnUserDel{
    color: red;
    border: solid 2px;
    border-radius: 18px;
  }

  .btnUserAdd{
    color: #24108a;
    border: solid 2px;
    border-radius: 18px;
  }

  .btnUser{
    transition: .5s;
  }

  .btnUser:hover{
    font-size: 15px;
    transition: .5s;
  }

  .iconoPassword{
    transition: .5s;
  }

  .iconoPassword:hover{
    font-size: 20px;
    transition: .5s;
  }
  </style>
  