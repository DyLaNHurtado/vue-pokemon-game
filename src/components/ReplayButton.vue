<template>
        <button @click="$emit('replayButtonClicked');">
            <ReplayIcon class="icon" /><span>Replay</span>
        </button>
</template>
    
<script>
import ReplayIcon from '@/assets/icons/ReplayIcon.vue';


export default {
    name: 'GameModeButton',
    components: {
        ReplayIcon
    },emits:['replayButtonClicked']
}
</script>