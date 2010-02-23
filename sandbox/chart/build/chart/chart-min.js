YUI.add("chart",function(G){function D(I,H){this._id=G.guid(this.GUID);this._setParent(I);this.addAttrs(this._attributeConfig,H);}D.prototype={_items:[],_setParent:function(H){this.oElement=H;},CLASSNAME:"Container",swfReadyFlag:false,_backgroundId:"background",GUID:"yuicontainer",LAYOUTS:["LayoutStrategy","HLayout","VLayout","HFlowLayout","VFlowLayout","LayerStack","BorderContainer"],_init:function(J){var I,K,H;this.swfowner=J;this.appswf=J.appswf;this._addBackground();H=this._items.length;if(H<1){return;}for(I=0;I<H;I++){K=this._items[I];this.addItem(K.item,K.props);}this._updateStyles();},_addBackground:function(){this.appswf.createInstance("background","Skin");this.appswf.applyMethod(this._id,"addItem",["$background",{index:0}]);this._styleObjHash.background="background";},addItem:function(J,I){if(this.swfReadyFlag){var H=J.swfarguments&&typeof J.swfarguments=="array"?J.args:[];this.appswf.createInstance(J._id,J.className,H);H=["$"+J._id];if(I){H.push(I);}this.appswf.applyMethod(this._id,"addItem",H);}else{this._items.push({item:J,props:I});}},_defaultStyles:{},_styleObjHash:{background:"background"},setStyle:function(I,K){var H,J;if(this._styleObjHash.hasOwnProperty(I)){if(this._defaultStyles[I]){J=this._defaultStyles[I];for(H in K){if(K.hasOwnProperty(H)){J[H]=K[H];}}}else{J=K;}this._defaultStyles[I]=J;}else{if(!this._defaultStyles.hasOwnProperty(this._id)){this._defaultStyles[this._id]={};}this._defaultStyles[this._id][I]=K;}if(this.swfReadyFlag){this._updateStyles();}},_setStyles:function(J){var I,H,K=this._defaultStyles;if(!K.hasOwnProperty(this._id)){K[this._id]={};}for(I in J){if(J.hasOwnProperty(I)){if(this._styleObjHash.hasOwnProperty(I)){H=this._styleObjHash[I];if(K&&K.hasOwnProperty(H)&&G.Lang.isObject(K[H])){K[H]=this._mergeStyles(J[I],K[H]);}else{K[H]=J[I];}}else{H=this._id;if(K&&K.hasOwnProperty(H)&&K[H].hasOwnProperty(I)&&G.Lang.isObject(K[H][I])){K[H][I]=this._mergeStyles(J[I],K[H][I]);}else{K[H][I]=J[I];}}}}this._defaultStyles=K;if(this.swfReadyFlag){this._updateStyles();}},_mergeStyles:function(I,H){var J;for(J in I){if(I.hasOwnProperty(J)){if(H.hasOwnProperty(J)&&G.Lang.isObject(I[J])){H[J]=this._mergeStyles(I[J],H[J]);}else{H[J]=I[J];}}}return H;},_updateStyles:function(){for(var H in this._defaultStyles){if(this._defaultStyles.hasOwnProperty(H)){this.appswf.applyMethod(H,"setStyles",[this._defaultStyles[H]]);}}this._defaultStyles=null;this._defaultStyles={};},_attributeConfig:{props:{value:null,setter:function(H){return H;},validator:function(H){return G.Lang.isObject(H);}},swfargs:{value:[],validator:function(H){return G.Lang.isArray(H);}},className:{value:this.CLASSNAME,readOnly:true},layout:{value:"LayoutStrategy",validator:function(H){return this.LAYOUTS.hasOwnProperty(H);}},items:{value:[],setter:function(H){this._items=H;},getter:function(){return this._items;},validator:function(H){return G.Lang.isArray(H);}},styles:{value:null,setter:function(H){this._setStyles(H);},validator:function(H){return G.Lang.isObject(H);}}},toString:function(){return"Container "+this._id;}};G.augment(D,G.Attribute);G.Container=D;function B(I,H){B.superclass.constructor.apply(this,arguments);}G.extend(B,G.Container,{GUID:"yuibordercontainer",itemsQueue:{},className:"BorderContainer",layout:"LayoutStrategy",_init:function(J){var I,H;this.swfowner=J;this.appswf=this.swfowner.appswf;this.swfReadyFlag=true;this._updateStyles();for(I in this.itemsQueue){if(this.itemsQueue.hasOwnProperty(I)){H=this.itemsQueue[I];while(H.length>0){this.addItem(H.shift(),I);}}}},addBottomItem:function(H){this.addItem(H,"bottom");},addLeftItem:function(H){this.addItem(H,"left");},addTopItem:function(H){this.addItem(H,"top");},addRightItem:function(H){this.addItem(H,"right");},addCenterItem:function(H){this.addItem(H,"center");},addItem:function(J,H){var I=(H.charAt(0)).toUpperCase()+H.substr(1);if(this.swfReadyFlag){J._init(this.swfowner);this.appswf.applyMethod(this._id,"add"+I+"Item",["$"+J._id]);if(H!="center"){J.setStyle("position",H);}}else{if(!this.itemsQueue||!this.itemsQueue.hasOwnProperty(H)){this.itemsQueue[H]=[];}this.itemsQueue[H].push(J);}},toString:function(){return"BorderContainer "+this._id;}});function A(I,H){this._attributeConfig=G.merge(this._attributeConfig,A.superclass._attributeConfig);A.superclass.constructor.apply(this,arguments);this._dataId=this._id+"data";if(this.get("autoLoad")){this.loadswf();}}G.extend(A,G.Container,{CLASSNAME:"CartesianCanvas",GUID:"yuichart",_attributeConfig:{swfurl:{value:G.config.base+"chart/assets/cartesiancanvas.swf"},chartContainer:{value:null,setter:function(H){return this.setChartContainer(H);},validator:function(H){return G.Lang.isObject(H);}},params:{value:{version:"10.0.0",useExpressInstall:true,fixedAttributes:{allowScriptAccess:"always",allowNetworking:"all",bgcolor:"#ffffff"}},setOnce:true,setter:function(H){return this._mergeStyles(H,{version:"10.0.0",useExpressInstall:true,fixedAttributes:{allowScriptAccess:"always",allowNetworking:"all",bgcolor:"#ffffff"}});},validator:function(H){return G.Lang.isObject(H);}},flashvars:{value:{appname:this._id},setOnce:true,setter:function(H){if(!H){return;}if(!H.hasOwnProperty("appname")||!H.appname){H.appname=this._id;}if(this.get("params").flashVars&&G.Lang.isObject(this.get("params").flashVars)){this.get("params").flashVars=this._mergeStyles(H,this.get("params").flashVars);}else{this.get("params").flashVars=H;}},validator:function(H){return G.Lang.isObject(H);}},autoLoad:{value:true},_autoRender:{value:true,setter:function(H){return this.setAutoRender(H);}},_dataId:{value:null},dataProvider:{value:null,setter:function(H){this._dataProvider=H;this._initDataProvider();}}},setChartContainer:function(H){if(H&&H.hasOwnProperty("classInstance")){this.chartContainer=H.classInstance;if(H.hasOwnProperty("added")&&!H.added){this._styleObjHash.chart=this.chartContainer._id;return;}}else{this.chartContainer=new B(this);}this._styleObjHash.chart=this.chartContainer._id;this.chartContainer.oElement.addItem(this.chartContainer);
},addChildContainers:function(J){var K,H,I,M,L;for(K=0;K<H;K++){I=J[K];if(I.hasOwnProperty("classInstance")){M=I.classInstance;if(I.hasOwnProperty("props")){L=I.props;}this.addItem(M,L);}}},loadswf:function(){this.appswf=new G.SWF(this.oElement,this.get("swfurl"),this.get("params"));this.appswf.on("swfReady",this._init,this);},_init:function(K){var I,J,H;this._setAutoRender();if(this._dataProvider){this._initDataProvider();}this._addBackground();this.swfReadyFlag=true;H=this._items.length;if(H<1){return;}for(I=0;I<H;I++){J=this._items[I];this.addItem(J.item,J.props);}this._updateStyles();},_initDataProvider:function(){if(this.appswf){this.appswf.createInstance(this._dataId,"ChartDataProvider",[this._dataProvider]);}},addTopItem:function(H){this.chartContainer.addTopItem(H);},addRightItem:function(H){this.chartContainer.addRightItem(H);},addBottomItem:function(H){this.chartContainer.addBottomItem(H);},addLeftItem:function(H){this.chartContainer.addLeftItem(H);},addCenterItem:function(H){this.chartContainer.addCenterItem(H);},addItem:function(I,H){D.prototype.addItem.apply(this,arguments);if(this.swfReadyFlag&&I._init){I._init(this);}},setAutoRender:function(H){if(H!=this._autoRender){this._autoRender=H;this._setAutoRender();}},_setAutoRender:function(){if(this.appswf){this.appswf.callSWF("setProperty",[this._id,"autoRender",this._autoRender]);}},toString:function(){return"Chart "+this._id;}});G.augment(A,G.EventTarget);G.Chart=A;function F(L,J,K,I,H){this._id=G.guid("yuilinegraph");this.xaxis=L;this.yaxis=J;this.xkey=K;this.ykey=I;this._parseConfigs(H);this.swfowner=null;}F.prototype={className:"LineGraph",_init:function(H){this.swfowner=H;this.appswf=this.swfowner.appswf;this.appswf.createInstance(this._id,"LineGraph",["$"+this.xaxis._id+"data","$"+this.yaxis._id+"data",this.xkey,this.ykey]);if(this._defaultStyles){this.appswf.applyMethod(this._id,"setStyles",[this._defaultStyles]);this._defaultStyles=null;}},_parseConfigs:function(H){if(H&&H.hasOwnProperty("styles")){this.setStyles(H.styles);}},_defaultStyles:null,setStyle:function(H,I){if(this.appswf){this.appswf.applyMethod(this._id,"setStyle",[H,I]);}else{if(!this._defaultStyles){this._defaultStyles={};}this._defaultStyles[H]=I;}},setStyles:function(I){if(this.appswf){this.appswf.applyMethod(this._id,"setStyles",[I]);this._defaultStyles=null;}else{for(var H in I){if(I.hasOwnProperty(H)){if(!this._defaultStyles){this._defaultStyles={};}this._defaultStyles[H]=I[H];}}}},toString:function(){return"LineGraph "+this._id;}};G.augment(F,G.EventTarget);G.LineGraph=F;function E(H,I){this._id=G.guid("yuiaxis");this._dataId=this._id+"data";this.axisType=H||"Numeric";this.keys=[];this.swfowner=null;this._parseConfigs(I);}E.prototype={className:"Axis",_init:function(I){this.swfowner=I;this.appswf=this.swfowner.appswf;this.appswf.createInstance(this._dataId,this.axisType+"Data",["$"+this.swfowner._dataId]);for(var H in this.keys){if(this.keys.hasOwnProperty(H)){this.appswf.applyMethod(this._dataId,"addKey",[this.keys[H]]);}}this.appswf.createInstance(this._id,"Axis",["$"+this._dataId]);if(this._defaultStyles!==null){this.appswf.applyMethod(this._id,"setStyles",[this._defaultStyles]);this._defaultStyles=null;}},_parseConfigs:function(H){if(H&&H.hasOwnProperty("styles")){this.setStyles(H.styles);}},addKey:function(H){this.keys.push(H);if(this.appswf){this.appswf.applyMethod("$"+this._dataId,"addKey",[H]);}},_defaultStyles:null,setStyle:function(H,I){if(this.appswf){this.appswf.applyMethod(this._id,"setStyle",[H,I]);}else{if(!this._defaultStyles){this._defaultStyles={};}this._defaultStyles[H]=I;}},setStyles:function(I){var H;if(this.appswf){this.appswf.applyMethod(this._id,"setStyles",[I]);this._defaultStyles=null;}else{for(H in I){if(I.hasOwnProperty(H)){if(!this._defaultStyles){this._defaultStyles={};}this._defaultStyles[H]=I[H];}}}},toString:function(){return"Axis "+this._id;}};G.augment(E,G.EventTarget);G.Axis=E;function C(I,J,H){if(J){this._type=J;}this._parseConfig(H);this.chart=new G.Chart(I,this._chartConfig);this.xaxis=new G.Axis(this._xAxisProps.type,{styles:this._xaxisstyles});this.yaxis=new G.Axis(this._yAxisProps.type,{styles:this._yaxisstyles});this.data={};this.graph=null;}G.extend(C,G.EventTarget,{_type:"line",_xAxisProps:{type:"Category",key:"item"},_yAxisProps:{type:"Numeric",key:"value"},setData:function(J,I,H){this.data=J;this.chart.set("dataProvider",this.data);this.xaxis.addKey(this._xAxisProps.key);this.yaxis.addKey(this._yAxisProps.key);if(this._type=="line"){this.graph=new G.LineGraph(this.xaxis,this.yaxis,I,H,{styles:this._graphstyles});}this.chart.addBottomItem(this.xaxis);this.chart.addLeftItem(this.yaxis);this.chart.addCenterItem(this.graph);},_chartstyles:{chart:{padding:{left:20,top:20,bottom:20,right:20}},background:{fillColor:14607103,borderColor:14607103}},_xaxisstyles:{majorTicks:{color:0},line:{color:0},label:{fontName:"Georgia",fontSize:12,color:0,margin:{top:3}}},_yaxisstyles:{majorTicks:{color:6697779},line:{color:6697779},label:{fontName:"Georgia",fontSize:12,color:0,margin:{right:3}}},_graphstyles:{color:0,alpha:1,weight:"2"},_parseConfig:function(H){var J,I;if(H){if(H.hasOwnProperty("swfurl")){this._chartConfig.swfurl=H.swfurl;}if(H.hasOwnProperty("xaxisprops")){I=H.xaxisprops;if(I.hasOwnProperty("type")){this._xAxisProps.type=I.type;}if(I.hasOwnProperty("key")){this._xAxisProps.key=I.key;}}if(H.hasOwnProperty("yaxisprops")){I=H.yaxisprops;if(I.hasOwnProperty("type")){this._yAxisProps.type=I.type;}if(I.hasOwnProperty("key")){this._yAxisProps.key=I.key;}}if(H.hasOwnProperty("autoRender")){this._chartConfig.autoRender=H.autoRender;}if(this._yAxisProps.type=="Category"){this._yaxisstyles.padding={top:50,bottom:50};this._graphstyles.padding={top:50,bottom:50};}if(this._xAxisProps.type=="Category"){this._xaxisstyles.padding={left:50,right:50};this._graphstyles.padding={left:50,right:50};}if(H.hasOwnProperty("styles")){J=H.styles;if(J.hasOwnProperty("chart")){this._chartstyles.chart=this._parseStyles(this._chartstyles.chart,J.chart);
}if(J.hasOwnProperty("background")){this._chartstyles.background=this._parseStyles(this._chartstyles.background,J.background);}if(J.hasOwnProperty("xaxisstyles")){this._xaxisstyles=this._parseStyles(this._xaxisstyles,J.xaxisstyles);}if(J.hasOwnProperty("yaxisstyles")){this._yaxisstyles=this._parseStyles(this._yaxisstyles,J.yaxisstyles);}if(J.hasOwnProperty("graphstyles")){this._graphstyles=this._parseStyles(this._graphstyles,J.graphstyles);}}}else{if(this._yAxisProps.type=="Category"){this._yaxisstyles.padding={top:50,bottom:50};this._graphstyles.padding={top:50,bottom:50};}if(this._xAxisProps.type=="Category"){this._xaxisstyles.padding={left:50,right:50};this._graphstyles.padding={left:50,right:50};}}this._chartConfig.styles=this._chartstyles;},_chartConfig:{},_parseStyles:function(H,J){var I;if(!H){return J;}for(I in J){if(J.hasOwnProperty(I)){if(H.hasOwnProperty(I)&&G.Lang.isObject(H[I])){H[I]=this._parseStyles(H[I],J[I]);}else{H[I]=J[I];}}}return H;}});G.SimpleChart=C;},"@VERSION@");