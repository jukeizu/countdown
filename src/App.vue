<template>
  <div id="app" class="container">
      <countdown :time="time" :interval="100" tag="p">
          <template slot-scope="props">
              <h1 v-if="title" >{{title}}</h1>
              <ul>
                  <li><span id="days">{{ props.days }}</span>days</li>
                  <li><span id="hours">{{ props.hours }}</span>Hours</li>
                  <li><span id="minutes">{{ props.minutes }}</span>Minutes</li>
                  <li><span id="seconds">{{ props.seconds }}</span>Seconds</li>
              </ul>
          </template>
      </countdown>
      <div v-if="target > 0">
          Until {{target.toUTCString()}}
      </div>
  </div>
</template>

<script>
    export default {
        data: function () {
            var target = new Date(0)
            target.setUTCSeconds(this.$route.query.t)

            var now = new Date();
            return {
                time: target - now,
                target: target,
                title: this.$route.query.title
            };
        }
    }
</script>

<style>
  @import 'assets/styles/countdown.css'
</style>