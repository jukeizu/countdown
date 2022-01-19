<template>
  <div id="app" class="container">
    <h1 v-if="title" >{{title}}</h1>
    <vac :end-time="target">
        <template v-slot:default="{ timeObj }">
            <ul>
                <li><span id="days" class="count">{{ timeObj.d || 0}}</span>Day<span v-if="timeObj.d != 1">s</span></li>
                <li><span id="hours" class="count">{{ timeObj.h || 0 }}</span>Hour<span v-if="timeObj.h != 1">s</span></li>
                <li><span id="minutes" class="count">{{ timeObj.m || 0 }}</span>Minute<span v-if="timeObj.m != 1">s</span></li>
                <li><span id="seconds" class="count">{{ timeObj.s || 0 }}</span>Second<span v-if="timeObj.s != 1">s</span></li>
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
