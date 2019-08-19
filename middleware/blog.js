import axios from 'axios'

export default function ({ params, store }) {
    return axios.get('https://jhutchcraft.com/wp-json/wp/v2/posts')
        .then((response) => {
            store.commit('addPosts', response.data)
        })
}
