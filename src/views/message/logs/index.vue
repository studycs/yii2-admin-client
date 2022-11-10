<template>
  <div class="ele-body">
    <a-card :bordered="false">
      <ele-pro-table ref="tableRef" row-key="id" :columns="columns" :datasource="datasource" v-model:selection="selection">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-space>
              <router-link :to="'/message/log?id='+record.send_group_id">查看</router-link>
            </a-space>
          </template>
        </template>
      </ele-pro-table>
    </a-card>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import {useI18n} from "vue-i18n";
import {message} from "ant-design-vue/es";
import {toDateString} from "ele-admin-pro";
import useFormData from "@/utils/use-form-data";
import {GetLogs} from '@/api/admin/message'
const { t } = useI18n();
// 表格实例
const tableRef = ref(null);
// 是否显示编辑弹窗
const showEdit = ref(false);
// 是否显示消息发送弹窗
const showSend = ref(false);
// 当前编辑数据
const current = ref(null);
// 当前编辑短信发送的数据
const messages = ref(null);
// 表格选中数据
const selection = ref([]);
// 表单数据
const { form: where, resetFields } = useFormData({
  username: '',
  sex: undefined
});
// 表格数据源
const datasource = ({ page, limit, where, orders }) =>{
  return GetLogs({ ...where, ...orders, page, limit })
}
const columns = ref([
  {
    title: '任务名称',
    dataIndex: 'send_name',
  },
  {
    title: '发送组',
    dataIndex: 'group_name',
  },
  {
    title: '接收组',
    dataIndex: 'receive_group_name',
  },
  {
    title: '添加时间',
    dataIndex: 'add_time',
    customRender: ({ text }) => toDateString(parseInt(text))
  },
  {
    title: t('list.basic.table.action'),
    key: 'action',
    width: 170,
    align: 'center',
    hideInSetting: true,
    fixed: 'right'
  }
])
</script>
<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>