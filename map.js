function preload() {
  // Tworzymy bloki na podstawie danych.
  const blocksData = [

  // Wprowadzenie zakrętów i zmiany kierunku
    { "delay": "500", "startX": "0%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" , },
    { "delay": "500", "startX": "100%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "1000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "1000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "1500", "startX": "100%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },
    { "delay": "2000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "2000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "2500", "startX": "0%", "startY": "0%", "endX": "100%", "endY": "0%", "duration": "0.5" },
    { "delay": "2500", "startX": "0%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },


    { "delay": "3500", "startX": "0%", "startY": "100%", "endX": "100%", "endY": "100%", "duration": "3" },

  // Wprowadzenie większych opóźnień dla bardziej wyzwańczego zakończenia
    { "delay": "10000", "startX": "0%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "10000", "startX": "100%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "11000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "11000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "12000", "startX": "100%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },
    { "delay": "12000", "startX": "0%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },


    { "delay": "20", "startX": "0%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "20", "startX": "100%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "2000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "2000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "2000", "startX": "-50%", "startY": "90%", "endX": "100%", "endY": "90%", "duration": "3" },
    { "delay": "21000", "startX": "-50%", "startY": "100%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "2300", "startX": "-50%", "startY": "50%", "endX": "100%", "endY": "50%", "duration": "3" },
    { "delay": "4000", "startX": "100%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },
    { "delay": "4000", "startX": "0%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },
    { "delay": "6000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "6000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "6500", "startX": "0%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "6500", "startX": "100%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "7000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "7000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "9000", "startX": "100%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },
    { "delay": "9000", "startX": "0%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },
    { "delay": "11000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "11000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "11000", "startX": "-50%", "startY": "50%", "endX": "100%", "endY": "50%", "duration": "3" },
    { "delay": "15000", "startX": "0%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "15000", "startX": "-50%", "startY": "0%", "endX": "100%", "endY": "10%", "duration": "3" },
     { "delay": "15000", "startX": "-50%", "startY": "10%", "endX": "100%", "endY": "20%", "duration": "3" },
     
    { "delay": "15000", "startX": "-50%", "startY": "30%", "endX": "100%", "endY": "40%", "duration": "3" },
    { "delay": "15000", "startX": "100%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "20000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "20000", "startX": "-50%", "startY": "0%", "endX": "100%", "endY": "0%", "duration": "3" },
    { "delay": "21000", "startX": "-50%", "startY": "20%", "endX": "100%", "endY": "40%", "duration": "3" },
    { "delay": "20000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "22000", "startX": "100%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },
    { "delay": "22000", "startX": "-50%", "startY": "0%", "endX": "100%", "endY": "0%", "duration": "3" },
    { "delay": "22000", "startX": "0%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },
    { "delay": "24000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "24000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "25000", "startX": "0%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "26000", "startX": "100%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "27000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "27000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "28000", "startX": "100%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },
    { "delay": "29000", "startX": "0%", "startY": "100%", "endX": "0%", "endY": "0%", "duration": "3" },
    { "delay": "29000", "startX": "100%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "29000", "startX": "0%", "startY": "0%", "endX": "0%", "endY": "100%", "duration": "3" },
    { "delay": "29000", "startX": "-50%", "startY": "0%", "endX": "100%", "endY": "0%", "duration": "3" },
    { "delay": "30000", "startX": "-50%", "startY": "50%", "endX": "100%", "endY": "50%", "duration": "3" },
    { "delay": "30500", "startX": "-50%", "startY": "56%", "endX": "100%", "endY": "56%", "duration": "3" },
    { "delay": "31000", "startX": "-50%", "startY": "40%", "endX": "100%", "endY": "40%", "duration": "3" },
    { "delay": "31500", "startX": "-50%", "startY": "30%", "endX": "100%", "endY": "30%", "duration": "3" },
    { "delay": "32000", "startX": "-50%", "startY": "70%", "endX": "100%", "endY": "70%", "duration": "3" },
    { "delay": "32500", "startX": "-50%", "startY": "10%", "endX": "100%", "endY": "70%", "duration": "3" },
    { "delay": "33000", "startX": "-50%", "startY": "100%", "endX": "100%", "endY": "0%", "duration": "3" },
    { "delay": "33500", "startX": "-50%", "startY": "0%", "endX": "100%", "endY": "100%", "duration": "3" },
    { "delay": "33500", "startX": "-50%", "startY": "0%", "endX": "100%", "endY": "0%", "duration": "3" },
    
    // sciana
    { "delay": "33500", "startX": "-50%", "startY": "10%", "endX": "100%", "endY": "10%", "duration": "3" },
    { "delay": "33500", "startX": "-50%", "startY": "20%", "endX": "100%", "endY": "20%", "duration": "3" },
    { "delay": "33500", "startX": "-50%", "startY": "30%", "endX": "100%", "endY": "30%", "duration": "3" },



{"delay": "35000", "startX": "-50%", "startY": "0%", "endX": "100%", "endY": "0%", "duration": "4", "type":"3"},


      ];

  blocksData.forEach((blockData) => {
    createBlock(
      
      (blockData.delay),
      (blockData.startX),
      (blockData.startY),
      (blockData.endX),
      (blockData.endY),
      (blockData.duration),
      (blockData.type)
    );
    applyResetDelay(blocksData.currentdelay)
    s(blockData.s)
  });
}