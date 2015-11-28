var args = arguments[0] || {};

// User 객체 셋팅하는 코드. 이후 Parse의 User도 설정해줘야함. Parse.User.current에 대응하기 위해서.
var userM = Alloy.Models.instance('user');
var settingsM = Alloy.Models.instance('settings');
var contactsCol = Alloy.Collections.instance('contacts');

exports.doingSyncAddress = false;

// 로그인 처리되면 userM이 fetch되고 나서 그 정보를 바탕으로 처리하는 이벤트들
userM.on('change',function(){
	// 로그인 정보 저장
	Alloy.Globals.settings.set('User_sessionToken', userM.get('_sessionToken')).save();

	// 전역객체화
	Alloy.Globals.user = userM;

	$.trigger('login:user', Alloy.Globals.user);

	// 여러번 호출되는지 테스트
	// var randomCode = Math.floor(Math.random()*9999);
	// Ti.API.debug('User_sessionToken : ' + Alloy.Globals.settings.get('User_sessionToken') + ' / random : ' + randomCode);

	userM.off('change',arguments.callee);
});

// 외부로 드러낼 인터페이스
exports.requiredLogin = function() {
	// userReCreate();
	// return;

	//로그인 안되어 있으면 로그인 창 띄움.
	if(exports.isLogin()){
		// 로그인 처리
		userM.login();

		// 메인 윈도우 열기
		Alloy.Globals.navigation.open();
		// 대기 화면 닫기
		// if (Alloy.Globals.splashWin) {
		// 	Alloy.Globals.splashWin.close();
		// 	Alloy.Globals.splashWin = null;
		// }
		$.trigger('login:open');
	}else{
		Alloy.Globals.closeAllWindow();

		Alloy.createController('join').getView().open();

		// 대기 화면 닫기
		// if (Alloy.Globals.splashWin) {
		// 	Alloy.Globals.splashWin.close();
		// 	Alloy.Globals.splashWin = null;
		// }
	}
};

// function userReCreate() {
// 	Ti.API.error('userReCreate!!!');
// 	Parse.Cloud.run('userFindFromContacts', null, {
// 		success: function(result) {
// 			Ti.API.debug('userReCreate Complete :');
//
// 			var userCreateArrary = result.userCreateArrary;
//
// 			nextUserCreate(0);
//
// 			function nextUserCreate(idx) {
// 				Ti.API.debug("nextUserCreate function idx : ", idx);
// 				if (idx > userCreateArrary.length -1) { return true; }
//
// 				var userInfo = userCreateArrary[idx];
//
// 				Parse.Cloud.run('userCreateFromInfo', userInfo, {
// 					success: function(result) {
// 						Ti.API.debug('nextUserCreate Success :', result);
// 						nextUserCreate(idx + 1);
// 					},
// 					error: function(error) {
// 						Ti.API.error('nextUserCreate Error :', error);
// 						nextUserCreate(idx + 1);
// 					}
// 				});
// 			}
// 		},
// 		error: function(error) {
// 			Ti.API.error('userReCreate Error :', error);
// 		}
// 	});
// }

// 로긴 여부 판단
exports.isLogin = function() {
	var loginData = Alloy.Globals.settings.get('User_sessionToken');
	var isLogin = loginData && _.size(loginData);
	//Ti.API.debug('loginData : ' + loginData);
	return isLogin;
};

// 로그아웃 처리
exports.logout = function(callback) {
	Alloy.Globals.settings.set('User_sessionToken', undefined).save();
	Alloy.Globals.user = null;

	// 로긴 이벤트 발생시킴 : parsePush 컨트롤러가 받는다.
	$.trigger('logout', userM);

	Alloy.Globals.closeAllWindow();

	_.isFunction(callback) && callback();
	Alloy.Globals.loginC.requiredLogin();

	// 메인 윈도우 닫기
	Alloy.Globals.navigation.topWindow.close();
};

// 회원 탈퇴 처리
exports.withdraw = function() {
	var user = Alloy.Globals.user;
	var withdrawUser = function(user) {
		// CC코드로 탈퇴처리
		Parse.Cloud.run('userModify', { "isWithdraw":true }, {
			success: function(result) {
				exports.logout();
			},
			error: function(error) {
				Ti.API.error("withdraw User Failed");
				Ti.API.error(error);
			}
		});
	};

	Parse.User.become(Alloy.Globals.settings.get('User_sessionToken')).then(function (user) {
		withdrawUser(user);
	}, function (error) {
		Ti.API.error(error);
	});
}
