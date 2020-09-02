<template>
  <div class="MainProduct">
    <div id="contact_data" class="side shadow-lg">
      <div class="card sticky-top">
        <div class="card-body">
          <label for="direccion" class="font-weight-bold">Dirección:</label>
          <p>Coop. Plan de Vivienda Barrio Virgen del Cisne</p>
          <label for="phone" class="font-weight-bold">Teléfono:</label>
          <p><img src="../assets/whatsapp.png" alt="">  0994389314</p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="row">
        <div class="col-2">
          <div class="form-group   float-right inpSearch">
            <label for="inputBuscarProducto" class="my-auto mr-2">Buscar:</label>
            <input type="text" v-model="search" @keyup="changeType" name="search" id="inputBuscarProducto" placeholder="cómoda, cama, ropero"
              class="form-control shadow-lg">
          </div>
          <div class="card cardFiltros shadow-lg">
            <div class="card-body">
              <div class="form-group">
                <label for="">Rango de precio:</label>
                <select v-model="range_price" @change="changeType" name="rangoPrecio" class="form-control"
                  id="rangoPrecio">
                  <option value="0" disabled selected>Seleccione...</option>
                  <option value="1">Menor a Mayor</option>
                  <option value="2">Mayor a Menor</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">Material:</label>
                <select v-model="material_type" @change="changeType" class="form-control" id="rangoPrecio">
                  <option value="Todo"  selected>Todo</option>
                  <option v-for="(material,index) in materials" :key="index">{{material.type}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10">
          <div class="container">
            <div class="row">
              <div class="col-3 mb-3" v-for="(product) in products" :key="product.id">
                <router-link :to="{name:'product_show',params:{product}}">
                  <div class="card producto shadow-lg">
                    <div class="card-body  mx-auto">
                      <img class="imgProduct " :src="asset+product.images[0].url" alt="">
                      <h6 class="font-weight-bold card-title mt-2">
                        {{product.name}}
                      </h6>
                      <p class="card-text font-weight-bold">Precio: $<span class="text-success">{{product.cost}}</span>
                      </p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';


export default {
  components:{
    InfiniteLoading,
  },
  mounted() {
    this.getMaterials();
  },
  // Variables
  data() {
    return {

      // asset: 'http://nixon.test',
      asset: 'https://nixoncarpinteria.herokuapp.com',
      products:[],
      page:1,
      range_price:0,//0 - sin clasificar; 1 - Menor a Mayor ; 2 - Mayor a Menor 
      material_type:'Todo',
      materials:[],
      search:'',
      infiniteId: +new Date()
    }
  },
  // Funciones
  methods: {
      getMaterials(){
        axios.get('materials')
             .then(({data})=>{
               this.materials = data;
             })
             .catch((error)=>{
               console.log(error)
             });
      },
      infiniteHandler($state){
          axios.get('products',{
              params:{
                  page:this.page,
                  range_price: this.range_price,
                  material_type:this.material_type,
                  product:this.search
              }
          })
               .then(({data})=>{
                  //  console.log(data)
                   if(data.data.length){
                       this.page+=1;
                         this.products.push(...data.data)
                         $state.loaded()
                   }else{
                       $state.complete()
                   }
               })
               .catch((error)=>{
                   console.log(error.response)
               })
      },
      changeType() {
        this.page = 1;
        this.products = [];
        this.infiniteId += 1;
    },
  },
}
</script>

<style>
.MainProduct{
  padding: 0rem 3rem;
}

#contact_data{
  width: 13rem;
  margin-top: 19rem;
  position: fixed;
}

.imgProduct{
    width: 12rem;
    height: 8rem;
    border-radius: 0.3rem;
}

.producto{
    height: auto;
    max-height: 17rem;
    transition: all 0.5s;
}
.producto:hover{
    transform: scale(1.1);
}

.linkProductoDetalles{
    color: black;
}
.linkProductoDetalles:hover{
    text-decoration: none;
    color: black;
}
.cardFiltros{
   margin-top: 5rem;
    position: fixed;
}
.inpSearch{
position: fixed;
}

#inputBuscarProducto{
  width: 12.5rem;
}

a, a:hover{
  color: black;
  text-decoration: none;
}
</style>