<template>
  <div class="ele-body">
    <a-card :bordered="false" :body-style="{ padding: '16px' }">
      <ele-split-layout
          width="266px"
          allow-collapse
          :right-style="{ overflow: 'hidden' }"
          :style="{ minHeight: 'calc(100vh - 152px)' }"
      >
        <ele-pro-table
            ref="tableRef"
            row-key="id"
            :columns="columns"
            :datasource="datasource"
            v-model:current="current"
            selection-type="radio"
            :row-selection="{ columnWidth: 32 }"
            :need-page="false"
            :toolkit="[]"
            height="calc(100vh - 290px)"
            tools-theme="default"
            bordered
            :custom-row="customRow"
            class="sys-dict-table"
            @done="done"
        >
        </ele-pro-table>
        <template #content>
          <reply-group v-if="current && current.id" :dict-id="current.id" />
        </template>
      </ele-split-layout>
    </a-card>
  </div>
</template>
<script setup>
import { createVNode, ref } from 'vue';
import { messageLoading } from 'ele-admin-pro/es';
import { message, Modal } from 'ant-design-vue/es';
import { getDictGv } from '@/api/admin/reply'
import ReplyGroup from "@/views/reply/group/reply-group.vue";
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue';
const datasource = () => {
  return getDictGv();
};
const customRow = (record) => {
  return {
    onClick: () => {
      console.log(record)
      current.value = record;
    }
  };
};
const remove = () =>{

}
// 表格实例
const tableRef = ref(null);
const columns = ref([
  {
    title: '发送号码',
    dataIndex: 'num'
  },
  {
    title: '状态',
    dataIndex: 'status'
  }
]);
// 表格选中数据
const current = ref(null);
// 是否显示编辑弹窗
const showEdit = ref(false);
// 编辑回显数据
const editData = ref(null);
/* 表格渲染完成回调 */
const done = (res) => {
  //console.log(res.data[0])
  current.value = res.data[0]
  if (res.data?.length) current.value = res.data[0];
};
/* 刷新表格 */
const reload = () => {
  tableRef?.value?.reload();
};
/* 打开编辑弹窗 */
const openEdit = (row) => {
  editData.value = row ?? null;
  showEdit.value = true;
};
</script>
<script>
export default {
  name: "index"
}
</script>

<style lang="less" scoped>
.sys-dict-table {
  :deep(.ant-table-body) {
    overflow: auto !important;
    overflow: overlay !important;
  }

  :deep(.ant-table-row) {
    cursor: pointer;
  }
}
</style>