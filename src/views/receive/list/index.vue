<template>
  <div class="ele-body">
    <a-card :bordered="false">
      <ele-pro-table
          ref="tableRef"
          row-key="receive_id"
          :columns="columns"
          :datasource="datasource"
      >
        <template #toolbar>
          <a-space>
            <a-button type="primary" class="ele-btn-icon" @click="openImport">
              <template #icon>
                <upload-outlined />
              </template>
              <span>导入号码</span>
            </a-button>
          </a-space>
        </template>
      </ele-pro-table>
    </a-card>
    <import v-model:visible="showImport" :groupId="groupId" @done="reload" />
  </div>
</template>

<script setup>
import { ref, watch, unref } from 'vue';
import { useRouter } from 'vue-router';
import {toDateString} from "ele-admin-pro";
import useFormData from "@/utils/use-form-data";
import {GetReceiveList} from '@/api/admin/receive'
import Import from "@/views/receive/list/import.vue";
import {UploadOutlined,} from '@ant-design/icons-vue';
const { currentRoute } = useRouter();
const ROUTE_PATH = '/receive/list';
const columns = ref([
  {title: '接收号码', dataIndex: 'receive_num'},
  {title: '添加时间', dataIndex: 'add_time', customRender: ({ text }) => toDateString(text)},
])
// 表格数据源
const datasource = ({ page, limit, where, orders }) =>{
  return GetReceiveList({ ...where, ...orders, page, limit,id:groupId.value })
}

/* 搜索 */
const reload = (where) => {
  selection.value = [];
  tableRef?.value?.reload({ page: 1, where });
};
// 表单数据
const { form: where, resetFields } = useFormData({
  id: 1,
  username: '',
  sex: undefined
});
// 是否显示用户导入弹窗
const showImport = ref(false);
/* 打开编辑弹窗 */
const openImport = () => {
  showImport.value = true;
};
// 表格选中数据
const selection = ref([]);
// 表格实例
const tableRef = ref(null);
const groupId = ref(0);
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