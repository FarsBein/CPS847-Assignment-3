<template>
    <h3>Current Weather in Paris, ON: {{weather||'Loading...'}} C</h3>
</template>

<script>
    const API_KEY = secrets.WEATHER_API_KEY
    const lat = 43.2 
    const lon = -80.3833
    export default {
        data: () => ({
            weather: null
        }),
        created() {
            // fetch on init
            this.fetchData()
        },
        methods: {
            async fetchData() {
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
                this.weather =  await (await fetch(url)).json()
                this.weather = this.weather["main"]["temp"]
            }
        }
    }
</script>



