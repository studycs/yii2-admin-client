<template>
  <div class="ele-body">
    <a-card :bordered="false">
      <ele-pro-table
          ref="tableRef"
          :columns="columns"
          :datasource="datasource"
      >
        <template #toolbar>
          <a-space>
            <a-button type="primary" class="ele-btn-icon" @click="openImport">
              <template #icon>
                <upload-outlined />
              </template>
              <span>导入IP</span>
            </a-button>
          </a-space>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'status'">
            <a-tag v-if="record.status===0" color="red">未知</a-tag>
            <a-tag v-if="record.status===1" color="green">有效</a-tag>
            <a-tag v-if="record.status===2" color="red">无效</a-tag>
          </template>
        </template>
      </ele-pro-table>
    </a-card>
    <ip-import v-model:visible="showImport" :groupId="groupId" @done="reload" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import {ref, unref, watch} from "vue";
import {toDateString} from "ele-admin-pro";
import useFormData from "@/utils/use-form-data";
import {getIpList} from '@/api/admin/ip'
import IpImport from "@/views/ip/list/ip-import.vue";
import {UploadOutlined,PlusOutlined,} from '@ant-design/icons-vue';
const { currentRoute } = useRouter();
const groupId = ref(0);
const ROUTE_PATH = '/ip/list';
// 表单数据
const { form: where, resetFields } = useFormData({
  id: 1,
  username: '',
  sex: undefined
});
/* 打开编辑弹窗 */
const openImport = () => {
  showImport.value = true;
};
// 表格数据源
const datasource = ({ page, limit, where, orders }) =>{
  return getIpList({ ...where, ...orders, page, limit,id:groupId.value })
}
// 当前编辑数据
const current = ref(null);
// 是否显示编辑弹窗
const showEdit = ref(false);
// 是否显示用户导入弹窗
const showImport = ref(false);
// 表格实例
const tableRef = ref(null);
// 表格选中数据
const selection = ref([]);
/* 搜索 */
const reload = (where) => {
  selection.value = [];
  tableRef?.value?.reload({ page: 1, where });
};
const columns = ref([
  {
    title: '代理IP',
    dataIndex: 'proxy',
  },
  {
    title: '账号',
    dataIndex: 'proxy_account',
  },
  {
    title: '密码',
    dataIndex: 'proxy_password',
  },
  {
    title: '分配数量',
    dataIndex: 'gv_count',
  },
  {
    title: '最后分配',
    dataIndex: 'gv_account',
    customRender:({text})=> {
      if(!text) return '未分配';
      return text;
    }
  },
  {
    title: '状态',
    key:'status',
    dataIndex: 'status',
  },
  {
    title: '导入时间',
    dataIndex: 'add_time',
    customRender: ({ text }) => toDateString(text)
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