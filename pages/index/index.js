//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 文本框数据
    input:"",
    todos: [],
    leftCount: 0
  },
  addTodos: function(){
    if (!this.data.input.trim()) return;
    var arr = this.data.todos;
    arr.unshift({
      name: this.data.input,
      completed: false
    });
    this.setData({
      todos: arr,
      input: ''
    })
    this.leftNum()
  },
  setInput: function(e) {
    this.setData({
      input: e.detail.value
    })
  },
  changeTodosStatus: function(e){
    var arr = this.data.todos;
    arr[e.target.dataset.index].completed = !arr[e.target.dataset.index].completed
    this.setData({
      todos: arr
    })
    this.leftNum()
  },
  removeTodos: function(e){
    var arr = this.data.todos;
    arr.splice(e.target.dataset.index, 1)
    this.setData({
      todos: arr
    })
    this.leftNum()
  },
  toggleAll: function(){
    var arr = this.data.todos;
    for(var i=0;i<arr.length;i++) {
      arr[i].completed = !arr[i].completed
    };
    this.setData({
      todos: arr
    })
    this.leftNum()
  },
  ClearCommpleted: function(){
    var arr = this.data.todos;
    arr = arr.filter(item => item.completed !== true);
    this.setData({
      todos: arr
    })
    this.leftNum()
  },
  onLoad: function(){
    this.leftNum()
  },
  leftNum: function(){
    var num = 0;
    var arr = this.data.todos;
    for (var i = 0; i < arr.length; i++) {
      if (!arr[i].completed) {
        num++
      }
    };
    this.setData({
      leftCount: num
    })
  }
})
