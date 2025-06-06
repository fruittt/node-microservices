### 1.服务间数据管理
- 每个服务有自己独立的数据库，如何管理？
## 服务间通信的同步与异步
![alt text](img/image.png)
# 两种方案
1.event bus获取所有服务的事件，然后进行处理实现异步通信（比较原始）
2.服务注册到event bus实现服务自治
### k8s
## 创建一个容器
bash 
  - docker build -t stephengrider/posts:0.0.1 .
  - kubectl apply -f posts.yaml
  - kubectl get pods