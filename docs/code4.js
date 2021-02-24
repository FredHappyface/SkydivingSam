gdjs.CreditsCode = {};
gdjs.CreditsCode.GDBG_95lvl0Objects1= [];
gdjs.CreditsCode.GDBG_95lvl0Objects2= [];
gdjs.CreditsCode.GDFadeInObjects1= [];
gdjs.CreditsCode.GDFadeInObjects2= [];
gdjs.CreditsCode.GDBackObjects1= [];
gdjs.CreditsCode.GDBackObjects2= [];
gdjs.CreditsCode.GDTitleObjects1= [];
gdjs.CreditsCode.GDTitleObjects2= [];
gdjs.CreditsCode.GDGeneralObjects1= [];
gdjs.CreditsCode.GDGeneralObjects2= [];
gdjs.CreditsCode.GDKennyObjects1= [];
gdjs.CreditsCode.GDKennyObjects2= [];
gdjs.CreditsCode.GDFiraCodeObjects1= [];
gdjs.CreditsCode.GDFiraCodeObjects2= [];
gdjs.CreditsCode.GDFredHappyfaceObjects1= [];
gdjs.CreditsCode.GDFredHappyfaceObjects2= [];
gdjs.CreditsCode.GDKieranObjects1= [];
gdjs.CreditsCode.GDKieranObjects2= [];
gdjs.CreditsCode.GDSoundimageObjects1= [];
gdjs.CreditsCode.GDSoundimageObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.CreditsCode.GDBackObjects1});gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("FadeIn"), gdjs.CreditsCode.GDFadeInObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDFadeInObjects1[i].setOpacity(gdjs.CreditsCode.GDFadeInObjects1[i].getOpacity() - (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.CreditsCode.GDBackObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDBG_95lvl0Objects1.length = 0;
gdjs.CreditsCode.GDBG_95lvl0Objects2.length = 0;
gdjs.CreditsCode.GDFadeInObjects1.length = 0;
gdjs.CreditsCode.GDFadeInObjects2.length = 0;
gdjs.CreditsCode.GDBackObjects1.length = 0;
gdjs.CreditsCode.GDBackObjects2.length = 0;
gdjs.CreditsCode.GDTitleObjects1.length = 0;
gdjs.CreditsCode.GDTitleObjects2.length = 0;
gdjs.CreditsCode.GDGeneralObjects1.length = 0;
gdjs.CreditsCode.GDGeneralObjects2.length = 0;
gdjs.CreditsCode.GDKennyObjects1.length = 0;
gdjs.CreditsCode.GDKennyObjects2.length = 0;
gdjs.CreditsCode.GDFiraCodeObjects1.length = 0;
gdjs.CreditsCode.GDFiraCodeObjects2.length = 0;
gdjs.CreditsCode.GDFredHappyfaceObjects1.length = 0;
gdjs.CreditsCode.GDFredHappyfaceObjects2.length = 0;
gdjs.CreditsCode.GDKieranObjects1.length = 0;
gdjs.CreditsCode.GDKieranObjects2.length = 0;
gdjs.CreditsCode.GDSoundimageObjects1.length = 0;
gdjs.CreditsCode.GDSoundimageObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
