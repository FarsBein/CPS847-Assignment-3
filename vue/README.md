# Vue

A prototype using Vue 3

## To Run
```
npm install
```

```
npm run serve
```

## Mark Breakdown

### [10%] Show current date and time (updated on page refresh), formatted as “2022-01-20 14:01:59”. Use date-fns library for this feature. You can add the code as a one-liner in a template or put it into a method in the script section. 

![image](https://user-images.githubusercontent.com/53714581/162544560-b95e16fa-4917-4369-83d4-3dcf559819bd.png)

### [20%] Show current Paris, Ontario temperature measured in degrees Celsius using Open Weather Map API.  

```javascript
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
```
![image](https://user-images.githubusercontent.com/53714581/162544787-fbd3f96c-8bc2-43a0-87ec-56c6664e2004.png)

### [10%] Pages and navigation bar for the following items: About Us, Our Services, Our Customers

```javascript
//CPS847-Assignment-3/vue/src/components/Navbar.vue
<template>
  <div class="hello">
    <router-link to="/">Home</router-link>                       |
    <router-link to="/our-customers">Our Customers</router-link> |
    <router-link to="/our-services">Our Services</router-link>   |
    <router-link to="/about-us">About Us</router-link>           
  </div>
  <router-view />
</template>
```

![image](https://user-images.githubusercontent.com/53714581/162544942-570ded2e-ae7f-472a-a3e5-26a16c95c754.png)

### [10%] Deploy the code on the scs VM (see details below)

![Deployment](https://user-images.githubusercontent.com/53714581/162547441-7264bdd5-7466-48bc-9709-62f1884e4a8e.png)
