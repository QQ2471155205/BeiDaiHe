/* 轮播图 */
var bannerlist = [
	{
		newstitlle:" ",
		linkhref:"http//www.baidu.com",
		imgsrc:"images/20181019015741599.jpg"
	},
		{
		newstitlle:"艺术村落",
		linkhref:"http//www.baidu.com",
		imgsrc:"images/20180804110106811.jpg "
	},
		{
		newstitlle:"扩大绿化面积、整治燃煤锅炉、淘汰落后产能……只为倾力保有...",
		linkhref:"http//www.baidu.com",
		imgsrc:"images/20160113103059292.jpg"
	}
	]

	var bigimg = document.getElementById("bigimg");
	var biglink = document.getElementById("biglink");
	var title = document.getElementById("title");
	var imglist = document.getElementById("imglist");
	var imgs = imglist.getElementsByTagName("img");
	var index = 0;
	var intervalId = setInterval(changeImg,3000)

	function changeImg(){
		index = index + 1;
		if(index == 3){
			index = 0;
		}
		bigimg.src = bannerlist[index].imgsrc;
		title.innerHTML = bannerlist[index].newstitlle;
		for(var i = 0; i < imglist.length; i++) {
			if(i == index) {
				imgs[i].className = "now";
			}else{
				imgs[i].className = "";
			}
		}
	}

	for(var j = 0; j < imgs.length; j++){
		imgs[j].onclick = function() {
			for(var m = 0; m < imgs.length; m++) {
				imgs[m].className = "";
			}
			this.className = "now";
			bigimg = this.src;
		}
	}
	/*新闻-通知公告*/
	$(".tab li").mouseover(function() {
		$(".tabnow").removeClass("tabnow");
		$(this).addClass("tabnow");
		var index = $(".tab li").index($(this));
		$(".newslist").css("display", "none");
		$(".newslist:eq("+ index +")").css("display", "block");
	});
	/*电子公文-便民咨询*/
	$(".bmtab li").mouseover(function() {
		$(".choose").removeClass("choose");
		$(this).addClass("choose");
		var index = $(".bmtab li").index($(this));
		$(".linkpic").css("display", "none");
		$(".linkpic:eq("+ index +")").css("display", "block");
	})
	/*弹窗打开*/
	$(".conlink a").click(function() {
		$(".theme-popover:eq("+ index +")").show(250);
	})
	/*弹窗关闭*/
	$(".close").click(function() {
		$(".theme-popover").hide(250);
	})