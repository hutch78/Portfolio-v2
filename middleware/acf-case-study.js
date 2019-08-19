import axios from 'axios'

export default function ({ params, store }) {
    return axios.get(`https://jhutchcraft.com/wp-json/acf/v3/case_studies/${params.id}`)
        .then((response) => {
            store.commit('getCaseStudyACF', response.data)
        })
}
