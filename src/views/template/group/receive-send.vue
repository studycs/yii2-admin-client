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
import {GetReceiveGroups} from '@/api/admin/template'
const data = ref([]);
const emit = defineEmits(['update:value', 'blur']);
const props = defineProps({
  value: '',
  placeholder: {
    type: String,
    default: '请选择分组'
  }
});
GetReceiveGroups().then((value)=>{
  data.value = value.map((d)=>{return {value: d.receive_group_id, label: d.receive_group_name}})
}).catch((e)=>message.error(e.message))
/* 更新选中数据 */
const updateValue = (value) => emit('update:value', value);
/* 失去焦点 */
const onBlur = () => emit('blur');
</script>
<script>
export default {
  name: "receive-send"
}
</script>

<style scoped>

</style>