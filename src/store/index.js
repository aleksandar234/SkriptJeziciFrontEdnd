import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    movies: [],
    movie: {}
  },
  getters: {  
    getMovies: state => state.movies,
    getMovie: state => state.movie
  },
  mutations: {
    setMovies: (state,movies) => state.movies = movies,
    newMovie: () => alert('movie added'),
    removeMovie: (state ,title) => state.movies = state.movies.filter(movie => movie.title !== title),
    setMovie: (state,movie) => state.movie = movie
    // searchMovie: (state ,title) => state.movies = state.movies.filter(movie => movie.title.includes(title))
  },
  actions: {
    async GET_MOVIES({commit}) {
      await axios
          .get('http://localhost:3003/movies')
          .then((response) => {
              const movies = response.data.movies
              commit("setMovies",movies)
              console.log(movies)
          })
          .catch((err) => {
              alert(err)
          })
    },
    async addMovie({ commit },payload){
      await axios
        .post('http://localhost:3003/movies',{ 
          title: payload.title,
          mainActor: payload.mainActor,
          rating: payload.rating
       })
        .then((response) => {
          console.log(response.data.movie)
          commit('')
       })
        .catch((err) => {
          alert(err)
       })
   },
   async deleteOneMovie({ commit }, title) {
    await axios
      .delete(`http://localhost:3003/movies/${title}`)
      .then((response) => {
        console.log(response.data.movie)
        commit('removeMovie',title)
     })
      .catch((err) => {
        alert(err)
     })
   },
  async searchMovie({ commit },title) {
    await axios
     .get(`http://localhost:3003/movies/${title}`)
     .then((response) => {
        const movie = response.data.movie
        commit('setMovie',movie)
      })
    .catch((err) => {
        alert(err)
      })
   }  
}})
