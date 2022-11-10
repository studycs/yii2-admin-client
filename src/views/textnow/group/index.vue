<template>
  <div class="ele-body">
    <a-card :bordered="false">
      <a-form :label-col="{ md: { span: 1 }, sm: { span: 24 } }" :wrapper-col="{ md: { span: 23 }, sm: { span: 24 } }">
        <a-row>
          <a-col :lg="4" :md="12" :sm="24" :xs="24">
            <a-form-item>
              <a-input v-model:value.trim="where.username" placeholder="分组名称" allow-clear/>
            </a-form-item>
          </a-col>
          <a-col :lg="4" :md="12" :sm="24" :xs="24">
            <a-form-item>
              <a-select v-model:value="where.status" placeholder="状态" allow-clear>
                <a-select-option value="1">未登录</a-select-option>
                <a-select-option value="2">已登录</a-select-option>
                <a-select-option value="3">账号失效</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :lg="4" :md="24" :sm="24" :xs="24">
            <a-form-item :wrapper-col="{ span: 24 }">
              <em></em>
              <a-space>
                <a-button type="primary" @click="reload">搜索</a-button>
                <a-button @click="reset">重置</a-button>
              </a-space>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <ele-pro-table ref="tableRef" row-key="group_id" :columns="columns" :scroll="{ x: 1000 }" v-model:selection="selection" :datasource="datasource">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-space>
              <router-link :to="'/textnow/list?id='+record.group_id">查看</router-link>
              <a-divider type="vertical" />
              <a @click.stop="openEdit(record)">编辑</a>
              <a-divider type="vertical" />
              <a class="ele-text-danger" @click.stop="remove(record)">删除</a>
            </a-space>
          </template>
        </template>
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
      </ele-pro-table>
    </a-card>
    <textnow-add v-model:visible="showEdit" :data="current" @done="reload" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import {useI18n} from "vue-i18n";
import {message} from "ant-design-vue/es";
import useFormData from '@/utils/use-form-data';
import { messageLoading, toDateString } from 'ele-admin-pro';
import TextnowAdd from "@/views/textnow/group/textnow-add.vue";
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { GetTextnowGroups,DelTextnowGroup } from "@/api/admin/textnow";
const { t } = useI18n();
// 表格选中数据
const selection = ref([]);
// 是否显示编辑弹窗
const showEdit = ref(false);
// 当前编辑数据
const current = ref(null);
// 表格实例
const tableRef = ref(null);
// 表格列配置
const columns = ref([
  {
    title: '分组名称',
    dataIndex: 'group_name',
  },
  {
    title: '所属用户',
    dataIndex: 'user_login',
    customRender: ({ text }) => text ?? '(未设置)'
  },
  {
    title: '登录成功',
    dataIndex: 'loginOk',
  },
  {
    title: '账号数量',
    dataIndex: 'loginFull',
  },
  {
    title: '创建时间',
    dataIndex: 'add_time',
    ellipsis: true,
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
]);
// 表格数据源
const datasource = ({ page, limit, where, orders }) => {
  return GetTextnowGroups({ ...where, ...orders, page, limit });
};
/* 打开编辑弹窗 */
const openEdit = (row) => {
  current.value = row ?? null;
  showEdit.value = true;
};
// 表单数据
const { form: where, resetFields } = useFormData({
  username: '',
  status: undefined
});
const remove = (row) => {
  DelTextnowGroup({ids:[row.group_id]}).then((msg)=>{
    message.success(msg);
    reload()
  }).catch((e)=>{
    message.error(e.message)
  })
};
const removeBatch = () =>{
  const data = selection.value.map((d) => d.group_id)
  if(data.length===0){
    message.error('请选择要删除的分组')
  }else{
    DelTextnowGroup({ids:data}).then((msg)=>{
      message.success(msg);
      reload()
    }).catch((e)=>{
      message.error(e.message)
    })
  }
}
/* 搜索 */
const reload = () => {
  tableRef?.value?.reload({ page: 1, where: where });
};
/*  重置 */
const reset = () => {
  resetFields();
  reload();
};
</script>
<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>