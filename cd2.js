const dday2 = new Date("2024-11-14T08:00:00");
    
    function Countdown2() {
      const n2 = new Date();
      const time2 = dday2 - n2;

      if (time2 <= 0) {
        document.getElementById("countdown2").textContent = "디데이 종료";
      } else {
        const d2 = Math.floor(time2 / (1000 * 60 * 60 * 24));
        const h2 = Math.floor((time2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m2 = Math.floor((time2 % (1000 * 60 * 60)) / (1000 * 60));
        const s2 = Math.floor((time2 % (1000 * 60)) / 1000);
      
        const cdText2 = `${d2} : ${h2} : ${m2} : ${s2}`;
        document.getElementById("countdown2").textContent = cdText2;
      }
    }

    setInterval(Countdown2, 1000);
