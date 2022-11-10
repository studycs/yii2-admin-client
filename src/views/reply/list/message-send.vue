<template>
  <ele-modal
      :width="600"
      :visible="visible"
      :confirm-loading="loading"
      :title="isUpdate ? '编辑分组' : '发送消息'"
      :body-style="{ paddingBottom: '8px' }"
      @update:visible="updateVisible"
      @ok="save"
  >
    <a-form
        ref="formRef"
        :model="form"
        :label-col="{ md: 4, sm: 4, xs: 24 }"
        :wrapper-col="{ md: 20, sm: 20, xs: 24 }"
    >
      <a-row :gutter="16">
        <a-col :md="24" :sm="24" :xs="24">
          <a-form-item label="消息类型" name="type">
            <a-radio-group v-model:value="form.type" @change="onTypeChange">
              <a-radio :value="0">文字消息</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item v-if="form.type===0" label="消息内容" name="message">
            <a-input allow-clear :maxlength="20" placeholder="消息内容" v-model:value="form.msg" />
          </a-form-item>
          <a-form-item v-if="form.type===1" label="图片消息" name="image">
            <ele-image-upload v-model:value="images" :limit="1" @upload="onUpload" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>

  </ele-modal>
</template>
<script setup>
import {ref, unref, watch} from "vue";
const API_URL = import.meta.env.VITE_API_URL;
import useFormData from "@/utils/use-form-data";
import {UnreadMsgUpload} from '@/api/admin/reply'
import {message} from "ant-design-vue/es";
import {useRouter} from "vue-router";
import {UnreadMsgPost} from '@/api/admin/reply'
const emit = defineEmits(['done', 'update:visible']);
const imageUrl = ref('');
const { currentRoute } = useRouter();
const props = defineProps({
  // 弹窗是否打开
  visible: Boolean,
  // 修改回显的数据
  data: Object,
});
// 已上传数据, 可赋初始值用于回显
const images = ref([]);
const fileList = ref([]);
// 提交状态
const loading = ref(false);
// 是否是修改
const isUpdate = ref(false);
// 禁用
const disabled = ref(false);
// gv id
const msgId = ref('');
/* 更新visible */
const updateVisible = (value) => {
  emit('update:visible', value);
};
const handleChange = info =>{

}
const beforeUpload = file =>{

}
// 表单数据
const { form, resetFields, assignFields } = useFormData({
  msg:'',
  type: 0,
  url: '',
  images:[],
  msg_id:'',
});
const onTypeChange = () =>{

}
const onUpload = (d) =>{
  loading.value = true
  UnreadMsgUpload(d.file).then((value)=>{
    loading.value = false
    message.success('图片上传成功')
    imageUrl.value = value.url
    form.url = value.url
  }).catch((e)=>{
    loading.value = false
    message.error(e.message)
  })
}
const save = () =>{
  loading.value = true
  UnreadMsgPost(form).then((msg)=>{
    loading.value = false
    message.success(msg)
    updateVisible(false);
    emit('done');
  }).catch((e)=>{
    loading.value = false
    message.error(e.message)
  })
}
watch(currentRoute,()=>{
  const { query } = unref(currentRoute);
  msgId.value = query.id
  form.msg_id = query.id
  form.msg = ''
},{ immediate: true })
</script>
<script>
export default {
  name: "message-send.vue"
}
</script>

<style scoped>

</style>