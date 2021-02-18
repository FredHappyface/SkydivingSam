gdjs.LevelSelectCode = {};
gdjs.LevelSelectCode.GDBG_95lvl0Objects1= [];
gdjs.LevelSelectCode.GDBG_95lvl0Objects2= [];
gdjs.LevelSelectCode.GDLevel1Objects1= [];
gdjs.LevelSelectCode.GDLevel1Objects2= [];
gdjs.LevelSelectCode.GDLevel2Objects1= [];
gdjs.LevelSelectCode.GDLevel2Objects2= [];
gdjs.LevelSelectCode.GDLevel3Objects1= [];
gdjs.LevelSelectCode.GDLevel3Objects2= [];
gdjs.LevelSelectCode.GDLevel4Objects1= [];
gdjs.LevelSelectCode.GDLevel4Objects2= [];
gdjs.LevelSelectCode.GDLevel5Objects1= [];
gdjs.LevelSelectCode.GDLevel5Objects2= [];
gdjs.LevelSelectCode.GDLevel6Objects1= [];
gdjs.LevelSelectCode.GDLevel6Objects2= [];
gdjs.LevelSelectCode.GDLevel7Objects1= [];
gdjs.LevelSelectCode.GDLevel7Objects2= [];
gdjs.LevelSelectCode.GDLevel8Objects1= [];
gdjs.LevelSelectCode.GDLevel8Objects2= [];
gdjs.LevelSelectCode.GDLevel9Objects1= [];
gdjs.LevelSelectCode.GDLevel9Objects2= [];
gdjs.LevelSelectCode.GDBackObjects1= [];
gdjs.LevelSelectCode.GDBackObjects2= [];
gdjs.LevelSelectCode.GDTitleObjects1= [];
gdjs.LevelSelectCode.GDTitleObjects2= [];

gdjs.LevelSelectCode.conditionTrue_0 = {val:false};
gdjs.LevelSelectCode.condition0IsTrue_0 = {val:false};
gdjs.LevelSelectCode.condition1IsTrue_0 = {val:false};
gdjs.LevelSelectCode.condition2IsTrue_0 = {val:false};
gdjs.LevelSelectCode.condition3IsTrue_0 = {val:false};
gdjs.LevelSelectCode.conditionTrue_1 = {val:false};
gdjs.LevelSelectCode.condition0IsTrue_1 = {val:false};
gdjs.LevelSelectCode.condition1IsTrue_1 = {val:false};
gdjs.LevelSelectCode.condition2IsTrue_1 = {val:false};
gdjs.LevelSelectCode.condition3IsTrue_1 = {val:false};


gdjs.LevelSelectCode.mapOfGDgdjs_46LevelSelectCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.LevelSelectCode.GDBackObjects1});gdjs.LevelSelectCode.mapOfGDgdjs_46LevelSelectCode_46GDLevel1Objects1Objects = Hashtable.newFrom({"Level1": gdjs.LevelSelectCode.GDLevel1Objects1});gdjs.LevelSelectCode.eventsList0 = function(runtimeScene) {

{


gdjs.LevelSelectCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelSelectCode.conditionTrue_1 = gdjs.LevelSelectCode.condition0IsTrue_0;
gdjs.LevelSelectCode.condition0IsTrue_1.val = false;
gdjs.LevelSelectCode.condition1IsTrue_1.val = false;
{
gdjs.LevelSelectCode.condition0IsTrue_1.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}if ( gdjs.LevelSelectCode.condition0IsTrue_1.val ) {
{
gdjs.LevelSelectCode.condition1IsTrue_1.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
gdjs.LevelSelectCode.conditionTrue_1.val = true && gdjs.LevelSelectCode.condition0IsTrue_1.val && gdjs.LevelSelectCode.condition1IsTrue_1.val;
}
}if (gdjs.LevelSelectCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.LevelSelectCode.GDBackObjects1);

gdjs.LevelSelectCode.condition0IsTrue_0.val = false;
gdjs.LevelSelectCode.condition1IsTrue_0.val = false;
gdjs.LevelSelectCode.condition2IsTrue_0.val = false;
{
gdjs.LevelSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LevelSelectCode.mapOfGDgdjs_46LevelSelectCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LevelSelectCode.condition0IsTrue_0.val ) {
{
gdjs.LevelSelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LevelSelectCode.condition1IsTrue_0.val ) {
{
gdjs.LevelSelectCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
}
if (gdjs.LevelSelectCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.LevelSelectCode.GDLevel1Objects1);

gdjs.LevelSelectCode.condition0IsTrue_0.val = false;
gdjs.LevelSelectCode.condition1IsTrue_0.val = false;
gdjs.LevelSelectCode.condition2IsTrue_0.val = false;
{
gdjs.LevelSelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LevelSelectCode.mapOfGDgdjs_46LevelSelectCode_46GDLevel1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LevelSelectCode.condition0IsTrue_0.val ) {
{
gdjs.LevelSelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LevelSelectCode.condition1IsTrue_0.val ) {
{
gdjs.LevelSelectCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
}
if (gdjs.LevelSelectCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Level").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Endless").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Difficulty").setNumber(0.7);
}}

}


};

gdjs.LevelSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSelectCode.GDBG_95lvl0Objects1.length = 0;
gdjs.LevelSelectCode.GDBG_95lvl0Objects2.length = 0;
gdjs.LevelSelectCode.GDLevel1Objects1.length = 0;
gdjs.LevelSelectCode.GDLevel1Objects2.length = 0;
gdjs.LevelSelectCode.GDLevel2Objects1.length = 0;
gdjs.LevelSelectCode.GDLevel2Objects2.length = 0;
gdjs.LevelSelectCode.GDLevel3Objects1.length = 0;
gdjs.LevelSelectCode.GDLevel3Objects2.length = 0;
gdjs.LevelSelectCode.GDLevel4Objects1.length = 0;
gdjs.LevelSelectCode.GDLevel4Objects2.length = 0;
gdjs.LevelSelectCode.GDLevel5Objects1.length = 0;
gdjs.LevelSelectCode.GDLevel5Objects2.length = 0;
gdjs.LevelSelectCode.GDLevel6Objects1.length = 0;
gdjs.LevelSelectCode.GDLevel6Objects2.length = 0;
gdjs.LevelSelectCode.GDLevel7Objects1.length = 0;
gdjs.LevelSelectCode.GDLevel7Objects2.length = 0;
gdjs.LevelSelectCode.GDLevel8Objects1.length = 0;
gdjs.LevelSelectCode.GDLevel8Objects2.length = 0;
gdjs.LevelSelectCode.GDLevel9Objects1.length = 0;
gdjs.LevelSelectCode.GDLevel9Objects2.length = 0;
gdjs.LevelSelectCode.GDBackObjects1.length = 0;
gdjs.LevelSelectCode.GDBackObjects2.length = 0;
gdjs.LevelSelectCode.GDTitleObjects1.length = 0;
gdjs.LevelSelectCode.GDTitleObjects2.length = 0;

gdjs.LevelSelectCode.eventsList0(runtimeScene);
return;

}

gdjs['LevelSelectCode'] = gdjs.LevelSelectCode;
