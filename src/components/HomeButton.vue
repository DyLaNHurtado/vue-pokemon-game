<template>
    <router-link to="/">
        <button>
            <HomeIcon class="icon" /><span>Home</span>
        </button>
    </router-link>
</template>

<script>
import HomeIcon from '@/assets/icons/HomeIcon.vue'
export default {
    name: 'HomeButton',
    components: {
        HomeIcon,
    }
}
</script>