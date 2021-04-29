# pubilc-compenent-vue

## 运行
```
npm install
npm run serve
```
## 发布
```
npm run lib-test（测试环境）
or npm run lib-prod（正式环境）

npm version patch（打补丁）
npm version minor（小版本）
npm version major（大版本）
npm publish
```
## 使用

### 1、执行命令
```
npm install -S demo-zzlu
```

### 2、在main.js中添加，全局注册
```
import demoZzlu from 'demo-zzlu';
import 'demo-zzlu/lib/demo-zzlu.css';

Vue.use(demoZzlu);
```

### 3、在组建中引用
```
<demo />
```
