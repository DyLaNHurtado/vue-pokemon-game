<template>
  <p :class="isLittleTime ? 'little-time blink' : ''">
    {{ !isTimeUp ? `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}` : "Time's Up!" }}
  </p>
</template>
<script>
export default {
  name: 'TimerComponent',
  props: {
    time: {
      type: Number,
      required:true
    },
    needReset:{
      type:Boolean,
      required:true,
    }

  },
  data() {
    return {
      total: '',
      minutes: '--',
      seconds: '--',
      interval: 0,
      isTimeUp: false,
      isLittleTime: false,
    }
  },
  mounted() {
    this.resetTimer();
  },
  methods: {
    tick() {
      this.minutes = Math.floor(this.total / 60)
      this.seconds = this.total - this.minutes * 60
      if (this.total < 10) {
        this.isLittleTime = true;
      }
      if (this.total <= 0) {
        this.isTimeUp = true;
        clearInterval(this.interval)
        this.$emit('timeUp');
      }
      this.total -= 1
    },resetTimer(){
      this.minutes="--";
      this.seconds="--";
      this.total = parseInt(this.time, 10)
      this.isTimeUp = false;
      this.isLittleTime = false;
      this.interval = setInterval(() => {
        this.tick()
      }, 1000)
  }
  },
  watch:{
    needReset(newValue){
      if(newValue === true){
        clearInterval(this.interval);
        this.resetTimer();
      }
    }
  }
}
</script>
<style scoped>
p {
  font-size: 2em;
  font-family: 'PixelColeco';
  color: #2C363F;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;
}

.little-time {
  color: #E75A7C
}
</style>
