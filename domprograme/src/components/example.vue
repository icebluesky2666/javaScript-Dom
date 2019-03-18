<template>
  <div class="hello">
    <h1>Html基础控件</h1>
    <h2>Button 按钮</h2>
    <ul class="btn">
      <li>
        <button>基础按钮</button>
      </li>
      <li>
        <button style="padding: 12px 20px; /* line-height: 51px; */">上下左右间距</button>
      </li>
      <li>
        <button style="padding: 12px 20px;background:#fff;color:#606266;">有颜色</button>
      </li>
      <li>
        <button style="padding: 12px 20px;background:#fff;color:#606266;border: 1px solid #dcdfe6;border-radius: 4px;">圆角边框</button>
      </li>
      <li>
        <button class="button-click">Hover focus outline</button>
      </li>
      <li>
        <button class="button-click"><i class="iconfont myicon-lianjie" style="margin:0 5px 0 0;"></i><span>前面有图标 iconfonts</span></button>
      </li>
    </ul>
    <h2>Radio</h2>
    <ul class="radio">
      <li>
        性别：
        <input type="radio" name="sex" value="男" />男
        <input type="radio" name="sex" value="女" />女
        <button @click="getRadio" style="display:inline-block;margin-left:100px;">获取选中值</button>
        已经选中了{{radio}}
      </li>
      <li>
        语言：
        <template v-for="(item) in languages">
          <input :key="item.id" type="radio" name="language" :value="item.value" v-model="language">{{item.value}}
        </template>
        已经选中了{{language}}
      </li>
    </ul>
    <h2>Check Box</h2>
    <ul>
      <li>
        爱好
        <input type="checkbox" name="like" value="篮球">篮球
        <input type="checkbox" name="like" value="足球">足球
        <input type="checkbox" name="like" value="羽毛球">羽毛球
        <button @click="getCheckBox()" style="display:inline-block;margin-left:100px;">获取选中值</button>
        已经选中了{{likes.toString()}}
      </li>
      <li>
        爱好
        <input type="checkbox" name="like" value="篮球" v-model="likes2">篮球
        <input type="checkbox" name="like" value="足球" v-model="likes2">足球
        <input type="checkbox" name="like" value="羽毛球" v-model="likes2">羽毛球
        <label style="margin-left:100px;">已经选中了{{likes2}}</label>
      </li>
    </ul>
    <h2>Input</h2>
    <ul class="input">
      <li>
        <input type="text" placeholder="原始的input">
      </li>
      <li>
        <input type="text" placeholder="宽高固定文字变大" style="line-height: 40px;height: 40px;width: 200px;font-size: 31px;vertical-align: middle;">
      </li>
      <li>
        <input type="text" placeholder="左右留白 hover focus" class="input-el">
      </li>
      <li>
        <label>获取数值</label>
        <input type="text" placeholder="v-module 获取数值" class="input-el" v-model="inputMsg">
        <span>{{inputMsg}}</span>
      </li>
      <li>
        <input id="input_tip" type="text" placeholder="原生js获取数值" class="input-el">
        <button @click="getInput">获取数值</button>
        <span>{{inputMsg2}}</span>
      </li>
      <li>
        <label>input 和图标对齐</label>

        <div style="display:inline-block;position:relative">
          <input type="text" placeholder="input 和图标对齐" class="input-el" style="padding-right:30px;">
          <span style="position:absolute;right:9px;text-align:center;height:100%;top:0">
            <i class="iconfont myicon-lianjie" style="line-height:40px;"></i>
          </span>
        </div>
      </li>
    </ul>
    <h2>Select</h2>
    <ul>
      <li>
        <select name="like" id="select-like" v-model="selectLike">
          <option value="篮球">篮球</option>
          <option value="乒乓球">乒乓球</option>
          <option value="羽毛球">羽毛球</option>
          <option value="足球">足球</option>
        </select>
        {{selectLike}}
        <button @click="getSelect" style="margin-left:100px;">原生获取选中值</button>
        {{selectLike2}}
      </li>
    </ul>

  </div>
</template>


<script>
export default {
  name: 'example',
  data() {
    return {
      radio: '',
      languages: [
        {
          id: 0,
          value: 'javascript'
        },
        {
          id: 1,
          value: 'c++'
        }
      ],
      language: '',
      likes: [],
      likes2: [],
      inputMsg: '',
      inputMsg2: '',
      selectLike: '',
      selectLike2: ''
    }
  },
  methods: {
    getRadio: function() {
      let _this = this
      document.getElementsByName('sex').forEach(e => {
        if (e.checked) {
          _this.radio = e.value
        }
      })
    },
    getCheckBox: function() {
      let likes = []
      document.getElementsByName('like').forEach(e => {
        if (e.checked) {
          likes.push(e.value)
        }
      })
      this.likes = likes
    },
    getInput: function() {
      this.inputMsg2 = document.getElementById('input_tip').value
    },
    getSelect: function() {
      Array.prototype.forEach.call(document.getElementById('select-like').children, e => {
        if (e.selected) {
          this.selectLike2 = e.value
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 100%;
  height: 100px;
}
a {
  color: #42b983;
}
/* button*/
.btn li {
  width: 10%;
}
.button-click {
  padding: 12px 20px;
  background: #fff;
  color: #606266;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
}
.button-click:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.button-click:focus {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
/*radio*/
.radio li {
  width: 40%;
}
/*input*/
.input li {
  width: 20%;
}
.input-el {
  line-height: 40px;
  height: 40px;
  width: 200px;
  vertical-align: middle;
  padding: 0 15px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  border-radius: 4px;
}
.input-el:hover {
  border-color: #c0c4cc;
}
.input-el:focus {
  outline: none;
  border-color: #409eff;
}
</style>
