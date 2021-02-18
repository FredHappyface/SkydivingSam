gdjs.WinCode = {};
gdjs.WinCode.GDBG_95lvl0Objects1= [];
gdjs.WinCode.GDBG_95lvl0Objects2= [];
gdjs.WinCode.GDWinObjects1= [];
gdjs.WinCode.GDWinObjects2= [];
gdjs.WinCode.GDInstructionsObjects1= [];
gdjs.WinCode.GDInstructionsObjects2= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};
gdjs.WinCode.conditionTrue_1 = {val:false};
gdjs.WinCode.condition0IsTrue_1 = {val:false};
gdjs.WinCode.condition1IsTrue_1 = {val:false};
gdjs.WinCode.condition2IsTrue_1 = {val:false};
gdjs.WinCode.conditionTrue_2 = {val:false};
gdjs.WinCode.condition0IsTrue_2 = {val:false};
gdjs.WinCode.condition1IsTrue_2 = {val:false};
gdjs.WinCode.condition2IsTrue_2 = {val:false};


gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
{gdjs.WinCode.conditionTrue_1 = gdjs.WinCode.condition0IsTrue_0;
gdjs.WinCode.condition0IsTrue_1.val = false;
gdjs.WinCode.condition1IsTrue_1.val = false;
{
gdjs.WinCode.condition0IsTrue_1.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.WinCode.condition0IsTrue_1.val ) {
{
gdjs.WinCode.condition1IsTrue_1.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}}
gdjs.WinCode.conditionTrue_1.val = true && gdjs.WinCode.condition0IsTrue_1.val && gdjs.WinCode.condition1IsTrue_1.val;
}
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
{gdjs.WinCode.conditionTrue_1 = gdjs.WinCode.condition0IsTrue_0;
gdjs.WinCode.condition0IsTrue_1.val = false;
gdjs.WinCode.condition1IsTrue_1.val = false;
{
gdjs.WinCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.WinCode.condition0IsTrue_1.val ) {
{
{gdjs.WinCode.conditionTrue_2 = gdjs.WinCode.condition1IsTrue_1;
gdjs.WinCode.condition0IsTrue_2.val = false;
gdjs.WinCode.condition1IsTrue_2.val = false;
{
gdjs.WinCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.WinCode.condition0IsTrue_2.val ) {
    gdjs.WinCode.conditionTrue_2.val = true;
}
}
{
gdjs.WinCode.condition1IsTrue_2.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.WinCode.condition1IsTrue_2.val ) {
    gdjs.WinCode.conditionTrue_2.val = true;
}
}
{
}
}
}}
gdjs.WinCode.conditionTrue_1.val = true && gdjs.WinCode.condition0IsTrue_1.val && gdjs.WinCode.condition1IsTrue_1.val;
}
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDBG_95lvl0Objects1.length = 0;
gdjs.WinCode.GDBG_95lvl0Objects2.length = 0;
gdjs.WinCode.GDWinObjects1.length = 0;
gdjs.WinCode.GDWinObjects2.length = 0;
gdjs.WinCode.GDInstructionsObjects1.length = 0;
gdjs.WinCode.GDInstructionsObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
return;

}

gdjs['WinCode'] = gdjs.WinCode;
