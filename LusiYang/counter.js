var sc_width=screen.width;var sc_height=screen.height;var sc_referer=""+document.referrer;try{sc_referer=""+parent.document.referrer}catch(ex){sc_referer=""+document.referrer}var sc_unique=0;var sc_returning=0;var sc_returns=0;var sc_error=0;var sc_remove=0;var sc_cls=-1;var sc_inv=0;var sc_os="";var sc_title="";var sc_url="";var sc_base_dir="";var sc_click_dir="";var sc_link_back_start="";var sc_link_back_end="";var sc_security_code="";var sc_http_url="http";var sc_host="statcounter.com";var sc_dc="c";var sc_alt_text="StatCounter - Free Web Tracker and Counter";var sc_counter_size="";var sc_prerendering=0;var sc_uuid="";var sc_uuid_q="&u1=za";var sc_unique_returning="";var sc_sp="cookie";if(window.sc_client_storage){sc_sp=window.sc_client_storage}if(typeof window.sc_first_party_cookie!="undefined"&&sc_first_party_cookie=="0"){sc_sp="disabled"}var _statcounter_pending=_statcounter;var _statcounter={push:function(_1){}};if(window.sc_invisible){if(window.sc_invisible==1){sc_inv=1}}if(window.sc_click_stat){sc_cls=window.sc_click_stat}sc_doc_loc=""+document.location;myRE=new RegExp("^https","i");if(sc_doc_loc.match(myRE)){sc_http_url="https"}if(window.sc_local){sc_base_dir=sc_local}else{if(sc_cls==-1){sc_cls=1}sc_base_dir=sc_http_url+"://"+sc_dc+"."+sc_host+"/"}sc_click_dir=sc_base_dir;if(window.sc_counter_target){sc_base_dir+=window.sc_counter_target+"?"}else{if(window.sc_text){sc_base_dir+="text.php?"}else{sc_base_dir+="t.php?"}}if(window.sc_project){if(sc_project=="4135125"||sc_project=="6169619"||sc_project=="6222332"||sc_project=="5106510"||sc_project=="6311399"||sc_project=="6320092"||sc_project=="5291656"||sc_project=="7324465"||sc_project=="6640020"||sc_project=="4629288"||sc_project=="1480088"||sc_project=="2447031"){if(Math.floor(Math.random()*6)!=1){sc_remove=1}}sc_base_dir+="sc_project="+sc_project}else{if(window.usr){sc_base_dir+="usr="+usr}else{sc_error=1}}if(window.sc_remove_link){sc_link_back_start="";sc_link_back_end=""}else{sc_link_back_start="<a class=\"statcounter\" href=\"http://www."+sc_host+"\" target=\"_blank\">";sc_link_back_end="</a>"}sc_date=new Date();sc_time=sc_date.getTime();sc_time_difference=3600000;sc_title=""+document.title;sc_url=""+document.location;sc_title=sc_title.substring(0,300);sc_url=sc_url.substring(0,300);if(encodeURIComponent){sc_title=encodeURIComponent(sc_title)}else{sc_title=escape(sc_title)}sc_url=escape(sc_url);if(window.sc_security){sc_security_code=sc_security}if(sc_script_num){sc_script_num++}else{var sc_script_num=1}if(typeof _sc_imgs=="undefined"){var _sc_imgs={}}var sc_pageview_tag_string="";(function(_2,_3,_4,_5){if(sc_remove!=1){if(document.webkitVisibilityState!="prerender"){sc_prerendering=0}else{sc_prerendering=1;document.addEventListener("webkitvisibilitychange",function(_6){if(sc_prerendering==1){sc_prerendering=2;sc_send_data()}else{return}},false)}}var _7=parseInt(sc_project,10);var _8=_7==9560334||_7==6709687||_7==9879613||_7==4124138||_7==204609||_7==10776808;var _9=(_8||(9993602<_7&&_7<=10056047)||_7>10128785);if(window.sc_project&&_9){try{var _a=Math.pow(_3,_4),_b=Math.pow(2,_5),_c=_b*2,_d=_3-1;var _e;var _f=function(_10,_11){var key=[];var _13=mixkey(flatten(_11?[_10,tostring(_2)]:0 in arguments?_10:autoseed(),3),key);var _14=new ARC4(key);mixkey(tostring(_14.S),_2);_e=function(){var n=_14.g(_4),d=_a,x=0;while(n<_b){n=(n+x)*_3;d*=_3;x=_14.g(1)}while(n>=_c){n/=2;d/=2;x>>>=1}return (n+x)/d};return _13};function ARC4(key){var t,_1a=key.length,me=this,i=0,j=me.i=me.j=0,s=me.S=[];if(!_1a){key=[_1a++]}while(i<_3){s[i]=i++}for(i=0;i<_3;i++){s[i]=s[j=_d&(j+key[i%_1a]+(t=s[i]))];s[j]=t}(me.g=function(_1f){var t,r=0,i=me.i,j=me.j,s=me.S;while(_1f--){t=s[i=_d&(i+1)];r=r*_3+s[_d&((s[i]=s[j=_d&(j+t)])+(s[j]=t))]}me.i=i;me.j=j;return r})(_3)}function flatten(obj,_23){var _24=[],typ=(typeof obj)[0],_26;if(_23&&typ=="o"){for(_26 in obj){try{_24.push(flatten(obj[_26],_23-1))}catch(e){}}}return (_24.length?_24:typ=="s"?obj:obj+"\x00")}function mixkey(_27,key){var _29=_27+"",_2a,j=0;while(j<_29.length){key[_d&j]=_d&((_2a^=key[_d&j]*19)+_29.charCodeAt(j++))}return tostring(key)}function autoseed(_2c){try{window.crypto.getRandomValues(_2c=new Uint8Array(_3));return tostring(_2c)}catch(e){return [+new Date,window,window.navigator.plugins,window.screen,tostring(_2)]}}function tostring(a){return String.fromCharCode.apply(0,a)}mixkey(Math.random(),_2);function _localStorageAvailable(){if(!(_8||_7>10588481)){return false}var _2e=false;if("localStorage" in window){try{_2e=window["localStorage"]!==null}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){if(!e.number||parseInt(e.number,10)!==-2147024891){throw e}}}}return _2e}function _setLocalStorage(_2f,_30,_31,_32){if(_localStorageAvailable()){try{if(_2f==="is_visitor_unique"){localStorage.setItem("statcounter.com/localstorage/",_30)}else{localStorage.setItem("statcounter_"+_2f,_30)}}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){if(!e.number||parseInt(e.number,10)!==-2147024891){throw e}}return false}return true}return false}function setLocal(_33,_34,_35,_36){var _37=_setLocalStorage(_33,_34,_35,_36);if(_37){if(_readCookie(_33)!==null){_removeCookie(_33,_35)}return true}return _writeCookie(_33,_34,_35,_36)}function getLocal(_38){var val=null;if(_localStorageAvailable()){if(_38==="is_visitor_unique"){val=localStorage.getItem("statcounter.com/localstorage/")}else{val=localStorage.getItem("statcounter_"+_38)}}if(sc_sp=="localStorage"&&val!==null&&val.substring(0,2)=="rx"){return val}var _3a=_readCookie(_38);if(val!==null){if(_3a===null&&val.substring(0,2)=="rx"){return val}else{if(_3a!==null&&val.substring(0,2)=="mx"){_3a+="-"+val.substring(2)}}}return _3a}function _removeLocalStorage(_3b){if(_localStorageAvailable()){if(_3b==="is_visitor_unique"){localStorage.removeItem("statcounter.com/localstorage/")}localStorage.removeItem("statcounter_"+_3b)}}function removeLocal(_3c,_3d){_removeLocalStorage(_3c);if(_readCookie(_3c)){_removeCookie(_3c,_3d)}}function _readCookie(_3e){var _3f="sc_"+_3e+"=";if(document.cookie){var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" "){c=c.substring(1,c.length)}if(c.indexOf(_3f)==0){return c.substring(_3f.length,c.length)}}}return null}function _writeCookie(_43,_44,_45,_46){if(_46===undefined){var _47=1000*60*60*24*365*2}else{var _47=1000*_46}expiration=new Date();expiration.setTime(expiration.getTime()+_47);var _48=3050;if(_44.length>_48-50&&_44.substring(0,_48).indexOf("-")!==-1){_44=_44.substring(0,_44.substring(0,_48).lastIndexOf("-"))}document.cookie="sc_"+_43+"="+_44+"; expires="+expiration.toGMTString()+"; domain="+_45+"; path=/";if(_readCookie(_43)!==null){return true}else{return false}}function _removeCookie(_49,_4a){document.cookie="sc_"+_49+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+_4a+"; path=/"}function detectBrowserFeatures(){var _4b=[];var i;var _4d;var _4e={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};var _4f=(new RegExp("Mac OS X.*Safari/")).test(navigator.userAgent)?window.devicePixelRatio||1:1;if(!((new RegExp("MSIE")).test(navigator.userAgent))){if(navigator.mimeTypes&&navigator.mimeTypes.length){for(i in _4e){if(Object.prototype.hasOwnProperty.call(_4e,i)){_4d=navigator.mimeTypes[_4e[i]];_4b.push((_4d&&_4d.enabledPlugin)?"1":"0")}}}if(typeof navigator.javaEnabled!=="unknown"&&typeof navigator.javaEnabled!=="undefined"&&navigator.javaEnabled()){_4b.push("java")}if(typeof window.GearsFactory==="function"){_4b.push("gears")}}_4b.push(screen.width*_4f+"x"+screen.height*_4f);return _4b.join("")}function generate_uuid(){var now=new Date();var _51=false;var _52=32;if(_51){_52=36}var _53=Math.round(now.getTime()/1000)+now.getMilliseconds();var _54=(navigator.userAgent||"")+(navigator.platform||"")+detectBrowserFeatures()+now.getTimezoneOffset()+window.innerWidth+window.innerHeight+window.screen.colorDepth+document.URL+_53;_f(_54);var _55="0123456789ABCDEF".split(""),_56=new Array(_52),rnd=0,r;for(var i=0;i<_52;i++){if(_51&&(i==8||i==13||i==18||i==23)){_56[i]="-"}else{if((i==12&&!_51)||(i==14&&_51)){_56[i]="4"}else{if((i==13&&!_51)||(i==15&&_51)){_56[i]="F"}else{if(rnd<=2){rnd=33554432+(_e()*16777216)|0}r=rnd&15;rnd=rnd>>4;_56[i]=_55[(i==19)?(r&3)|8:r]}}}}return _56.join("")}if(sc_sp!="disabled"){var _5a="1.1.1.1.1.1.1.1.1";if(typeof window.sc_cookie_domain=="undefined"){var _5b=window.location.host}if(_5b.substring(0,1)!="."){_5b="."+_5b}var _5c="is_visitor_unique";var _5d=Math.round((new Date()).getTime()/1000);try{var _5e=getLocal(_5c)}catch(e){var _5e=false;sc_uuid=".ex"}var _5f="";if(_5e&&_5e.substring(0,2)=="rx"){removeLocal(_5c,_5b);var _60=_5e.substring(2);var _61=_60.split("-");var _62=new Array();var _63=false;var _64=false;for(var i=0;i<_61.length;i++){var _66=_61[i].split(".");if(_66[0]==sc_project){_63=true;var _67=parseInt(_66[1],10);var _68=[30,60,120,180,360,720,1440,2880,10080];var _69=[];var _6a=2;if(_66[2].length==32){sc_uuid="."+_66[2];_6a=3}else{sc_uuid=_64}for(var ir=0;ir<_68.length;ir++){var _6c=parseInt(_66[ir+_6a],10);if(isNaN(_6c)){_6c=1}_69.push(_6c)}sc_unique_returning+="&jg="+(_5d-_67);for(var ir=0;ir<_68.length;ir++){if(_5d>(_67+60*_68[ir])){_69[ir]++}}sc_unique_returning+="&rr="+_69.join(".");_62.push(sc_project+"."+_5d+sc_uuid+"."+_69.join("."))}else{_62.push(_61[i]);if(i==0&&_66[2].length==32&&sc_uuid==""){sc_uuid="."+_66[2]}}if(i==0){_64=sc_uuid}}if(!_63){if(_62.length==0&&sc_uuid==""){sc_uuid="."+generate_uuid()}_62.push(sc_project+"."+_5d+sc_uuid+"."+_5a);sc_unique_returning+="&jg=new&rr="+_5a}_62.sort(function(a,b){return parseInt(b.split(".")[1],10)-parseInt(a.split(".")[1],10)});for(var iv=1;iv<_62.length;iv++){_62[iv]=_62[iv].replace("."+_62[0].split(".")[2]+".",".")}if(sc_sp=="localStorage"){var _70=_setLocalStorage(_5c,"rx"+_62.join("-"),_5b);if(!_70){_writeCookie(_5c,"rx"+_62.join("-"),_5b,longevity_secs)}else{if(_readCookie(_5c)!==null){_removeCookie(_5c,_5b)}}}else{var _71=3;_5f=_62.slice(0,_71).join("-");var _72=_writeCookie(_5c,"rx"+_5f,_5b);if(!_72){_setLocalStorage(_5c,"rx"+_62.join("-"),_5b)}else{if(_62.length>_71){_setLocalStorage(_5c,"mx"+_62.slice(_71).join("-"),_5b)}else{_removeLocalStorage(_5c)}}}}else{if(sc_uuid!=".ex"){sc_uuid="."+generate_uuid();_5f=sc_project+"."+_5d+sc_uuid+"."+_5a;var _73=setLocal(_5c,"rx"+_5f,_5b);if(_73){sc_unique_returning+="&jg=new&rr="+_5a}else{sc_uuid=".na"}}}if(sc_uuid!=""){sc_uuid_q="&u1="+sc_uuid.substring(1)}}}catch(e){if(_8){if(typeof encodeURIComponent!="function"){encodeURIComponent=function(s){return escape(s)}}var _75="";_75+="unique_returning: "+sc_unique_returning+"\n";_75+="uuid: "+sc_uuid+"\n";_75+="sc_cookie_value: "+_5f+"\n";for(var _76 in e){_75+="property: "+_76+" value: ["+e[_76]+"]\n"}_75+="toString(): "+" value: ["+e.toString()+"]\n";var _77=new Image();_77.src="http://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(document.location.protocol+"//"+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+sc_project+"&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20"+encodeURIComponent(_75)}sc_unique_returning="";sc_uuid_q="&u1=f2"}}function _78(obj,_7a){var _7b=obj.__proto__||obj.constructor.prototype;return (_7a in obj)&&(!(_7a in _7b)||_7b[_7a]!==obj[_7a])}if(Object.prototype.hasOwnProperty){var _78=function(obj,_7d){return obj.hasOwnProperty(_7d)}}function _sc_strip_tags(_7e,_7f){_7f=(((_7f||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var _80=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,_81=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return _7e.replace(_81,"").replace(_80,function($0,$1){return _7f.indexOf("<"+$1.toLowerCase()+">")>-1?$0:""})}function _sc_validateTags(_84){var _85=5;var _86=1;var _87=300;var _88=[];if(!(_84.length%2==0)){_88.push("Every tag must have a name and value.")}else{if(_84.length/2>_85){_88.push("No more than "+_85+" tags can be passed - "+_84.length/2+" passed.")}for(i=0;i<_84.length;i++){var _89=(""+_84[i]).length;if(_89<_86||_89>_87){_88.push("Tag names and values must be between "+_86+" and "+_87+" characters in length ('"+_84[i]+"' is "+_84[i].length+" characters long).")}}for(i=0;i<_84.length;i++){if(_sc_strip_tags(""+_84[i])!=""+_84[i]){_88.push("Tag names and values may not contain HTML tags.")}}}if(_88.length!=0){for(i=0;i<_88.length;i++){}return false}return true}function _sc_sanitiseTags(_8a){for(i=0;i<_8a.length;i++){_8a[i]=(""+_8a[i]).trim()}return _8a}if(Object.prototype.toString.call(_statcounter_pending)==="[object Array]"){var _8b=_statcounter_pending.length;if(_8b>=1){if(_78(_statcounter_pending[0],"tags")){var _8c=[];for(var tag in _statcounter_pending[0]["tags"]){_8c[_8c.length]=tag;_8c[_8c.length]=_statcounter_pending[0]["tags"][tag]}if(_sc_validateTags(_8c)){_8c=_sc_sanitiseTags(_8c);for(i=0;i<_8c.length;i=i+2){sc_pageview_tag_string+="&sc_ev_"+encodeURIComponent(_8c[i])+"="+encodeURIComponent(_8c[i+1])}}}}}function classify_referrer(r){if(r==""){return "d"}if(r.search(/\bgoogle\..*\?.*adurl=http/)!==-1){return "p"}var _8f=["utm_source=bing","gclid=","utm_medium=cpc","utm_medium=paid-media","utm_medium=ppc","aclk?","cid="];for(var i=0;i<_8f.length;i++){if(document.location.search.indexOf(_8f[i])!==-1){return "p"}}var _91=["utm_medium=email"];for(var i=0;i<_91.length;i++){if(document.location.search.indexOf(_91[i])!==-1){return "p"}}var _92=r.split("/")[2];if(document.location.host==_92){return "internal"}var _93={"google":null,"bing":["q"],"search.yahoo":null,"m.yahoo":null,"m2.yahoo":null,"baidu":["wd","word"],"yandex":["text"],"ya.ru":["text"],"haosou":["q"],"so.com":["q"],"360.cn":["q"],"360sou":["q"],"aol":["query","q"],"duckduckgo":null,"ask.com":["q","QUERYT"],"mail.ru":["words"],"sogou":["q","query"]};for(var _94 in _93){if(_92.replace(_94,"#").split(".").indexOf("#")!==-1){if(_93[_94]===null){return "o"}for(var i=0;i<_93[_94].length;i++){var _95=_93[_94][i];if(r.indexOf("?"+_95+"=")!==-1||r.indexOf("&"+_95+"=")!==-1){return "o"}}}}var _96={"fb":["facebook.com","fb.me"],"pi":["pinterest.com"],"tw":["twitter.com","t.co"],"ln":["linkedin.com"],"gp":["plus.google.com","plus.url.google.com"]};for(var _97 in _96){for(var i=0;i<_96[_97].length;i++){var _94=_96[_97][i];if(_92.replace(_94,"#").split(".").indexOf("#")!==-1){return _97}}}return "r"}var _98=classify_referrer(sc_referer);var _99="";if(_98!="internal"){_99="&srn="+_98}if(sc_sp!="disabled"){try{var _9a=JSON.parse(localStorage.getItem("statcounter_medium_source"));if(_9a==null){_9a={}}var _9b=null;for(var k in _9a){if(_9b===null||_9a[k]>_9a[_9b]){_9b=k}}if(_98=="internal"){_99="&sro="+_9b;_99+="&srg="+(_5d-_9a[_9b])}else{if(_98 in _9a){_99+="&srg="+(_5d-_9a[_9b])}else{_99+="&srg=new"}_9a[_98]=_5d;try{localStorage.setItem("statcounter_medium_source",JSON.stringify(_9a))}catch(ignore){}}}catch(ignore){}}sc_base_dir+="&java=1&security="+sc_security_code+sc_uuid_q;var _9d=sc_unique_returning+"&resolution="+sc_width+"&h="+sc_height+"&camefrom="+escape(sc_referer.substring(0,600))+"&u="+sc_url+"&t="+sc_title+_99+"&sc_snum="+sc_script_num+sc_pageview_tag_string;if(window.sc_counter_width&&window.sc_counter_height){sc_counter_size=" width=\""+sc_counter_width+"\" height=\""+sc_counter_height+"\""}if(window.sc_remove_alt){sc_alt_text=""}if(sc_error==1){document.writeln("Code corrupted. Insert fresh copy.")}else{if(sc_remove==1){}else{sc_send_data()}}function sc_send_data(){if(sc_inv==1||sc_prerendering==2){_9d+="&p="+sc_prerendering+"&invisible=1";if(window.sc_call){sc_call++}else{sc_call=1}var _9e=false;if(sc_uuid!=""&&typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&"sessionStorage" in window&&_9){_9e=true}var _9f=false;if(_9e){try{var _a0=sessionStorage.getItem("statcounter_pending");if(!_a0){var _a1={}}else{try{var _a1=JSON.parse(_a0)}catch(ignore){var _a1={}}}if(_a1[sc_project]===undefined){_a1[sc_project]={}}var now=new Date().getTime();_a1[sc_project][now]=_9d;while(true){_a0=JSON.stringify(_a1);if(_a0=="{}"){sessionStorage.removeItem("statcounter_pending");break}var _a3=_a0.split(/:.{20}/).length-1;if(_a3<20){var _a4=true;try{sessionStorage.setItem("statcounter_pending",_a0)}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){throw e}_a4=false}if(_a4){break}}var _a5=false;var _a6=false;var _a7=false;for(var _a8 in _a1){for(var _a9 in _a1[_a8]){var _aa=/jg=(\d+)/.exec(_a1[_a8][_a9]);if(_aa!==null){var _ab=parseInt(_aa[1])}else{var _ab=false}if(_a5===false||(_ab!==false&&_ab<_a5)){if(_ab!==false){_a5=_ab}_a6=_a8;_a7=_a9}}}if(_a7===false){break}delete _a1[_a6][_a7];if(JSON.stringify(_a1[_a6])=="{}"){delete _a1[_a6]}}for(var ts in _a1[sc_project]){(function(_ad,_ae){var _af=_a1[_ae][_ad];_sc_imgs[sc_call+"."+_ad]=new Image();_sc_imgs[sc_call+"."+_ad].onload=function(){var _b0=JSON.parse(sessionStorage.getItem("statcounter_pending"));delete _b0[_ae][_ad];if(JSON.stringify(_b0[_ae])=="{}"){delete _b0[_ae]}var _b1=JSON.stringify(_b0);if(_b1=="{}"){sessionStorage.removeItem("statcounter_pending")}else{sessionStorage.setItem("statcounter_pending",_b1)}};if(_ad!=now){_af+="&pg="+Math.round((now-_ad)/1000)}else{_9f=true}_sc_imgs[sc_call+"."+_ad].src=sc_base_dir+"&sc_random="+Math.random()+_af})(parseInt(ts,10),sc_project)}}catch(e){if(_8){if(typeof encodeURIComponent!="function"){encodeURIComponent=function(s){return escape(s)}}var _b3="";for(var _b4 in e){_b3+="e["+_b4+"]: "+e[_b4]+"\n"}_b3+="unique_returning: "+sc_unique_returning+"\n";_b3+="uuid: "+sc_uuid+"\n";_b3+="toString(): "+" value: ["+e.toString()+"]\n";var _b5=new Image();_b5.src="http://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(document.location.protocol+"//"+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+sc_project+"&fake_post&user_company&feedback=pending%20exception:%20"+encodeURIComponent(_b3)}}}if(!_9e||!_9f){_sc_imgs[sc_call]=new Image();_sc_imgs[sc_call].src=sc_base_dir+"&sc_random="+Math.random()+_9d}}else{var _b6=sc_base_dir+"&sc_random="+Math.random()+_9d+"&p="+sc_prerendering;_b6=_b6.replace(/&/g,"&amp;");if(window.sc_text){document.writeln("<scr"+"ipt"+" src="+_b6+"&amp;text="+sc_text+"></scr"+"ipt>")}else{document.writeln("<span class=\"statcounter\">"+sc_link_back_start+"<img src=\""+_b6+"\" alt=\""+sc_alt_text+"\" border=\"0\""+sc_counter_size+">"+sc_link_back_end+"</span>")}}}})([],256,6,52);if(sc_cls>0){if(clickstat_done!=1){var clickstat_done=1;var clickstat_project=window.sc_project;var clickstat_security=window.sc_security_code;var dlext="7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";if(typeof (window.sc_download_type)=="string"){dlext=window.sc_download_type}var ltype="https?|ftp|telnet|ssh|ssl|mailto|spotify|tel";var second="ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";var dl=new RegExp("\\.("+dlext+")$","i");var lnk=new RegExp("^("+ltype+"):","i");var domsec=new RegExp("^("+second+")$","i");var host_name=location.host.replace(/^www\./i,"");var host_splitted=host_name.split(".");var domain=host_splitted.pop();var host_split=host_splitted.pop();if(domsec.test(host_split)){domain=host_split+"."+domain;host_split=host_splitted.pop()}domain=host_split+"."+domain;var lnklocal_mask="^https?://(.*)("+domain+"|webcache.googleusercontent.com)";var lnklocal=new RegExp(lnklocal_mask,"i");if(document.getElementsByTagName){var anchors=document.getElementsByTagName("a");for(var i=0;i<anchors.length;i++){var anchor=anchors[i];if(anchor.onmousedown){var original_click=anchor.onmousedown;var s=original_click.toString().split("\n").join(" ");var bs=s.indexOf("{");var head=s.substr(0,bs);var ps=head.indexOf("(");var pe=head.indexOf(")");var params=head.substring(ps+1,pe);var plist=params.split(",");var body=s.substr(bs+1,s.length-bs-2);var insert="sc_clickstat_call(this,'"+sc_click_dir+"');";var final_body=insert+body;var ev_head="new Function(";var ev_params="";var ev_sep="";for(var sc_i=0;sc_i<plist.length;sc_i++){ev_params=ev_sep+"'"+plist[sc_i]+"'";ev_sep=","}if(ev_sep==","){ev_params+=","}var ev_foot="final_body);";var ev_final=ev_head+ev_params+ev_foot;anchor.onmousedown=eval(ev_final)}else{anchor.onmousedown=new Function("event","sc_clickstat_call(this,'"+sc_click_dir+"');return true;")}}}function sc_none(){return}function sc_delay(){if(window.sc_click_stat){var d=window.sc_click_stat}else{var d=0}var n=new Date();var t=n.getTime()+d;while(n.getTime()<t){var n=new Date()}}function sc_clickstat_call(_ba,_bb){if(_ba){var _bc=0;if(lnk.test(_ba)){if((lnklocal.test(_ba))){if(dl.test(_ba)){_bc=1}else{if(window.sc_exit_link_detect&&new RegExp(sc_exit_link_detect,"i").test(_ba)){_bc=2}else{if(sc_cls==2){_bc=2}}}}else{_bc=2}}if(_bc!=0){var _bd=escape(_ba);if(_bd.length>0){if(sc_unique_returning==""){sc_unique_returning="&jg=&rr="}var _be=_bb+"click.gif?sc_project="+clickstat_project+"&security="+clickstat_security+"&c="+_bd+"&m="+_bc+"&u="+sc_url+"&t="+sc_title+"&rand="+Math.random()+sc_uuid_q+sc_unique_returning;var _bf=new Image();_bf.onload=sc_none;_bf.src=_be;sc_delay()}}}}var sc_gsyn_pattern="googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";var sc_gsyn_pattern2="^aswift_[0-9]+$";var sc_px;var sc_py;function sc_adsense_click(_c0){if(_c0.src.match(sc_gsyn_pattern)){var _c1=escape(_c0.src)}else{var _c1=escape("Google Adsense "+_c0.width+"x"+_c0.height)}var i=new Image();var _c3=sc_click_dir+"click.gif?sc_project="+clickstat_project+"&security="+clickstat_security+"&c="+_c1+"&m=2&u="+sc_url+"&t="+sc_title+"&rand="+Math.random()+sc_uuid_q+sc_unique_returning;i.src=_c3;sc_delay()}function sc_adsense_init(){if(document.all&&typeof window.opera=="undefined"){var el=document.getElementsByTagName("iframe");for(var i=0;i<el.length;i++){if(el[i].src.match(sc_gsyn_pattern)||el[i].id.match(sc_gsyn_pattern2)){el[i].onfocus=function(){sc_adsense_click(this)}}}}else{if(typeof window.addEventListener!="undefined"){window.addEventListener("unload",sc_exitpage,false);window.addEventListener("mousemove",sc_getmouse,true)}}}if(typeof window.addEventListener!="undefined"){window.addEventListener("load",sc_adsense_init,false)}else{if(typeof document.addEventListener!="undefined"){document.addEventListener("load",sc_adsense_init,false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",sc_adsense_init)}else{if(typeof window.onload=="function"){var sc_existing=onload;window.onload=function(){sc_existing();sc_adsense_init()}}else{window.onload=sc_adsense_init}}}}function sc_getmouse(e){if(typeof e.pageX=="number"){sc_px=e.pageX;sc_py=e.pageY}else{if(typeof e.clientX=="number"){sc_px=e.clientX;sc_py=e.clientY;if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){sc_px+=document.body.scrollLeft;sc_py+=document.body.scrollTop}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){sc_px+=document.documentElement.scrollLeft;sc_py+=document.documentElement.scrollTop}}}}}function sc_findy(obj){var y=0;while(obj){y+=obj.offsetTop;obj=obj.offsetParent}return (y)}function sc_findx(obj){var x=0;while(obj){x+=obj.offsetLeft;obj=obj.offsetParent}return (x)}function sc_exitpage(e){ad=document.getElementsByTagName("iframe");if(typeof sc_px=="undefined"){return}for(var i=0;i<ad.length;i++){var _cd=sc_findx(ad[i]);var _ce=sc_findy(ad[i]);var adW=parseInt(_cd,10)+parseInt(ad[i].width,10)+15;var adH=parseInt(_ce,10)+parseInt(ad[i].height,10)+10;var _d1=(sc_px>(_cd-10)&&sc_px<adW);var _d2=(sc_py>(_ce-10)&&sc_py<adH);if(_d2&&_d1){if(ad[i].src.match(sc_gsyn_pattern)||ad[i].id.match(sc_gsyn_pattern2)){sc_adsense_click(ad[i])}}}}}}