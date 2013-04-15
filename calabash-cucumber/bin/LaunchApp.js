UIATarget.localTarget().delay(1);
var textField = UIATarget.localTarget().frontMostApp().mainWindow().textFields()[0].setValue("[%app%]");
UIATarget.localTarget().frontMostApp().mainWindow().buttons()[0].tap();


