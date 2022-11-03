<template>
  <p v-if="currentTime">
    {{
      currentTime
        ? `${("0" + currentTime.minutes).slice(-2)}:
              ${("0" + currentTime.seconds).slice(-2)}`
        : ""
    }}
  </p>
  <p v-if="!currentTime">Time's Up!</p>
</template>
<script>
    export default {
    name:'TimerComponent',
    props:{
        
    },
    watch:{

    }
    }
</script>
<style></style>
