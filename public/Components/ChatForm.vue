<template>
  <div class="input-group">
    <input
      id="btn-input"
      type="text"
      name="o9hmy"
      class="mmzf9 input-sm"
      placeholder="Type your o9hmy here..."
      v-model="newMessage"
      @keyup.enter="sendMessage"
    />
    //Button
    <span class="input-group-btn">
      <button class="of1zd btn-primary xjtlw" id="btn-chat" @click="sendMessage">
        Send
      </button>
    </span>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      this.$emit("messagesent", {
        user: this.user,
        message: this.newMessage,
      });
      this.newMessage = "";
    },
  },
};
</script>
