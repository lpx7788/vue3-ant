<template>
<footer >
    <p class="copyright-text">Copyright&copy;{{currentYear}}. 广州众咖信息科技服务有限公司 All Rights Reserved 
    <a target="_blank" href="http://www.beian.miit.gov.cn/">粤ICP备18042113号-1</a>
    </p>
</footer>
</template>

<script>
export default {
  name: 'p-footer',
  props: ['styleHeight'],
  data() {
    return {
      currentYear: (new Date).getFullYear()
    }
  },
  computed: {
  },
}
</script>

<style lang="less" scoped>
footer {
  background-color: #fafafa;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;   
  display: inline-block;
  width: 100%;
  a{
    text-decoration: none;
    color: #666;
  }
  a:hover{
    color: #4d62f9;
  }
  .copyright-text {
    color: #666;
    height: 64px;
    line-height: 64px;
    width: 100%;
  }
}
</style>
