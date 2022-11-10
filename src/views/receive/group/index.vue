<template>
  <div class="ele-body">
    <a-card :bordered="false">
      <ele-pro-table ref="tableRef" row-key="receive_group_id" v-model:selection="selection" :columns="columns" :datasource="datasource" :scroll="{ x: 1000 }">
        <template #toolbar>
          <a-space>
            <a-button type="primary" class="ele-btn-icon" @click="openEdit(null)">
              <template #icon><plus-outlined /></template>
              <span>新建分组</span>
            </a-button>
            <a-button danger type="primary" class="ele-btn-icon" @click="removeBatch()">
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
              <router-link :to="'/receive/list?id='+record.receive_group_id">查看</router-link>
              <a-divider type="vertical" />
              <a class="ele-text-danger" @click.stop="remove(record)">删除</a>
            </a-space>
          </template>
        </template>
      </ele-pro-table>
    </a-card>
    <add-receive v-model:visible="showEdit" :data="current" @done="reload" />
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import {toDateString} from "ele-admin-pro";
import { message } from 'ant-design-vue/es';
import useFormData from "@/utils/use-form-data";
import AddReceive from "@/views/receive/group/add-receive.vue";
import {PlusOutlined, DeleteOutlined} from '@ant-design/icons-vue';
import {getReceiveGroups,DelReceiveGroup} from '@/api/admin/receive'
const { t } = useI18n();
// 是否显示编辑弹窗
const showEdit = ref(false);
// 当前编辑数据
const current = ref(null);
// 表格选中数据
const selection = ref([]);
// 表格实例
const tableRef = ref(null);
const datasource = ({ page, limit, where, orders }) =>{
  return getReceiveGroups({...where,...orders,page, limit})
}
// 表单数据
const { form: where, resetFields } = useFormData({
  id: 1,
  username: '',
  sex: undefined
});
/* 搜索 */
const reload = () => {
  tableRef?.value?.reload({ page: 1, where: where });
};
const remove = (row) =>{
  DelReceiveGroup({ids:[row.receive_group_id]}).then((msg)=>{
    message.success(msg)
    reload()
  }).catch((e)=>{
    message.error(e.message)
  })
}
const removeBatch = () =>{
  const data = selection.value.map((d) => d.receive_group_id)
  if(data.length===0) message.error('请选择要删除的分组')
  if(data.length>0){
    DelReceiveGroup({ids:data}).then((msg)=>{
      message.success(msg)
      reload()
    }).catch((e)=>message.error(e.message))
  }
}
/* 打开编辑弹窗 */
const openEdit = (row) => {
  current.value = row ?? null;
  showEdit.value = true;
};
const columns = ref([
  {
    title: '分组名称',
    dataIndex: 'receive_group_name',
  },
  {
    title: '添加时间',
    dataIndex: 'add_time',
    customRender: ({ text }) => toDateString(text)
  },
  {
    title: t('list.basic.table.action'),
    key: 'action',
    width: 170,
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