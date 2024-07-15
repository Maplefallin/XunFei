<template>
  <!-- AI 气泡 -->
  <div class="ai-bubble" @click="showChatWindow">
    <div class="bubble-content">
      <i class="icon-ai"></i> <!-- AI图标 -->
    </div>
  </div>

  <!-- 聊天窗口 -->
  <transition name="fade">
    <div class="chat-window" v-if="isChatWindowVisible">
      <div class="chat-header">
        <h3>AI Chat</h3>
        <button @click="hideChatWindow">X</button>
      </div>
      <div class="chat-body">
        <!-- 聊天内容 -->
        <textarea v-model="message" placeholder="Type your message here..."></textarea>
        <input type="file" @change="handleFileUpload" />
      </div>
      <div class="chat-footer">
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isChatWindowVisible = ref(false);
const message = ref('');

const showChatWindow = () => {
  isChatWindowVisible.value = true;
};

const hideChatWindow = () => {
  isChatWindowVisible.value = false;
};

const handleFileUpload = (event) => {
  // 处理文件上传逻辑
};

const sendMessage = () => {
  // 发送消息逻辑
  message.value = ''; // 清空输入框
};
</script>

<style scoped>
/* CSS样式保持不变 */
</style>