<template>
    <div>
        <h1> {{ this.getMovie.title }} </h1>
        <div class="card" style="width: 18rem;">
            <img src="https://wallup.net/wp-content/uploads/2015/12/168763-Death_Note-Light_Yagami-Ryuk-The_Creation_of_Adam-parody-anime.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">{{ this.getMovie.title }}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam doloribus doloremque impedit iusto praesentium accusantium velit inventore sequi, quae magni, nemo aliquid facere. Quidem atque adipisci in eligendi id.</p>
        </div>
</div>
    </div>
</template>
// <h1>{{ this.getMovie }}</h1>
<script>
import { mapGetters , mapActions } from 'vuex'

export default {
    name: 'Movie',
    props: ['title'],
    computed: {
        ...mapGetters(['getMovie'])
    },
    methods: {
        ...mapActions(['searchMovie'])
    },
    created() {
        this.searchMovie(this.title)
    }
}
</script>

<style scoped>

.card {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
}

</style>
