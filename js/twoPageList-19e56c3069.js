var MyMar,leftPage=1,leftIndex=0,menuIndex=null,page=1,mainIndex=null,runState=!1,runParamName="";function timedCount(e,t){var n=t,a=n[e],d=n[e].getElementsByClassName(runParamName);d[0].style.left="0px",MyMar=setInterval(function(){var e=d[0].style.left;a.offsetWidth<d[0].offsetWidth&&(parseInt(e)>-d[0].offsetWidth?d[0].style.left=parseInt(e)-1+"px":d[0].style.left="0px")},40)}function MessOpt(e,t,n,a,d,i){"run"==d&&i&&(runState=!0,runParamName=i),$("#now_page").html(e),$("#total_page").html(t);var l="number"==typeof a?a:"next"==n?0:modelIndex.pageSize-1;right.initialization(),"create"==n&&"number"!=typeof a||right.toggleFocus(l)}function modelInit(){modelIndex.crumbs&&modelIndex.crumbs.length&&TV.structure(modelIndex.crumbs,modelIndex.crumbStyle);var e=(new TV.CookieOpt).getOpt();e&&"{}"!=JSON.stringify(e)?(console.log(e),page=e.page,mainIndex=e.index,menuIndex=e.menuIndex,getMenus(e.leftPage,e.leftIndex),"number"!=typeof e.menuIndex||isNaN(e.menuIndex)||(console.log(e.menuIndex),menu.toggleFocus(e.menuIndex,e.index))):(getMenus(),cmsIndex.handle("left"))}cmsIndex.modules[cmsIndex.moduleGuid(cmsIndex.addModule())]={modName:"left",modNum:cmsIndex.moduleGuid(),map:{right:1,menu:2}};var left=cmsIndex.modules[cmsIndex.moduleGuid()].module=function(){var o={modName:"menuList",modNum:cmsIndex.moduleGuid()},m=modelIndex.index,a=modelIndex.structure?modelIndex.structure:1,r=modelIndex.menuPageSize,u=1,s=1,c=0,g=modelIndex.menuContainerId,I=modelIndex.menuListName;return o.paint=function(e,t){null!=e&&null!=t&&(u=e,m=t);var n=o,a="";s=parseInt(leftData.length%r==0?leftData.length/r:leftData.length/r+1);var d=(u-1)*r,i=leftData.slice(d,d+r);c=i.length;for(var l=0;l<i.length;l++)a+="<li data-id="+i[l].id+" class="+I+" type_style="+i[l].type_style+" data_content="+i[l].name+" data_size="+i[l].size+" list_name="+i[l].list_name,i[l].menuList&&i[l].menuList.length&&(a+=" data-isMenu=1"),i[l].is_cur&&(a+=" data-isCur=1"),i[l].rowHeight&&(a+=" data_rowHeight="+i[l].rowHeight),a+=">"+i[l].name+"</li>";return $("#"+g).html(a),n.toggleFocus(),n},o.toggleFocus=function(){var e=o,t=$("#"+g).children("."+I);for($("#"+modelIndex.mainContainerId).html(""),"volunteer"==modelIndex.id&&(leftData[m].menuList&&302==t[m].getAttribute("data-id")?($(".list-bg").addClass("bg-chage"),$("#menu_bg").css("display","block"),menu.paint(leftData[m].menuList,0)):($(".list-bg").removeClass("bg-chage"),$("#menu_bg").html(""),$("#menu_bg").css("display","none"))),modelIndex.menuKey&&(modelIndex.menuKey=""),i=0;i<c;i++)t[i].className=I;return 0<=m&&m<=c-1&&(t[m].className=t[m].className+" focus_menu"),e.initialization(),e},o.initialization=function(){var e=o;elem=$("#"+g).children("."+I);var t=elem[m].getAttribute("data-id");return modelIndex.type=elem[m].getAttribute("type_style"),modelIndex.rowHeight=elem[m].getAttribute("data_rowHeight"),modelIndex.mainlistName=elem[m].getAttribute("list_name"),modelIndex.pageSize=parseInt(elem[m].getAttribute("data_size")),leftPage=u,leftIndex=m,console.log(menuIndex),"number"!=typeof menuIndex||isNaN(menuIndex)||(modelIndex.menuKey=$("#menu_bg").children(".menu-list")[menuIndex].getAttribute("data-id")),getMessage(t,page,"create",mainIndex),mainIndex=null,page=1,e},o.moveOp=function(e){var t=o,n=0;if(menuIndex=null,!("down"==e&&2==a||"forwards"==e&&1==a))return"up"==e&&1==a||"backwards"==e&&2==a?--m<0&&1!=u?(m=r-1,u--,n=1):m<0&&1==u&&1<s?m=0:1==s&&m<0&&(m=c-1):"down"!=e&&"forwards"!=e||(++m==r&&s!=u?(u++,m=0,n=1):u==s&&m==c&&1<s?m=c-1:1==s&&m==c&&(m=0)),n?t.paint():t.toggleFocus(),t;if(modelIndex.mainlistName){if("volunteer"==modelIndex.id&&302==elem[m].getAttribute("data-id"))return cmsIndex.handle("menu"),void menu.toggleFocus(0);$("#"+modelIndex.mainContainerId).children("."+modelIndex.mainlistName).length?(result=cmsIndex.handle("right"),result.toggleFocus(0)):"forwards"==e&&"0"==modelIndex.type&&(result=cmsIndex.handle("right"),result.toggleFocus(0))}},o.action=function(e){var t=o;switch(e){case"enter":break;case"back":modelIndex.disModel?Utility.ioctlWrite("skyworthKey","Key2VOD"):history.go(-1)}return t},o.grabEvent=function(e){var t=o,n=TV.GetKey(e);return n.keyState&&"enter"!=n.keyState&&"back"!=n.keyState?t.moveOp(n.keyState):t.action(n.keyState),n.isBlock},o}();cmsIndex.modules[cmsIndex.moduleGuid(cmsIndex.addModule())]={modName:"right",modNum:cmsIndex.moduleGuid(),map:{left:0,menu:2}};var right=cmsIndex.modules[cmsIndex.moduleGuid()].module=function(){var l={modName:"pageList",modNum:cmsIndex.moduleGuid()},o=0,m=0,r=modelIndex.isLike,u=modelIndex.structure,s="1",c=0,g=1,I=1,x="",d="",f=1,h=modelIndex.rowHeight,p=modelIndex.mainContainerId;return l.cleanCSS=function(){var e=$("#"+p).children("."+d),t=$("#"+p).children(".cur");for(i=0;i<c;i++)e[i].className=d,t.length&&(t[i].className="cur")},l.toggleFocus=function(e){var t=l;if(null!=e&&(o=e),"0"==x){(n=$("#"+p))[o].className=n[o].className+" active"}else{var n=$("#"+p).children("."+d),a=$("#"+p+" .cur");for(i=0;i<c;i++)n[i].className=d,a.length&&(a[i].className="cur");"0"==s?a[o].className=a[o].className+" curActive":0<=o&&o<c&&(n[o].className=n[o].className+" active",1==runState&&(clearInterval(MyMar),timedCount(o,n))),m&&(m=0,t.cleanCSS())}return t},l.initialization=function(){var e=l;return d=modelIndex.mainlistName,f=modelIndex.pageSize,p=modelIndex.mainContainerId,g=parseInt(document.getElementById("now_page").innerHTML),I=parseInt(document.getElementById("total_page").innerHTML),c=$("#"+p).children("."+d).length,r=!!$(".focus_menu").attr("data-iscur"),x=modelIndex.type,h=modelIndex.rowHeight,e},l.moveOp=function(e){var t=l;if("0"==modelIndex.type){if("down"==e)TV.articleMove(e,modelIndex.thisContain,modelIndex.thisDetail);else if("up"==e)TV.articleMove(e,modelIndex.thisContain,modelIndex.thisDetail);else if("backwards"==e){clearInterval(articleRun),$("#"+p)[o].className=p,result=cmsIndex.handle("left"),result.toggleFocus(1)}}else if("sport"!=modelIndex.id||"279"!=$(".focus_menu")[0].getAttribute("data-id")||2!=o&&5!=o||"forwards"!=e){if("sport"!=modelIndex.id||"279"!=$(".focus_menu")[0].getAttribute("data-id")||-279!=o){var n=$(".focus_menu").attr("data-isMenu"),a=new TV.ListOperation({isMenu:n,type:x,direction:"left",structure:u,key:e,isLike:r,status:s,nowPage:g,totalPage:I,pageSize:f,length:c,index:o,rowHeight:h}).operation();if(o=a.index,s=a.status,""!=a.position){var d=$(".focus_menu").attr("data-id");getMessage(d,a.nowPage,a.position)}return a.direction&&(cmsIndex.handle(a.direction),"menu"==a.direction&&menu.toggleFocus(),m=1),l.toggleFocus(),t}$(".sport-img").removeClass("active"),"backwards"==e?(o=2,t.toggleFocus(2)):"up"==e&&cmsIndex.handle("left")}else t.cleanCSS(),$(".sport-img").addClass("active"),o=-279},l.action=function(e){var t=l;switch(e){case"back":modelIndex.disModel?Utility.ioctlWrite("skyworthKey","Key2VOD"):history.go(-1);break;case"enter":if(isCache){console.log(menuIndex);new TV.CookieOpt({index:o,page:g,leftPage:leftPage,leftIndex:leftIndex,menuIndex:"number"==typeof menuIndex?menuIndex:null}).setOpt()}var n=$(".focus_menu").attr("data-id");direEnter(s,n,o)}return t},l.grabEvent=function(e){var t=l,n=TV.GetKey(e);return n.keyState&&"enter"!=n.keyState&&"back"!=n.keyState?t.moveOp(n.keyState):t.action(n.keyState),n.isBlock},l}();cmsIndex.modules[cmsIndex.moduleGuid(cmsIndex.addModule())]={modName:"menu",modNum:cmsIndex.moduleGuid(),map:{left:0,right:1}};var menu=cmsIndex.modules[cmsIndex.moduleGuid()].module=function(){var d={modName:"menuList",modNum:cmsIndex.moduleGuid()},l=0,o=0,m="menu_bg",r="menu-list",u=!1,s=!1;return d.paint=function(e,t){var n=d;null!=t&&(l=t),str="",o=e.length;for(var a=0;a<e.length;a++)str+="<li data-id="+e[a].id+" data_content="+e[a].title+" class="+r+">"+e[a].title+"</li>";return $("#"+m).html(str),n},d.toggleFocus=function(e,t){var n=d;null!=e&&(l=e);var a=$("#"+m).children("."+r);for(i=0;i<o;i++)a[i].className=r;return 0<=l&&l<=o-1&&!u&&(a[l].className=a[l].className+" menu_active"),u||s||n.messageOpt(t),u&&(u=!u),s&&(s=!s),n},d.moveOp=function(e){var t=d;return 1==modelIndex.structure&&"backwards"==e||2==modelIndex.structure&&"up"==e?0<l?l--:(u=!0,cmsIndex.handle("left"),left.toggleFocus()):1==modelIndex.structure&&"forwards"==e||2==modelIndex.structure&&"down"==e?l<o-1&&l++:(1==modelIndex.structure&&"down"==e||2==modelIndex.structure&&"forwards"==e)&&$("#"+modelIndex.mainContainerId).children("."+modelIndex.mainlistName).length&&(s=!0,cmsIndex.handle("right"),right.toggleFocus(0)),menuIndex=l,t.toggleFocus(),t},d.action=function(e){var t=d;switch(e){case"back":history.go(-1)}return t},d.messageOpt=function(e){var t;"number"==typeof e&&(t=e);var n=d,a=$(".focus_menu").attr("data-id");return modelIndex.menuKey=$(".menu_active").attr("data-id"),getMessage(a,1,"create",t),n},d.grabEvent=function(e){var t=d,n=TV.GetKey(e);return n.keyState&&"enter"!=n.keyState&&"back"!=n.keyState?t.moveOp(n.keyState):t.action(n.keyState),n.isBlock},d}();$(window).unload(function(){modelIndex.isVideo&&mp&&mp.stop()}),cmsIndex.run();