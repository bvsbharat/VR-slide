<template>
  <a-entity id="links" layout="type: line; margin: 1.5" :position="attributify(position)">
        <a-entity  data-thumb="#cubes-thumb"></a-entity>
        <a-entity  data-thumb="#city-thumb"></a-entity>
        <a-entity  data-thumb="#sechelt-thumb"></a-entity>
    </a-entity>
</template>

<script>

  import { attributify } from 'utils/aframe-utils'

  export default {
    replace: true,
    props: {
      id: 0,
      position: Object,
      rotation: Object
    },
    data() {
      return {}
    },
    mounted() {},
    beforeDestroy (){
      // console.log(`frame ${this.id} was destroyed`)
    },
    methods: {
      attributify
    }
  }

</script>
