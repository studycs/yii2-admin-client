<template>
  <div class="ele-body">
    <a-card :bordered="false">
      <ele-pro-table
          ref="tableRef"
          :columns="columns"
          row-key="msg_model_id"
          :datasource="datasource"
          v-model:selection="selection"
          :scroll="{ x: 1000 }"
      >
        <template #toolbar>
          <a-space>
            <a-button type="primary" class="ele-btn-icon" @click="openEdit(null)">
              <template #icon><plus-outlined /></template>
              <span>新建</span>
            </a-button>
            <a-button danger type="primary" class="ele-btn-icon" @click="removeBatch">
              <template #icon>
                <delete-outlined />
              </template>
              <span>删除</span>
            </a-button>
          </a-space>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-space>
              <a @click="openEdit(record)">编辑</a>
              <a-divider type="vertical" />
              <a class="ele-text-danger" @click="remove(record)">删除</a>
            </a-space>
          </template>
        </template>
      </ele-pro-table>
    </a-card>
    <template-create v-model:visible="showEdit" :data="current" @done="reload" />
  </div>
</template>

<script setup>
import {ref, unref, watch} from "vue";
import { useRouter } from 'vue-router';
const { currentRoute } = useRouter();
import {message} from "ant-design-vue/es";
import {toDateString} from "ele-admin-pro";
import useFormData from "@/utils/use-form-data";
import { DelMessageItem } from '@/api/admin/template'
import {PlusOutlined, DeleteOutlined} from '@ant-design/icons-vue';
import { GetMessageList } from '@/api/admin/template'
import TemplateCreate from "@/views/template/list/template-create.vue";
const { query } = unref(currentRoute);

const ROUTE_PATH = '/template/list';
const groupId = ref(0);
// 是否显示编辑弹窗
const showEdit = ref(false);
// 当前编辑数据
const current = ref(null);
// 表格实例
const tableRef = ref(null);
// 表格选中数据
const selection = ref([]);
// 表格数据源
const datasource = ({ page, limit, where, orders }) =>{
  return GetMessageList({ ...where, ...orders, page, limit,id:query.id })
}
/* 搜索 */
const reload = () => {
  tableRef?.value?.reload({ page: 1, where: where });
};
// 表单数据
const { form: where, resetFields } = useFormData({
  id: 1,
  username: '',
  sex: undefined
});

const remove = (row)=>{
  DelMessageItem({ids:[row.msg_model_id]}).then((msg)=>{
    message.success(msg)
    reload()
  }).catch((e)=>{
    message.error(e.message)
  })
}

const removeBatch = ()=>{
  const data = selection.value.map((d) => d.msg_model_id)
  if(data.length===0) message.error('请选择要删除的列')
  DelMessageItem({ids:data}).then((msg)=>{
    message.success(msg)
    reload()
  }).catch((e)=>{
    message.error(e.message)
  })
}

const openEdit = (row) =>{
  current.value = row ?? null;
  showEdit.value = true;
}

const columns = ref([
  {
    title: '模板名称',
    dataIndex: 'msg_model_name',
  },
  {
    title: '消息内容',
    dataIndex: 'msg',
  },
  {
    title: '添加时间',
    dataIndex: 'add_time',
    customRender: ({ text }) => toDateString(parseInt(text))
  },
  {
    title: '操作',
    key: 'action',
    width: 200,
    align: 'center'
  }
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