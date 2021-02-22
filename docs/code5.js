gdjs.AchievementsCode = {};
gdjs.AchievementsCode.GDBG_95lvl0Objects1= [];
gdjs.AchievementsCode.GDBG_95lvl0Objects2= [];
gdjs.AchievementsCode.GDBackObjects1= [];
gdjs.AchievementsCode.GDBackObjects2= [];
gdjs.AchievementsCode.GDTitleObjects1= [];
gdjs.AchievementsCode.GDTitleObjects2= [];
gdjs.AchievementsCode.GDAchievementsBoardObjects1= [];
gdjs.AchievementsCode.GDAchievementsBoardObjects2= [];
gdjs.AchievementsCode.GDTS_951000Objects1= [];
gdjs.AchievementsCode.GDTS_951000Objects2= [];
gdjs.AchievementsCode.GDLH10Objects1= [];
gdjs.AchievementsCode.GDLH10Objects2= [];
gdjs.AchievementsCode.GDLH5Objects1= [];
gdjs.AchievementsCode.GDLH5Objects2= [];
gdjs.AchievementsCode.GDLNHObjects1= [];
gdjs.AchievementsCode.GDLNHObjects2= [];
gdjs.AchievementsCode.GDLS_9520Objects1= [];
gdjs.AchievementsCode.GDLS_9520Objects2= [];
gdjs.AchievementsCode.GDLS_9510Objects1= [];
gdjs.AchievementsCode.GDLS_9510Objects2= [];
gdjs.AchievementsCode.GDTS_95100Objects1= [];
gdjs.AchievementsCode.GDTS_95100Objects2= [];
gdjs.AchievementsCode.GDTH_951000Objects1= [];
gdjs.AchievementsCode.GDTH_951000Objects2= [];
gdjs.AchievementsCode.GDTH_95100Objects1= [];
gdjs.AchievementsCode.GDTH_95100Objects2= [];
gdjs.AchievementsCode.GDTH_9510Objects1= [];
gdjs.AchievementsCode.GDTH_9510Objects2= [];
gdjs.AchievementsCode.GDTH_951Objects1= [];
gdjs.AchievementsCode.GDTH_951Objects2= [];
gdjs.AchievementsCode.GDTS_9510000Objects1= [];
gdjs.AchievementsCode.GDTS_9510000Objects2= [];
gdjs.AchievementsCode.GDTP_9530Objects1= [];
gdjs.AchievementsCode.GDTP_9530Objects2= [];
gdjs.AchievementsCode.GDTP_9510Objects1= [];
gdjs.AchievementsCode.GDTP_9510Objects2= [];
gdjs.AchievementsCode.GDTP_951Objects1= [];
gdjs.AchievementsCode.GDTP_951Objects2= [];
gdjs.AchievementsCode.GDC_959Objects1= [];
gdjs.AchievementsCode.GDC_959Objects2= [];
gdjs.AchievementsCode.GDC_956Objects1= [];
gdjs.AchievementsCode.GDC_956Objects2= [];
gdjs.AchievementsCode.GDTS_951Objects1= [];
gdjs.AchievementsCode.GDTS_951Objects2= [];
gdjs.AchievementsCode.GDFadeInObjects1= [];
gdjs.AchievementsCode.GDFadeInObjects2= [];

gdjs.AchievementsCode.conditionTrue_0 = {val:false};
gdjs.AchievementsCode.condition0IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition1IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition2IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition3IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition4IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition5IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition6IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition7IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition8IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition9IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition10IsTrue_0 = {val:false};
gdjs.AchievementsCode.conditionTrue_1 = {val:false};
gdjs.AchievementsCode.condition0IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition1IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition2IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition3IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition4IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition5IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition6IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition7IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition8IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition9IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition10IsTrue_1 = {val:false};


gdjs.AchievementsCode.mapOfGDgdjs_46AchievementsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.AchievementsCode.GDBackObjects1});gdjs.AchievementsCode.eventsList0 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("FadeIn"), gdjs.AchievementsCode.GDFadeInObjects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDFadeInObjects1[i].setOpacity(gdjs.AchievementsCode.GDFadeInObjects1[i].getOpacity() - (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


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


{



}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Hits")) < 10;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TH_10"), gdjs.AchievementsCode.GDTH_9510Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTH_9510Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTH_9510Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Hits")) < 1;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TH_1"), gdjs.AchievementsCode.GDTH_951Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTH_951Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTH_951Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Hits")) < 100;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TH_100"), gdjs.AchievementsCode.GDTH_95100Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTH_95100Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTH_95100Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Hits")) < 1000;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TH_1000"), gdjs.AchievementsCode.GDTH_951000Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTH_951000Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTH_951000Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Score")) < 1;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TS_1"), gdjs.AchievementsCode.GDTS_951Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTS_951Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTS_951Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Score")) < 100;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TS_100"), gdjs.AchievementsCode.GDTS_95100Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTS_95100Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTS_95100Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Score")) < 1000;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TS_1000"), gdjs.AchievementsCode.GDTS_951000Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTS_951000Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTS_951000Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Score")) < 10000;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TS_10000"), gdjs.AchievementsCode.GDTS_9510000Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTS_9510000Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTS_9510000Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Time")) < 1 * 60;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TP_1"), gdjs.AchievementsCode.GDTP_951Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTP_951Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTP_951Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Time")) < 10 * 60;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TP_10"), gdjs.AchievementsCode.GDTP_9510Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTP_9510Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTP_9510Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Time")) < 30 * 60;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TP_30"), gdjs.AchievementsCode.GDTP_9530Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDTP_9530Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDTP_9530Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("5")) < 1;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("C_6"), gdjs.AchievementsCode.GDC_956Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDC_956Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDC_956Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("8")) < 1;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("C_9"), gdjs.AchievementsCode.GDC_959Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDC_959Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDC_959Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("None")) < 1;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LNH"), gdjs.AchievementsCode.GDLNHObjects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDLNHObjects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDLNHObjects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("High")) < 5;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LH5"), gdjs.AchievementsCode.GDLH5Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDLH5Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDLH5Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("High")) < 10;
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LH10"), gdjs.AchievementsCode.GDLH10Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDLH10Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDLH10Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
{gdjs.AchievementsCode.conditionTrue_1 = gdjs.AchievementsCode.condition0IsTrue_0;
gdjs.AchievementsCode.condition0IsTrue_1.val = false;
gdjs.AchievementsCode.condition1IsTrue_1.val = false;
gdjs.AchievementsCode.condition2IsTrue_1.val = false;
gdjs.AchievementsCode.condition3IsTrue_1.val = false;
gdjs.AchievementsCode.condition4IsTrue_1.val = false;
gdjs.AchievementsCode.condition5IsTrue_1.val = false;
gdjs.AchievementsCode.condition6IsTrue_1.val = false;
gdjs.AchievementsCode.condition7IsTrue_1.val = false;
gdjs.AchievementsCode.condition8IsTrue_1.val = false;
gdjs.AchievementsCode.condition9IsTrue_1.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("0")) < 10;
}if ( gdjs.AchievementsCode.condition0IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("1")) < 10;
}if ( gdjs.AchievementsCode.condition1IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2")) < 10;
}if ( gdjs.AchievementsCode.condition2IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("3")) < 10;
}if ( gdjs.AchievementsCode.condition3IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("4")) < 10;
}if ( gdjs.AchievementsCode.condition4IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition5IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("5")) < 10;
}if ( gdjs.AchievementsCode.condition5IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition6IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("6")) < 10;
}if ( gdjs.AchievementsCode.condition6IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition7IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("7")) < 10;
}if ( gdjs.AchievementsCode.condition7IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition8IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("8")) < 10;
}if ( gdjs.AchievementsCode.condition8IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition9IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("endless")) < 10;
}}
}
}
}
}
}
}
}
}
gdjs.AchievementsCode.conditionTrue_1.val = true && gdjs.AchievementsCode.condition0IsTrue_1.val && gdjs.AchievementsCode.condition1IsTrue_1.val && gdjs.AchievementsCode.condition2IsTrue_1.val && gdjs.AchievementsCode.condition3IsTrue_1.val && gdjs.AchievementsCode.condition4IsTrue_1.val && gdjs.AchievementsCode.condition5IsTrue_1.val && gdjs.AchievementsCode.condition6IsTrue_1.val && gdjs.AchievementsCode.condition7IsTrue_1.val && gdjs.AchievementsCode.condition8IsTrue_1.val && gdjs.AchievementsCode.condition9IsTrue_1.val;
}
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LS_10"), gdjs.AchievementsCode.GDLS_9510Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDLS_9510Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDLS_9510Objects1[i].hide();
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
{gdjs.AchievementsCode.conditionTrue_1 = gdjs.AchievementsCode.condition0IsTrue_0;
gdjs.AchievementsCode.condition0IsTrue_1.val = false;
gdjs.AchievementsCode.condition1IsTrue_1.val = false;
gdjs.AchievementsCode.condition2IsTrue_1.val = false;
gdjs.AchievementsCode.condition3IsTrue_1.val = false;
gdjs.AchievementsCode.condition4IsTrue_1.val = false;
gdjs.AchievementsCode.condition5IsTrue_1.val = false;
gdjs.AchievementsCode.condition6IsTrue_1.val = false;
gdjs.AchievementsCode.condition7IsTrue_1.val = false;
gdjs.AchievementsCode.condition8IsTrue_1.val = false;
gdjs.AchievementsCode.condition9IsTrue_1.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("0")) < 20;
}if ( gdjs.AchievementsCode.condition0IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("1")) < 20;
}if ( gdjs.AchievementsCode.condition1IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2")) < 20;
}if ( gdjs.AchievementsCode.condition2IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("3")) < 20;
}if ( gdjs.AchievementsCode.condition3IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition4IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("4")) < 20;
}if ( gdjs.AchievementsCode.condition4IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition5IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("5")) < 20;
}if ( gdjs.AchievementsCode.condition5IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition6IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("6")) < 20;
}if ( gdjs.AchievementsCode.condition6IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition7IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("7")) < 20;
}if ( gdjs.AchievementsCode.condition7IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition8IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("8")) < 20;
}if ( gdjs.AchievementsCode.condition8IsTrue_1.val ) {
{
gdjs.AchievementsCode.condition9IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("endless")) < 20;
}}
}
}
}
}
}
}
}
}
gdjs.AchievementsCode.conditionTrue_1.val = true && gdjs.AchievementsCode.condition0IsTrue_1.val && gdjs.AchievementsCode.condition1IsTrue_1.val && gdjs.AchievementsCode.condition2IsTrue_1.val && gdjs.AchievementsCode.condition3IsTrue_1.val && gdjs.AchievementsCode.condition4IsTrue_1.val && gdjs.AchievementsCode.condition5IsTrue_1.val && gdjs.AchievementsCode.condition6IsTrue_1.val && gdjs.AchievementsCode.condition7IsTrue_1.val && gdjs.AchievementsCode.condition8IsTrue_1.val && gdjs.AchievementsCode.condition9IsTrue_1.val;
}
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LS_20"), gdjs.AchievementsCode.GDLS_9520Objects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDLS_9520Objects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDLS_9520Objects1[i].hide();
}
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
gdjs.AchievementsCode.GDTS_951000Objects1.length = 0;
gdjs.AchievementsCode.GDTS_951000Objects2.length = 0;
gdjs.AchievementsCode.GDLH10Objects1.length = 0;
gdjs.AchievementsCode.GDLH10Objects2.length = 0;
gdjs.AchievementsCode.GDLH5Objects1.length = 0;
gdjs.AchievementsCode.GDLH5Objects2.length = 0;
gdjs.AchievementsCode.GDLNHObjects1.length = 0;
gdjs.AchievementsCode.GDLNHObjects2.length = 0;
gdjs.AchievementsCode.GDLS_9520Objects1.length = 0;
gdjs.AchievementsCode.GDLS_9520Objects2.length = 0;
gdjs.AchievementsCode.GDLS_9510Objects1.length = 0;
gdjs.AchievementsCode.GDLS_9510Objects2.length = 0;
gdjs.AchievementsCode.GDTS_95100Objects1.length = 0;
gdjs.AchievementsCode.GDTS_95100Objects2.length = 0;
gdjs.AchievementsCode.GDTH_951000Objects1.length = 0;
gdjs.AchievementsCode.GDTH_951000Objects2.length = 0;
gdjs.AchievementsCode.GDTH_95100Objects1.length = 0;
gdjs.AchievementsCode.GDTH_95100Objects2.length = 0;
gdjs.AchievementsCode.GDTH_9510Objects1.length = 0;
gdjs.AchievementsCode.GDTH_9510Objects2.length = 0;
gdjs.AchievementsCode.GDTH_951Objects1.length = 0;
gdjs.AchievementsCode.GDTH_951Objects2.length = 0;
gdjs.AchievementsCode.GDTS_9510000Objects1.length = 0;
gdjs.AchievementsCode.GDTS_9510000Objects2.length = 0;
gdjs.AchievementsCode.GDTP_9530Objects1.length = 0;
gdjs.AchievementsCode.GDTP_9530Objects2.length = 0;
gdjs.AchievementsCode.GDTP_9510Objects1.length = 0;
gdjs.AchievementsCode.GDTP_9510Objects2.length = 0;
gdjs.AchievementsCode.GDTP_951Objects1.length = 0;
gdjs.AchievementsCode.GDTP_951Objects2.length = 0;
gdjs.AchievementsCode.GDC_959Objects1.length = 0;
gdjs.AchievementsCode.GDC_959Objects2.length = 0;
gdjs.AchievementsCode.GDC_956Objects1.length = 0;
gdjs.AchievementsCode.GDC_956Objects2.length = 0;
gdjs.AchievementsCode.GDTS_951Objects1.length = 0;
gdjs.AchievementsCode.GDTS_951Objects2.length = 0;
gdjs.AchievementsCode.GDFadeInObjects1.length = 0;
gdjs.AchievementsCode.GDFadeInObjects2.length = 0;

gdjs.AchievementsCode.eventsList0(runtimeScene);
return;

}

gdjs['AchievementsCode'] = gdjs.AchievementsCode;
