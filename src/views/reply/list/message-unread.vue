<template>
  <div>
    <ele-pro-table
        ref="tableRef"
        row-key="msg_id"
        :columns="columns"
        :datasource="datasource"
        v-model:selection="selection"
    >
      <template #toolbar>
        <a-space>
          <a-button type="primary" class="ele-btn-icon" @click="confirmBatch">标记已读</a-button>
          <a-button danger type="primary" class="ele-btn-icon" @click="removeBatch">回复消息</a-button>
        </a-space>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'get_status'">
          <span v-if="record.get_status===5" class="ele-text-danger">客户</span>
          <span v-if="record.get_status===6" class="ele-text-primary">后台</span>
        </template>
        <template v-else-if="column.key === 'status'">
          <a-tag v-if="record.status === 0" color="red">未读</a-tag>
          <a-tag v-else-if="record.status === 1" color="green">已读</a-tag>
        </template>
      </template>
    </ele-pro-table>
    <message-send v-model:visible="showEdit" @done="reload" />
  </div>
</template>
<script setup>
import {ref, unref} from "vue";
import {useRouter} from "vue-router";
import {toDateString} from "ele-admin-pro";
import {message} from "ant-design-vue/es";
import useFormData from "@/utils/use-form-data";
import {getMessageList,MarkMsgRead} from '@/api/admin/reply'
import MessageSend from "@/views/reply/list/message-send.vue";
const { currentRoute } = useRouter();
const { query } = unref(currentRoute);


const selection = ref([]);
// 是否显示编辑弹窗
const showEdit = ref(false);
// 表格实例
const tableRef = ref(null);
/* 批量删除 */
const removeBatch = () =>{
  showEdit.value = true;
}
const { form: where, resetFields } = useFormData({
  username: '',
  sex: undefined
});
/* 搜索 */
const reload = () => {
  tableRef?.value?.reload({ page: 1, where: where });
};
const columns = ref([
  {
    title: '消息内容',
    dataIndex: 'message',
    width: 350,
    ellipsis: true
  },
  {
    title: '发送者',
    key:'get_status',
    width: 50,
    dataIndex: 'get_status',
  },
  {
    title: '状态',
    key:'status',
    width: 60,
    dataIndex: 'status',
  },
  {
    title: '创建时间',
    dataIndex: 'add_time',
    ellipsis: true,
    width: 120,
    customRender: ({ text }) => toDateString(text)
  },
])
const confirmBatch = () =>{
  if(selection.value.length===0){
    message.error('请选择要标记已读的项')
  }else{
    const ids = selection.value.map((d)=>d.msg_id)
    MarkMsgRead({ids:ids,status:1}).then((msg)=>{
      message.success(msg)
      reload()
    }).catch((e)=>message.error(e.message))
  }
}
// 表格数据源
const datasource = ({ page, limit, where, orders }) =>{
  return getMessageList({ ...where, ...orders, page, limit,id:query.id,type:'unread'})
}
</script>
<script>
export default {
  name: "message-unread.vue"
}
</script>

<style scoped>

</style>