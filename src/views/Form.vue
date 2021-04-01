<template lang="pug">
#form
  b-container
    h1 輸入資料
    b-form(@submit.prevent='onComplete')
      b-form-group#input-group-1(label='名字', label-for='input-1', :state='formnameState', description='(必填)', invalid-feedback='名字格式不符')
        b-form-input#input-1(v-model='formname', type='text', required='required', placeholder='請輸入名字...', :state='formnameState')
      b-form-group#input-group-1(label='信箱', label-for='input-1',  description='(必填)', invalid-feedback='email格式不符')
        b-form-input#input-1(v-model='formemail', type='text', required='required', placeholder='請輸入email...')
      b-form-group#input-group-1(label='電話', label-for='input-1',  description='(必填)', invalid-feedback='電話格式不符')
        b-form-input#input-1(v-model='formphone', type='text', required='required', placeholder='請輸入電話...')
      b-form-group#input-group-1(label='地址', label-for='input-1',  description='(必填)', invalid-feedback='地址格式不符')
        b-form-input#input-1(v-model='formaddress', type='text', required='required', placeholder='請輸入地址...')
      b-form-group#input-group-1(label='備註', label-for='input-1', description='輸入想備註的內容(選填)', invalid-feedback='備註格式不符')
        b-form-input#input-1(v-model='formcontent', type='text', placeholder='請輸入備註...')
      button.btn.btn-primary(@on-complete='onComplete' type='submit') Submit
</template>
<style>
  #total{
    float: right;
  }
  #cart{
    overflow: hidden;
  }
  .footer{
  background-color: #003399;
}
</style>
<script>
export default {
  name: 'Form',
  data () {
    return {
      formname: '',
      formemail: '',
      formphone: '',
      formaddress: '',
      formcontent: ''
    }
  },
  computed: {
    formnameState () {
      if (this.formname.length === 0) {
        return null
      } else if (this.formname.length > 200) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    onComplete: function () {
      if (this.formnameState) {
        this.axios.post(process.env.VUE_APP_URL + '/forms/', this.$data)
          .then(res => {
            if (res.data.success) {
              this.$swal({
                icon: 'success',
                title: '訂購成功',
                text: '恭喜您訂購完成!預計7-14個工作天會寄出商品!(貨到付款)，若您購買的是濾水器，預計2個工作天內會有專人與您聯繫安裝時間!'
              })
              this.formname = ''
              this.formemail = ''
              this.formphone = ''
              this.formaddress = ''
              this.formcontent = ''
              this.formproductname.length = 0
            } else {
              this.$swal({
                icon: 'error',
                title: '發生錯誤',
                text: res.data.message
              })
            }
          })
          .catch(err => {
            this.$swal({
              icon: 'error',
              title: '發生錯誤',
              text: err.response.data.message
            })
          })
      }
    }
  }
}
</script>
