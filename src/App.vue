<template>
  <div id="app" class="container">
    <h1 v-if="title" >{{title}}</h1>
    <vac :end-time="target">
        <template v-slot:default="{ timeObj }">
            <ul>
                <li><span id="days">{{ timeObj.d || 0}}</span>Days</li>
                <li><span id="hours">{{ timeObj.h || 0 }}</span>Hours</li>
                <li><span id="minutes">{{ timeObj.m || 0 }}</span>Minutes</li>
                <li><span id="seconds">{{ timeObj.s || 0 }}</span>Seconds</li>
            </ul>
            <div v-if="target > 0">
                Until {{target.toUTCString()}}
            </div>
        </template>
    </vac>
  </div>
</template>

<script>
    export default {
        data: function () {
            let target = new Date(0);
            target.setUTCSeconds(this.$route.query.t);
            return {
                target: target,
                title: this.$route.query.title,
            };
        }
    }
</script>

<style>
  @import 'assets/styles/countdown.css'
</style>