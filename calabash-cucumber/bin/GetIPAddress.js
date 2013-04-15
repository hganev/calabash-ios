UIATarget.localTarget().delay(1);
var textField = UIATarget.localTarget().frontMostApp().mainWindow().textFields()[1].value();
UIATarget.localTarget().host().performTaskWithPathArgumentsTimeout("/usr/bin/sed", ["-i", "", "s/^IPAddress=.*$/IPAddress="+ textField +"/1", "./Device.cfg"], 2);


