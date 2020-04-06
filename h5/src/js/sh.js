var data,
    myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset,
    generatedCount = 0;
var page = 1;
var cid = 78;
var wcot = 5;
var pages = 0;
catdir="";

function pullDownAction() {
    setTimeout(function () {
        myScroll.refresh();
    }, 600);
    /*$.get('wap_list.php?cid=78&wcot=1', function (data, state) {
    	if (data  && state == 'success') {
    		//本地测试，为了看到加载中效果故加上定时器
    		setTimeout(function () {
    			$('#news-lists').before(data);
    			myScroll.refresh();
    		}, 600);
    	}
    });*/
}

function pullUpAction() {
    var nt = new Date().getTime();
    /*$.getJSON('data.json?v=' + nt, function (data, state) {
        if (data && state == 'success') {
            setTimeout(function () {
                $('#news-lists').append(loadHtml(data));
                myScroll.refresh();
            }, 600);
        }
    });*/
	host = window.location.host;
	$.ajax(
			{
					type: "GET",
					url: "",
					async:false,
					dataType: "json",
					success: function (data, state) {
						console.log(data.length)
						if (data  && state == 'success') {
							setTimeout(function () {
								$('#news-lists').append(loadHtml(data));
								myScroll.refresh();
							}, 600);
						}
						if(pages == data.length){
							$("#pullUp").children(".pullUpLabel").html("已无数据");
							$("#pullUp").removeClass("loading");
//							myScroll.disable()
						}else{
//							myScroll.enable()
						}
				}
			});
}
function loadHtml(data) {
    // var pages = parseInt($('#page').val());
    var num = data.length;
    var numt = num/10;
    var zheng = parseInt(numt);
    var yu = num%10;
    var html = '';
    console.log(num)
    console.log(numt)
    console.log(zheng)
    console.log(yu)
    console.log(pages)
     if(pages == zheng*10){
    	for (var i = pages; i < pages + yu; i++) {
	        var item = data[i];
	            html += '<a href="tel:15580068980" class="new">';
	            html += '<div class="z">'+item.imagess+'</div>';
	            html += '<div class="y"><span class="sp">' + item.title + '</span>';
	            html += '<p>' + item.detail + '</p>';
	            html += '<div class="lb"><em>' + item.fuwu + '</em>';
	            html += '<span>' + item.date + '</span></div></div></a>';
	    }
    	pages = pages + yu;
    }else{
    	for (var i = pages; i < pages + 10; i++) {
	        var item = data[i];
	            html += '<a href="tel:15580068980" class="new">';
	            html += '<div class="z">'+item.imagess+'</div>';
	            html += '<div class="y"><span class="sp">' + item.title + '</span>';
	            html += '<p>' + item.detail + '</p>';
	            html += '<div class="lb"><em>' + item.fuwu + '</em>';
	            html += '<span>' + item.date + '</span></div></div></a>';
	    }
    	pages = pages + 10;
    }
    console.log(pages)
   
    return html;
}
//初始化绑定iScroll控件
document.addEventListener('touchmove',function(event){event.preventDefault();},false);
document.addEventListener('DOMContentLoaded', loaded, false);

function loaded() {
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;

    /**
     * 初始化iScroll控件
     */
    myScroll = new iScroll('wrapper', {
        vScrollbar: false,
        topOffset: pullDownOffset,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
                this.minScrollY = 0;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                pullDownEl.className = 'loading';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '<img src="images/jiazai.gif"><em>加载中...</em>';
                pullDownAction();
            } else if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '<img src="images/jiazai.gif"><em>加载中...</em>';
                pullUpAction();
            }
        }
    });
}
window.onload = function(){
	pullUpAction()
}
