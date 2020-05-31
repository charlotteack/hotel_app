<template>
  <div class="gymInfo">
    <van-cell title="酒店名" icon="fire-o" value="健身房信息"/>

    <van-divider
    :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
    简介
    </van-divider>

    <p class="gymSimpleInfo">健身房简介健身房简介健身房简介健身房简介健身房简介健身房简介健身房简介健身房简介健身房简介</p>

    <van-cell-group>
      <van-field label="容纳人数" :value="maxNum" readonly />
      <van-field label="当前人数" :value="nowNum" readonly />
    </van-cell-group>

    <van-divider
    :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
    预约
    </van-divider>

    <!-- 预约信息表单 -->
  <van-form @submit="onSubmit">

    <van-field
      readonly
      clickable
      name="datetimePicker"
      :value="startTime"
      label="时间选择"
      placeholder="点击选择预约时间"
      @click="showStartTimePicker = true"
    />
    <van-popup v-model="showStartTimePicker" position="bottom">
      <van-datetime-picker
        type="time"
        @confirm="onStartTimeConfirm"
        @cancel="showStartTimePicker = false"
      />
    </van-popup>


    <van-field
    readonly
    clickable
    name="picker"
    :value="stayTime"
    label="健身时长"
    placeholder="点击选择健身时长"
    @click="showStayTimePicker = true"
    />
    <van-popup v-model="showStayTimePicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onStayTimerConfirm"
        @cancel="showStayTimePicker = false"
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
import { Icon as VanIcon} from 'vant';
import { Cell as VanCell ,CellGroup as VanCellGroup} from 'vant';
import { Divider as VanDivider} from 'vant';
import { Field as VanField} from 'vant';
import { Form as VanForm} from 'vant';
import {Button as VanButton} from 'vant'
import { Picker as VanPicker} from 'vant';
import { DatetimePicker as VanDatetimePicker} from 'vant';
import { Popup as VanPopup} from 'vant';
export default {
  components: {
    VanIcon,
    VanCellGroup,
    VanCell,
    VanDivider,
    VanField,
    VanButton,
    VanPicker,
    VanForm,
    VanDatetimePicker,
    VanPopup
  },
  data() {
    return {
      showStartTimePicker: false,
      startTime: '',
      showStayTimePicker: false,
      stayTime: '',
      columns: ['0.5小时', '1小时', '1.5小时', '2小时'],
    }
  },
  props: {
    gymInfo: {
      type: String,
    },
    maxNum: {
      type: Number,
      default: 100
    },
    nowNum: {
      type: Number,
      default: 50
    }
  },
  methods: {
    onStartTimeConfirm(time) {
      this.startTime = time;
      this.showStartTimePicker = false;
    },
    onStayTimerConfirm(value) {
      this.stayTime = value;
      this.showStayTimePicker = false;
    },
    onSubmit(values) {
      
    },

  }
}
</script>

<style scoped>
  .gymSimpleInfo {
    padding: 0 10px;
    font-size: 14px;
    margin-bottom: 10px;
  }
</style>