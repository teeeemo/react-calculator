# react计算器
## 开发框架
create-react-app生成的默认react开发框架

es6+babel+webpack

## 组件划分
```bash
div.root
	└── App	#计算器容器
        ├── DisplayPanel	#结果显示面板
        └── ButtonsPanel	#按钮面板
        		└── Button	#所有可以点击的按钮
```
## 逻辑概要
App存放state

* total：默认结果0 || 上一次计算结果
* next：当前输入的操作数
* operation：操作符

Button点击事件处理流

clichHandler(button的name属性)

➡️上发ButtonsPanel：clickHandler

➡️上发App：clickHandler，App使用逻辑处理模块compute完成逻辑操作

## 知识点整理

知识点列表

* 最基本的组件嵌套
* es6语法的默认props
* 使用prop-types模块，进行默认props的类型判断（react新版本特性:https://github.com/facebook/react/releases/tag/v15.5.0）
* 组件的点击事件用箭头函数比较好，这样可以不用再重新绑定this
