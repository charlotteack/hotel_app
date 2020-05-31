<template>
  <div id="roomOrder">
    <order-nav-bar></order-nav-bar>
    <van-cell title="酒店名" icon="shop-o" value="房间信息"/>
    <room-item :roomItem='roomItem'></room-item>

    <!-- 个人信息表单 -->
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="姓名"
      label="姓名"
      placeholder="姓名"
      :rules="[{ required: true, message: '请填写姓名' }]"
    />
    <van-field
      v-model="phoneNumber"
      name="手机号"
      label="手机号"
      placeholder="手机号"
      :rules="[{ required: true, message: '请填写手机号' }]"
    />
    <van-field name="stepper" label="房间数量">
      <template #input>
        <van-stepper v-model="roomNum" />
      </template>
    </van-field>

    <van-field
      readonly
      clickable
      name="calendar"
      :value="date"
      label="入住时间"
      placeholder="点击选择日期"
      @click="showCalendar = true"
    />
    <van-calendar v-model="showCalendar" @confirm="onCalendarConfirm" />

    <van-field
    readonly
    clickable
    name="picker"
    :value="stayTime"
    label="入住时长"
    placeholder="点击选择入住时长"
    @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onPickerConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>

    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

  </div>
</template>

<script>
  import OrderNavBar from "./childcomponents/OrderNavBar";
  import { Icon as VanIcon} from 'vant';
  import { Cell as VanCell} from 'vant';
  import { Field as VanField} from 'vant';
  import { Button as VanButton} from 'vant';
  import { Popup as vanPopup} from 'vant';
  import { Stepper as VanStepper} from 'vant';
  import { Form as VanForm} from 'vant';
  import { Calendar as VanCalendar} from 'vant';
  import { Picker as VanPicker} from 'vant';
  import RoomItem from 'components/content/rooms/RoomItem.vue'
  export default {
    name: "Order",
    components:{
      OrderNavBar,
      VanIcon,
      VanCell,
      RoomItem,
      VanField,
      VanButton,
      vanPopup,
      VanStepper,
      VanForm,
      VanCalendar,
      VanPicker
    },
    data() {
      return {
        roomItem: {
          img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price:100,desc:'这里是描述',roomName:'单人间'
        },
        roomNum: 1,
        showCalendar: false,
        date: '',
        showPicker: false,
        columns: ['1', '2', '3', '4', '5'],
        stayTime: ''
      }
    },
    props: {
      hotelName: {
        type: String
      },
      room: {
        type: Object
      },
      username: {
        type: String
      },
      phoneNumber: {
        type: String
      }
    },
    methods: {
      onCalendarConfirm(date) {
      this.date = `${date.getYear() + 1900}/${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
      },
      onPickerConfirm(value){
        this.stayTime = value;
        this.showPicker = false;
      },
      onSubmit(values) {

      }
    }
  }
</script>

<style scoped>
  #roomOrder {
    height: 100vh;
    position: relative;
  }
  .order-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>
