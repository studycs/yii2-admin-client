<template>
  <div class="ele-body">
    <a-card :bordered="false">
      <ele-pro-table ref="tableRef" row-key="id" :columns="columns" :datasource="datasource" v-model:selection="selection">
        <template #toolbar>
          <a-space>
            <a-button type="primary" class="ele-btn-icon" @click="openEdit(null)">
              <template #icon><plus-outlined /></template>
              <span>新建分组</span>
            </a-button>
            <a-button type="primary" class="ele-btn-icon" @click="openSend(null)">
              <template #icon><plus-outlined /></template>
              <span>发送消息</span>
            </a-button>
            <a-button danger type="primary" class="ele-btn-icon" @click="removeBatch">
              <template #icon>
                <delete-outlined />
              </template>
              <span>删除分组</span>
            </a-button>
          </a-space>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-space>
              <router-link :to="'/template/list?id='+record.id">查看</router-link>
              <a-divider type="vertical" />
              <a @click.stop="openEdit(record)">编辑</a>
              <a-divider type="vertical" />
              <a class="ele-text-danger" @click.stop="remove(record)">删除</a>
            </a-space>
          </template>
        </template>
      </ele-pro-table>
    </a-card>
    <template-add v-model:visible="showEdit" :data="current" @done="reload" />
    <template-send v-model:visible="showSend" :data="messages" @done="reload" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import {useI18n} from "vue-i18n";
import {message} from "ant-design-vue/es";
import {toDateString} from "ele-admin-pro";
import useFormData from "@/utils/use-form-data";
import TemplateAdd from "@/views/template/group/template-add.vue";
import TemplateSend from "@/views/template/group/template-send.vue";
import {PlusOutlined, DeleteOutlined} from '@ant-design/icons-vue';
import { GetTemplateGroups,delMsgGroup } from '@/api/admin/template'
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
  return GetTemplateGroups({ ...where, ...orders, page, limit })
}
const remove = (row) =>{
  delMsgGroup({ids:[row.id]}).then((msg)=>{
    message.success(msg)
    reload()
  }).catch((e)=>{
    message.error(e.message)
  })
}
const removeBatch = () =>{
  const data = selection.value.map((d) => d.id)
  if(data.length===0) message.error('请选择要删除的分组')
  delMsgGroup({ids:data}).then((msg)=>{
    message.success(msg)
    reload()
  }).catch((e)=>{
    message.error(e.message)
  })
}
/* 搜索 */
const reload = () => {
  tableRef?.value?.reload({ page: 1, where: where });
};
/* 打开编辑弹窗 */
const openEdit = (row) => {
  current.value = row ?? null;
  showEdit.value = true;
};
/* 打开消息发送编辑弹窗 */
const openSend = (row) =>{
  messages.value = row ?? null
  showSend.value = true;
}
const columns = ref([
  {
    title: '分组名称',
    dataIndex: 'name',
  },
  {
    title: '模板数量',
    dataIndex: 'count',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '创建时间',
    dataIndex: 'add_time',
    customRender: ({ text }) => toDateString(text)
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