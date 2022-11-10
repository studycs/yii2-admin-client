<template>
  <div class="ele-body">
    <a-card :bordered="false">
      <ele-pro-table ref="tableRef" v-model:selection="selection" :columns="columns" :datasource="datasource">

      </ele-pro-table>
    </a-card>
  </div>
</template>

<script setup>
import {ref, unref, watch} from "vue";
import { useRouter } from 'vue-router';
import {useI18n} from "vue-i18n";
import { GetSendLogDetail } from '@/api/admin/template'
import {toDateString} from "ele-admin-pro";
import useFormData from "@/utils/use-form-data";
const { t } = useI18n();
const { currentRoute } = useRouter();
const ROUTE_PATH = '/template/result';
// 是否显示编辑弹窗
const showEdit = ref(false);
// 当前编辑数据
const current = ref(null);
// 表格选中数据
const selection = ref([]);
// 表格实例
const tableRef = ref(null);
const groupId = ref(0);
// 表单数据
const { form: where, resetFields } = useFormData({
  id: 1,
  username: '',
  sex: undefined
});
// 表格数据源
const datasource = ({ page, limit, where, orders }) =>{
  return GetSendLogDetail({...where,...orders,page, limit,id:groupId.value})
}

const columns = ref([
  {
    title: 'ID',
    dataIndex: 'log_id',
  },
  {
    title: '发送号码',
    dataIndex: 'num',
    customRender: ({ text }) =>  (!text || text.length===0) ? '发送号码已被删' : text
  },
  {
    title: '接收号码',
    dataIndex: 'receive_num',
  },
  {
    title: '日志',
    dataIndex: 'error_log',
    customRender:({ text })=>{
      if(text.indexOf('Connection refused')>=0) return '连接被拒绝！';
      if(text.indexOf('429 Too Many Requests')>=0) return '429 Too Many Requests';
      if(text.indexOf('503 Service Unavailable')>=0) return '503 Service Unavailable';
      if(text.indexOf('cURL error 7005: Socks5 handshake failed')>=0) return 'cURL error 7005: Socks5 handshake failed';
      return text;
    }
  },
  {
    title: '发送时间',
    dataIndex: 'add_time',
    customRender: ({ text }) => toDateString(parseInt(text))
  },
])
const execRoute = (route)=>{
  const { path } = unref(route)
  if (path !== ROUTE_PATH) return;
  const { query } = unref(currentRoute);
  const id = query.id;
  if (!id) return;
  groupId.value = id;
}
watch(currentRoute,execRoute,{ immediate: true })
</script>
<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>