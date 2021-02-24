gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDBG_95lvl0Objects1= [];
gdjs.MainMenuCode.GDBG_95lvl0Objects2= [];
gdjs.MainMenuCode.GDFadeInObjects1= [];
gdjs.MainMenuCode.GDFadeInObjects2= [];
gdjs.MainMenuCode.GDLevelsObjects1= [];
gdjs.MainMenuCode.GDLevelsObjects2= [];
gdjs.MainMenuCode.GDEndlessObjects1= [];
gdjs.MainMenuCode.GDEndlessObjects2= [];
gdjs.MainMenuCode.GDAchievementsObjects1= [];
gdjs.MainMenuCode.GDAchievementsObjects2= [];
gdjs.MainMenuCode.GDOptionsObjects1= [];
gdjs.MainMenuCode.GDOptionsObjects2= [];
gdjs.MainMenuCode.GDTtileObjects1= [];
gdjs.MainMenuCode.GDTtileObjects2= [];
gdjs.MainMenuCode.GDVersionObjects1= [];
gdjs.MainMenuCode.GDVersionObjects2= [];
gdjs.MainMenuCode.GDCreditsObjects1= [];
gdjs.MainMenuCode.GDCreditsObjects2= [];
gdjs.MainMenuCode.GDHSObjects1= [];
gdjs.MainMenuCode.GDHSObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition3IsTrue_0 = {val:false};
gdjs.MainMenuCode.conditionTrue_1 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition3IsTrue_1 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDLevelsObjects1Objects = Hashtable.newFrom({"Levels": gdjs.MainMenuCode.GDLevelsObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDEndlessObjects1Objects = Hashtable.newFrom({"Endless": gdjs.MainMenuCode.GDEndlessObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDAchievementsObjects1Objects = Hashtable.newFrom({"Achievements": gdjs.MainMenuCode.GDAchievementsObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOptionsObjects1Objects = Hashtable.newFrom({"Options": gdjs.MainMenuCode.GDOptionsObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDCreditsObjects1Objects = Hashtable.newFrom({"Credits": gdjs.MainMenuCode.GDCreditsObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11175876);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HS"), gdjs.MainMenuCode.GDHSObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDHSObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDHSObjects1[i].setString("[HS:" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("endless")) + "]");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Sound")));
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\music\\music_2.mp3", true, 20, 0.8);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("FadeIn"), gdjs.MainMenuCode.GDFadeInObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeInObjects1[i].setOpacity(gdjs.MainMenuCode.GDFadeInObjects1[i].getOpacity() - (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Levels"), gdjs.MainMenuCode.GDLevelsObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
gdjs.MainMenuCode.condition2IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDLevelsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainMenuCode.condition1IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
}
if (gdjs.MainMenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Endless"), gdjs.MainMenuCode.GDEndlessObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
gdjs.MainMenuCode.condition2IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDEndlessObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainMenuCode.condition1IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
}
if (gdjs.MainMenuCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Endless").setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Level").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Music").setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Difficulty").setNumber(1.4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Achievements"), gdjs.MainMenuCode.GDAchievementsObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
gdjs.MainMenuCode.condition2IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDAchievementsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainMenuCode.condition1IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
}
if (gdjs.MainMenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Achievements", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.MainMenuCode.GDOptionsObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
gdjs.MainMenuCode.condition2IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOptionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainMenuCode.condition1IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
}
if (gdjs.MainMenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.MainMenuCode.GDCreditsObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
gdjs.MainMenuCode.condition2IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDCreditsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainMenuCode.condition1IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
}
if (gdjs.MainMenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.condition0IsTrue_1.val = false;
gdjs.MainMenuCode.condition1IsTrue_1.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_1.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}if ( gdjs.MainMenuCode.condition0IsTrue_1.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_1.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
gdjs.MainMenuCode.conditionTrue_1.val = true && gdjs.MainMenuCode.condition0IsTrue_1.val && gdjs.MainMenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBG_95lvl0Objects1.length = 0;
gdjs.MainMenuCode.GDBG_95lvl0Objects2.length = 0;
gdjs.MainMenuCode.GDFadeInObjects1.length = 0;
gdjs.MainMenuCode.GDFadeInObjects2.length = 0;
gdjs.MainMenuCode.GDLevelsObjects1.length = 0;
gdjs.MainMenuCode.GDLevelsObjects2.length = 0;
gdjs.MainMenuCode.GDEndlessObjects1.length = 0;
gdjs.MainMenuCode.GDEndlessObjects2.length = 0;
gdjs.MainMenuCode.GDAchievementsObjects1.length = 0;
gdjs.MainMenuCode.GDAchievementsObjects2.length = 0;
gdjs.MainMenuCode.GDOptionsObjects1.length = 0;
gdjs.MainMenuCode.GDOptionsObjects2.length = 0;
gdjs.MainMenuCode.GDTtileObjects1.length = 0;
gdjs.MainMenuCode.GDTtileObjects2.length = 0;
gdjs.MainMenuCode.GDVersionObjects1.length = 0;
gdjs.MainMenuCode.GDVersionObjects2.length = 0;
gdjs.MainMenuCode.GDCreditsObjects1.length = 0;
gdjs.MainMenuCode.GDCreditsObjects2.length = 0;
gdjs.MainMenuCode.GDHSObjects1.length = 0;
gdjs.MainMenuCode.GDHSObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
