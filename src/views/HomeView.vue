<template>
  <div class="home">
    <AppHeader/>
    <BrideAndGroom/>
    <WeddingDetails/>
    <PhotoGallery/>
    <count-down/>
    <DesignedBy/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import AppHeader from '@/components/AppHeader.vue';
import BrideAndGroom from '@/components/brideAndGroom.vue';
import PhotoGallery from '@/components/photoGallery.vue';
import WeddingDetails from '@/components/weddingDetails.vue';
import CountDown from '@/components/countDown.vue';
import DesignedBy from '@/components/designedBy.vue';

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    BrideAndGroom,
    WeddingDetails,
    PhotoGallery,
    CountDown,
    DesignedBy
}
}
</script>
,
    CountDown