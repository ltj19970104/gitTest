<template>
  <div id="home">       
      <div class="board">
        <div class="board-column todo">
          <div class="board-column-header">组件栏</div>
          <div class="board-column-content-wrapper">
            <div class="board-column-content component-content">
              <div id="1" class="component-item add-more-items"><div class="board-item-content"><span><i class="iconfont icon-twenbenkuang"></i>  文本框</span></div></div>
              <div id="2" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>2</div></div>
              <div id="3" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>3</div></div>
              <div id="4" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>4</div></div>
              <div id="5" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>5</div></div>
              <div id="6" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>6</div></div>
              <div id="7" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>7</div></div>
              <div id="8" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>8</div></div>
              <div id="9" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>9</div></div>
              <div id="10" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>10</div></div>
              <div id="11" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>11</div></div>
              <div id="12" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>12</div></div>
              <div id="13" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>13</div></div>
              <div id="14" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>14</div></div>
              <div id="15" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>15</div></div>
              <div id="16" class="component-item add-more-items"><div class="board-item-content"><span>Item #</span>16</div></div>
            </div>
          </div>
        </div>
        <div class="board-column working">
          <!-- <div class="board-column-header">预览界面</div> -->
          <div class="board-column-content-wrapper">
            <div class="board-column-content preview-content">
              <div class="board-item"><div data-id="0" class="board-item-content" style="width:100%;"><span id="span0">Item #TITLE</span></div></div>
            </div>
          </div>
        </div>
        <div class="board-column done">
          <div class="board-column-header">属性设置</div>
          <div class="board-column-content-wrapper right-column">
            <div class="board-column-content config-content">

            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      propertyCount: 0,
      propertyNumber: '0',
      propertyTitle: ['Title'],
      formDatas: {
        type: '1',
        title: 123
      }
    }
  },
  mounted:function(){
      var _this = this;
      var itemContainers = document.querySelector('.preview-content');
      var columnGrids = [];
      var boardGrid;
      var addItemsElement = document.querySelectorAll('.add-more-items');
      var itemElement = document.getElementsByClassName('board-item-content');
      var defaultValue = document.getElementById('span0').innerHTML;
      // var propertyInput = document.getElementById('title');
      // propertyInput.value = defaultValue;

      // Define the column grids so we can drag those
      // items around.

      // Instantiate column grid.
      var grid = new Muuri(itemContainers, {
        items: '.board-item',
        layoutDuration: 400,
        layoutEasing: 'ease',
        dragEnabled: true,
        dragSort: function () {
          return columnGrids;
        },
        dragSortInterval: 0,
        dragContainer: document.body,
        dragStartPredicate: function (item, event) {
          // var isRemoveAction = elementMatches(event.target, '.card-remove, .card-remove i');
          // return !isRemoveAction ? Muuri.ItemDrag.defaultStartPredicate(item, event) : false;
          if (event.deltaTime > 100) {
            return true;
          }
        },
        dragReleaseDuration: 400,
        dragReleaseEasing: 'ease'
      })
      .on('dragStart', function (item) {
        // Let's set fixed widht/height to the dragged item
        // so that it does not stretch unwillingly when
        // it's appended to the document body for the
        // duration of the drag.
        item.getElement().style.width = item.getWidth() + 'px';
        item.getElement().style.height = item.getHeight() + 'px';
      })
      .on('dragReleaseEnd', function (item) {
        // Let's remove the fixed width/height from the
        // dragged item now that it is back in a grid
        // column and can freely adjust to it's
        // surroundings.
        item.getElement().style.width = '';
        item.getElement().style.height = '';
        // Just in case, let's refresh the dimensions of all items
        // in case dragging the item caused some other items to
        // be different size.
        columnGrids.forEach(function (grid) {
          grid.refreshItems();
        });
      })
      .on('layoutStart', function () {
        // Let's keep the board grid up to date with the
        // dimensions changes of column grids.
        boardGrid.refreshItems().layout();
      });

      // Add the column grid reference to the column grids
      // array, so we can access it later on.
      columnGrids.push(grid);


      // Instantiate the board grid so we can drag those
      // columns around.
      boardGrid = new Muuri('.board', {
        layoutDuration: 400,
        layoutEasing: 'ease',
        dragEnabled: false,
        dragSortInterval: 0,
        dragStartPredicate: {
          handle: '.board-column-header'
        },
        dragReleaseDuration: 400,
        dragReleaseEasing: 'ease'
      });

      // addItemsElement.addEventListener('click', addItems);
      addItemsElement.forEach(item => {
        item.addEventListener('click', addItems);
      });
      itemContainers.addEventListener('click', function (e) {
        if (elementMatches(e.target, '.card-remove, .card-remove i')) {
            removeItem(e);
        }else if(elementMatches(e.target, '.board-item-content')){
            startEditProperty(e);
        }else if(elementMatches(e.target, 'input, .click-item')){
            startEditParentProperty(e);
        }
      });
      // propertyInput.addEventListener('input', valueChange);

      function elementMatches(element, selector) {

        var p = Element.prototype;
        return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector).call(element, selector);

      }

      function elementDuration(element){
        var time,now = new Date();
        time = setInterval(function ()//setInterval会每100毫秒执行一次
        {
          timeEnd = getTimeNow();//也就是每100毫秒获取一次时间
          if (timeEnd - timeStart > 1000)//如果此时检测到的时间与第一次获取的时间差有1000毫秒
          {
            clearInterval(time);//便不再继续重复此函数 （clearInterval取消周期性执行）
            alert("长按");//并弹出代码
          }
        }, 100);
      }

      function addItems() {
        // console.log(this.id);
        var id = this.id;

        _this.propertyCount++;
        var count = _this.propertyCount;
        _this.propertyTitle[count] = id;
        
        // Generate new elements.
        var newElems = generateElements(1,id,count);

        // Set the display of the new elements to "none" so it will be hidden by
        // default.
        // newElems.forEach(function (item) {
        // item.style.display = 'none';
        // });

        // Add the elements to the grid.
        var newItems = grid.add(newElems);

        // Update UI indices.
        // updateIndices();

        // Sort the items only if the drag sorting is not active.
        // if (sortFieldValue !== 'order') {
        // grid.sort(sortFieldValue === 'title' ? compareItemTitle : compareItemColor);
        // dragOrder = dragOrder.concat(newItems);
        // }

        // Finally filter the items.
        // filter();

      }

      function removeItem(e) {

          var elem = elementClosest(e.target, '.board-item');
          grid.hide(elem, {onFinish: function (items) {
            var item = items[0];
            grid.remove(item, {removeElements: true});
          }});

      }

      function startEditProperty(e) {
        // var tdElement = document.getElementsByClassName('cpwidth-item');
        // for(var i=0;i<tdElement.length;i++){
        //     // console.log(i)
        //     tdElement[i].className = "cpwidth-item";
        // };
        // var tdElementWidth = Math.round(parseFloat(getStyle(e.target,'width')) / parseFloat(getStyle(e.target.parentNode,'width')) * 10);
        // tdElement[tdElementWidth-1].classList.add('active');

        for(var i=0;i<itemElement.length;i++){
            // console.log(i)
            itemElement[i].style.boxShadow = "";
        };
        e.target.style.boxShadow = '0 0 15px 5px #6cf';
        var id = e.target.dataset.id;
        _this.propertyNumber = id;
        // propertyInput.value = document.getElementById('span' + _this.propertyNumber).innerHTML
      }

      function startEditParentProperty(e) {
        // var tdElement = document.getElementsByClassName('cpwidth-item');
        // for(var i=0;i<tdElement.length;i++){
        //     // console.log(i)
        //     tdElement[i].className = "cpwidth-item";
        // };
        // var tdElementWidth = Math.round(parseFloat(getStyle(e.target.parentNode,'width')) / parseFloat(getStyle(e.target.parentNode.parentNode,'width')) * 10);
        // tdElement[tdElementWidth-1].classList.add('active');

        for(var i=0;i<itemElement.length;i++){
            // console.log(i)
            itemElement[i].style.boxShadow = "";
        };
        e.target.parentNode.style.boxShadow = '0 0 15px 5px #6cf';
        var id = e.target.parentNode.dataset.id;
        _this.propertyNumber = id;
        // propertyInput.value = document.getElementById('span' + _this.propertyNumber).innerHTML
      }

      function getStyle(element,cssPropertyName){
        if(window.getComputedStyle){
          return window.getComputedStyle(element)[cssPropertyName];
        }else{
          return element.currentStyle[cssPropertyName]; 
        }
      }

      function valueChange() {
        var x = propertyInput.value;
        document.getElementById("span" + _this.propertyNumber).innerHTML = x;
      }

      function generateElements(amount, data, count) {

        var itemTemplate;
        var ret = [];
        // console.log(typeof data);

        for (var i = 0, len = amount || 1; i < amount; i++) {

        var itemElem = document.createElement('div');

        switch (data) {
          case '1':
            itemTemplate = '' +
            '<div class="board-item"><div data-id="' + count + '" class="board-item-content"><div class="card-remove"><i class="iconfont icon-delete"></i></div><div class="click-item" id="span' + count + '">文本框</div><input type="text" placeholder="请填入……" style="box-sizing:border-box;width:100%;height:30px;margin-top:10px;" readonly="readonly"></div></div>';
            break;

          default:
            itemTemplate = '' +
            '<div class="board-item"><div data-id="' + count + '" class="board-item-content"><div class="card-remove"><i class="iconfont icon-delete"></i></div><span id="span' + count + '">123</span></div></div>';
            break;
        }

        itemElem.innerHTML = itemTemplate;
        ret.push(itemElem.firstChild);

        }

        return ret;

      }

      function elementClosest(element, selector) {

        if (window.Element && !Element.prototype.closest) {
          var isMatch = elementMatches(element, selector);
          while (!isMatch && element && element !== document) {
              element = element.parentNode;
              isMatch = element && element !== document && elementMatches(element, selector);
          }
          return element && element !== document ? element : null;
        }
        else {
          return element.closest(selector);
        }

      }
  },
};
</script>

<style lang="scss">
// @import "../assets/iconfont/iconfont.css";
#home {
  height: 100%;
  overflow-x: hidden;
}
.board {
  position: relative;
  height: 100%;
  // margin-left: 1%;
}
.board-column {
  position: absolute;
  left: 0;
  right: 0;
  // width: 30%;
  // margin: 0 1.5%;
  background: #f0f0f0;
  border-radius: 3px;
  z-index: 1;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
}
.board-column::-webkit-scrollbar{
  display:none;
}
.board-column.todo{
  width: 18%;
}
.board-column.working{
  width: 59%;
}
.board-column.done{
  width: 23%;
}
.board-column.muuri-item-releasing {
  z-index: 2;
}
.board-column.muuri-item-dragging {
  z-index: 3;
  cursor: move;
}
.board-column-header {
  position: relative;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  padding: 0 20px;
  text-align: center;
  background: #333;
  color: #fff;
  // border-radius: 3px 3px 0 0;
}
@media (max-width: 600px) {
  .board-column-header {
    text-indent: -1000px;
  }
}
.board-column.todo .board-column-header {
  background: #4A9FF9;
}
.board-column.working .board-column-header {
  background: #f9944a;
}
.board-column.done .board-column-header {
  background: #2ac06d;
}
/* This is the secret sauce,
   always use a wrapper for setting
   the "overflow: scroll/auto" */
.board-column-content-wrapper {
  position: relative;
  height: 100%;
}
.board-column-content-wrapper.right-column {
  position: relative;
  height: auto;
}
/* Never ever set "overflow: auto/scroll"
   to the muuri element, stuff will break */
.board-column-content {
  position: relative;
  // border: 10px solid transparent;
  min-height: 100%;
}
.board-column-content.preview-content{
  margin: 0 auto;
  width: 70%;
}
.component-item,.property-item{
  width: 100%;
  margin: 5px 0;
}
.board-item {
  position: absolute;
  width: 100%;
  margin: 5px 0;
}
.board-item.muuri-item-releasing {
  z-index: 9998;
}
.board-item.muuri-item-dragging {
  z-index: 9999;
  cursor: move;
}
.board-item.muuri-item-hidden {
  z-index: 0;
}
.board-item-content {
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  font-size: 17px;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
  box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
}
.card-remove {
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  -moz-transform: scale(0);
  -webkit-transform: scale(0);
  -o-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.15s ease-out;
  -moz-transition: all 0.15s ease-out;
  -ms-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
}
.board-item-content:hover > .card-remove {
  -moz-transform: scale(1);
  -webkit-transform: scale(1);
  -o-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
@media (max-width: 600px) {
  .board-item-content {
    text-align: center;
  }
}
</style>
