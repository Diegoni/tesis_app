/*
 Highcharts JS v6.0.6 (2018-02-05)
 X-range series

 (c) 2010-2017 Torstein Honsi, Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
(function(h){"object"===typeof module&&module.exports?module.exports=h:h(Highcharts)})(function(h){(function(c){var h=c.defined,u=c.Color,p=c.seriesTypes.column,g=c.each,v=c.isNumber,r=c.isObject,q=c.merge,l=c.pick,w=c.seriesType,x=c.wrap,y=c.Axis,t=c.Point,z=c.Series;w("xrange","column",{colorByPoint:!0,dataLabels:{verticalAlign:"middle",inside:!0,formatter:function(){var a=this.point.partialFill;r(a)&&(a=a.amount);h(a)||(a=0);return 100*a+"%"}},tooltip:{headerFormat:'\x3cspan style\x3d"font-size: 0.85em"\x3e{point.x} - {point.x2}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.yCategory}\x3c/b\x3e\x3cbr/\x3e'},borderRadius:3,pointRange:0},{type:"xrange",parallelArrays:["x","x2","y"],requireSorting:!1,animate:c.seriesTypes.line.prototype.animate,cropShoulder:1,getExtremesFromAll:!0,getColumnMetrics:function(){function a(){g(d.series,function(a){var b=a.xAxis;a.xAxis=a.yAxis;a.yAxis=b})}var b,d=this.chart;a();b=p.prototype.getColumnMetrics.call(this);a();return b},cropData:function(a,
b,d,e){b=z.prototype.cropData.call(this,this.x2Data,b,d,e);b.xData=a.slice(b.start,b.end);return b},translatePoint:function(a){var b=this.xAxis,d=this.columnMetrics,e=this.options.minPointLength||0,m=a.plotX,c=l(a.x2,a.x+(a.len||0)),f=b.translate(c,0,0,0,1),c=f-m,n=this.chart.inverted,k=l(this.options.borderWidth,1)%2/2;e&&(e-=c,0>e&&(e=0),m-=e/2,f+=e/2);m=Math.max(m,-10);f=Math.min(Math.max(f,-10),b.len+10);a.shapeArgs={x:Math.floor(Math.min(m,f))+k,y:Math.floor(a.plotY+d.offset)+k,width:Math.round(Math.abs(f-
m)),height:Math.round(d.width),r:this.options.borderRadius};e=a.shapeArgs.x;f=e+a.shapeArgs.width;0>e||f>b.len?(e=Math.min(b.len,Math.max(0,e)),f=Math.max(0,Math.min(f,b.len)),b=f-e,a.dlBox=q(a.shapeArgs,{x:e,width:f-e,centerX:b?b/2:null})):a.dlBox=null;a.tooltipPos[0]+=n?0:c/2;a.tooltipPos[1]-=n?c/2:d.width/2;if(b=a.partialFill)r(b)&&(b=b.amount),v(b)||(b=0),d=a.shapeArgs,a.partShapeArgs={x:d.x,y:d.y,width:d.width,height:d.height,r:this.options.borderRadius},a.clipRectArgs={x:d.x,y:d.y,width:Math.max(Math.round(c*
b+(a.plotX-m)),0),height:d.height}},translate:function(){p.prototype.translate.apply(this,arguments);g(this.points,function(a){this.translatePoint(a)},this)},drawPoint:function(a,b){var d=this.options,e=this.chart.renderer,c=a.graphic,h=a.shapeType,f=a.shapeArgs,n=a.partShapeArgs,k=a.clipRectArgs,g=a.partialFill,l=a.selected&&"select",p=d.stacking&&!d.borderRadius;if(a.isNull)c&&(a.graphic=c.destroy());else{if(c)a.graphicOriginal[b](q(f));else a.graphic=c=e.g("point").addClass(a.getClassName()).add(a.group||
this.group),a.graphicOriginal=e[h](f).addClass(a.getClassName()).addClass("highcharts-partfill-original").add(c);n&&(a.graphicOverlay?(a.graphicOverlay[b](q(n)),a.clipRect.animate(q(k))):(a.clipRect=e.clipRect(k.x,k.y,k.width,k.height),a.graphicOverlay=e[h](n).addClass("highcharts-partfill-overlay").add(c).clip(a.clipRect)));a.graphicOriginal.attr(this.pointAttribs(a,l)).shadow(d.shadow,null,p);n&&(r(g)||(g={}),r(d.partialFill)&&(g=q(g,d.partialFill)),b=g.fill||u(a.color||this.color).brighten(-.3).get(),
a.graphicOverlay.attr(this.pointAttribs(a,l)).attr({fill:b}).shadow(d.shadow,null,p))}},drawPoints:function(){var a=this,b=this.chart.pointCount<(a.options.animationLimit||250)?"animate":"attr";g(a.points,function(d){a.drawPoint(d,b)})}},{init:function(){t.prototype.init.apply(this,arguments);var a;a=this.series;var b=a.chart.options.chart.colorCount;this.y||(this.y=0);a.options.colorByPoint&&(a=a.options.colors||a.chart.options.colors,b=a.length,!this.options.color&&a[this.y%b]&&(this.color=a[this.y%
b]));this.colorIndex=l(this.options.colorIndex,this.y%b);return this},getLabelConfig:function(){var a=t.prototype.getLabelConfig.call(this),b=this.series.yAxis.categories;a.x2=this.x2;a.yCategory=this.yCategory=b&&b[this.y];return a},tooltipDateKeys:["x","x2"],isValid:function(){return"number"===typeof this.x&&"number"===typeof this.x2}});x(y.prototype,"getSeriesExtremes",function(a){var b=this.series,d,c;a.call(this);this.isXAxis&&(d=l(this.dataMax,-Number.MAX_VALUE),g(b,function(a){a.x2Data&&g(a.x2Data,
function(a){a>d&&(d=a,c=!0)})}),c&&(this.dataMax=d))})})(h)});
