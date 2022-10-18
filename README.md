## Vue-loading

#### 这是一个 vue 的全局 loading 组件，使用方法如下
```typescript
  import Loading from 'vue-loading'

  // 在 main.js 将 loading 挂载到全局的原型上
  Vue.prototype.$Loading = Loading
```


#### 暴露了两个方法
```typescript

  <button @click="ook">测试</button>

  okk(){
    this.$Loading(); //设置了一定的超时时间，超过时间会自动关闭
  }

  // 加载完成调用 close
  this.$Loading.close();

```

#### 注意点
  `仅支持 vue2.x 版本，且项目中使用了element组件库需要注意与组件库loading的命名重复问题`