<template>
    <div class="d-flex photo--gallery">
        <div class="" v-for="item in images" :key="item.id">
            <a :href="item.image" target="_blank"><img  :src="item.image" alt="" class="gallery--images"></a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            images:[
                {
                    id: 1,
                    image: require('@/assets/img1.jpeg'),
                    url: 'img1.jpeg'
                },
                {
                    id: 2,
                    image: require('@/assets/img2.jpeg'),
                    url: 'img2.jpeg'
                },
                {
                    id: 3,
                    image: require('@/assets/img3.jpeg'),
                    url: 'img3.jpeg'
                },
                {
                    id: 4,
                    image: require('@/assets/img4.jpeg'),
                    url: 'img4.jpeg'
                },
                {
                    id: 5,
                    image: require('@/assets/img5.jpeg'),
                    url: 'img5.jpeg'
                },
                {
                    id: 6,
                    image: require('@/assets/inima.jpeg'),
                    url: 'inima.jpeg'
                },
                {
                    id: 1,
                    image: require('@/assets/prince.jpeg'),
                    url: 'prince.jpeg'
                }
            ]
        }
    }
}
</script>