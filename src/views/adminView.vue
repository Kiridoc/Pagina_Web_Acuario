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
                    <a class="nav-link" href="#shows">SHOWS</a>
                  </li>
                  <li class="nav-item item-inicio">
                    <a class="nav-link" href="#eventos">EVENTOS</a>
                  </li>
                  <li class="nav-item item-inicio">
                    <a class="nav-link" href="#preguntas">PREGUNTAS</a>
                  </li>
                  <li class="nav-item item-inicio">
                    <a class="nav-link" href="#reservas" tabindex="-1" aria-disabled="true">RESERVAS</a>
                  </li>
                </ul>

                <form class="d-flex ms-auto" @updateEstado="cambiarEstado">
                    <SwitchTriple :estado="estado" />
                </form>
                

              </div>
            </div>
          </nav> 
      </header>
    </section>

    <!--USUARIOS-->
    <section class="custom-background" id="usuarios">
        <GestionUser></GestionUser> 
    </section>

    <!--SHOWS-->
    <section id="shows">
        <PlantillaShows></PlantillaShows> 
    </section>

    <!--EVENTOS-->
    <section id="eventos">
        <PlantillaEventos></PlantillaEventos> 
    </section>

    <!--PREGUNTAS-->
    <section id="preguntas">
        <PlantillaPreguntas></PlantillaPreguntas> 
    </section>
    

</template>
<script setup>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap/dist/js/bootstrap.js'
    import { ref} from 'vue'
    
    import SwitchTriple from '../components/SwitchTriple.vue';
    import GestionUser from '../components/GestionUser.vue';
    import PlantillaShows from '../components/PlantillaShows.vue'
    import PlantillaEventos from '../components/PlantillaEventos.vue'
    import PlantillaPreguntas from '../components/PlantillaPreguntas.vue'

    const perfil = ref('Mabel')


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

