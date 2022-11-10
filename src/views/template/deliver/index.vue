<template>
  <div class="ele-body">
    <a-card :bordered="false">
      <ele-pro-table ref="tableRef" row-key="send_group_id" :columns="columns" :datasource="datasource">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-space>
              <router-link :to="'/template/result?id='+record.send_group_id">查看</router-link>
            </a-space>
          </template>
        </template>
      </ele-pro-table>
    </a-card>
  </div>
</template>

<script setup>
import {ref} from "vue";
import useFormData from "@/utils/use-form-data";
import {GetSendLogGroup} from '@/api/admin/template'
import {toDateString} from "ele-admin-pro";
import {useI18n} from "vue-i18n";
const { t } = useI18n();
// 是否显示编辑弹窗
const showEdit = ref(false);
// 当前编辑数据
const current = ref(null);
// 表格选中数据
const selection = ref([]);
// 表格实例
const tableRef = ref(null);
// 表单数据
const { form: where, resetFields } = useFormData({
  id: 1,
  username: '',
  sex: undefined
});
const datasource = ({ page, limit, where, orders }) =>{
  return GetSendLogGroup({...where,...orders,page, limit})
}
/* 搜索 */
const reload = () => {
  tableRef?.value?.reload({ page: 1, where: where });
};
const columns = ref([
  {
    title: '任务名称',
    dataIndex: 'send_name',
    customRender: ({ text }) =>  (!text || text.length===0) ? '任务名称未设置' : text
  },
  {
    title: '发送组',
    dataIndex: 'group_name',
    customRender: ({ text }) =>  (!text || text.length===0) ? '发送组已被删' : text
  },
  {
    title: '接收组',
    dataIndex: 'receive_group_name',
    customRender: ({ text }) =>  (!text || text.length===0) ? '接收组已被删除' : text
  },
  {
    title: '短信模板组',
    dataIndex: 'msg_model_name',
    customRender: ({ text }) =>  (!text || text.length===0) ? '短信模板组已被删除' : text
  },
  {
    title: '添加时间',
    dataIndex: 'add_time',
    customRender: ({ text }) => {
      return toDateString(parseInt(text));
    }
  },
  {
    title: t('list.basic.table.action'),
    key: 'action',
    width: 50,
    align: 'center',
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