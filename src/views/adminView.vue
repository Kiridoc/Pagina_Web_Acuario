<template>
    <!--MENU-->
    <section id="inicio">
      <header id="encabezado">
        <nav class="navbar navbar-expand-xl navbar-dark fixed-top custom-navbar">
            <div class="container-fluid">
              <a class="navbar-brand" href="#" style="font-weight: bold; font-size: 30px;" id="nombre">GESTIÓN: {{ perfil }}</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav ms-auto">
                  <li class="nav-item item-inicio">
                    <a class="nav-link active" aria-current="page" href="#usuarios">USUARIOS</a>
                  </li>
                  <li class="nav-item item-inicio">
                    <a class="nav-link" href="#informacion">INFORMACIÓN</a>
                  </li>
                  <li class="nav-item item-inicio">
                    <a class="nav-link" href="#eventos">EVENTOS</a>
                  </li>
                  <li class="nav-item item-inicio">
                    <a class="nav-link" href="#guia">GUÍA</a>
                  </li>
                  <li class="nav-item item-inicio">
                    <a class="nav-link" href="#reservas" tabindex="-1" aria-disabled="true">RESERVAS</a>
                  </li>
                </ul>

                <form class="d-flex ms-auto">
                    <SwitchTriple></SwitchTriple>
                </form>
                

              </div>
            </div>
          </nav> 
      </header>
    </section>

    <!--USUARIOS-->
    <section class="custom-background" id="usuarios">
        <GestionUser style></GestionUser> 
    </section>
    

</template>
<script setup>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap/dist/js/bootstrap.js'
    import { ref} from 'vue'
    
    import SwitchTriple from '../components/SwitchTriple.vue';
    import GestionUser from '../components/GestionUser.vue';

    const perfil = ref('Mabel')

    
    const horaDelIni1 = ref ('10:30')
    const horaDelFin1 = ref ('11.15')
    const horaDelIni2 = ref ('3:00')
    const horaDelFin2 = ref ('3.45')
    const costoDelShow = ref ('$120')
    const costoDelIntN = ref ('$1200')
    const costoDelIntA = ref ('$1500')

    const horaLobIni1 = ref ('11:30')
    const horaLobFin1 = ref ('12.15')
    const horaLobIni2 = ref ('3:50')
    const horaLobFin2 = ref ('4.35')
    const costoLobShow = ref ('$100')
    const costoLobIntN = ref ('$1000')
    const costoLobIntA = ref ('$1300')

    const horaPayIni1 = ref ('9:30')
    const horaPayFin1 = ref ('10.15')
    const horaPayIni2 = ref ('4:00')
    const horaPayFin2 = ref ('4.45')
    const costoPayShow = ref ('$120')

</script>
<style scoped>
    .custom-navbar{
        background-color: #080A77;
    }

    .custom-background {
      background: linear-gradient(rgba(31, 31, 31, 0.7), rgba(31, 31, 31, 0.7)), url('../assets/img/fondo.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      padding: 50px 0;
      padding-top: 100px;

  }

  .estado-show-disponible{
    background-color: green;
    color: #fff;
    border-radius: 15px;
    padding: 5px;
    font-size: 10px;
  }

  .estado-show-no-disponible{
    background-color: red;
    color: #fff;
    border-radius: 15px;
    padding: 5px;
    font-size: 10px;
  }

  .custom-card{
    border-width: 3px;
    border-radius: 15px;
  }
  .custom-card:hover{
    box-shadow: 5px 5px 10px #565656, -5px -5px 10px #8a8a8a;
  }
  .info{
    background: linear-gradient(rgba(31, 31, 31, 0.7), rgba(31, 31, 31, 0.7)), url('../assets/img/fondo-info.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 50px 0;
  }
</style>

