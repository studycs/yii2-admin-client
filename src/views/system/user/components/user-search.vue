<!-- 搜索表单 -->
<template>
  <a-form
    :label-col="{ md: 1, sm: 24 }"
    :wrapper-col="{ md: 23, sm: 24 }"
  >
    <a-row>
      <a-col :lg="4" :md="12" :sm="24" :xs="24">
        <a-form-item>
          <a-input v-model:value.trim="form.username" placeholder="用户账号" allow-clear/>
        </a-form-item>
      </a-col>
      <a-col :lg="4" :md="12" :sm="24" :xs="24">
        <a-form-item>
          <a-input v-model:value.trim="form.nickname" placeholder="用户昵称" allow-clear/>
        </a-form-item>
      </a-col>
      <a-col :lg="4" :md="12" :sm="24" :xs="24">
        <a-form-item class="ele-text-right">
          <a-space>
            <em></em>
            <a-button type="primary" @click="search">查询</a-button>
            <a-button @click="reset">重置</a-button>
          </a-space>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script setup>
  import useFormData from '@/utils/use-form-data';

  const props = defineProps({
    // 默认搜索条件
    where: Object
  });

  const emit = defineEmits(['search']);

  // 表单数据
  const { form, resetFields } = useFormData({
    username: '',
    nickname: '',
    sex: undefined,
    ...props.form
  });

  /* 搜索 */
  const search = () => {
    emit('search', form);
  };

  /*  重置 */
  const reset = () => {
    resetFields();
    search();
  };
</script>
