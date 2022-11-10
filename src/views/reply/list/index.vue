<template>
  <div class="ele-body">
    <a-card :bordered="false" :body-style="{ padding: '0px' }">
      <div class="ele-cell ele-cell-align-top ele-user-message">
        <div class="message-menu-wrap">
          <a-menu :selected-keys="active" :mode="mode">
            <a-menu-item key="read">
              <router-link :to="'/reply/list?type=read&id='+query.id">
                <a-badge v-if="unReadNotice" :count="unReadNotice" />
                <span>已读消息</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="unread">
              <router-link :to="'/reply/list?type=unread&id='+query.id">
                <a-badge v-if="unReadLetter" :count="unReadLetter" />
                <span>未读消息</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="full">
              <router-link :to="'/reply/list?type=full&id='+query.id">
                <a-badge v-if="unReadLetter" :count="unReadLetter" />
                <span>全部消息</span>
              </router-link>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="ele-cell-content" style="overflow-x: hidden">
          <transition v-if="active.includes('read')" name="slide-right" mode="out-in">
            <message-read />
          </transition>
          <transition v-if="active.includes('unread')" name="slide-right" mode="out-in">
            <message-unread />
          </transition>
          <transition v-if="active.includes('full')" name="slide-right" mode="out-in">
            <message-full />
          </transition>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import {computed, ref, unref, watch} from "vue";
import {useThemeStore} from "@/store/modules/theme";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";
import {toDateString} from "ele-admin-pro";
import MessageRead from "@/views/reply/list/message-read.vue";
import MessageUnread from "@/views/reply/list/message-unread.vue";
import MessageFull from "@/views/reply/list/message-full.vue";
const { currentRoute } = useRouter();
const active = ref([]);
const { query } = unref(currentRoute);
const themeStore = useThemeStore();
const { screenWidth } = storeToRefs(themeStore);
// 通知未读数量
const unReadNotice = ref(0);
// 私信未读数量
const unReadLetter = ref(0);
// 导航模式
const mode = computed(() => {
  return screenWidth.value < 768 ? 'horizontal' : 'inline';
});
const columns = ref([
  {
    title: '消息内容',
    dataIndex: 'message',
  },
  {
    title: '创建时间',
    dataIndex: 'add_time',
    customRender: ({ text }) => toDateString(text)
  },
])

watch(currentRoute,(route) =>{
  const { path, query } = unref(route);
  if (path === '/reply/list'){
    const defaultType = 'unread';
    if (!query.type){
      active.value = [defaultType];
    }else if (typeof query.type === 'string'){
      active.value = [query.type || defaultType];
    }else if (query.type.length && query.type[0]){
      active.value = [query.type[0]];
    }else{
      active.value = [defaultType];
    }
  }
},{immediate: true})
</script>
<script>
export default {
  name: "index"
}
</script>

<style lang="less" scoped>
.message-menu-wrap {
  width: 150px;
  display: flex;

  :deep(.ant-menu) {
    padding-top: 16px;

    .ant-badge {
      vertical-align: -2px;
      margin-right: 10px;
    }

    .ant-badge-count {
      height: 16px;
      line-height: 16px;
      border-radius: 8px;
      box-shadow: none;
      min-width: 16px;
      padding: 0 2px;
    }

    .ant-scroll-number-only {
      height: 16px;

      & > p.ant-scroll-number-only-unit {
        height: 16px;
      }
    }
  }

  & + .ele-cell-content {
    padding: 16px 24px;
    overflow: auto;
  }
}

@media screen and (max-width: 768px) {
  .ele-user-message {
    display: block;

    & > .ele-cell-content {
      padding: 16px 16px;
    }
  }

  .message-menu-wrap {
    width: auto;
    display: block;

    :deep(.ant-menu) {
      padding-top: 0;
    }
  }
}
</style>