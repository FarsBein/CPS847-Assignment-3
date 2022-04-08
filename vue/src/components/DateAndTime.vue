<template>
    <div>
        <h3>Current Date and Time: {{ format(new Date(), 'yyyy-MM-dd HH:mm:ss') }}</h3>
    </div>
</template>

<script>
    import { format } from 'date-fns';

    export default {
        methods: {
            format: format
        }
    }
</script>

