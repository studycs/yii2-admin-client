<template>
  <ele-modal
      :width="600"
      :visible="visible"
      :confirm-loading="loading"
      :title="isUpdate ? '编辑模板' : '添加模板'"
      :body-style="{ paddingBottom: '8px' }"
      @update:visible="updateVisible"
      @ok="save"
  >
    <a-form
        ref="formRef"
        :model="form"
        :rules="rules"
        :label-col="{ md: 4, sm: 4, xs: 24 }"
        :wrapper-col="{ md: 20, sm: 20, xs: 24 }"
    >
      <a-row :gutter="16">
        <a-col :md="24" :sm="24" :xs="24">
          <a-form-item label="模板名称" name="msg_model_name">
            <a-input allow-clear :maxlength="20" placeholder="模板名称" v-model:value="form.msg_model_name" />
          </a-form-item>
          <a-form-item label="消息内容" name="msg">
            <a-input allow-clear :maxlength="20" placeholder="消息内容" v-model:value="form.msg" />
          </a-form-item>
          <a-form-item label="自动回复" name="msg_reply">
            <a-input allow-clear :maxlength="20" placeholder="自动回复" v-model:value="form.msg_reply" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </ele-modal>
</template>
<script setup>
import {useRouter} from "vue-router";
import {message} from "ant-design-vue/es";
import {reactive, ref, unref, watch} from "vue";
import useFormData from "@/utils/use-form-data";
import {AddMessageItem,UpdateMessageItem} from '@/api/admin/message'
const { currentRoute } = useRouter();
const { query } = unref(currentRoute);
const emit = defineEmits(['done', 'update:visible']);
const props = defineProps({visible: Boolean, data: Object});
const formRef = ref(null);
// 提交状态
const loading = ref(false);
// 是否是修改
const isUpdate = ref(false);
/* 更新visible */
const updateVisible = (value) => {
  emit('update:visible', value);
};
const { form, resetFields, assignFields } = useFormData({
  msg_model_id:undefined,
  msg_model_name:'',
  group_id:'',
  msg_reply:'',
  msg: ''
})
const rules = reactive({
  msg_model_name:[{
    required: true,
    message: '模板名称不能为空',
    type: 'string',
    trigger: 'blur'
  }],
  msg:[{
    required: true,
    message: '消息内容不能为空',
    type: 'string',
    trigger: 'blur'
  }],
  msg_reply:[{
    required: false,
    message: '自动回复必须是字符串',
    type: 'string',
    trigger: 'blur'
  }]
})
const save = () =>{
  if(!isUpdate.value) form.group_id = query.id
  if(!formRef.value) return;
  formRef.value.validate().then(()=>{
    loading.value = true;
    const saveOrUpdate = isUpdate.value ? UpdateMessageItem : AddMessageItem
    saveOrUpdate(form).then((msg)=>{
      loading.value = false;
      message.success(msg)
      updateVisible(false);
      emit('done');
    }).catch((e)=>{loading.value =false;message.error(e.message)})
  }).catch(()=>null)
}
watch(()=>props.visible,(visible)=>{
  if(props.data?.msg_model_id){
    isUpdate.value = true;
    assignFields({...props.data})
  }else{
    isUpdate.value = false;
    resetFields();
    formRef.value?.clearValidate();
  }
})
</script>
<script>
export default {
  name: "message-create"
}
</script>

<style scoped>

</style>