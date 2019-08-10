$(function() {
  // 初始化地图
  var map = new BMap.Map("contact_map");
  var point = new BMap.Point(112.991778,28.158485);
  map.enableScrollWheelZoom();
  map.centerAndZoom(point, 20);
  map.addControl(new BMap.NavigationControl());
  map.addControl(new BMap.ScaleControl());
  map.addControl(new BMap.OverviewMapControl());
  map.addControl(new BMap.MapTypeControl());

  // 创建小蓝点
  var marker = new BMap.Marker(point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
  marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

  var opts2 = {
    position: point, // 指定文本标注所在的地理位置
    offset: new BMap.Size(-40, -60) //设置文本偏移量
  };
  var label2 = new BMap.Label("长沙迪博财务服务有限公司", opts2); // 创建文本标注对象
  label2.setStyle({
    color: "#333",
    fontSize: "0.24rem",
    paddingLeft: "0.15rem",
    paddingRight: "0.15rem",
    lineHeight: "0.44rem",
    fontFamily: "微软雅黑",
    textAlign: "center",
    background: "#fff",
    border: "1px solid #e5e5e5",
    borderRadius: "0.1rem"
  });
  map.addOverlay(label2);
});
