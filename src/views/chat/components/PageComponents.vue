<template>
  <div class="body">
    
    <a-card class="chat-card" bordered>
      <template #title>
        <h3 class="chat-title">AI 问答</h3>
      </template>
      <div class="chat-container">
        <div class="chat-messages" ref="chatContainer">
          <div
            v-for="(item, i) in msgList"
            :key="i"
            :class="item.type == '1' ? 'right-msg' : 'left-msg'"
          >
            <a-avatar
              v-if="item.type == '0'"
              src="https://joesch.moe/api/v1/random?key=1"
            />
            <div class="msg">{{ item.content }}</div>
            <a-avatar
              v-if="item.type == '1'"
              src="https://joesch.moe/api/v1/random?key=2"
            />
          </div>
        </div>
        <div class="chat-input-container">
          <a-textarea
            v-model="value"
            @pressEnter="onSend"
            placeholder="请输入您想提问的内容"
            class="chat-input"
          />
          <a-button type="primary" shape="circle" @click="onSend" style="height: 40px;width:40px ;margin: 0 auto;">
            发送
          </a-button>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { color } from "echarts";
import { ref, reactive, onMounted } from "vue";
//   import { AIQandA, getQandA } from "../api/AIApi";
const value = ref("");
const msgList = reactive([
  {
    type: "0",
    content: "Hello! How can I assist you today?",
  },
]);

onMounted(() => {
  getMes();
});

const scrollToNew = async () => {
  // await nextTick();
  // const chatContainer = document.querySelector(".chat-messages");
  // if (chatContainer) {
  //   chatContainer.scrollTop = chatContainer.scrollHeight;
  // }
};

const userQuestion = (question: string) => {
  var userMsg = {
    content: question,
    type: "1",
  };
  msgList.push(userMsg);
};

const AIReplay = (replay: string) => {
  var autoReplyMsg = {
    content: replay,
    type: "0",
  };
  msgList.push(autoReplyMsg);
};

const getMes = () => {
  // getQandA({}).then((res) => {
  //   console.log(res);
  //   if (res.data.status == 200) {
  //     // 获取最近五条问答信息
  //     for (var i = 0; i < 5; i++) {
  //       userQuestion(res.data.data[i].inputMessage);
  //       AIReplay(res.data.data[i].aiResult);
  //     }
  //     scrollToNew();
  //   }
  // });
};

const onSend = () => {
  if (value.value.trim()) {
    userQuestion(value.value);
    AIReplay(`You asked: ${value.value}`); // Simulating AI response
    value.value = "";
    scrollToNew();
  }
  // 发送用户输入的消息
  // AIQandA({
  //   inputMessage: value.value,
  // }).then((res) => {
  //   console.log(res);
  //   if (res.data.status == 200) {
  //     console.log(6666);
  //     AIReplay(res.data.data);
  //     scrollToNew();
  //   }
  // });
  // userQuestion(value.value);
  // scrollToNew();
  // value.value = "";
};
</script>

<style scoped lang="scss">
.body {
  background-color: rgb(244, 245, 248);
  height: 100vh;
  display: flex;
  align-items: center;
 
  justify-content: center;
}

.chat-card {
  width: 100vw;
  height: 100vh;
}

.chat-title {
  text-align: center;
  font-weight: bold;
  margin: 0;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 700px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  
  margin-bottom: 10px;
}

.left-msg,
.right-msg {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.left-msg .msg {
  background-color: #f5f5f5;
  margin-left: 10px;
}

.right-msg {
  flex-direction: row-reverse;
}

.right-msg .msg {
  background-color: #1890ff;
  color: white;
  margin-right: 10px;
}

.msg {
  padding: 10px 20px;
  border-radius: 20px;
  max-width: 70%;
}

.chat-input-container {
  display: flex;
}

.chat-input {
  flex: 1;
  margin-right: 10px;
  height: 100px;
}
</style>
