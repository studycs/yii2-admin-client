<template>
  <a-select
      show-search
      optionFilterProp="label"
      :options="data"
      :value="value"
      :placeholder="placeholder"
      @update:value="updateValue"
      @blur="onBlur"
  >
  </a-select>
</template>
<script setup>
import {ref} from "vue";
const data = ref([]);
const emit = defineEmits(['update:value', 'blur']);
import { GetSendGroups } from '@/api/admin/template'
const props = defineProps({
  value: '',
  placeholder: {
    type: String,
    default: '请选择分组'
  }
});
GetSendGroups().then((value)=>{
  data.value = value.map((d)=>{return {value: d.group_id, label: d.group_name}})
}).catch((e)=>message.error(e.message))
/* 更新选中数据 */
const updateValue = (value) => {
  console.log(value)
  emit('update:value', value);
};
/* 失去焦点 */
const onBlur = () => {
  emit('blur');
};
</script>
<script>
export default {
  name: "send-group"
}
</script>

<style scoped>

</style>