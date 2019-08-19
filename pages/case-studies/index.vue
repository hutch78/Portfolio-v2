<template>
    <main class="page page--portfolio">
        <div class="case-studies-wrapper">
            <CaseStudy
                v-for="caseStudy in caseStudies"
                :id="caseStudy.id"
                :key="caseStudy.id"
                :case-study="caseStudy"
            />
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import CaseStudy from '@/components/CaseStudy'
export default {
    components: {
        CaseStudy
    },
    asyncData ({ params }) {
        return axios.get('https://jhutchcraft.com/wp-json/wp/v2/case_studies?_embed')
            .then((response) => { return { caseStudies: response.data } })
    }
}
</script>

<style scoped lang="scss">
    .case-studies-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        margin-bottom: 2rem;
        @media screen and (min-width: 1030px){
            display: flex;
            flex-wrap: wrap;
        }
    }

</style>
