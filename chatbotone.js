
	  		const responses = {
			"안녕": "안녕하세요!",
			"뭐해": "일하고 있어요.",
			"오늘 날씨": "맑아요.",
			"배고파": "뭐 먹을래?",
			"지금 몇 시야?": getCurrentTime(),
			"날짜": getCurrentDate(),
			"?": "???",
			"챗봇": "안녕하세요, 챗봇입니다!",
			"챗": "쳇!",
			"아가": "아가리 싸물어 씹련아",
			"어려워": "assertive~",
			"잘가": "다음에 또 오세요!",
			"잘 가": "다음에 또 오세요!",
			"감바스 알 하이요": "<br>감바스 알 하이요(Gambas al Ajillo)는 <br> 새우와 마늘을 주 재료로 한 <br> 스페인 요리입니다. <br> 자세한 내용은 직접 검색 바랍니다^^~!",
			"gold": "금쪽이련"
}; 

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

function getCurrentDate() {
              const days = ["일", "월", "화", "수", "목", "금", "토"];
              const date = new Date();

              const year = date.getFullYear(); 
              const month = date.getMonth() + 1; 
              const day = date.getDate();
              const dayOfWeek = days[date.getDay()]; 

              const today = `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
              return today;
        }
	
	function sendMessage() {
  		const message = document.getElementById("usermsg").value;
      		const usermsg = document.getElementById("usermsg").value.trim();
      		if (usermsg === "") {
          		return;
      		}
  		document.getElementById("chatbox").innerHTML += '<div class="chat-container right"><div class="user-bubble"><p>' + message + '</p></div></div>';
  		document.getElementById("usermsg").value = "";
  		sendResponse(message);
	}

	function sendResponse(message) {
  		let response = responses[message];
  
  	if (message.includes("어려워") || message.includes("알아?")) {
		    response = responses["어려워"];
		} else if (message.includes("ㅎㅇ") || message.includes("안녕") || message.includes("반가워")) {
			response = responses["안녕"];
		} else if (message.includes("감바스 알 하이요") || message.includes("감바스알하이요") || message.includes("Gambas al Ajillo")) {
			response = responses["감바스 알 하이요"];
		} else if (message.includes("김민성") || message.includes("김승현") || message.includes("김태원")) {
			response = responses["gold"];
		} else if (response === undefined) {
		    response = "죄송해요, 잘 이해하지 못했어요.<br>추가할만한 사항들은 제작자에게 문의바랍니다.";
  		} else if (typeof response === "function") {
    		response = response();
 		 }

		  document.getElementById("chatbox").innerHTML += '<div class="chat-container left"><div class="chatbot-bubble"><p>챗봇: ' + response + '</p></div></div>';
		}

