<template>
  <ele-modal :width="600" :visible="visible" :confirm-loading="loading" :title="isUpdate ? '编辑分组' : '添加分组'" :body-style="{ paddingBottom: '8px' }" @update:visible="updateVisible" @ok="save">
    <a-form ref="formRef" :model="form" :rules="rules" :label-col="{ md: 4, sm: 4, xs: 24 }" :wrapper-col="{ md: 20, sm: 20, xs: 24 }">
      <a-row :gutter="16">
        <a-col :md="24" :sm="24" :xs="24">
          <a-form-item label="分组名称" name="receive_group_name">
            <a-input allow-clear :maxlength="20" placeholder="账号" v-model:value="form.receive_group_name" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </ele-modal>
</template>
<script setup>
import {reactive, ref, watch} from "vue";
import {message} from "ant-design-vue/es";
import useFormData from "@/utils/use-form-data";
import {AddReceiveGroup} from '@/api/admin/receive'
const emit = defineEmits(['done', 'update:visible']);
const props = defineProps({visible: Boolean,data: Object});
const formRef = ref(null);
// 提交状态
const loading = ref(false);
// 是否是修改
const isUpdate = ref(false);
/* 更新visible */
const updateVisible = (value) => {emit('update:visible', value)};
const { form, resetFields, assignFields } = useFormData({receive_group_name:''})
const rules = reactive({
  receive_group_name:[{
    required: true,
    message: '请输入分组名称',
    type: 'string',
    trigger: 'blur'
  }]
})
const save = () =>{
  if (!formRef.value) return;
  formRef.value.validate().then(()=>{
    loading.value = true;
    AddReceiveGroup(form).then((msg)=>{
      loading.value = false;
      message.success(msg)
      updateVisible(false);
      emit('done');
    }).catch((e)=>{
      loading.value = false;
      message.error(e.message)
    })
  }).catch(()=>null);
}
watch(()=>props.visible,(visible)=>{
  if(props.data){
    isUpdate.value = true;
    assignFields({...props.data})
  }else{
    resetFields();
    formRef.value?.clearValidate();
  }
})
</script>
<script>
export default {
  name: "add-receive"
}
</script>

<style scoped>

</style>