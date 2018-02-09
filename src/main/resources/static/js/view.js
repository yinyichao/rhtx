function load(){
	init();
	login();
}
//初始化
function init() {

	MdControl.userName = Text1.value;
	MdControl.password = Text2.value;
	MdControl.serverIP = Text3.value;
	MdControl.localIP = Text4.value;
	MdControl.license = Text5.value;

	var bresult = MdControl.isInit;
	
	if (bresult == 0) {
		var a = MdControl.init();
	} else {
		alert("已经初始化！");
		return;
	}
}
//登录
function login() {
    var bresult = MdControl.isInit;

    if (bresult == 0) {
        alert("没有初始化！");
        return;
    }
    var a = MdControl.login(10);
}
//拨打
function call(Number) {
    var bresult = MdControl.isInit;

    if (bresult == 0)
    {
        alert("没有初始化！");
        return;
    }
    var nLine = MdControl.getActiveLine();

    //var Number = Text6.value;
    if (!Number && typeof (Number) != "undefined" && Number != 0)
    {
        return;
    }

    var a = MdControl.makeCall(nLine, Number, 1);
    //alert(444);
}
//拨打
function Button6_onclick() {
    var bresult = MdControl.isInit;

    if (bresult == 0)
    {
        alert("没有初始化！");
        return;
    }
    var nLine = MdControl.getActiveLine();

    var Number = Text6.value;
    if (!Number && typeof (Number) != "undefined" && Number != 0)
    {
        return;
    }

    var a = MdControl.makeCall(nLine, Number, 1);
    //alert(444);
}
//挂断
function hangup() {
    var bresult = MdControl.isInit;

    if (bresult == 0) {
        alert("没有初始化！");
        return;
    }
    var nLine = MdControl.getActiveLine();
    var a = MdControl.hangupCall(nLine);
    //alert(444);
}
//注銷
function logout() {
	disconnect();
    var bresult = MdControl.isInit;

    if (bresult == 0) {
        alert("没有初始化！");
        return;
    }

    var a = MdControl.logout();
}
function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    //setConnected(false);
    //console.log('Disconnected');
}