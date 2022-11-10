<template>
  <div class="ele-body">
    <a-card :bordered="false">
      <ele-pro-table
          ref="tableRef"
          :columns="columns"
          v-model:selection="selection"
          :datasource="datasource"
          :scroll="{ x: 1000 }"
          row-key="id"
      >
        <template #toolbar>
          <a-space>
            <a-button type="primary" class="ele-btn-icon" @click="execDistributeIp()">
              <template #icon>
                <plus-outlined />
              </template>
              <span>分配Ip</span>
            </a-button>
            <a-button type="primary" class="ele-btn-icon" @click="execLoginReset()">
              <template #icon>
                <plus-outlined />
              </template>
              <span>登录重置</span>
            </a-button>
            <a-button type="primary" class="ele-btn-icon" @click="openImport">
              <template #icon>
                <upload-outlined />
              </template>
              <span>导入账号</span>
            </a-button>
          </a-space>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'status'">
            <a-tag v-if="record.status===1" color="red">未登录</a-tag>
            <a-tag v-else-if="record.status===2" color="green">已登录</a-tag>
            <a-tag v-else-if="record.status===3 && record.login_message==='1'" color="red">用户名错误</a-tag>
            <a-tag v-else-if="record.status===3 && record.login_message==='2'" color="red">密码错误</a-tag>
            <a-tag v-else-if="record.status===3 && record.login_message==='3'" color="red">IP异常</a-tag>
            <a-tag v-else-if="record.status===3 && record.login_message==='4'" color="red">账号被封</a-tag>
            <a-tag v-else-if="record.status===3 && record.login_message==='5'" color="red">接码</a-tag>
            <a-tag v-else-if="record.status===3 && record.login_message==='7'" color="red">未知错误</a-tag>
            <a-tag v-else-if="record.status===3" color="red">账号失效</a-tag>
            <a-tag v-else-if="record.status===4" color="red">未分配Ip</a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <a-space>
              <a @click="openEdit(record)">编辑</a>
              <a-divider type="vertical" />
              <a-popconfirm placement="topRight" title="确定要删除此菜单吗？" @confirm="remove(record)">
                <a class="ele-text-danger">删除</a>
              </a-popconfirm>
            </a-space>
          </template>
        </template>
      </ele-pro-table>
    </a-card>
    <gv-import v-model:visible="showImport" :groupId="groupId" @done="reload" />
    <gv-add v-model:visible="showEdit" :data="current" :isAdmin="adminRef" @done="reload" />
  </div>
</template>
<script setup>
import { ref, watch, unref } from 'vue';
import { useRouter } from 'vue-router';
import {toDateString} from "ele-admin-pro";
import { message } from 'ant-design-vue/es';
import useFormData from "@/utils/use-form-data";
import GvAdd from "@/views/gv/accout/gv-add.vue";
import GvImport from "@/views/gv/accout/gv-import.vue";
import {UploadOutlined,PlusOutlined,} from '@ant-design/icons-vue';
import {getGvAccountList,GvLoginReset,DistributeIp} from "@/api/admin/gv";

const groupId = ref(0);
// 是否显示编辑弹窗
const showEdit = ref(false);
// 当前编辑数据
const current = ref(null);
// 表格选中数据
const selection = ref([]);
// 是否显示用户导入弹窗
const showImport = ref(false);
// 表格实例
const tableRef = ref(null);
const adminRef = ref(false);
const ROUTE_PATH = '/gv/accout';
const { currentRoute } = useRouter();
/* 打开编辑弹窗 */
const openImport = () => {
  showImport.value = true;
};
/* 搜索 */
const reload = (where) => {
  selection.value = [];
  tableRef?.value?.reload({ page: 1, where });
};
const openEdit = (row) =>{
  current.value = row ?? null;
  showEdit.value = true;
  adminRef.value = row.isAdmin
}
// 表格数据源
const datasource = ({ page, limit, where, orders }) => {
  return getGvAccountList({ ...where, ...orders, page, limit,id:groupId.value });
};
// 表单数据
const { form: where, resetFields } = useFormData({
  id: 1,
  username: '',
  sex: undefined
});
const columns = ref([
  {
    title: '账号',
    dataIndex: 'account',
  },
  {
    title: '号码',
    dataIndex: 'num',
  },
  {
    title: '代理Ip',
    dataIndex: 'proxy',
  },
  {
    title: '导入时间',
    dataIndex: 'add_time',
    customRender: ({ text }) => toDateString(text)
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
  },
  {
    title: '操作',
    key: 'action',
    width: 200,
    align: 'center'
  }
])
const execDistributeIp = ()=>{
  const data = selection.value.map((d) => d.id)
  if(data.length===0) message.error('请选择要分配ip的账号')
  if(data.length>0){
    DistributeIp({ids:data}).then((msg)=>{
      message.success(msg)
      reload()
    }).catch((e)=>{
      message.error(e.message)
    })
  }
}

const execLoginReset=()=>{
  const data = selection.value.map((d) => d.id)
  if(data.length===0) message.error('请选择要重置登录的账号')
  if(data.length>0){
    GvLoginReset({ids:data}).then((msg)=>{
      message.success(msg)
      reload()
    }).catch((e)=>{
      message.error(e.message)
    })
  }
}

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