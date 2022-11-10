<template>
  <ele-modal
      :width="600"
      :visible="visible"
      :confirm-loading="loading"
      :title="title"
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
          <a-form-item label="发送命名" name="send_name">
            <a-input allow-clear :maxlength="20" placeholder="发送命名" v-model:value="form.send_name" />
          </a-form-item>
          <a-form-item label="选择发送组" name="gv_group_id">
            <send-group placeholder="选择发送组" v-model:value="form.textnow_group_id" />
          </a-form-item>
          <a-form-item label="选择接受组" name="receive_group_id">
            <receive-send placeholder="选择接受组" v-model:value="form.receive_group_id" />
          </a-form-item>
          <a-form-item label="消息模板组" name="msg_id">
            <message-group placeholder="消息模板组" v-model:value="form.msg_id"  />
          </a-form-item>
          <a-form-item label="自动回复" name="is_reply" v-if="IS_REPLY==='true'">
            <a-radio-group v-model:value="form.is_reply">
              <a-radio :value="1">自动回复</a-radio>
              <a-radio :value="0">不自动回复</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="发送表情符" name="emoji">
            <a-radio-group v-model:value="form.emoji">
              <a-radio :value="1">发送表情符</a-radio>
              <a-radio :value="2">不发送表情符</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </ele-modal>
</template>
<script setup>
import {reactive, ref} from "vue";
import {IS_REPLY} from '@/config/setting'
import {message} from "ant-design-vue/es";
import useFormData from "@/utils/use-form-data";
import { TextnowMessageSend } from '@/api/admin/message'
import SendGroup from "@/views/message/group/send-group.vue";
import ReceiveSend from "@/views/message/group/receive-send.vue";
import MessageGroup from "@/views/message/group/message-group.vue";
const emit = defineEmits(['done', 'update:visible']);
const props = defineProps({visible: Boolean, data: Object});
const title = ref('发送消息');
const formRef = ref(null);
// 提交状态
const loading = ref(false);
// 是否是修改
const isUpdate = ref(false);
// 是否自动回复
const isReply = ref(IS_REPLY);
/* 更新visible */
const updateVisible = (value) => emit('update:visible', value);
const { form, resetFields, assignFields } = useFormData({
  send_name:'',
  textnow_group_id:'',
  receive_group_id:'',
  msg_id:'',
  emoji: 1,
  is_reply: 0
})
const rules = reactive({
  send_name:[{
    required: true,
    message: '发送命名不能为空',
    type: 'string',
    trigger: 'blur'
  }],
  textnow_group_id:[{
    required: true,
    message: '请选择发送组',
    type: 'number',
    trigger: 'blur'
  }],
  receive_group_id:[{
    required: true,
    message: '请选择接受组',
    type: 'number',
    trigger: 'blur'
  }],
  msg_id:[{
    required: true,
    message: '请选择消息模板组',
    type: 'number',
    trigger: 'blur'
  }],
  emoji:[{
    required: true,
    message: '请选择是否发送表情符',
    type: 'number',
    trigger: 'blur'
  }],
  is_reply:[{
    required: true,
    message: '请选择是否发送表情符',
    type: 'number',
    trigger: 'blur'
  }]
})
const save = () =>{
  console.log(isReply.value==='true')
  if(!formRef.value) return;
  formRef.value.validate().then(()=>{
    loading.value = true
    TextnowMessageSend(form).then((msg)=>{
      loading.value = false;
      message.success(msg)
      updateVisible(false);
      emit('done');
    }).catch((e)=>{
      loading.value = false;
      message.error(e.message)
    })
  }).catch(()=>null)
}
</script>
<script>
export default {
  name: "message-send"
}
</script>

<style scoped>

</style>