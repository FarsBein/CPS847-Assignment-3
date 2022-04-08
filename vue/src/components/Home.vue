<template>
    <div>
        <h1>This is the Home Page!</h1>
    </div>
    
    <DateAndTime/>
    <CurrentWeather/>
</template>

<script>
    import DateAndTime from './DateAndTime.vue'
    import CurrentWeather from './CurrentWeather.vue'   

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        components: {
            DateAndTime,
            CurrentWeather
        }
    }
</script>

