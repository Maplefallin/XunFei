<template>
     <a-result
            status="error"
            title="签到失败"
            sub-title="签到出现问题，请联系老师重置。"
          >
            <div class="desc">
              <p style="font-size: 16px">
                <strong>签到失败的原因：</strong>
              </p>
              <p>
                <close-circle-outlined :style="{ color: 'red' }" />
                网络连接问题
              </p>
              <p>
                <close-circle-outlined :style="{ color: 'red' }" />
               签到超时
              </p>
            </div>
          </a-result>
  </template>
  <script lang="ts" setup>
  import { CloseCircleOutlined } from '@ant-design/icons-vue';
  </script>
  <style scoped>
  .desc p {
    margin-bottom: 1em;
  }
  </style>
  