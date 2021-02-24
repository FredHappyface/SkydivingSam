gdjs.GameOverCode = {};
gdjs.GameOverCode.GDBG_95lvl0Objects1= [];
gdjs.GameOverCode.GDBG_95lvl0Objects2= [];
gdjs.GameOverCode.GDFadeInObjects1= [];
gdjs.GameOverCode.GDFadeInObjects2= [];
gdjs.GameOverCode.GDWinObjects1= [];
gdjs.GameOverCode.GDWinObjects2= [];
gdjs.GameOverCode.GDInstructionsObjects1= [];
gdjs.GameOverCode.GDInstructionsObjects2= [];
gdjs.GameOverCode.GDHSObjects1= [];
gdjs.GameOverCode.GDHSObjects2= [];
gdjs.GameOverCode.GDScoreObjects1= [];
gdjs.GameOverCode.GDScoreObjects2= [];

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


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10953940);
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HS"), gdjs.GameOverCode.GDHSObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameOverCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Score")));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDHSObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHSObjects1[i].setString("Highscore: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Level")))));
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Endless")) > 0;
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10955204);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HS"), gdjs.GameOverCode.GDHSObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDHSObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHSObjects1[i].setString("Highscore: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("endless")));
}
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDBG_95lvl0Objects1.length = 0;
gdjs.GameOverCode.GDBG_95lvl0Objects2.length = 0;
gdjs.GameOverCode.GDFadeInObjects1.length = 0;
gdjs.GameOverCode.GDFadeInObjects2.length = 0;
gdjs.GameOverCode.GDWinObjects1.length = 0;
gdjs.GameOverCode.GDWinObjects2.length = 0;
gdjs.GameOverCode.GDInstructionsObjects1.length = 0;
gdjs.GameOverCode.GDInstructionsObjects2.length = 0;
gdjs.GameOverCode.GDHSObjects1.length = 0;
gdjs.GameOverCode.GDHSObjects2.length = 0;
gdjs.GameOverCode.GDScoreObjects1.length = 0;
gdjs.GameOverCode.GDScoreObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
