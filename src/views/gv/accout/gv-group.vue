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
import { ref } from "vue";
import { message } from 'ant-design-vue/es';
import { GetGvGroups } from '@/api/admin/gv';

const emit = defineEmits(['update:value', 'blur']);
const props = defineProps({
  value: Number,
  placeholder: {
    type: String,
    default: '请选择分组'
  }
});
// 字典数据
const data = ref([]);
GetGvGroups().then((value)=>{
  data.value = value.map((d)=>{return {value: d.group_id, label: d.group_name}})
}).catch((e)=>message.error(e.message))
/* 更新选中数据 */
const updateValue = (value) => emit('update:value', value);
/* 失去焦点 */
const onBlur = () =>emit('blur');
</script>

<script>
export default {
  name: "gv-group"
}
</script>

<style scoped>

</style>