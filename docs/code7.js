gdjs.WinCode = {};
gdjs.WinCode.GDBG_95lvl0Objects1= [];
gdjs.WinCode.GDBG_95lvl0Objects2= [];
gdjs.WinCode.GDWinObjects1= [];
gdjs.WinCode.GDWinObjects2= [];
gdjs.WinCode.GDInstructionsObjects1= [];
gdjs.WinCode.GDInstructionsObjects2= [];
gdjs.WinCode.GDHSObjects1= [];
gdjs.WinCode.GDHSObjects2= [];
gdjs.WinCode.GDScoreObjects1= [];
gdjs.WinCode.GDScoreObjects2= [];

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


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
{gdjs.WinCode.conditionTrue_1 = gdjs.WinCode.condition0IsTrue_0;
gdjs.WinCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9008708);
}
}if (gdjs.WinCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HS"), gdjs.WinCode.GDHSObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.WinCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.WinCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Score")));
}
}{for(var i = 0, len = gdjs.WinCode.GDHSObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDHSObjects1[i].setString("Highscore: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Level")))));
}
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
gdjs.WinCode.GDHSObjects1.length = 0;
gdjs.WinCode.GDHSObjects2.length = 0;
gdjs.WinCode.GDScoreObjects1.length = 0;
gdjs.WinCode.GDScoreObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
return;

}

gdjs['WinCode'] = gdjs.WinCode;
