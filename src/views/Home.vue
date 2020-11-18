<template>
  <div>
    <h1 class="allMovies">Movies</h1>
    <form @submit="search">
        <input class="nesto" type="text" v-model="title" placeholder="Search Movie... ">
        <input type="submit" value="Search">
      </form>
    <div class="movies">
      <div class="movie" v-for="movie in getMovies" :key="movie.id">
        <div class="card" style="width: 18rem;">
          <img src="https://wallup.net/wp-content/uploads/2015/12/168763-Death_Note-Light_Yagami-Ryuk-The_Creation_of_Adam-parody-anime.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">Main Actor: {{movie.mainActor}}</p>
            <i @click="deleteMovie(movie.title)" class="fas fa-trash-alt"></i>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import {mapActions , mapGetters} from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['getMovies'])
  },
  methods: {
    ...mapActions(['GET_MOVIES','deleteOneMovie','searchMovie']),
    deleteMovie(title) {
      this.deleteOneMovie(title)
    },
    async search(){
      // e.preventDefault()
      await this.searchMovie(this.title)
      this.$router.push(`/${this.title}`)
    }

  },
  created() {
    this.GET_MOVIES() 
  }
}
</script>

<style scoped>

.card {
  padding: 10px ;
  margin: 50px;
  background: #101010;
  color:#a4a4a4;
  width:250px;
  height:320px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  margin-right:10px;
  margin-bottom: 15px;
  float: left;
}

</style>
