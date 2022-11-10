<template>
  <ele-pro-table
      ref="tableRef"
      row-key="dictDataId"
      :columns="columns"
      :datasource="datasource"
      tool-class="ele-toolbar-form"
      v-model:selection="selection"
      :row-selection="{ columnWidth: 48 }"
      :scroll="{ x: 800 }"
      height="calc(100vh - 290px)"
      tools-theme="default"
      bordered
      cache-key="proSystemDictDataTable"
      class="sys-dict-data-table"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'status'">
        <a-tag v-if="record.status===0" color="red">未读</a-tag>
        <a-tag v-if="record.status===1" color="green">已读</a-tag>
      </template>
      <template v-else-if="column.key === 'action'">
        <a-space>
          <router-link :to="'/reply/list?id='+record.msg_id">回复</router-link>
        </a-space>
      </template>
    </template>
    <template #toolbar>
      <a-row :gutter="16">
        <a-col :xl="6" :lg="8" :md="11" :sm="24" :xs="24">
          <a-form-item>
            <a-input v-model:value.trim="form.number" placeholder="接收号码" allow-clear />
          </a-form-item>
        </a-col>
        <a-col :xl="6" :lg="8" :md="11" :sm="24" :xs="24">
          <a-form-item>
            <a-select v-model:value="form.status" placeholder="请选择" allow-clear >
              <a-select-option value="0">未读</a-select-option>
              <a-select-option value="1">已读</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :xl="5" :lg="16" :md="13" :sm="24" :xs="24">
          <a-form-item>
            <a-button type="primary" class="ele-btn-icon" @click="reload">
              <template #icon> <search-outlined /> </template>
              <span>搜索</span>
            </a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </template>

  </ele-pro-table>
</template>

<script setup>
import { createVNode, ref, watch } from 'vue';
import { message, Modal } from 'ant-design-vue/es';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { messageLoading, toDateString } from 'ele-admin-pro/es';
import {pageDictionaryData} from "@/api/system/dictionary-data";
import {
  PlusOutlined,
  DeleteOutlined,
  SearchOutlined
} from '@ant-design/icons-vue';
import useFormData from '@/utils/use-form-data';
import {getReplyGroup} from '@/api/admin/reply'
const props = defineProps({
  // 字典id
  dictId: Number
});
// 表格实例
const tableRef = ref(null);
// 表格选中数据
const selection = ref([]);
// 当前编辑数据
const current = ref(null);
// 是否显示编辑弹窗
const showEdit = ref(false);
/* 刷新表格 */
const reload = (event) => {
  tableRef?.value?.reload({ page: 1, form });
};
/* 打开编辑弹窗 */
const openEdit = (row) => {
  current.value = row ?? null;
  showEdit.value = true;
};
const { form, resetFields } = useFormData({
  number: '',
  status: '0'
});
const datasource = ({ page, limit, where, orders }) => {
  return getReplyGroup({...where, ...orders, page, limit,...form, id: props.dictId});
};
// 表格列配置
const columns = ref([
  {
    title: '发送号码',
    width: 100,
    align: 'center',
    dataIndex: 'num',
  },
  {
    title: '接收号码',
    width: 120,
    align: 'center',
    dataIndex: 'get_num',
  },
  {
    title: '内容',
    dataIndex: 'message',
  },
  {
    title: '状态',
    key:'status',
    width: 70,
    align: 'center',
    dataIndex: 'status',
  },
  {
    title: '创建时间',
    dataIndex: 'add_time',
    width: 160,
    align: 'center',
    customRender: ({ text }) => toDateString(text)
  },
  {
    title: '操作',
    key: 'action',
    width: 90,
    align: 'center'
  }
]);
watch(() => props.dictId,() => {
  reload();
});
</script>
<script>
export default {
  name: "reply-group"
}
</script>

<style scoped>

</style>