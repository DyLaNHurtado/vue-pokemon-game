<template>
    <router-link to="/mode">
        <button>
            <GameModeIcon class="icon" /><span>Modes</span>
        </button>
    </router-link>
</template>
    
<script>
import GameModeIcon from '@/assets/icons/GameModeIcon.vue';

export default {
    name: 'GameModeButton',
    components: {
        GameModeIcon
    }
}
</script>