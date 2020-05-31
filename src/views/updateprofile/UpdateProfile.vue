<template>
  <div class="container">

    <update-profile-nav-bar></update-profile-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
       <van-field
        v-model="idcard"
        name="身份证号"
        label="身份证号"
        placeholder="身份证号"
        :rules="[{ required: true, message: '请填写身份证号' }]"
      />
      <van-field
        v-model="tel"
        type="tel"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="tel"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />

      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="sex" direction="horizontal">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field name="uploader" label="头像">
        <template #input>
          <van-uploader v-model="avatar"  multiple :max-count="1"/>
        </template>
      </van-field>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Icon as VanIcon} from 'vant';
import { Cell as VanCell ,CellGroup as VanCellGroup} from 'vant';
import { RadioGroup as VanRadioGroup, Radio as VanRadio} from 'vant';
import { Field as VanField} from 'vant';
import { Form as VanForm} from 'vant';
import { Button as VanButton } from 'vant'
import { Uploader as VanUploader} from 'vant';
import UpdateProfileNavBar from './childcomponents/UpdateProfileNavBar'
export default {
  data() {
    return {
      username: '',
      password: '',
      idcard: '',
      tel: '',
      sex: '男',
      avatar: [{url: '',isImage: true}]

    }
  },
  components: {
    VanIcon,
    VanField,
    VanForm,
    VanButton,
    VanRadioGroup,
    VanRadio,
    VanUploader,
    UpdateProfileNavBar
  },
  methods: {
    onSubmit(values) {

    }
  }
}
</script>

<style scoped>

</style>
