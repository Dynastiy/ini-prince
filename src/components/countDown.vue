<template>
    <div class="text-center my-4">
        <h5 class="h1--text">Getting Married in ...</h5>
        <Countdown deadline="November 26, 2022"></Countdown>
    </div>
</template>

<script>
import Countdown from 'vuejs-countdown'
export default {
    components: { Countdown }
    
}
</script>