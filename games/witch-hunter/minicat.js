function gCCh(){const e=localStorage.getItem("chosenCharacter");if(!e)return null;switch(e){case"Charles Borromeo":return charlesBorromeo;case"Heinrich Kramer":return heinrichKramer;case"Jacob Sprenger":return jacobSprenger;case"Matthew Hopkins":return matthewHopkins;case"Samuel Parris":return samuelParris;default:return null}}var p=gCCh();function died(){fF(),dgEsA("catText","text","value: Better luck next time! ; align: center; color: red; wrapCount: 20"),dgEsA("catYesButton","visible",!1),dgEsA("catNoButton","visible",!1)}function ww(){fF(),scc("Get more about witches on the GitHub page!","","","",!1,"catPoster"),dgEsA("catYesButton","visible",!1),dgEsA("catNoButton","visible",!1)}function jjd(){JJ.health<=0?scc(JJ.name+" has been defeated!","sc2","Next witch","Rest",!1,"catPoster"):abtn(),chkw()}function whpc(e){return h=e.health-p.charisma,dgEsA("catText","text",`value: You've weakened ${e.name}! Her health is now ${h}. ; align: center; color: red; wrapCount: 20`),hp(e),md(),Math.max(0,h)}function whpt(e){return h=e.health-p.torture,dgEsA("catText","text",`value: You've weakened ${e.name}! Her health is now ${h}. ; align: center; color: red; wrapCount: 20`),hp(e),md(),Math.max(0,h)}function abtn(){dgEsA("catYesButton","text","value: Blame again! ; align: center; color: white; wrapCount: 8"),dgEsA("catNoButton","text","value: Torture! ; align: center; color: white; wrapCount: 8")}function chkw(){AW.health<=0&&EP.health<=0&&JJ.health<=0&&(dgEsA("catText","class","w"),dgEsA("catText","text","value: You have defeated all the witches! You are the hunter! ; align: center; color: red; wrapCount: 20"),dgEsA("catYesButton","text","value: More witches ; align: center; color: white; wrapCount: 8"))}function md(){p.health<=0&&(fF(),dgEsA("catText","class","go"),dgEsA("catText","text","value: You died! Game over! ; align: center; color: red; wrapCount: 20"))}function awd(e){AW.health<=0?scc(AW.name+" has been defeated!",e,"Next witch","Rest",!1,"catPoster"):abtn(),chkw()}function hp(e){p.health-=e.attack,p.health=Math.max(0,p.health)}function scc(e,t,a,n,c,o){c?fO():fF(),dgEsA("catText","class",t),dgEsA("catText","text","value: "+e+" ; align: center; color: red; wrapCount: 20"),dgEsA("talkingCatPoster","material","src: #"+o+"; color: #046de7"),dgEsA("catYesButton","text","value: "+a+" ; align: center; color: white; wrapCount: 8"),dgEsA("catNoButton","text","value: "+n+" ; align: center; color: white; wrapCount: 8"),p=gCCh()}function fep(){fO(),EP.health=whpc(EP),EP.health<=0?scc(EP.name+" has been defeated!","sc1","Next witch","Rest",!1,"catPoster"):abtn(),chkw()}function fO(){const e=dq("a-scene"),t=sA(dcE("a-light"),[["type","ambient"],["color","#050d1a"],["intensity","0.3"]]);e.appendChild(t);const a=sA(dcE("a-light"),[["type","directional"],["color","#8090a6"],["intensity","0.1"],["position","-1 2 -0.5"]]);e.appendChild(a),e.setAttribute("fog",{type:"exponential",color:"#050d1a",near:1,far:30,density:.2});const n=dq("a-sky");n&&n.parentNode.removeChild(n);const c=document.createElement("a-sky");c.setAttribute("color","#050d1a"),e.appendChild(c)}function fF(){const e=dq("a-scene");e.removeAttribute("fog");const t=dq('a-light[type="ambient"]'),a=dq('a-light[type="directional"]');t&&e.removeChild(t),a&&e.removeChild(a);const n=sA(dcE("a-light"),[["type","ambient"],["color","#ffffff"],["intensity","0.8"]]);e.appendChild(n);const c=sA(dcE("a-light"),[["type","directional"],["color","#ffffff"],["intensity","0.6"],["position","1 1 1"]]);e.appendChild(c);const o=dq("a-sky");if(o)o.setAttribute("color","#87ceeb");else{const t=document.createElement("a-sky");t.setAttribute("color","#87ceeb"),e.appendChild(t)}}document.addEventListener("DOMContentLoaded",(function(){dq("#cat").addEventListener("click",(function(){}));dq("#catYesButton").addEventListener("click",(function(){const e=document.getElementById("catText").getAttribute("class");"sc1"==e?scc("Not all witches are the same!","f1",AW.name,JJ.name,!0,"catPoster"):"sch1"==e?scc("You look... troubled, hunter.","sc1","Hunt!","Get heal",!1,"catPoster"):"sc2"==e?scc("Ready to face a witch?","f2",EP.name,AW.name,!1,"catPoster"):"f2"==e?scc(EP.name+": Austrian, who bewitched children!","fep","Blame!","Torture!",!0,"elizabethplainacherPoster"):"f1"==e?scc(AW.name+": English baby killer.","faw","Blame!","Torture!",!0,"agneswaterhousePoster"):"fjj"==e?(fO(),JJ.health=whpc(JJ),jjd()):"fep"==e?fep():"faw"==e?(fO(),AW.health=whpc(AW),awd("sc1")):"w"==e?ww():"go"==e&&died()}));dq("#catNoButton").addEventListener("click",(function(){const e=document.getElementById("catText").getAttribute("class");"sc1"==e?scc("Do you need strength in battle?","sch1","sharpened edge","healing potion",!1,"catPoster"):"sch1"==e?scc("You look... troubled.","sc1","Hunt!","Get heal",!1,"catPoster"):"f1"==e?scc(JJ.name+": Burgomaster of Bamberg, accused of witchcraft.","fjj","Blame!","Torture!",!0,"johannesjuniusPoster"):"fep"==e?fep():"faw"==e?(fO(),AW.health=whpt(AW),awd("sc2")):"fjj"==e?(fO(),JJ.health=whpt(JJ),jjd()):"w"==e?ww():"go"==e&&died()}))}));