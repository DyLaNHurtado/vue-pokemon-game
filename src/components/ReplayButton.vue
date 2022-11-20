<template>
    <router-link to="/game">
        <button>
            <ReplayIcon class="icon" /><span>Replay</span>
        </button>
    </router-link>
</template>
    
<script>
import ReplayIcon from '@/assets/icons/ReplayIcon.vue';


export default {
    name: 'GameModeButton',
    components: {
        ReplayIcon
    }
}
</script>