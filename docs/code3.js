gdjs.AboutCode = {};
gdjs.AboutCode.GDBG_95lvl0Objects1= [];
gdjs.AboutCode.GDBG_95lvl0Objects2= [];
gdjs.AboutCode.GDBackObjects1= [];
gdjs.AboutCode.GDBackObjects2= [];
gdjs.AboutCode.GDTitleObjects1= [];
gdjs.AboutCode.GDTitleObjects2= [];

gdjs.AboutCode.conditionTrue_0 = {val:false};
gdjs.AboutCode.condition0IsTrue_0 = {val:false};
gdjs.AboutCode.condition1IsTrue_0 = {val:false};
gdjs.AboutCode.condition2IsTrue_0 = {val:false};


gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.AboutCode.GDBackObjects1});gdjs.AboutCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.AboutCode.GDBackObjects1);

gdjs.AboutCode.condition0IsTrue_0.val = false;
gdjs.AboutCode.condition1IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.AboutCode.condition0IsTrue_0.val ) {
{
gdjs.AboutCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.AboutCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.AboutCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AboutCode.GDBG_95lvl0Objects1.length = 0;
gdjs.AboutCode.GDBG_95lvl0Objects2.length = 0;
gdjs.AboutCode.GDBackObjects1.length = 0;
gdjs.AboutCode.GDBackObjects2.length = 0;
gdjs.AboutCode.GDTitleObjects1.length = 0;
gdjs.AboutCode.GDTitleObjects2.length = 0;

gdjs.AboutCode.eventsList0(runtimeScene);
return;

}

gdjs['AboutCode'] = gdjs.AboutCode;
