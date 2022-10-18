import Vue from "vue";

import loading from "./components/loading.vue";

let LoadingConstructor = Vue.extend(loading);

let instance;

let closeStatus = false;

let timer = null;

// 设置自动关闭时长
const TIME = 8 * 1000;

const Loading = () => {
  closeStatus = false;

  if (instance) {
    removeChild();
  }

  instance = new LoadingConstructor();

  instance.$mount();

  document.body.appendChild(instance.$el);

  // 自动关闭
  autoClose();

  return instance;
};

Loading.close = function () {
  closeStatus = true;

  removeChild();
};

function removeChild () {
  if (instance) {
    instance.$el.parentNode.removeChild(instance.$el);
    instance = null;
  }
}

// 未关闭则自动关闭
function autoClose () {
  clearTimeout(timer);

  timer = setTimeout(() => {
    if (!closeStatus) {
      Loading.close();
    }
  }, TIME);
}

export default Loading;
