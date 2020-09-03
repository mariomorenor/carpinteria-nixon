<template>
  <div class="Main">
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div id="imagesCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div :class="{'carousel-item':true,'active':index==0?true:false  }"
                v-for="(image,index) in product.images" :key="image.id">
                <img :src="image.url" class="d-block w-100 shadow-lg" id="imgPrincipal" alt="">
              </div>
            </div>
            <a class="carousel-control-prev" href="#imagesCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#imagesCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="marcoImagenes">
            <ol class="pl-3 mt-3">
              <li data-target="#imagesCarousel" :data-slide-to="index" v-for="(image,index) in product.images" :key="image.id">
                <img :src="image.url" alt="" class="imagenSecundaria shadow-lg">
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="col-6 pl-5">
        <h1 class="display-4 font-weight-bold">{{product.name}}</h1>
        <div class="row">
          <div class="col ">
            <label for="description" class="font-weight-bold">Descripción:</label>
            <p>
              {{product.description}}
            </p>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <label class="font-weight-bold">Características:</label>
            <ul>
              <li v-for="(detail, index) in product.details" :key="index">{{detail.description}}</li>
            </ul>
          </div>
          <div class="col">
            <label class="font-weight-bold">Precio:</label>
            <h1><span class="badge badge-success">${{product.cost}}</span></h1>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-4 mx-auto">
            <router-link to="/" class="btn btn-primary btn-block shadow-lg">Regresar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.product = this.$route.params.product;
  },
data() {
  return {
    product:'',
  }
},
}
</script>

<style>
.Main{
  margin: 0rem 9rem;
}
.marcoImagenPrincipal{
    width: 512px;
}

#imgPrincipal{
    border: 1px solid black;
    border-radius: 1rem;
}
.marcoImagenes{
    width: 35rem;
    
}
.marcoImagenes li{
    display: inline;
}
.imagenSecundaria{
    width: 6rem;
    height: 4rem;
    transition: all 0.3s;
    margin-right: 0.5rem;
    margin-bottom: 0.3rem;
    border-radius: 0.2rem;
    border: 1px solid black;
}
.imagenSecundaria:hover{
    transform: scale(1.08);
    cursor: pointer;
}
</style>