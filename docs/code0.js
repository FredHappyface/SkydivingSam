gdjs.IntroCode = {};
gdjs.IntroCode.GDTouchLeftObjects1_1final = [];

gdjs.IntroCode.GDTouchRightObjects1_1final = [];

gdjs.IntroCode.GDBG_95lvl0Objects1= [];
gdjs.IntroCode.GDBG_95lvl0Objects2= [];
gdjs.IntroCode.GDFadeInObjects1= [];
gdjs.IntroCode.GDFadeInObjects2= [];
gdjs.IntroCode.GDTitleObjects1= [];
gdjs.IntroCode.GDTitleObjects2= [];
gdjs.IntroCode.GDInstruction0Objects1= [];
gdjs.IntroCode.GDInstruction0Objects2= [];
gdjs.IntroCode.GDIslandObjects1= [];
gdjs.IntroCode.GDIslandObjects2= [];
gdjs.IntroCode.GDSamObjects1= [];
gdjs.IntroCode.GDSamObjects2= [];
gdjs.IntroCode.GDTouchRightObjects1= [];
gdjs.IntroCode.GDTouchRightObjects2= [];
gdjs.IntroCode.GDTouchLeftObjects1= [];
gdjs.IntroCode.GDTouchLeftObjects2= [];
gdjs.IntroCode.GDTouchPromptObjects1= [];
gdjs.IntroCode.GDTouchPromptObjects2= [];
gdjs.IntroCode.GDEndObjects1= [];
gdjs.IntroCode.GDEndObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.condition3IsTrue_0 = {val:false};
gdjs.IntroCode.condition4IsTrue_0 = {val:false};
gdjs.IntroCode.condition5IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};
gdjs.IntroCode.condition3IsTrue_1 = {val:false};
gdjs.IntroCode.condition4IsTrue_1 = {val:false};
gdjs.IntroCode.condition5IsTrue_1 = {val:false};
gdjs.IntroCode.conditionTrue_2 = {val:false};
gdjs.IntroCode.condition0IsTrue_2 = {val:false};
gdjs.IntroCode.condition1IsTrue_2 = {val:false};
gdjs.IntroCode.condition2IsTrue_2 = {val:false};
gdjs.IntroCode.condition3IsTrue_2 = {val:false};
gdjs.IntroCode.condition4IsTrue_2 = {val:false};
gdjs.IntroCode.condition5IsTrue_2 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDSamObjects1Objects = Hashtable.newFrom({"Sam": gdjs.IntroCode.GDSamObjects1});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTouchLeftObjects2Objects = Hashtable.newFrom({"TouchLeft": gdjs.IntroCode.GDTouchLeftObjects2});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTouchRightObjects2Objects = Hashtable.newFrom({"TouchRight": gdjs.IntroCode.GDTouchRightObjects2});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDEndObjects1Objects = Hashtable.newFrom({"End": gdjs.IntroCode.GDEndObjects1});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDSamObjects1Objects = Hashtable.newFrom({"Sam": gdjs.IntroCode.GDSamObjects1});gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10079516);
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TouchPrompt"), gdjs.IntroCode.GDTouchPromptObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDTouchPromptObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTouchPromptObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDTouchPromptObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTouchPromptObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Sound")));
}}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sam"), gdjs.IntroCode.GDSamObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].addForce(0, 100, 1);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].setAnimationName("Jump");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sam"), gdjs.IntroCode.GDSamObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
gdjs.IntroCode.condition2IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDSamObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.IntroCode.condition1IsTrue_0.val ) {
{
gdjs.IntroCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
}
if (gdjs.IntroCode.condition2IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDSamObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].addForce(0, 100, 1);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].setAnimationName("Jump");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sam"), gdjs.IntroCode.GDSamObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDSamObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDSamObjects1[i].isCurrentAnimationName("Jump") ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDSamObjects1[k] = gdjs.IntroCode.GDSamObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDSamObjects1.length = k;}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDSamObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDSamObjects1[i].hasAnimationEnded() ) {
        gdjs.IntroCode.condition1IsTrue_0.val = true;
        gdjs.IntroCode.GDSamObjects1[k] = gdjs.IntroCode.GDSamObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDSamObjects1.length = k;}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDSamObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].setAnimationName("Fall");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Instruction0"), gdjs.IntroCode.GDInstruction0Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDInstruction0Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDInstruction0Objects1[i].setOpacity(gdjs.IntroCode.GDInstruction0Objects1[i].getOpacity() - (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TouchPrompt"), gdjs.IntroCode.GDTouchPromptObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.IntroCode.GDTouchPromptObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTouchPromptObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Prompt");
}}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Prompt"));
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TouchPrompt"), gdjs.IntroCode.GDTouchPromptObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDTouchPromptObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTouchPromptObjects1[i].setOpacity(gdjs.IntroCode.GDTouchPromptObjects1[i].getOpacity() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Prompt");
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TouchPrompt"), gdjs.IntroCode.GDTouchPromptObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDTouchPromptObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTouchPromptObjects1[i].setOpacity(gdjs.IntroCode.GDTouchPromptObjects1[i].getOpacity() - (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sam"), gdjs.IntroCode.GDSamObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.IntroCode.GDSamObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDSamObjects1[0].getPointY("")) + 200, "", 0);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.condition0IsTrue_1.val = false;
gdjs.IntroCode.condition1IsTrue_1.val = false;
gdjs.IntroCode.condition2IsTrue_1.val = false;
gdjs.IntroCode.condition3IsTrue_1.val = false;
gdjs.IntroCode.condition4IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if( gdjs.IntroCode.condition0IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if( gdjs.IntroCode.condition1IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCode.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if( gdjs.IntroCode.condition2IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCode.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if( gdjs.IntroCode.condition3IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCode.condition4IsTrue_1.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if( gdjs.IntroCode.condition4IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 2;
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sam"), gdjs.IntroCode.GDSamObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].setAnimationName("Fall");
}
}{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].flipX(false);
}
}}

}


{

gdjs.IntroCode.GDTouchLeftObjects1.length = 0;


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.GDTouchLeftObjects1_1final.length = 0;gdjs.IntroCode.condition0IsTrue_1.val = false;
gdjs.IntroCode.condition1IsTrue_1.val = false;
gdjs.IntroCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.IntroCode.condition0IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.IntroCode.condition1IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("TouchLeft"), gdjs.IntroCode.GDTouchLeftObjects2);
{gdjs.IntroCode.conditionTrue_2 = gdjs.IntroCode.condition2IsTrue_1;
gdjs.IntroCode.condition0IsTrue_2.val = false;
gdjs.IntroCode.condition1IsTrue_2.val = false;
{
gdjs.IntroCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTouchLeftObjects2Objects, runtimeScene, false, false);
}if ( gdjs.IntroCode.condition0IsTrue_2.val ) {
{
gdjs.IntroCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.IntroCode.conditionTrue_2.val = true && gdjs.IntroCode.condition0IsTrue_2.val && gdjs.IntroCode.condition1IsTrue_2.val;
}
if( gdjs.IntroCode.condition2IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.IntroCode.GDTouchLeftObjects2.length;j<jLen;++j) {
        if ( gdjs.IntroCode.GDTouchLeftObjects1_1final.indexOf(gdjs.IntroCode.GDTouchLeftObjects2[j]) === -1 )
            gdjs.IntroCode.GDTouchLeftObjects1_1final.push(gdjs.IntroCode.GDTouchLeftObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.IntroCode.GDTouchLeftObjects1_1final, gdjs.IntroCode.GDTouchLeftObjects1);
}
}
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 2;
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sam"), gdjs.IntroCode.GDSamObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].addForce(-(160), 0, 0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].setAnimationName("Right");
}
}}

}


{

gdjs.IntroCode.GDTouchRightObjects1.length = 0;


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.GDTouchRightObjects1_1final.length = 0;gdjs.IntroCode.condition0IsTrue_1.val = false;
gdjs.IntroCode.condition1IsTrue_1.val = false;
gdjs.IntroCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.IntroCode.condition0IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.IntroCode.condition1IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("TouchRight"), gdjs.IntroCode.GDTouchRightObjects2);
{gdjs.IntroCode.conditionTrue_2 = gdjs.IntroCode.condition2IsTrue_1;
gdjs.IntroCode.condition0IsTrue_2.val = false;
gdjs.IntroCode.condition1IsTrue_2.val = false;
{
gdjs.IntroCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTouchRightObjects2Objects, runtimeScene, true, false);
}if ( gdjs.IntroCode.condition0IsTrue_2.val ) {
{
gdjs.IntroCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.IntroCode.conditionTrue_2.val = true && gdjs.IntroCode.condition0IsTrue_2.val && gdjs.IntroCode.condition1IsTrue_2.val;
}
if( gdjs.IntroCode.condition2IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.IntroCode.GDTouchRightObjects2.length;j<jLen;++j) {
        if ( gdjs.IntroCode.GDTouchRightObjects1_1final.indexOf(gdjs.IntroCode.GDTouchRightObjects2[j]) === -1 )
            gdjs.IntroCode.GDTouchRightObjects1_1final.push(gdjs.IntroCode.GDTouchRightObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.IntroCode.GDTouchRightObjects1_1final, gdjs.IntroCode.GDTouchRightObjects1);
}
}
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 2;
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sam"), gdjs.IntroCode.GDSamObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].addForce(160, 0, 0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSamObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSamObjects1[i].setAnimationName("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("End"), gdjs.IntroCode.GDEndObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sam"), gdjs.IntroCode.GDSamObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDEndObjects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDSamObjects1Objects, false, runtimeScene, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\pizz_win.ogg", false, 50, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDBG_95lvl0Objects1.length = 0;
gdjs.IntroCode.GDBG_95lvl0Objects2.length = 0;
gdjs.IntroCode.GDFadeInObjects1.length = 0;
gdjs.IntroCode.GDFadeInObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDInstruction0Objects1.length = 0;
gdjs.IntroCode.GDInstruction0Objects2.length = 0;
gdjs.IntroCode.GDIslandObjects1.length = 0;
gdjs.IntroCode.GDIslandObjects2.length = 0;
gdjs.IntroCode.GDSamObjects1.length = 0;
gdjs.IntroCode.GDSamObjects2.length = 0;
gdjs.IntroCode.GDTouchRightObjects1.length = 0;
gdjs.IntroCode.GDTouchRightObjects2.length = 0;
gdjs.IntroCode.GDTouchLeftObjects1.length = 0;
gdjs.IntroCode.GDTouchLeftObjects2.length = 0;
gdjs.IntroCode.GDTouchPromptObjects1.length = 0;
gdjs.IntroCode.GDTouchPromptObjects2.length = 0;
gdjs.IntroCode.GDEndObjects1.length = 0;
gdjs.IntroCode.GDEndObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
