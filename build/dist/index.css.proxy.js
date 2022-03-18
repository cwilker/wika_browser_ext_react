// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  font-weight: 100;\n  margin: 0px;\n  width: 550px;\n  height: 600px;\n  outline: solid;\n  outline-color: #DFE1E5;\n}\n\nol, ul {\n  padding-left: 30px;\n}\n\n.background {\n  width: 550px;\n  height: 600px;\n  background: '#F9F9F9';\n}\n\n.header {\n  outline: solid;\n  outline-color: #DFE1E5;\n}\n\n.mainbutton {\n  width: 90%;\n  height: 60%;\n  background: #4493BD;\n  border-radius: 5px;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center\n}\n\n.logo {\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));\n}\n\n.sent {\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center\n}\n\n.thanks{\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center\n}\n\n.board-row:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.status {\n  margin-bottom: 10px;\n}\n\n.square {\n  background: #fff;\n  border: 1px solid #999;\n  float: left;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 34px;\n  height: 34px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n  width: 34px;\n}\n\n.square:focus {\n  outline: none;\n}\n\n.kbd-navigation .square:focus {\n  background: #ddd;\n}\n\n.game {\n  display: flex;\n  flex-direction: row;\n}\n\n.game-info {\n  margin-left: 20px;\n}\n\n\n/* fonts */\n\n.heading1 {\n  font-family: Helvetica;\n  font-style: normal;\n  font-weight: light;\n  font-size: 18px;\n}\n\n.bodyCopy {font-family: Helvetica;\nfont-style: normal;\nfont-weight: light;\nfont-size: 13px;\n}\n\n.bodyLabel {font-family: Helvetica;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n}\n\n/* Main Content style */\n\n.mainContent {\n  position: relative;\n  background: #F9F9F9;\n  height: 465px;\n  width: 550px;\n  outline: solid;\n  outline-color: #DFE1E5;\n}\n\n.mainInside {\n  padding: 20px\n}\n\n.mainThumb {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 250px;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n/* account style */\n\n.accountBox {\n  position: relative;\n  top: 30%;\n  height: 70px;\n  background: #FFFFFF;\n  outline: solid;\n  outline-color: #DFE1E5;\n}\n\n.accountName {\n  position: absolute;\n  top: 20px;\n  left: 78px;\n}\n\n.accountAddress{\n  position: absolute;\n  top: 38px;\n  left: 78px;\n}\n\n.identicon {\n  position: absolute;\n  top: 18px;\n  left: 17px;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.mainText {\n  border: none;\n  position: relative;\n  height: 30px;\n  width: 100%;\n  border-radius: 2px;\n  outline: solid;\n  outline-color: #DFE1E5;\n}\n\n.mainButton {\n  border: none;\n  position: relative;\n  height: 30px;\n  width: 100%;\n  border-radius: 2px;\n}\n\n/* Popup style */\n\ninput[type=text]:focus {\n  border: none;\n}\n\n.search {\n  border: none;\n  position: absolute;\n  top: 14px;\n  left: 250px;\n  height: 30px;\n  width: 160px;\n  border-radius: 2px;\n  outline: solid;\n  outline-color: #DFE1E5;\n}\n\n.moreRow {\n  position: relative;\n  border-bottom: 2px solid #DFE1E5;\n  padding: 10px 35px 10px 10px;\n  vertical-align: middle;\n}\n\n.moreRowTop {\n  position: relative;\n  /* border-bottom: 1px solid #DFE1E5; */\n  padding: 8px 39px 5px 10px;\n  height: 25px;\n  vertical-align: middle;\n}\n\n.moreRowBottom {\n  position: relative;\n  border-bottom: 2px solid #DFE1E5;\n  padding: 8px 39px 9px 10px;\n  height: 25px;\n  vertical-align: middle;\n}\n\n.moreText {\n  position: absolute;\n  top: 50%;\n  left: 35px;\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n.accountText {\n  padding-top: 5px\n}\n\n.moreButton {\n  position: relative; \n  margin-bottom: 6px\n}\n\n.moreButtonBottom {\n  position: relative; \n}\n\n.more {\n  position: absolute;\n  background: #F9F9F9;\n  top: 50px;\n  left: 290px;\n  width: 260px;\n  height: 386px;\n  border-radius: 2px;\n  outline: solid;\n  outline-color: #DFE1E5;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n}\n\n.settings {\n  position: absolute;\n  background: #F9F9F9;\n  top: 50px;\n  left: 330px;\n  width: 220px;\n  height: 135px;\n  border-radius: 2px;\n  outline: solid;\n  outline-color: #DFE1E5;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n}\n\n.accountMenu {\n  position: absolute;\n  background: #F9F9F9;\n  top: 70px;\n  left: 270px;\n  width: 220px;\n  height: 154px;\n  border-radius: 2px;\n  outline: solid;\n  outline-color: #DFE1E5;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n}\n\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 20px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  width: 13px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(14px);\n  -ms-transform: translateX(14px);\n  transform: translateX(14px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}