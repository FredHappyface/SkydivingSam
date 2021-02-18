gdjs.GameOverCode = {};
gdjs.GameOverCode.GDBG_95lvl0Objects1= [];
gdjs.GameOverCode.GDBG_95lvl0Objects2= [];
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDInstructionsObjects1= [];
gdjs.GameOverCode.GDInstructionsObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};
gdjs.GameOverCode.conditionTrue_2 = {val:false};
gdjs.GameOverCode.condition0IsTrue_2 = {val:false};
gdjs.GameOverCode.condition1IsTrue_2 = {val:false};
gdjs.GameOverCode.condition2IsTrue_2 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
{gdjs.GameOverCode.conditionTrue_2 = gdjs.GameOverCode.condition1IsTrue_1;
gdjs.GameOverCode.condition0IsTrue_2.val = false;
gdjs.GameOverCode.condition1IsTrue_2.val = false;
{
gdjs.GameOverCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.GameOverCode.condition0IsTrue_2.val ) {
    gdjs.GameOverCode.conditionTrue_2.val = true;
}
}
{
gdjs.GameOverCode.condition1IsTrue_2.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.GameOverCode.condition1IsTrue_2.val ) {
    gdjs.GameOverCode.conditionTrue_2.val = true;
}
}
{
}
}
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDBG_95lvl0Objects1.length = 0;
gdjs.GameOverCode.GDBG_95lvl0Objects2.length = 0;
gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDInstructionsObjects1.length = 0;
gdjs.GameOverCode.GDInstructionsObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
