

### ✔ 推荐方式（最干净、最稳）

```
npx create-expo-app@latest my-app
```

如果你想全局装（可选）：

```
npm install -g expo-cli
```

但**现在 Expo 官方推荐不再全局安装**。

----------------------------

明白了，我们用中文来解决这个问题。

你遇到的错误信息说明你的系统找不到 **Android SDK** 或者 `adb` 工具，这是运行 Android 项目所必须的。具体问题如下：

------

### **错误原因**

1. **找不到 Android SDK 路径**

   ```
   Failed to resolve the Android SDK path. Default install location not found: C:\Users\27189\AppData\Local\Android\Sdk
   Use ANDROID_HOME to set the Android SDK location.
   ```

   - 系统默认在 `C:\Users\27189\AppData\Local\Android\Sdk` 查找 SDK，但这个路径不存在。
   - 需要手动设置 `ANDROID_HOME` 环境变量，指向你实际安装的 Android SDK 路径。

2. **找不到 adb**

   ```
   Error: 'adb' 不是内部或外部命令，也不是可运行的程序或批处理文件
   ```

   - 说明 `adb.exe` 不在系统的 PATH 中。
   - `adb` 在 SDK 的 `platform-tools` 目录下，需要把这个路径加入到系统环境变量 PATH。

------

### **解决步骤**

#### 1️⃣ 安装 Android SDK

- 如果你没有安装 Android SDK，可以通过以下方式：
  1. 下载 [Android Studio](https://developer.android.com/studio) 并安装。
  2. 在安装过程中选择 **Android SDK**，记住安装路径（例如：`C:\Users\27189\AppData\Local\Android\Sdk`）。
  3. 安装完成后，SDK 里会有 `platform-tools` 文件夹，其中包含 `adb.exe`。

#### 2️⃣ 设置环境变量

1. 打开 **系统属性 → 高级 → 环境变量**

2. 添加新的系统变量：

   - 名称：`ANDROID_HOME`

   - 值：你的 SDK 路径，例如：

     ```
     C:\Users\27189\AppData\Local\Android\Sdk
     ```

3. 编辑系统的 **Path** 变量，添加：

   ```
   %ANDROID_HOME%\platform-tools
   %ANDROID_HOME%\tools
   ```

   （注意：最新版本 SDK 中 `tools` 可能是空的，主要确保 `platform-tools` 在 PATH 中）

4. 打开新的命令行窗口，测试是否成功：

   ```cmd
   adb version
   ```

   如果输出版本号，说明配置成功。

#### 3️⃣ 重启开发工具

- 配置好环境变量后，重启你的开发工具（比如 VS Code 或命令行），再尝试运行项目。

------

```
C:\Users\27189\AppData\Local\Android\Sdk
```

-----------------------------------------

```
Android 模拟器默认无法直接访问局域网 IP，例如：

10.10.9.101:8082

✔ 解决方法：改用 “隧道模式（tunnel）”

在终端运行：

npx expo start --tunnel


然后再打开你的安卓模拟器。

Tunnel 模式可以绕过局域网配置问题，是最稳妥的方式。
```

### 📌 **组件对照表**

| React Web  | React Native                 |
| ---------- | ---------------------------- |
| div        | View                         |
| span / p   | Text                         |
| img        | Image                        |
| button     | Pressable / TouchableOpacity |
| input      | TextInput                    |
| scrollView | ScrollView                   |
| ul / li    | FlatList / SectionList       |

# 🚀 三、样式（你需要学的 RN 重点）

React Native **不支持 CSS**，只有 **Flexbox + StyleSheet**。

```
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={{ fontSize: 20 }}>Hello</Text>
</View>
```

⚠️ 不支持：

- className
- CSS 文件
- id 选择器
- nth-child 等等

支持：

- flex-direction（默认 column）
- margin / padding
- color / backgroundColor
- fontSize

-------------------



### 1️⃣ **导航**

React Native 没有 react-router
 你要用：

```
react-navigation
```

是 RN 最重要的库之一。

### 2️⃣ **UI 组件库（选一个即可）**

| 库                     | 风格     | 推荐程度      |
| ---------------------- | -------- | ------------- |
| **React Native Paper** | Material | ⭐⭐⭐⭐⭐（最稳） |
| NativeBase             | 类 web   | ⭐⭐⭐⭐          |
| React Native Elements  | 简洁     | ⭐⭐⭐           |

------

### 3️⃣ **网络请求**

和 React 一样：

- fetch
- axios

完全相同。

------

### 4️⃣ **动画（可选）**

RN 的动画库：

- **react-native-reanimated（强烈推荐）**
- Animated API

你如果不做复杂动画现在可以不学。

------

# 🚀 五、你可以在 10 分钟内写一个完整的 RN 页面

```
import { View, Text, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Hello React Native</Text>

      <Pressable
        style={{ marginTop: 20, padding: 10, backgroundColor: 'skyblue' }}
        onPress={() => alert("Clicked!")}
      >
        <Text>Click Me</Text>
      </Pressable>
    </View>
  );
}
```

你会发现：
 **完全是 React，只是标签和 CSS 不一样。**



````
好的，我现在为 **有 5 年 React 经验者** 准备一份真正高效、实用、能让你在 **1 天快速掌握 React Native 开发** 的路线图。
你只需要按这个走，就能做出一个完整的 RN 应用。

---

# 🚀 **《React 开发者 → React Native 1 天速成路线图》**

（专为你这种 React 老手设计）

---

# 🧵 **第 0 小时：快速建立 RN 心智模型（10 分钟）**

### React 你已经会了，RN 你只要记住：

| React Web    | React Native                  |
| ------------ | ----------------------------- |
| 渲染 DOM       | 渲染原生组件                        |
| 用 CSS        | 用 Flexbox 对象写法                |
| div/span     | View/Text                     |
| img          | Image                         |
| input        | TextInput                     |
| scroll       | ScrollView/FlatList           |
| react-router | react-navigation              |
| Web API      | Native API（Camera、Vibration…） |

🔥 **核心：你的 React 技能有 90% 可以直接用。你只需要适应“新的组件”和“新的样式系统”即可。**

---

# 🕐 **第 1 小时：掌握 RN 核心组件（极简）**

以下是 RN 最常用组件，看这些就够你写应用：

### 必须掌握（入门 80% 使用频率）

* **View**（div）
* **Text**（文本）
* **Image**
* **Pressable / TouchableOpacity**（按钮）
* **TextInput**（输入框）
* **ScrollView**
* **FlatList**（列表）

理解这些就能写完整页面。

---

## 📌 实战示例（第一小时写出来）：

```js
import { View, Text, TextInput, Pressable, Image } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>登录</Text>

      <TextInput
        placeholder="用户名"
        style={{ borderWidth: 1, marginTop: 20, padding: 10 }}
      />

      <Pressable
        style={{ padding: 10, backgroundColor: 'blue', marginTop: 20 }}
        onPress={() => alert("登录成功！")}
      >
        <Text style={{ color: 'white' }}>登录</Text>
      </Pressable>
    </View>
  );
}
```

---

# 🕑 **第 2 小时：掌握 RN 的样式系统（重点）**

React Native 样式是 **对象形式的 CSS 子集**，重点如下：

### ✔ Flexbox 常用属性

```js
{
  flex: 1,
  flexDirection: 'row', // 默认 column
  justifyContent: 'center',
  alignItems: 'center',
}
```

### ✔ 文本

```js
{
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
}
```

### ✔ 盒模型

```js
{
  padding: 10,
  margin: 10,
  borderRadius: 8,
}
```

### ⚠️ RN 不支持：

* className
* CSS 文件
* id/class 选择器
* nth-child

🔥 RN 样式理解 20 分钟就能全部掌握。

---

# 🕒 **第 3 小时：掌握导航（RN 的核心知识）**

在 React Native 中，router = **react-navigation**

你需要会 2 个 Navigator：

### 1) Stack Navigator（页面跳转）

```js
const Stack = createNativeStackNavigator();

<Stack.Navigator>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Detail" component={Detail} />
</Stack.Navigator>
```

### 2) Bottom Tabs（Tab 页）

```js
const Tab = createBottomTabNavigator();

<Tab.Navigator>
  <Tab.Screen name="Home" component={Home} />
  <Tab.Screen name="Setting" component={Setting} />
</Tab.Navigator>
```

🔥 这比 web router 还简单。

---

# 🕓 **第 4~5 小时：掌握列表（RN 的战斗力来源）**

### ✔ FlatList（RN 最重要的组件之一）

它比 ScrollView 性能好：

```js
<FlatList
  data={list}
  renderItem={({ item }) => (
    <Text style={{ padding: 10 }}>{item.title}</Text>
  )}
/>
```

掌握 FlatList，你就能写出：

* 聊天
* Feed流
* 视频列表
* 新闻列表

---

# 🕔 **第 6 小时：网络请求（你已经会）**

React Native 与 React 完全一致：

```js
const res = await fetch('https://api.com');
const data = await res.json();
```

或：

```js
axios.get("/user");
```

### ⚠️ 注意

请求 localhost 要用：

| 你想访问      | 需要写成             |
| --------- | ---------------- |
| localhost | ❌ 不工作            |
| 10.0.2.2  | ✔ Android 模拟器可访问 |
| your-ip   | ✔ Expo LAN 模式可访问 |

---

# 🕕 **第 7 小时：使用 Expo API（RN 的魅力所在）**

Expo 提供很多原生能力：

* Camera（相机）
* FileSystem（文件）
* MediaLibrary（照片图库）
* Location（定位）
* Vibration（震动）
* Haptics（触感反馈）

示例（相机）：

```js
import { Camera } from 'expo-camera';
```

几乎“不需要写原生代码”。

---

# 🕖 **第 8 小时：掌握一个 UI 组件库**

推荐：

## ⭐ React Native Paper（最稳定）

```bash
npm install react-native-paper
```

立即可用：

```js
import { Button } from 'react-native-paper';

<Button mode="contained">提交</Button>
```

---

# 🕗 **第 9~10 小时：做一个小项目（实战）**

用 RN 做一个你 3 小时能写出来的 App：

### 📌 示例 APP（我可以帮你写模板）

* Tab 结构 + Stack 跳转
* 登录页
* 列表页（FlatList）
* 详情页
* 调接口
* 本地存储（AsyncStorage）
* 相册选择照片

做完这个，你已经是熟练工。

---

# 🚀 **总结：React → React Native 的核心三句话**

### ✔ 组件要换成 View / Text / Image

### ✔ 样式换成 Flexbox 对象写法

### ✔ 路由换成 react-navigation

剩下的你 5 年经验全能复用。

---

# 🎁 想要一个“为你定制的小项目模板”吗？

可以包含：

* 登录页
* Tab 页面
* 列表页 + 接口
* 详情页
* 使用 React Navigation
* 使用 React Native Paper
* 真实 API 示例
* 高质量目录结构

你只要复制即可直接跑。

你想让我直接给你一个 **完整可运行的 React Native 项目模板** 吗？

````