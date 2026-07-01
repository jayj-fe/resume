<template>
    <div class="app-con app-archive-page">
        <h2>Archive</h2>

        <article v-for="item, idx in archiveList[0]" v-bind:key="item">
            <h3>{{ item }}</h3>
            <ul>
                <li v-for="item in archiveList[1][idx]" v-bind:key="item">
                    <b>{{ item.date }}</b>
                    <router-link :to="{name: 'ViewPage', params: { postURL : item.url }}">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </article>
    </div>
</template>

<script>
import "@/assets/scss/archive.scss";
import { mapActions } from 'vuex';
export default {
    name: 'ArchivePage',
	computed: {
		archiveList() {
            const postList = this.$store.state.archiveList;
            const yearArr = [];
            const yearDataArr = [];

            if(postList !== null){
                // console.log(postList);
                
                postList.forEach( el => {
                    const currentYear = el.date.slice(0, 4);
                    const yearArrIdx = yearArr.indexOf(currentYear);
                    
                    if(yearArrIdx === -1 ){
                        // console.log(1);
                        yearArr.push(currentYear);
                        yearDataArr.push(
                            [
                                {
                                    'title' : el.title,
                                    'date' : el.date.slice(0, 10),
                                    'url' : el.url
                                }
                            ]
                        )
                    }else{
                        // console.log(2);
                        yearDataArr[yearArrIdx].push(
                            {
                                'title' : el.title,
                                'date' : el.date.slice(0, 10),
                                'url' : el.url
                            }
                        )
                    }
                });

                // console.log(yearArr);
                // console.log(yearDataArr);
            }
            
            return [yearArr, yearDataArr];
        }
	},
    methods: {
        ...mapActions([ 'fetchArchiveList' ])
    },
    mounted() {
        if(this.$store.state.archiveList === null){
            console.log('archive call')
            this.fetchArchiveList();
        }
    },
}
</script>

<style scoped>
</style>
