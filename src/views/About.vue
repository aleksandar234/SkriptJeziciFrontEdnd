<template>
  <div>
    <h3>AddMovie</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Title... ">
        <input type="text" v-model="actor" placeholder="Add Actor... ">
        <input type="number" v-model="rating" placeholder="Add Rating... ">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name:"AddMovie",
  data() {
    return {
      title: ''
    }
  },
  methods: {  
    ...mapActions(['addMovie']),
    onSubmit(){
      const payload = {
        title: this.title,
        mainActor: this.actor,
        rating: this.rating
      }
      this.addMovie(payload)
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    padding: 50px;
  }

  input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }

  input[type="submit"]{
    flex: 2;
    background: #41b8;
    color: aliceblue;
    border: 1px #41b883 solid;
    cursor: pointer;
  }

</style>
