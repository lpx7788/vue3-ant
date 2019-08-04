<template>
<div class="static-page wrap">
  <!-- <div class="main-header">
    <p-header/>
  </div> -->
   <div class="sidemenu">
      <p-sidemenu/>
   </div>
  <keep-alive include="info-List"> 
    <router-view/>
  </keep-alive>
  <div class="copyright">
    <p-footer></p-footer>
  </div>
</div>
</template>

<script>
// import { mapState } from 'vuex'
// import { SET_USER, SET_TOKEN } from '@/store/mutation-types'

import header from '@/views/LayoutPage/components/Header'
import footer from '@/views/LayoutPage/components/Footer'
import sidemenu from '@/views/LayoutPage/components/SideMenu'

export default {
  name: 'static-wrap',
  components: {
    'p-header': header,
    'p-footer': footer,
    'p-sidemenu': sidemenu,
  },
  // computed: {
  //   ...mapState(['auth']),
  // },
  methods: {
    onRefresList () {
        this.centerDialogVisible = false
    },
  },
  mounted() {
    // this.reloadUserInfo()
  },
  beforeDestroy() {
  }
}
</script>

<style >
.static-page {
  min-height: 100%;
}
</style>
