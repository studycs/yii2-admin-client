<!-- 用户编辑弹窗 -->
<template>
  <ele-modal
    :width="600"
    :visible="visible"
    :confirm-loading="loading"
    :title="isUpdate ? '修改用户' : '新建用户'"
    :body-style="{ paddingBottom: '8px' }"
    @update:visible="updateVisible"
    @ok="save"
  >
    <a-form
        ref="formRef"
        :model="form"
        :rules="rules"
        :label-col="{ md: 4, sm: 4, xs: 24 }"
        :wrapper-col="{ md: 20, sm: 20, xs: 24 }"
    >
      <a-row :gutter="16">
        <a-col :md="24" :sm="24" :xs="24">
          <a-form-item label="用户账号" name="username">
            <a-input allow-clear :maxlength="20" placeholder="请输入用户账号" v-model:value="form.username"/>
          </a-form-item>
          <a-form-item label="用户昵称" name="nickname">
            <a-input allow-clear :maxlength="20" placeholder="请输入用户昵称" v-model:value="form.nickname"/>
          </a-form-item>
          <a-form-item v-if="!isUpdate" label="登录密码" name="password">
            <a-input-password :maxlength="20" v-model:value="form.password" placeholder="请输入登录密码"/>
          </a-form-item>
          <a-form-item label="用户角色" name="roles">
            <role-select v-model:value="form.roles"/>
          </a-form-item>
          <a-form-item label="用户邮箱" name="email">
            <a-input allow-clear :maxlength="100" placeholder="请输入邮箱" v-model:value="form.email"/>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </ele-modal>
</template>

<script setup>
  import { ref, reactive, watch } from 'vue';
  import { message } from 'ant-design-vue/es';
  import { emailReg, phoneReg } from 'ele-admin-pro/es';
  import useFormData from '@/utils/use-form-data';
  import RoleSelect from './role-select.vue';
  import { addUser, updateUser, checkExistence } from '@/api/system/user';

  const emit = defineEmits(['done', 'update:visible']);

  const props = defineProps({
    // 弹窗是否打开
    visible: Boolean,
    // 修改回显的数据
    data: Object
  });

  //
  const formRef = ref(null);

  // 是否是修改
  const isUpdate = ref(false);

  // 提交状态
  const loading = ref(false);

  // 表单数据
  const { form, resetFields, assignFields } = useFormData({
    userId: undefined,
    username: '',
    nickname: '',
    sex: undefined,
    roles: [],
    email: '',
    phone: '',
    password: '',
    introduction: '',
    birthday: ''
  });

  // 表单验证规则
  const rules = reactive({
    username: [{
        required: true,
        type: 'string',
        validator: (_rule, value) => {
          return new Promise((resolve, reject) => {
            if (!value) return reject('请输入用户账号');
            checkExistence('username', value, props.data?.userId).then(() => {
                reject('账号已经存在');
            }).catch(() =>resolve());
          });
        }, trigger: 'blur'
    }],
    nickname: [{
        required: true,
        message: '请输入用户名',
        type: 'string',
        trigger: 'blur'
    }],
    roles: [
      {
        required: true,
        message: '请选择角色',
        type: 'array',
        trigger: 'blur'
      }
    ],
    email: [{
        pattern: emailReg,
        message: '邮箱格式不正确',
        type: 'string',
        trigger: 'blur'
    }],
    password: [{
        required: true,
        type: 'string',
        validator: async (_rule, value) => {
          if (isUpdate.value || /^[\S]{5,18}$/.test(value)) return Promise.resolve();
          return Promise.reject('密码必须为5-18位非空白字符');
        },
        trigger: 'blur'
    }]
  });

  /* 保存编辑 */
  const save = () => {
    if (!formRef.value) return;
    formRef.value.validate().then(() => {
        loading.value = true;
        const saveOrUpdate = isUpdate.value ? updateUser : addUser;
        saveOrUpdate(form).then((msg) => {
            loading.value = false;
            message.success(msg);
            updateVisible(false);
            emit('done');
        }).catch((e) => {
            loading.value = false;
            message.error(e.message);
        });
    }).catch(() => {});
  };

  /* 更新visible */
  const updateVisible = (value) => {
    emit('update:visible', value);
  };

  watch(() => props.visible,(visible) => {
      if (visible) {
        if (props.data) {
          assignFields({...props.data, password: ''});
          isUpdate.value = true;
        } else {
          isUpdate.value = false;
        }
      } else {
        resetFields();
        formRef.value?.clearValidate();
      }
    }
  );
</script>
