<template>
    <main class="page page--blog">
        <h1 class="page-title">
            Blog
        </h1>
        <div class="posts-wrapper">
            <PostCard v-for="post in posts" :key="post.id" :post="post" />
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import PostCard from '@/components/PostCard'

export default {
    components: {
        PostCard
    },
    //   middleware: 'blog',
    asyncData ({ params }) {
        return axios.get('https://jhutchcraft.com/wp-json/wp/v2/posts')
            .then((response) => {
                return { posts: response.data }
            })
    }
}
</script>
