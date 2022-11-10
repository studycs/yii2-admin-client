<template>
  <ele-modal
      :width="800"
      :visible="visible"
      :confirm-loading="loading"
      :title="isUpdate ? '编辑分组' : '添加分组'"
      :body-style="{ paddingBottom: '8px' }"
      @update:visible="updateVisible"
      @ok="save"
  >
    <a-form ref="formRef" :model="form" :rules="rules" :label-col="{ md: 6, sm: 4, xs: 24 }" :wrapper-col="{ md: 18, sm: 20, xs: 24 }">
      <a-row :gutter="16">
        <a-col :md="12" :sm="24" :xs="24">
          <a-form-item label="账号" name="account">
            <a-input allow-clear :maxlength="20" placeholder="账号" v-model:value="form.account" />
          </a-form-item>
          <a-form-item v-if="props.isAdmin" label="密码" name="passwd">
            <a-input allow-clear :maxlength="20" placeholder="账号" v-model:value="form.passwd" />
          </a-form-item>
          <a-form-item label="号码" name="num">
            <a-input allow-clear :maxlength="20" placeholder="号码" v-model:value="form.num" />
          </a-form-item>
          <a-form-item label="账号状态" name="status">
            <a-radio-group v-model:value="form.status">
              <a-radio :value="1">重新登录</a-radio>
              <a-radio :value="3">判断失效</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <a-form-item label="代理IP" name="proxy">
            <a-input allow-clear :maxlength="20" placeholder="代理IP" v-model:value="form.proxy" />
          </a-form-item>
          <a-form-item label="代理账号" name="proxy_account">
            <a-input allow-clear :maxlength="20" placeholder="代理账号" v-model:value="form.proxy_account" />
          </a-form-item>
          <a-form-item label="代理密码" name="proxy_password">
            <a-input allow-clear :maxlength="20" placeholder="代理密码" v-model:value="form.proxy_password" />
          </a-form-item>
          <a-form-item v-if="props.isAdmin" label="所属分组" name="group_id">
            <textnow-group placeholder="所属分组" v-model:value="form.group_id" />
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
import { UpdateTextnowAccount } from '@/api/admin/textnow'
import TextnowGroup from "@/views/textnow/list/textnow-group.vue";

const props = defineProps({
  // 弹窗是否打开
  visible: Boolean,
  isAdmin: Boolean,
  // 修改回显的数据
  data: Object,
});
const formRef = ref(null);
// 提交状态
const loading = ref(false);
// 是否是修改
const isUpdate = ref(false);
const emit = defineEmits(['done', 'update:visible']);
/* 更新visible */
const updateVisible = (value) => {
  emit('update:visible', value);
};
// 表单数据
const { form, resetFields, assignFields } = useFormData({
  id:'',
  account: '',
  passwd: '',
  num: '',
  proxy: '',
  proxy_account: '',
  proxy_password: '',
  group_id:'',
  status:''
});
const rules = reactive({
  account:[{
    required: true,
    message: '请输入账号',
    type: 'string',
    trigger: 'blur'
  }],
  passwd:[{
    required: true,
    message: '请输入密码',
    type: 'string',
    trigger: 'blur'
  }],
  num:[{
    required: true,
    message: '请输入号码',
    type: 'string',
    trigger: 'blur'
  }],
  proxy:[{
    required: true,
    message: '请输入代理Ip',
    type: 'string',
    trigger: 'blur'
  }],
  proxy_account:[{
    required: true,
    message: '请输入代理账号',
    type: 'string',
    trigger: 'blur'
  }],
  proxy_password:[{
    required: true,
    message: '请输入代理密码',
    type: 'string',
    trigger: 'blur'
  }],
  group_id:[{
    required: true,
    message: '请选择所属分组',
    type: 'number',
    trigger: 'blur'
  }]
})
const save = () =>{
  if (!formRef.value) return;
  formRef.value.validate().then(()=>{
    loading.value = true;
    UpdateTextnowAccount(form).then((msg)=>{
      loading.value = false;
      message.success(msg)
      updateVisible(false);
      emit('done');
    }).catch((e)=>message.error(e.message))
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
  name: "textnow-add"
}
</script>

<style scoped>

</style>