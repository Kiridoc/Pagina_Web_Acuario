<template>
    <div class="row p-5" style="display: flex; align-items: center;">
      <div class="col-12 col-lg-4 d-flex justify-content-center">
        <!-- Ventana de Gestión de Usuarios -->
        <v-card class="pa-5 background" max-width="400" style="flex: 1; padding-right: 10px;">
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
                  <span
                    class="iconoPassword"
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
            <v-btn class="btnUserDel btnUser" :disabled="!valid2" @click="deleteUser">Eliminar</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="btnUserAdd btnUser" :disabled="!valid" @click="addUser">Añadir</v-btn>
          </v-card-actions>
        </v-card>
    </div>
    
    <div class="col-12 col-lg-8">
      <!-- Tabla de Usuarios -->
      <v-card class="table" style="flex: 2;">
        <v-card-title>
          <h3 style="text-align: center;">Usuarios</h3>
        </v-card-title>
        <div style="max-height: 400px; overflow-y: auto;">
          <v-data-table
            :items="users"
            :headers="headers"
            class="elevation-1"
            @click:row="selectUser"
            hide-default-footer
          >
            <template #item.name="{ item }">
              <span>Nombre: {{ item.name }}</span>
            </template>
            <template #item.password="{ item }">
              <span>Contraseña: ****</span>
            </template>
            <template #item.phone="{ item }">
              <span>Número Telefónico: {{ item.phone }}</span>
            </template>
          </v-data-table>
      </div>
      </v-card>
    </div>
  </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap/dist/js/bootstrap.js'

export default {
  data() {
    return {
      valid: false,
      valid2: false,
      showPassword: false,
      user: {
        name: '',
        password: '',
        phone: ''
      },
      users: [],
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Contraseña', value: 'password' },
        { text: 'Número Telefónico', value: 'phone' }
      ],
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
      if (this.valid) {
        // Solo agregar el usuario si es válido
        this.users.push({ ...this.user });
        this.clearFields();
      }
    },
    deleteUser() {
      // Eliminar el usuario de la lista si está seleccionado
      if (this.selectedIndex !== null) {
        this.users.splice(this.selectedIndex, 1); // Eliminar el usuario seleccionado
        this.clearFields(); // Limpiar los campos después de eliminar
        this.selectedIndex = null;
        this.valid2 = false; // Deshabilitar el botón de eliminar
      }
    },
    selectUser(item, index) {
      // Seleccionar el usuario de la tabla
      this.selectedIndex = index;
      this.user = { ...item };
      this.valid2 = true;
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
    border-radius: 15px;
  }
  
  .btnUserDel {
    color: red;
    border: solid 2px;
    border-radius: 18px;
  }
  
  .btnUserAdd {
    color: #24108a;
    border: solid 2px;
    border-radius: 18px;
  }
  
  .btnUser {
    transition: 0.5s;
  }
  
  .btnUser:hover {
    font-size: 15px;
    transition: 0.5s;
  }
  
  .iconoPassword {
    transition: 0.5s;
  }
  
  .iconoPassword:hover {
    font-size: 20px;
    transition: 0.5s;
  }

  .table{
    min-height: 400px !important;
  }

  @media (max-width: 767.98px) {
    .table{
      margin-top: 20px !important;
    }
  }
  </style>
  