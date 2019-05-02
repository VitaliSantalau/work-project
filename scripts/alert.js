const typeEngine = document.querySelector('.typeEngine');
const capacityEngine = document.querySelector('.capacityEngine'); 
const dateCar = document.querySelector('.dateCar');

const submitKod = document.querySelector('.submitKod');
const resultKod = document.querySelector('.resultKod');

/* const для пограничных лет */
    const threeYear = 3*364;
    const fiveYear = 5*364;
    const sevenYear = 7*364;

function Kod() {
  let choicetypeEngine = typeEngine.value;
  let choicecapacityEngine = capacityEngine.value;
  let choicedateCar = dateCar.value;

/*  work with time */
  let nowDate = new Date();
  let carDate = new Date(choicedateCar);
  let differenceDate = nowDate.getTime() - carDate.getTime();
  let remainDate = new Date(differenceDate);
/* Переменные, отражающие остаток времени в нужном формате  */
  let remainSec = (parseInt(remainDate / 1000));
  let carDays = (parseInt(remainSec / (24 * 60 * 60)));

  switch(choicetypeEngine) {
/* тип двигателя бензин */
    case 'petrol' :
      switch (true) {
/* Проверка на пустую строку объема двигателя */          
        case choicecapacityEngine === "":
          resultKod.textContent = 'Введите объем двигателя';
          capacityEngine.focus();
          break; 
/* Проверка на пустую строку даты производства */    
        case choicedateCar === "":
          resultKod.textContent = 'Укажите дату производства';
          dateCar.focus();
          break;
/* объем двигателя менее 1000см3 */
        case choicecapacityEngine<=1000:
          if (carDays < threeYear) {
            resultKod.textContent = '8703211099';
          } else if (carDays > sevenYear) {
              resultKod.textContent = '8703219093';
            } else if (carDays > fiveYear && carDays <= sevenYear) {
                resultKod.textContent = '8703219094';  
                } else {
                    resultKod.textContent = '8703219098';
                  }
          break;
/* объем двигателя >1000 - 1500см3 */
        case choicecapacityEngine>1000 && choicecapacityEngine<=1500:
          if (carDays < threeYear) {
            resultKod.textContent = '8703221099'
          } else if (carDays > sevenYear) {
            resultKod.textContent = '8703229093';
          } else if (carDays > fiveYear && carDays <= sevenYear) {
              resultKod.textContent = '8703229094';  
              } else {
                  resultKod.textContent = '8703229098';
                }
          break; 
/* объем двигателя >1500 - 3000см3 */
        case choicecapacityEngine>1500 && choicecapacityEngine<=3000:         
          if (carDays < threeYear) {
            switch (true) {
              case choicecapacityEngine>1500 && choicecapacityEngine<=1800:
                resultKod.textContent = '8703231940';
                break;
              case choicecapacityEngine>1800 && choicecapacityEngine<=3000:
                if (choicecapacityEngine > 1800 && choicecapacityEngine <=2300) {
                  resultKod.textContent = '8703231981';
                } else {
                    resultKod.textContent = '8703231989'; 
                  }
                break;
            }
          } else {
              switch (true) {
                case choicecapacityEngine>1500 && choicecapacityEngine<=1800:
                  if (carDays > sevenYear) {
                    resultKod.textContent = '8703239041';
                  } else if (carDays > fiveYear && carDays <= sevenYear) {
                      resultKod.textContent = '8703239042';  
                      } else {
                          resultKod.textContent = '8703239049';
                        }
                  break;
                case choicecapacityEngine>1800 && choicecapacityEngine<=3000:
                  switch (true) {
                    case choicecapacityEngine>1800 && choicecapacityEngine<=2300:
                      if (carDays > sevenYear) {
                        resultKod.textContent = '8703239081';
                      } else if (carDays > fiveYear && carDays <= sevenYear) {
                          resultKod.textContent = '8703239082';  
                        } else {
                            resultKod.textContent = '8703239083';
                          }  
                      break;
                    case choicecapacityEngine>2300 && choicecapacityEngine<=3000:
                      if (carDays > sevenYear) {
                        resultKod.textContent = '8703239087';
                      } else if (carDays > fiveYear && carDays <= sevenYear) {
                          resultKod.textContent = '8703239088';  
                        } else {
                            resultKod.textContent = '8703239089';
                          }  
                      break;
                  }
                  break;
              }
            } 
          break;
/* объем двигателя >3000см3 */
        case choicecapacityEngine>3000:
          if (carDays < threeYear) {
            resultKod.textContent = '8703241099';
          } else if (carDays > sevenYear) {
            resultKod.textContent = '8703249093';
          } else if (carDays > fiveYear && carDays <= sevenYear) {
              resultKod.textContent = '8703249094';  
            } else {
                resultKod.textContent = '8703249098';
              }  
          break;        
      }
      break; /* финальный  break для бензина */

/* тип двигателя дизель */
    case 'diesel' :
      switch (true) {
/* Проверка на пустую строку объема двигателя */          
        case choicecapacityEngine === "":
          resultKod.textContent = 'Введите объем двигателя';
          capacityEngine.focus();
          break; 
/* Проверка на пустую строку даты производства */    
        case choicedateCar === "":
          resultKod.textContent = 'Укажите дату производства';
          dateCar.focus();
          break;
/* объем двигателя менее 1500см3 */
        case choicecapacityEngine<=1500:
          if (carDays < threeYear) {
            resultKod.textContent = '8703311090';
          } else if (carDays > sevenYear) {
              resultKod.textContent = '8703319093';
            } else if (carDays > fiveYear && carDays <= sevenYear) {
                resultKod.textContent = '8703319094';  
              } else {
                  resultKod.textContent = '8703319098';
                }
          break;
/* объем двигателя >1500-2500см3 */
        case choicecapacityEngine>1500 && choicecapacityEngine<=2500:
          if (carDays < threeYear) {
            resultKod.textContent = '8703321990';
          } else if (carDays > sevenYear) {
              resultKod.textContent = '8703329093';
            } else if (carDays > fiveYear && carDays <= sevenYear) {
                resultKod.textContent = '8703329094';  
              } else {
                  resultKod.textContent = '8703329098';
                }
          break;
/* объем двигателя >2500см3 */
        case choicecapacityEngine>2500:
          if (carDays < threeYear) {
            resultKod.textContent = '8703331990';
          } else if (carDays > sevenYear) {
              resultKod.textContent = '8703339093';
            } else if (carDays > fiveYear && carDays <= sevenYear) {
                resultKod.textContent = '8703339094';  
              } else {
                  resultKod.textContent = '8703339098';
                }
          break;
      }
      break; /* финальный  break для дизеля */

            
    }
}
submitKod.addEventListener('click', Kod);