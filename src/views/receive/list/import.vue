<template>
  <ele-modal :width="520" :footer="null" title="导入用户" :visible="visible" @update:visible="updateVisible">
    <a-spin :spinning="loading">
      <a-upload-dragger accept=".xlsx" :show-upload-list="false" :customRequest="doUpload" style="padding: 24px 0; margin-bottom: 16px">
        <p class="ant-upload-drag-icon"><cloud-upload-outlined /></p>
        <p class="ant-upload-hint">将文件拖到此处，或点击上传</p>
      </a-upload-dragger>
    </a-spin>
  </ele-modal>
</template>

<script setup>
import {ref, unref} from "vue";
import { useRouter } from 'vue-router';
import {message} from "ant-design-vue/es";
import { ReceiveImport } from '@/api/admin/receive'
import { CloudUploadOutlined } from '@ant-design/icons-vue';
const { currentRoute } = useRouter();
const { query } = unref(currentRoute);

const emit = defineEmits(['done', 'update:visible']);
defineProps({
  // 是否打开弹窗
  visible: Boolean,
  groupId: 0
});
// 导入请求状态
const loading = ref(false);
/* 更新 visible */
const updateVisible = (value) => {
  emit('update:visible', value);
};
const doUpload = ({ file }) =>{
  if (!['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(file.type)) {
    message.error('只能选择 excel 文件');
    return false;
  }
  if (file.size / 1024 / 1024 > 10) {
    message.error('大小不能超过 10MB');
    return false;
  }
  loading.value = true;
  ReceiveImport(file,query).then((msg)=>{
    loading.value = false;
    message.success(msg);
    updateVisible(false);
    emit('done');
  }).catch((e)=>{
    loading.value = false;
    message.error(e.message);
  })
}
</script>
<script>
export default {
  name: "import"
}
</script>

<style scoped>

</style>