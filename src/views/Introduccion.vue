<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.pb-4.pb-lg-5
      .col-lg-2.d-none.d-lg-block
        figure
          img.img-fluid(src="@/assets/curso/portada/intro-deco.svg" alt="Imagen decorativa")
      .col-lg-10
        p.pb-0 El componente formativo <em>generalidades de las prácticas agrícolas para el cultivo del plátano</em>, se enfoca en orientar al aprendiz en la producción limpia del plátano implementando Buenas Prácticas Agrícolas (BPA), con el fin de adquirir los conocimientos necesarios sobre el funcionamiento y lineamientos que le permitirá desde un comienzo iniciar un sistema de producción platanero con las bases de planeación y control aplicado a las BPA, que garanticen la calidad e inocuidad del dicho producto. Bienvenido a este componente formativo:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/sFjg8f_ehb0?si=shj_UpYJnvQVWTIK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
