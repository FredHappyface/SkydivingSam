gdjs.OptionsCode = {};
gdjs.OptionsCode.GDBG_95lvl0Objects1= [];
gdjs.OptionsCode.GDBG_95lvl0Objects2= [];
gdjs.OptionsCode.GDBackObjects1= [];
gdjs.OptionsCode.GDBackObjects2= [];
gdjs.OptionsCode.GDTitleObjects1= [];
gdjs.OptionsCode.GDTitleObjects2= [];
gdjs.OptionsCode.GDDifficultyObjects1= [];
gdjs.OptionsCode.GDDifficultyObjects2= [];
gdjs.OptionsCode.GDAudioObjects1= [];
gdjs.OptionsCode.GDAudioObjects2= [];
gdjs.OptionsCode.GDDeveloperObjects1= [];
gdjs.OptionsCode.GDDeveloperObjects2= [];
gdjs.OptionsCode.GDMaxHealthBoolObjects1= [];
gdjs.OptionsCode.GDMaxHealthBoolObjects2= [];
gdjs.OptionsCode.GDScoreMultBoolObjects1= [];
gdjs.OptionsCode.GDScoreMultBoolObjects2= [];
gdjs.OptionsCode.GDAllLevelsBoolObjects1= [];
gdjs.OptionsCode.GDAllLevelsBoolObjects2= [];
gdjs.OptionsCode.GDInvincibleBoolObjects1= [];
gdjs.OptionsCode.GDInvincibleBoolObjects2= [];
gdjs.OptionsCode.GDDifficultySliderObjects1= [];
gdjs.OptionsCode.GDDifficultySliderObjects2= [];
gdjs.OptionsCode.GDAudioSliderObjects1= [];
gdjs.OptionsCode.GDAudioSliderObjects2= [];
gdjs.OptionsCode.GDMaxHealthObjects1= [];
gdjs.OptionsCode.GDMaxHealthObjects2= [];
gdjs.OptionsCode.GDScoreMultObjects1= [];
gdjs.OptionsCode.GDScoreMultObjects2= [];
gdjs.OptionsCode.GDInvincibleObjects1= [];
gdjs.OptionsCode.GDInvincibleObjects2= [];
gdjs.OptionsCode.GDAllLevelsObjects1= [];
gdjs.OptionsCode.GDAllLevelsObjects2= [];

gdjs.OptionsCode.conditionTrue_0 = {val:false};
gdjs.OptionsCode.condition0IsTrue_0 = {val:false};
gdjs.OptionsCode.condition1IsTrue_0 = {val:false};
gdjs.OptionsCode.condition2IsTrue_0 = {val:false};
gdjs.OptionsCode.conditionTrue_1 = {val:false};
gdjs.OptionsCode.condition0IsTrue_1 = {val:false};
gdjs.OptionsCode.condition1IsTrue_1 = {val:false};
gdjs.OptionsCode.condition2IsTrue_1 = {val:false};


gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.OptionsCode.GDBackObjects1});gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition0IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9970788);
}
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AudioSlider"), gdjs.OptionsCode.GDAudioSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("DifficultySlider"), gdjs.OptionsCode.GDDifficultySliderObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDAudioSliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDAudioSliderObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Sound")) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.OptionsCode.GDDifficultySliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDDifficultySliderObjects1[i].getBehavior("DraggableSliderControl").SetValue((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("DifficultyModifier")) - 0.7) / 0.6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Invincible")) == 1;
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition1IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9972316);
}
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InvincibleBool"), gdjs.OptionsCode.GDInvincibleBoolObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDInvincibleBoolObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDInvincibleBoolObjects1[i].getBehavior("Checkbox").SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Health")) == 30;
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition1IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9972996);
}
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MaxHealthBool"), gdjs.OptionsCode.GDMaxHealthBoolObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDMaxHealthBoolObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDMaxHealthBoolObjects1[i].getBehavior("Checkbox").SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("UnlockAllLevels")) == 1;
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition1IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9974188);
}
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AllLevelsBool"), gdjs.OptionsCode.GDAllLevelsBoolObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDAllLevelsBoolObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDAllLevelsBoolObjects1[i].getBehavior("Checkbox").SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("ScoreModifier")) == 10;
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition1IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9975156);
}
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreMultBool"), gdjs.OptionsCode.GDScoreMultBoolObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDScoreMultBoolObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDScoreMultBoolObjects1[i].getBehavior("Checkbox").SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("AudioSlider"), gdjs.OptionsCode.GDAudioSliderObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDAudioSliderObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDAudioSliderObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDAudioSliderObjects1[k] = gdjs.OptionsCode.GDAudioSliderObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDAudioSliderObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDAudioSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Sound").setNumber((( gdjs.OptionsCode.GDAudioSliderObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDAudioSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DifficultySlider"), gdjs.OptionsCode.GDDifficultySliderObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDDifficultySliderObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDDifficultySliderObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDDifficultySliderObjects1[k] = gdjs.OptionsCode.GDDifficultySliderObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDDifficultySliderObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDDifficultySliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("DifficultyModifier").setNumber(0.7 + (( gdjs.OptionsCode.GDDifficultySliderObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDDifficultySliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 0.6);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InvincibleBool"), gdjs.OptionsCode.GDInvincibleBoolObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDInvincibleBoolObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDInvincibleBoolObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDInvincibleBoolObjects1[k] = gdjs.OptionsCode.GDInvincibleBoolObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDInvincibleBoolObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Invincible").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InvincibleBool"), gdjs.OptionsCode.GDInvincibleBoolObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDInvincibleBoolObjects1.length;i<l;++i) {
    if ( !(gdjs.OptionsCode.GDInvincibleBoolObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDInvincibleBoolObjects1[k] = gdjs.OptionsCode.GDInvincibleBoolObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDInvincibleBoolObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Invincible").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaxHealthBool"), gdjs.OptionsCode.GDMaxHealthBoolObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDMaxHealthBoolObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDMaxHealthBoolObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDMaxHealthBoolObjects1[k] = gdjs.OptionsCode.GDMaxHealthBoolObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDMaxHealthBoolObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Health").setNumber(30);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaxHealthBool"), gdjs.OptionsCode.GDMaxHealthBoolObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDMaxHealthBoolObjects1.length;i<l;++i) {
    if ( !(gdjs.OptionsCode.GDMaxHealthBoolObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDMaxHealthBoolObjects1[k] = gdjs.OptionsCode.GDMaxHealthBoolObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDMaxHealthBoolObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Health").setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScoreMultBool"), gdjs.OptionsCode.GDScoreMultBoolObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDScoreMultBoolObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDScoreMultBoolObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDScoreMultBoolObjects1[k] = gdjs.OptionsCode.GDScoreMultBoolObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDScoreMultBoolObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("ScoreModifier").setNumber(10);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScoreMultBool"), gdjs.OptionsCode.GDScoreMultBoolObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDScoreMultBoolObjects1.length;i<l;++i) {
    if ( !(gdjs.OptionsCode.GDScoreMultBoolObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDScoreMultBoolObjects1[k] = gdjs.OptionsCode.GDScoreMultBoolObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDScoreMultBoolObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("ScoreModifier").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AllLevelsBool"), gdjs.OptionsCode.GDAllLevelsBoolObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDAllLevelsBoolObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDAllLevelsBoolObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDAllLevelsBoolObjects1[k] = gdjs.OptionsCode.GDAllLevelsBoolObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDAllLevelsBoolObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("UnlockAllLevels").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AllLevelsBool"), gdjs.OptionsCode.GDAllLevelsBoolObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDAllLevelsBoolObjects1.length;i<l;++i) {
    if ( !(gdjs.OptionsCode.GDAllLevelsBoolObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDAllLevelsBoolObjects1[k] = gdjs.OptionsCode.GDAllLevelsBoolObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDAllLevelsBoolObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("UnlockAllLevels").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.OptionsCode.GDBackObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDBG_95lvl0Objects1.length = 0;
gdjs.OptionsCode.GDBG_95lvl0Objects2.length = 0;
gdjs.OptionsCode.GDBackObjects1.length = 0;
gdjs.OptionsCode.GDBackObjects2.length = 0;
gdjs.OptionsCode.GDTitleObjects1.length = 0;
gdjs.OptionsCode.GDTitleObjects2.length = 0;
gdjs.OptionsCode.GDDifficultyObjects1.length = 0;
gdjs.OptionsCode.GDDifficultyObjects2.length = 0;
gdjs.OptionsCode.GDAudioObjects1.length = 0;
gdjs.OptionsCode.GDAudioObjects2.length = 0;
gdjs.OptionsCode.GDDeveloperObjects1.length = 0;
gdjs.OptionsCode.GDDeveloperObjects2.length = 0;
gdjs.OptionsCode.GDMaxHealthBoolObjects1.length = 0;
gdjs.OptionsCode.GDMaxHealthBoolObjects2.length = 0;
gdjs.OptionsCode.GDScoreMultBoolObjects1.length = 0;
gdjs.OptionsCode.GDScoreMultBoolObjects2.length = 0;
gdjs.OptionsCode.GDAllLevelsBoolObjects1.length = 0;
gdjs.OptionsCode.GDAllLevelsBoolObjects2.length = 0;
gdjs.OptionsCode.GDInvincibleBoolObjects1.length = 0;
gdjs.OptionsCode.GDInvincibleBoolObjects2.length = 0;
gdjs.OptionsCode.GDDifficultySliderObjects1.length = 0;
gdjs.OptionsCode.GDDifficultySliderObjects2.length = 0;
gdjs.OptionsCode.GDAudioSliderObjects1.length = 0;
gdjs.OptionsCode.GDAudioSliderObjects2.length = 0;
gdjs.OptionsCode.GDMaxHealthObjects1.length = 0;
gdjs.OptionsCode.GDMaxHealthObjects2.length = 0;
gdjs.OptionsCode.GDScoreMultObjects1.length = 0;
gdjs.OptionsCode.GDScoreMultObjects2.length = 0;
gdjs.OptionsCode.GDInvincibleObjects1.length = 0;
gdjs.OptionsCode.GDInvincibleObjects2.length = 0;
gdjs.OptionsCode.GDAllLevelsObjects1.length = 0;
gdjs.OptionsCode.GDAllLevelsObjects2.length = 0;

gdjs.OptionsCode.eventsList0(runtimeScene);
return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
