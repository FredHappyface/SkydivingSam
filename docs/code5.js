gdjs.AchievementsCode = {};
gdjs.AchievementsCode.GDBG_95lvl0Objects1= [];
gdjs.AchievementsCode.GDBG_95lvl0Objects2= [];
gdjs.AchievementsCode.GDBackObjects1= [];
gdjs.AchievementsCode.GDBackObjects2= [];
gdjs.AchievementsCode.GDTitleObjects1= [];
gdjs.AchievementsCode.GDTitleObjects2= [];
gdjs.AchievementsCode.GDAchievementsBoardObjects1= [];
gdjs.AchievementsCode.GDAchievementsBoardObjects2= [];

gdjs.AchievementsCode.conditionTrue_0 = {val:false};
gdjs.AchievementsCode.condition0IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition1IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition2IsTrue_0 = {val:false};


gdjs.AchievementsCode.mapOfGDgdjs_46AchievementsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.AchievementsCode.GDBackObjects1});gdjs.AchievementsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.AchievementsCode.GDBackObjects1);

gdjs.AchievementsCode.condition0IsTrue_0.val = false;
gdjs.AchievementsCode.condition1IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AchievementsCode.mapOfGDgdjs_46AchievementsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.AchievementsCode.condition0IsTrue_0.val ) {
{
gdjs.AchievementsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.AchievementsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.AchievementsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AchievementsCode.GDBG_95lvl0Objects1.length = 0;
gdjs.AchievementsCode.GDBG_95lvl0Objects2.length = 0;
gdjs.AchievementsCode.GDBackObjects1.length = 0;
gdjs.AchievementsCode.GDBackObjects2.length = 0;
gdjs.AchievementsCode.GDTitleObjects1.length = 0;
gdjs.AchievementsCode.GDTitleObjects2.length = 0;
gdjs.AchievementsCode.GDAchievementsBoardObjects1.length = 0;
gdjs.AchievementsCode.GDAchievementsBoardObjects2.length = 0;

gdjs.AchievementsCode.eventsList0(runtimeScene);
return;

}

gdjs['AchievementsCode'] = gdjs.AchievementsCode;
