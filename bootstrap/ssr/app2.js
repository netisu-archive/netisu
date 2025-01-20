import axios from "axios";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import Alpine from "alpinejs";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.withCredentials = true;
window.axios.defaults.crossDomain = true;
window.axios.defaults.withXSRFToken = true;
window.Pusher = Pusher;
new Echo({
  broadcaster: "reverb",
  key: "7yzhah8m1ifwfknznbjy",
  wsHost: "localhost",
  wsPort: "8080",
  wssPort: "8080",
  authorizer: (channel, options) => {
    return {
      authorize: (socketId, callback) => {
        axios.post("/api/broadcasting/auth", {
          socket_id: socketId,
          channel_name: channel.name
        }).then((response) => {
          callback(false, response.data);
        }).catch((error) => {
          callback(true, error);
        });
      }
    };
  },
  forceTLS: true,
  enabledTransports: ["ws", "wss"]
});
window.Alpine = Alpine;
Alpine.start();
