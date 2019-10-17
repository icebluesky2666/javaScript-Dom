function changeImg(event,node){
  event.preventDefault(); 
  console.log('---,',node)
  // 替换图片
  var imgbox = document.getElementById('imgBox')
  var imgsrc = node.getAttribute('href')
  imgbox.setAttribute('src',imgsrc);
  // 替换文字
  var titlebox = document.getElementsByTagName('p')[0];
  titlebox.childNodes[0].nodeValue = imgsrc;

  return false;
}
window.onload = function(){
/*属性api */

  //childNode
  var ulnode = document.getElementsByTagName('ul')[0];
  var childs = ulnode.childNodes;
  console.log('ul的childNode ： ',childs);
  //nodeType
  for(let i=0;i<childs.length;i++){
    console.log('nodeType:',childs[1].nodeType);
  }
  //nodeValue , lastChild , firstChild
  var taga = childs[0].getElementsByTagName('a')[0];
  console.log('taga.nodeValue:',taga.nodeValue);
  console.log('taga.lastChild.nodeValue:',taga.lastChild.nodeValue);
  taga.lastChild.nodeValue = "新的值"


/*创建型api */

  //createElement ,createTextNode
  var newLi = document.createElement('li');
  var textLi = document.createTextNode('新的li');
  newLi.appendChild(textLi);
  ulnode.appendChild(newLi);
  //cloneNode
  ulnode.appendChild(newLi.cloneNode(true));
  //createDocumentFragment
  var frag = document.createDocumentFragment();
  for(let i=0;i<5;i++){
    let litNode = document.createElement('li');
    let litTxt = document.createTextNode('循环添加');
    litNode.appendChild(litTxt);
    frag.appendChild(litNode);
  }
  ulnode.appendChild(frag);

/*修改型api*/

//appendChild 添加到调用该方法的节点的子元素的末尾 返回被添加的节点
ulnode.appendChild(document.createElement('li').appendChild(document.createTextNode('appendChild')))
//insertBefore  添加一个节点到一个参照节点之前  parentNode.insertBefore(newNode,refNode)
var insertBefore = document.createElement('li');
var insertBeforeTxt = document.createTextNode('insertBefore');
insertBefore.appendChild(insertBeforeTxt);
ulnode.insertBefore(insertBefore,ulnode.firstChild);
//removeChild 返回对节点的引用
var ret = ulnode.removeChild(ulnode.childNodes[0]);
console.log('removeChild返回：',ret)
//ulnode.parentNode.removeChild(ulnode);
// replaceChild
var oldNode = document.createElement('li')
oldNode.appendChild(document.createTextNode('加的节点'));
var newNode = document.createElement('li')
newNode.appendChild(document.createTextNode('newNode'))
ulnode.appendChild(oldNode)
oldNode.parentNode.replaceChild(newNode,oldNode)


/*查询型api*/

//getElementById
document.getElementById('imgBox')
//getElementsByTagName 返回 HtioTMLCollecn
document.getElementsByTagName('li');
var nolHtmlColl = document.getElementsByTagName('li');
console.log('当ByTagName没有这个标签的话返回的是空的HtioTMLCollecn:',nolHtmlColl)
// getElementsByName
var nodeName = document.getElementsByName('imgName');
console.log('nodeName:',nodeName)
//getElementsByClassName  多个的话是同时有
var classNode = document.getElementsByClassName('title title2')
console.log('classNode:',classNode)
//querySelector 返回找到的第一个 深度优先搜索
document.querySelector('.title')
// querySelectAll 深度优先搜索 参数是css选择器
document.querySelectorAll('.title,#imgBox');


/*关系型API*/

//parentNode  Element，Document或DocumentFragment
ulnode.firstChild.parentNode;
//parentElement   Element
ulnode.parentElement;
//previousSibling  nextSibling（这两个存在兼容问题）
//previousElementSibling  nextElementSibling（推荐使用）
ulnode.lastElementChild.previousElementSibling.style.color = 'red';
//childNodes 表示元素的子节点列表，子节点可能会包含文本节点，注释节点等
//children 
var ulChildren = ulnode.children;
console.log('ulChildren:',ulChildren)
//firstNode lastNode
//firstChild lastChild  等同于 firstElementChild  lastElementChild(推荐使用 最好用后面)


/*元素属性型 */

//setAttribute 可以修改文档中的任何一个属性 过浏览器的查看源码选项看到的任然是改变之前的属性值 做出的修改，不会反应到文档本身的源码里
ulnode.setAttribute('name','ulName')
//getAttribute 不存在就返回none或空字符串 不属于document 属于元素节点


/*其余收集*/

//innerHtml
ulnode.lastElementChild.innerHTML = 'innerHtml';
//ourterHtml 包含自身
//childElementCount
console.log('ulnode.childElementCount:',ulnode.childElementCount);
//focus blur




}