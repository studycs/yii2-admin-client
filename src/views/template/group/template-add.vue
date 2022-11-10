<template>
  <ele-modal
      :width="600"
      :visible="visible"
      :confirm-loading="loading"
      :title="isUpdate ? '编辑分组' : '添加分组'"
      :body-style="{ paddingBottom: '8px' }"
      @update:visible="updateVisible"
      @ok="save"
  >
    <a-form ref="formRef" :model="form" :rules="rules" :label-col="{ md: 4, sm: 4, xs: 24 }" :wrapper-col="{ md: 20, sm: 20, xs: 24 }">
      <a-row :gutter="16">
        <a-col :md="24" :sm="24" :xs="24">
          <a-form-item label="分组名称" name="name">
            <a-input allow-clear :maxlength="20" placeholder="账号" v-model:value="form.name" />
          </a-form-item>
          <a-form-item label="分组备注" name="remark">
            <a-input allow-clear :maxlength="20" placeholder="分组备注" v-model:value="form.remark" />
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
import {addMsgGroup,editMsgGroup} from '@/api/admin/template'
const props = defineProps({
  // 弹窗是否打开
  visible: Boolean,
  // 修改回显的数据
  data: Object,
});
const emit = defineEmits(['done', 'update:visible']);
const formRef = ref(null);
// 是否是修改
const isUpdate = ref(false);
// 提交状态
const loading = ref(false);
/* 更新visible */
const updateVisible = (value) => emit('update:visible', value);
const { form, resetFields, assignFields } = useFormData({
  id:undefined,
  name:'',
  remark: ''
})
const rules = reactive({
  name:[{
    required: true,
    message: '分组名称',
    type: 'string',
    trigger: 'blur'
  }],
  remark:[{
    required: true,
    message: '分组备注',
    type: 'string',
    trigger: 'blur'
  }]
})
const save = () =>{
  if (!formRef.value) return;
  formRef.value.validate().then(()=>{
    const saveOrUpdate = isUpdate.value ?  editMsgGroup : addMsgGroup;
    saveOrUpdate(form).then((msg)=>{
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
    isUpdate.value = false;
    formRef.value?.clearValidate();
  }
})
</script>
<script>
export default {
  name: "template-add"
}
</script>

<style scoped>

</style>