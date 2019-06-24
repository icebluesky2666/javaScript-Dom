var PractPage = function(){
  var desDetail = this;
  /* About*/
  //显示人物介绍
  desDetail.getIntroducePeople = function(){
    var introNode = document.getElementById('intro');
    var liNode = introNode.getElementsByTagName('li');
    for(let i=0;i<liNode.length;i++){
      let href =liNode[i].getAttribute('href');
      liNode[i].onclick = function(){
        document.getElementById(href.substring(1)).style.display = block;
      }
    }

  }
  desDetail.init = function(){

  }
}
var Pract = new PractPage();