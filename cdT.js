const ddayT = new Date("2023-11-20T09:00:00");
    
    function CountdownT() {
      const nT = new Date();
      const timeT = ddayT - nT;

      if (timeT <= 0) {
        document.getElementById("countdownT").textContent = "디데이 종료";
      } else {
        const dT = Math.floor(timeT / (1000 * 60 * 60 * 24));
        const hT = Math.floor((timeT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mT = Math.floor((timeT % (1000 * 60 * 60)) / (1000 * 60));
        const sT = Math.floor((timeT % (1000 * 60)) / 1000);
      
        const cdTextT = `${dT} : ${hT} : ${mT} : ${sT}`;
        document.getElementById("countdownT").textContent = cdTextT;
      }
    }

    setInterval(CountdownT, 1000);
