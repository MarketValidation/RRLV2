
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector(".time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const titleDimension = document.querySelector(".titleDimension");
let userAns;

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(0); //calling startTimer function
//    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  0;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
var protec;



const ansArr = new Array(31); //2=3
//3=3 this is 32 below
for (var i = 0; i < 32; i++) {
    ansArr[i] = 0;
}

const timeQues = new Array(31); //2=3
//3=3 this is 32 below
for (var i = 0; i < 32; i++) {
    timeQues[i] = 0;
}

//const restart_quiz = result_box.querySelector(".buttons .restart");
//const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
//restart_quiz.onclick = ()=>{

//    window.location.reload(true);

  //  quiz_box.classList.add("activeQuiz"); //show quiz box
  //  result_box.classList.remove("activeResult"); //hide result box
  //  timeValue = 15;
  //  que_count = 0;
//    que_numb = 1;
//    userScore = 0;
//    widthValue = 0;
//    showQuetions(que_count); //calling showQestions function
//    queCounter(que_numb); //passing que_numb value to queCounter
//    clearInterval(counter); //clear counter
//    clearInterval(counterLine); //clear counterLine
//    startTimer(timeValue); //calling startTimer function
//    startTimerLine(widthValue); //calling startTimerLine function
//    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
//    next_btn.classList.remove("show"); //hide the next button
//}

// if quitQuiz button clicked
//quit_quiz.onclick = ()=>{
//window.location.href = "https://marketvalidation.github.io/RRLV2/index.html";//home
//}

const next_btn = document.querySelector(".next_btn");
const prev_btn = document.querySelector(".prev_btn");
const clear_btn = document.querySelector(".clear_btn");
const bottom_ques_counter = document.querySelector(".total_que");
  console.log("start quecount" + ansArr[que_count]);

  next_btn.onclick = ()=>{  if (ansArr[que_count + 1] == 0){
      if(que_count < questions.length - 1){ //if question count is less than total question length
          que_count++; //increment the que_count value
          que_numb++; //increment the que_numb value
          showQuetions(que_count); //calling showQestions function
          queCounter(que_numb); //passing que_numb value to queCounter
        //  clearInterval(counter); //clear counter 15s(time)
        //  clearInterval(counterLine); //clear counterLine (running time display)
          startTimer(0); //calling startTimer function 15s start
        //  startTimerLine(widthValue); //calling startTimerLine function 0s start line
          timeText.textContent = "Time taken"; //change the timeText to Time Left
          next_btn.classList.remove("show"); //hide the next button
          prev_btn.classList.add("show"); //hide the next button
          clear_btn.classList.remove("show"); //show the next button
      }else{
          clearInterval(counter); //clear counter
          clearInterval(counterLine); //clear counterLine
          showResult(); //calling showResult function
      } } else if (ansArr[que_count + 1] > 0) {
        var x = ansArr[que_count + 1].toString();
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
             document.getElementById(x).classList.add("correct");

               prev_btn.classList.add("show");
               next_btn.classList.add("show"); //show the next button
               clear_btn.classList.add("show"); //show the next button
             } else {   showResult(); //calling showResult function
             }
  }



// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    const ocl_text = document.querySelector(".ocl_text");
    protec = 0;
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span> <br> <span><div class="detailedquestion"><em>'+questions[index].detailedquestion +'</div></span>';
    let option_tag =
    '<center><table><tr><th><div  id="1" class="option option123" data-aos="fade-down" data-aos-delay="50" onmouseover="document.getElementById(\'SNVLow\').style.display = \'block\';\" onmouseout="document.getElementById(\'SNVLow\').style.display = \'none\';\"><span>'+ questions[index].options[0] +'</span></div></th>'
    + '<th><div id="2" class="option option123" data-aos="fade-down" data-aos-delay="100" onmouseover="document.getElementById(\'SNVLow\').style.display = \'block\';\" onmouseout="document.getElementById(\'SNVLow\').style.display = \'none\';\"><span>'+ questions[index].options[1] +'</span></div></th>'
    + '<th><div id="3" class="option option123" data-aos="fade-down" data-aos-delay="150" onmouseover="document.getElementById(\'SNLow\').style.display = \'block\';\" onmouseout="document.getElementById(\'SNLow\').style.display = \'none\';\"><span>'+ questions[index].options[2] +'</span></div></th>'
    + '<th><div id="4" class="option option4567" data-aos="fade-down" data-aos-delay="200" onmouseover="document.getElementById(\'SNLow\').style.display = \'block\';\" onmouseout="document.getElementById(\'SNLow\').style.display = \'none\';\"><span>'+ questions[index].options[3] +'</span></div></th>'
    + '<th><div id="5" class="option option4567"  data-aos="fade-down" data-aos-delay="250" onmouseover="document.getElementById(\'SNMedium\').style.display = \'block\';\" onmouseout="document.getElementById(\'SNMedium\').style.display = \'none\';\"><span>'+ questions[index].options[4] +'</span></div></th>'
    + '<th><div id="6" class="option option4567" data-aos="fade-down" data-aos-delay="300" onmouseover="document.getElementById(\'SNMedium\').style.display = \'block\';\" onmouseout="document.getElementById(\'SNMedium\').style.display = \'none\';\"><span>'+ questions[index].options[5] +'</span></div></th>'
    + '<th><div  id="7" class="option option4567" data-aos="fade-down"  data-aos-delay="350" onmouseover="document.getElementById(\'SNHigh\').style.display = \'block\';\" onmouseout="document.getElementById(\'SNHigh\').style.display = \'none\';\"><span>'+ questions[index].options[6] +'</span></div></th>'
    + '<th><div id="8" class="option option8910"  data-aos="fade-down"  data-aos-delay="400" onmouseover="document.getElementById(\'SNHigh\').style.display = \'block\';\" onmouseout="document.getElementById(\'SNHigh\').style.display = \'none\';\"><span>'+ questions[index].options[7] +'</span></div></th>'
    + '<th><div id="9" class="option option8910" data-aos="fade-down" data-aos-delay="450" onmouseover="document.getElementById(\'SNVHigh\').style.display = \'block\';\" onmouseout="document.getElementById(\'SNVHigh\').style.display = \'none\';\"><span>'+ questions[index].options[8] +'</span></div></th>'
    + '<th><div  id="10" class="option option8910"  data-aos="fade-down"  data-aos-delay="500" onmouseover="document.getElementById(\'SNVHigh\').style.display = \'block\';\" onmouseout="document.getElementById(\'SNVHigh\').style.display = \'none\';\"><span>'+ questions[index].options[9] +'</span></div></th></tr></table>';
    let ocl_tag = '<span> <center><div class="ocl_text">' + questions[index].scoringnote + '</div></span>';

    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    ocl_text.innerHTML = ocl_tag; //adding new div tag inside option_tag
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }

    if (que_numb < 2){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let dimensionTag = '<span><p>Customer Dimension</p></span>';
        titleDimension.innerHTML = dimensionTag;  //adding new span tag inside score_Text
    }
    else if((que_numb > 1) && (que_numb < 3)){ // if user scored more than 1
          let dimensionTag = '<span><p>Market Dimension</p></span>';
      titleDimension.innerHTML = dimensionTag;  //adding new span tag inside score_Text
    }
    else if((que_numb > 3) && (que_numb < 5)) { // if user scored less than 1
           let dimensionTag = '<span><p>Product Dimension</p></span>';
      titleDimension.innerHTML = dimensionTag;  //adding new span tag inside score_Text
    } else {   let dimensionTag = '<span><p>Business Dimension</p></span>';
titleDimension.innerHTML = dimensionTag;  //adding new span tag inside score_Text    }


} }
// creating the new div tags which for icons
let tickIconTag = '<div id="tickIcon"class="icon tick"><i class="fas fa-check"></i></div>';
//let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
// if Next Que button clicked
prev_btn.onclick = ()=>{
  protec =1;
    if(que_count <= questions.length - 1){ //if question count is less than total question length
        que_count--; //increment the que_count value
        que_numb--; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
      //  clearInterval(counter); //clear counter 15s(time)
    //    clearInterval(counterLine); //clear counterLine (running time display)
    //    startTimer(timeValue); //calling startTimer function 15s start
    //    startTimerLine(widthValue); //calling startTimerLine function 0s start line
        timeText.textContent = "Time Left"; //change the timeText to Time Left

        next_btn.classList.add("show"); //show the next button
        prev_btn.classList.add("show"); //show the next button
        clear_btn.classList.add("show"); //show the next button
var x = ansArr[que_count].toString();
document.getElementById(x).classList.add("correct");

       if(que_numb == 1){  prev_btn.classList.remove("show"); }
    }else{
    //    clearInterval(counter); //clears counter
    //    clearInterval(counterLine); //clear counterLine

    }
}

clear_btn.onclick = ()=>{
var x = ansArr[que_count].toString();
document.getElementById(x).classList.remove("correct");
protec = 0;
ansArr[que_count] = 0;
console.log(x);
console.log(ansArr[que_count]);
console.log(que_count);
  clear_btn.classList.remove("show"); //show the next button
}

//if user clicked on option
function optionSelected(answer){

    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
  userAns = answer.textContent; //getting user selected option

  //  let correcAns = questions[que_count].answer; //getting correct answer from array (or weight)

    const allOptions = option_list.children.length; //getting all option items
     //if user selected option is equal to array's correct answer

if ((protec == 0) && (ansArr[que_count] == 0)){
protec =1;

answer.classList.add("correct");


userScore += parseInt(userAns); //upgrading score value with 1
ansArr[que_count] = parseInt(userAns);

} else{   console.log(protec);
console.log(ansArr[que_count]);
console.log(que_count);  }


//       if (ansArr[que_count + 1 ] == 0){   if ((ansArr[que_count]) == (parseInt(userAns))){  } else {
//        answer.classList.add("correct"); //adding green color to correct selected option
//        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
//      }} else {answer.classList.remove("correct"); //adding green color to correct selected option
//answer.removeAttribute("tickIconTag"); //adding tick icon to correct selected option



      //  console.log("Correct Answer");
    //    console.log("Your correct answers = " + userScore);
    //    console.log("que_count = " + que_count);
    //    console.log("que_numb = " + que_numb);
    //    console.log("nsArr[que_count] = " + ansArr[que_count]);
    //    console.log("answer" + answer);
    next_btn.classList.add("show"); //show the next button if user selected any option
    clear_btn.classList.add("show"); //show the next button
}





function showResult(){
  document.getElementById('faq').style.height = '1700px';
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    const scoreText1 = result_box.querySelector(".score_text1");
    const scoreText2 = result_box.querySelector(".score_text2");
    const scoreText3 = result_box.querySelector(".score_text3");
    const scoreText4 = result_box.querySelector(".score_text4");
    const scoreText5 = result_box.querySelector(".score_text5");
    const scoreText6 = result_box.querySelector(".score_text6");
    const scoreText7 = result_box.querySelector(".score_text7");
    const scoreText8 = result_box.querySelector(".score_text8");
    const scoreText9 = result_box.querySelector(".score_text9");
    const scoreText10 = result_box.querySelector(".score_text10");
    const scoreText11 = result_box.querySelector(".score_text11");
    const scoreText12 = result_box.querySelector(".score_text12");
    const scoreText13 = result_box.querySelector(".score_text13");
    const scoreText14 = result_box.querySelector(".score_text14");
    const scoreText15 = result_box.querySelector(".score_text15");
    const scoreText16 = result_box.querySelector(".score_text16");
    const scoreText17 = result_box.querySelector(".score_text17");
    const scoreText18 = result_box.querySelector(".score_text18");
    const scoreText19 = result_box.querySelector(".score_text19");
    const scoreText20 = result_box.querySelector(".score_text20");
    const scoreText21 = result_box.querySelector(".score_text21");
    const scoreText22 = result_box.querySelector(".score_text22");
    const scoreText23 = result_box.querySelector(".score_text23");
    const scoreText24 = result_box.querySelector(".score_text24");
    const scoreText25 = result_box.querySelector(".score_text25");
    const scoreText26 = result_box.querySelector(".score_text26");
    const scoreText27 = result_box.querySelector(".score_text27");
    const scoreText28 = result_box.querySelector(".score_text28");
    const scoreText29 = result_box.querySelector(".score_text29");
    const scoreText30 = result_box.querySelector(".score_text30");
    const scoreText31 = result_box.querySelector(".score_text31");


    const weightText = result_box.querySelector(".weight_text");
    const weightText1 = result_box.querySelector(".weight_text1");
    const weightText2 = result_box.querySelector(".weight_text2");
    const weightText3 = result_box.querySelector(".weight_text3");
    const weightText4 = result_box.querySelector(".weight_text4");
    const weightText5 = result_box.querySelector(".weight_text5");
    const weightText6 = result_box.querySelector(".weight_text6");
    const weightText7 = result_box.querySelector(".weight_text7");
    const weightText8 = result_box.querySelector(".weight_text8");
    const weightText9 = result_box.querySelector(".weight_text9");
    const weightText10 = result_box.querySelector(".weight_text10");
    const weightText11 = result_box.querySelector(".weight_text11");
    const weightText12 = result_box.querySelector(".weight_text12");
    const weightText13 = result_box.querySelector(".weight_text13");
    const weightText14 = result_box.querySelector(".weight_text14");
    const weightText15 = result_box.querySelector(".weight_text15");
    const weightText16 = result_box.querySelector(".weight_text16");
    const weightText17 = result_box.querySelector(".weight_text17");
    const weightText18 = result_box.querySelector(".weight_text18");
    const weightText19 = result_box.querySelector(".weight_text19");
    const weightText20 = result_box.querySelector(".weight_text20");
    const weightText21 = result_box.querySelector(".weight_text21");
    const weightText22 = result_box.querySelector(".weight_text22");
    const weightText23 = result_box.querySelector(".weight_text23");
    const weightText24 = result_box.querySelector(".weight_text24");
    const weightText25 = result_box.querySelector(".weight_text25");
    const weightText26 = result_box.querySelector(".weight_text26");
    const weightText27 = result_box.querySelector(".weight_text27");
    const weightText28 = result_box.querySelector(".weight_text28");
    const weightText29 = result_box.querySelector(".weight_text29");
    const weightText30 = result_box.querySelector(".weight_text30");
    const weightText31 = result_box.querySelector(".weight_text31");


    const weightScore = result_box.querySelector(".weight_score");
    const weightScore1 = result_box.querySelector(".weight_score1");
    const weightScore2 = result_box.querySelector(".weight_score2");
    const weightScore3 = result_box.querySelector(".weight_score3");
    const weightScore4 = result_box.querySelector(".weight_score4");
    const weightScore5 = result_box.querySelector(".weight_score5");
    const weightScore6 = result_box.querySelector(".weight_score6");
    const weightScore7 = result_box.querySelector(".weight_score7");
    const weightScore8 = result_box.querySelector(".weight_score8");
    const weightScore9 = result_box.querySelector(".weight_score9");
    const weightScore10 = result_box.querySelector(".weight_score10");
    const weightScore11 = result_box.querySelector(".weight_score11");
    const weightScore12 = result_box.querySelector(".weight_score12");
    const weightScore13 = result_box.querySelector(".weight_score13");
    const weightScore14 = result_box.querySelector(".weight_score14");
    const weightScore15 = result_box.querySelector(".weight_score15");
    const weightScore16 = result_box.querySelector(".weight_score16");
    const weightScore17 = result_box.querySelector(".weight_score17");
    const weightScore18 = result_box.querySelector(".weight_score18");
    const weightScore19 = result_box.querySelector(".weight_score19");
    const weightScore20 = result_box.querySelector(".weight_score20");
    const weightScore21 = result_box.querySelector(".weight_score21");
    const weightScore22 = result_box.querySelector(".weight_score22");
    const weightScore23 = result_box.querySelector(".weight_score23");
    const weightScore24 = result_box.querySelector(".weight_score24");
    const weightScore25 = result_box.querySelector(".weight_score25");
    const weightScore26 = result_box.querySelector(".weight_score26");
    const weightScore27 = result_box.querySelector(".weight_score27");
    const weightScore28 = result_box.querySelector(".weight_score28");
    const weightScore29 = result_box.querySelector(".weight_score29");
    const weightScore30 = result_box.querySelector(".weight_score30");
    const weightScore31 = result_box.querySelector(".weight_score31");

    const weightOCL_Customer = result_box.querySelector(".weightOCL_Customer");
    const weightOCL_Market = result_box.querySelector(".weightOCL_Market");
    const weightOCL_Product = result_box.querySelector(".weightOCL_Product");
    const weightOCL_Business = result_box.querySelector(".weightOCL_Business");

    const timeScore = result_box.querySelector(".time_score");
    const timeScore1 = result_box.querySelector(".time_score1");
    const timeScore2 = result_box.querySelector(".time_score2");
    const timeScore3 = result_box.querySelector(".time_score3");
    const timeScore4 = result_box.querySelector(".time_score4");
    const timeScore5 = result_box.querySelector(".time_score5");
    const timeScore6 = result_box.querySelector(".time_score6");
    const timeScore7 = result_box.querySelector(".time_score7");
    const timeScore8 = result_box.querySelector(".time_score8");
    const timeScore9 = result_box.querySelector(".time_score9");
    const timeScore10 = result_box.querySelector(".time_score10");
    const timeScore11 = result_box.querySelector(".time_score11");
    const timeScore12 = result_box.querySelector(".time_score12");
    const timeScore13 = result_box.querySelector(".time_score13");
    const timeScore14 = result_box.querySelector(".time_score14");
    const timeScore15 = result_box.querySelector(".time_score15");
    const timeScore16 = result_box.querySelector(".time_score16");
    const timeScore17 = result_box.querySelector(".time_score17");
    const timeScore18 = result_box.querySelector(".time_score18");
    const timeScore19 = result_box.querySelector(".time_score19");
    const timeScore20 = result_box.querySelector(".time_score20");
    const timeScore21 = result_box.querySelector(".time_score21");
    const timeScore22 = result_box.querySelector(".time_score22");
    const timeScore23 = result_box.querySelector(".time_score23");
    const timeScore24 = result_box.querySelector(".time_score24");
    const timeScore25 = result_box.querySelector(".time_score25");
    const timeScore26 = result_box.querySelector(".time_score26");
    const timeScore27 = result_box.querySelector(".time_score27");
    const timeScore28 = result_box.querySelector(".time_score28");
    const timeScore29 = result_box.querySelector(".time_score29");
    const timeScore30 = result_box.querySelector(".time_score30");
    const timeScore31 = result_box.querySelector(".time_score31");

    const time_scoreCustomer = result_box.querySelector(".time_scoreCustomer");
    const time_scoreMarket = result_box.querySelector(".time_scoreMarket");
    const time_scoreProduct = result_box.querySelector(".time_scoreProduct");
    const time_scoreBusiness = result_box.querySelector(".time_scoreBusiness");

    const time_scoreOverall = result_box.querySelector(".time_scoreOverall");
     // if user scored more than 3

     var time_scoreOverallTag = timeQues.reduce(function(a, b){
        return a + b;
    }, 0);
    time_scoreOverall.innerHTML = time_scoreOverallTag;

let time_scoreCustomerTag = '<span>'+ (
timeQues[0] +
timeQues[1] +
timeQues[2] +
timeQues[3] +
timeQues[4] +
timeQues[5] +
timeQues[6] +
timeQues[7] +
timeQues[8] +
timeQues[9] +
timeQues[10] )+'</span>';
 time_scoreCustomer.innerHTML = time_scoreCustomerTag;

 let time_scoreMarketTag = '<span>'+ (
 timeQues[11] +
 timeQues[12] +
 timeQues[13] +
 timeQues[14] +
 timeQues[15] +
 timeQues[16] +
 timeQues[17] )+'</span>';
  time_scoreMarket.innerHTML = time_scoreMarketTag;

  let time_scoreProductTag = '<span>'+ (
  timeQues[18] +
  timeQues[19] +
  timeQues[20] +
  timeQues[21] +
  timeQues[22] +
  timeQues[23] +
  timeQues[24] )+'</span>';
   time_scoreProduct.innerHTML = time_scoreProductTag;

   let time_scoreBusinessTag = '<span>'+ (
   timeQues[25] +
   timeQues[26] +
   timeQues[27] +
   timeQues[28] +
   timeQues[29] +
   timeQues[30] +
   timeQues[31] )+'</span>';
    time_scoreBusiness.innerHTML = time_scoreBusinessTag;


        //creating a new span tag and passing the user score number and total question number
   let timeScoreTag = '<span>'+ timeQues[0] +'</span>';
         timeScore.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[1] +'</span>';
         timeScore1.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[2] +'</span>';
         timeScore2.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[3] +'</span>';
         timeScore3.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[4] +'</span>';
         timeScore4.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[5] +'</span>';
         timeScore5.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[6] +'</span>';
         timeScore6.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[7] +'</span>';
         timeScore7.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[8] +'</span>';
         timeScore8.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[9] +'</span>';
         timeScore9.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[10] +'</span>';
         timeScore10.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[11] +'</span>';
         timeScore11.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[12] +'</span>';
         timeScore12.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[13] +'</span>';
         timeScore13.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[14] +'</span>';
         timeScore14.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[15] +'</span>';
         timeScore15.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[16] +'</span>';
         timeScore16.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[17] +'</span>';
         timeScore17.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[18] +'</span>';
         timeScore18.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[19] +'</span>';
         timeScore19.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[20] +'</span>';
         timeScore20.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[21] +'</span>';
         timeScore21.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[22] +'</span>';
         timeScore22.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[23] +'</span>';
         timeScore23.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[24] +'</span>';
         timeScore24.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[25] +'</span>';
         timeScore25.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[26] +'</span>';
         timeScore26.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[27] +'</span>';
         timeScore27.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[28] +'</span>';
         timeScore28.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[29] +'</span>';
         timeScore29.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[30] +'</span>';
         timeScore30.innerHTML = timeScoreTag;
       timeScoreTag = '<span>'+ timeQues[31] +'</span>';
         timeScore31.innerHTML = timeScoreTag;



          //adding new span tag inside score_Text

    let scoreTag = '<span>'+ ansArr[0] +'</span>';
          scoreText.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[1] +'</span>';
          scoreText1.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[2] +'</span>';
          scoreText2.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[3] +'</span>';
          scoreText3.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[4] +'</span>';
          scoreText4.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[5] +'</span>';
          scoreText5.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[6] +'</span>';
          scoreText6.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[7] +'</span>';
          scoreText7.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[8] +'</span>';
          scoreText8.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[9] +'</span>';
          scoreText9.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[10] +'</span>';
          scoreText10.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[11] +'</span>';
          scoreText11.innerHTML = scoreTag;
        scoreTag = '<span>'+ ansArr[12] +'</span>';
          scoreText12.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[13] +'</span>';
            scoreText13.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[14] +'</span>';
            scoreText14.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[15] +'</span>';
            scoreText15.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[16] +'</span>';
            scoreText16.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[17] +'</span>';
            scoreText17.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[18] +'</span>';
            scoreText18.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[19] +'</span>';
            scoreText19.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[20] +'</span>';
            scoreText20.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[21] +'</span>';
            scoreText21.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[22] +'</span>';
            scoreText22.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[23] +'</span>';
            scoreText23.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[24] +'</span>';
            scoreText24.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[25] +'</span>';
            scoreText25.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[26] +'</span>';
            scoreText26.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[27] +'</span>';
            scoreText27.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[28] +'</span>';
            scoreText28.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[29] +'</span>';
            scoreText29.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[30] +'</span>';
            scoreText30.innerHTML = scoreTag;
          scoreTag = '<span>'+ ansArr[31] +'</span>';
            scoreText31.innerHTML = scoreTag;


  let weightTag = '<span>'+ questions[0].answer +'</span>';
        weightText.innerHTML = weightTag;
      weightTag = '<span>'+ questions[1].answer +'</span>';
        weightText1.innerHTML = weightTag;
      weightTag = '<span>'+ questions[2].answer +'</span>';
        weightText2.innerHTML = weightTag;
      weightTag = '<span>'+ questions[3].answer +'</span>';
        weightText3.innerHTML = weightTag;
      weightTag = '<span>'+ questions[4].answer +'</span>';
        weightText4.innerHTML = weightTag;
      weightTag = '<span>'+ questions[5].answer +'</span>';
        weightText5.innerHTML = weightTag;
      weightTag = '<span>'+ questions[6].answer +'</span>';
        weightText6.innerHTML = weightTag;
      weightTag = '<span>'+ questions[7].answer +'</span>';
        weightText7.innerHTML = weightTag;
      weightTag = '<span>'+ questions[8].answer +'</span>';
        weightText8.innerHTML = weightTag;
      weightTag = '<span>'+ questions[9].answer +'</span>';
        weightText9.innerHTML = weightTag;
      weightTag = '<span>'+ questions[10].answer +'</span>';
        weightText10.innerHTML = weightTag;
      weightTag = '<span>'+ questions[11].answer +'</span>';
        weightText11.innerHTML = weightTag;
      weightTag = '<span>'+ questions[12].answer +'</span>';
        weightText12.innerHTML = weightTag;
      weightTag = '<span>'+ questions[13].answer +'</span>';
        weightText13.innerHTML = weightTag;
      weightTag = '<span>'+ questions[14].answer +'</span>';
        weightText14.innerHTML = weightTag;
      weightTag = '<span>'+ questions[15].answer +'</span>';
        weightText15.innerHTML = weightTag;
      weightTag = '<span>'+ questions[16].answer +'</span>';
        weightText16.innerHTML = weightTag;
      weightTag = '<span>'+ questions[17].answer +'</span>';
        weightText17.innerHTML = weightTag;
      weightTag = '<span>'+ questions[18].answer +'</span>';
        weightText18.innerHTML = weightTag;
      weightTag = '<span>'+ questions[19].answer +'</span>';
        weightText19.innerHTML = weightTag;
      weightTag = '<span>'+ questions[20].answer +'</span>';
        weightText20.innerHTML = weightTag;
      weightTag = '<span>'+ questions[21].answer +'</span>';
        weightText21.innerHTML = weightTag;
      weightTag = '<span>'+ questions[22].answer +'</span>';
        weightText22.innerHTML = weightTag;
      weightTag = '<span>'+ questions[23].answer +'</span>';
        weightText23.innerHTML = weightTag;
      weightTag = '<span>'+ questions[24].answer +'</span>';
        weightText24.innerHTML = weightTag;
      weightTag = '<span>'+ questions[25].answer +'</span>';
        weightText25.innerHTML = weightTag;
      weightTag = '<span>'+ questions[26].answer +'</span>';
        weightText26.innerHTML = weightTag;
      weightTag = '<span>'+ questions[27].answer +'</span>';
        weightText27.innerHTML = weightTag;
      weightTag = '<span>'+ questions[28].answer +'</span>';
        weightText28.innerHTML = weightTag;
      weightTag = '<span>'+ questions[29].answer +'</span>';
        weightText29.innerHTML = weightTag;
      weightTag = '<span>'+ questions[30].answer +'</span>';
        weightText30.innerHTML = weightTag;
      weightTag = '<span>'+ questions[31].answer +'</span>';
        weightText31.innerHTML = weightTag;

  let scoreWTag = '<span>'+ (questions[0].answer * ansArr[0]) +'</span>';
        weightScore.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[1].answer * ansArr[1]) +'</span>';
        weightScore1.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[2].answer * ansArr[2]) +'</span>';
        weightScore2.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[3].answer * ansArr[3]) +'</span>';
        weightScore3.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[4].answer * ansArr[4]) +'</span>';
        weightScore4.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[5].answer * ansArr[5]) +'</span>';
        weightScore5.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[6].answer * ansArr[6]) +'</span>';
        weightScore6.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[7].answer * ansArr[7]) +'</span>';
        weightScore7.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[8].answer * ansArr[8]) +'</span>';
        weightScore8.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[9].answer * ansArr[9]) +'</span>';
        weightScore9.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[10].answer * ansArr[10]) +'</span>';
        weightScore10.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[11].answer * ansArr[11]) +'</span>';
        weightScore11.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[12].answer * ansArr[12]) +'</span>';
        weightScore12.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[13].answer * ansArr[13]) +'</span>';
        weightScore13.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[14].answer * ansArr[14]) +'</span>';
        weightScore14.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[15].answer * ansArr[15]) +'</span>';
        weightScore15.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[16].answer * ansArr[16]) +'</span>';
        weightScore16.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[17].answer * ansArr[17]) +'</span>';
        weightScore17.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[18].answer * ansArr[18]) +'</span>';
        weightScore18.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[19].answer * ansArr[19]) +'</span>';
        weightScore19.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[20].answer * ansArr[20]) +'</span>';
        weightScore20.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[21].answer * ansArr[21]) +'</span>';
        weightScore21.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[22].answer * ansArr[22]) +'</span>';
        weightScore22.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[23].answer * ansArr[23]) +'</span>';
        weightScore23.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[24].answer * ansArr[24]) +'</span>';
        weightScore24.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[25].answer * ansArr[25]) +'</span>';
        weightScore25.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[26].answer * ansArr[26]) +'</span>';
        weightScore26.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[27].answer * ansArr[27]) +'</span>';
        weightScore27.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[28].answer * ansArr[28]) +'</span>';
        weightScore28.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[29].answer * ansArr[29]) +'</span>';
        weightScore29.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[30].answer * ansArr[30]) +'</span>';
        weightScore30.innerHTML = scoreWTag;
      scoreWTag = '<span>'+ (questions[31].answer * ansArr[31]) +'</span>';
        weightScore31.innerHTML = scoreWTag;


  let weightOCLTag_Customer = '<span>'+
  (((questions[0].answer * ansArr[0])
  +(questions[1].answer * ansArr[1])
  +(questions[2].answer * ansArr[2])
  +(questions[3].answer * ansArr[3])
  +(questions[4].answer * ansArr[4])
  +(questions[5].answer * ansArr[5])
  +(questions[6].answer * ansArr[6])
  +(questions[7].answer * ansArr[7])
  +(questions[8].answer * ansArr[8])
  +(questions[9].answer * ansArr[9])
  +(questions[10].answer * ansArr[10]))/11).toFixed(2) +'</span>';
  weightOCL_Customer.innerHTML = weightOCLTag_Customer;

  let weightOCLTag_Market = '<span>'+
  (((questions[11].answer * ansArr[11])
  +(questions[12].answer * ansArr[12])
  +(questions[13].answer * ansArr[13])
  +(questions[14].answer * ansArr[14])
  +(questions[15].answer * ansArr[15])
  +(questions[16].answer * ansArr[16])
  +(questions[17].answer * ansArr[17]))/7).toFixed(2) +'</span>';
  weightOCL_Market.innerHTML = weightOCLTag_Market;

  let weightOCLTag_Product = '<span>'+
  (((questions[18].answer * ansArr[18])
  +(questions[19].answer * ansArr[19])
  +(questions[20].answer * ansArr[20])
  +(questions[21].answer * ansArr[21])
  +(questions[22].answer * ansArr[22])
  +(questions[23].answer * ansArr[23])
  +(questions[24].answer * ansArr[24]))/7).toFixed(2) +'</span>';
  weightOCL_Product.innerHTML = weightOCLTag_Product;

  let weightOCLTag_Business = '<span>'+
  (((questions[25].answer * ansArr[25])
  +(questions[26].answer * ansArr[26])
  +(questions[27].answer * ansArr[27])
  +(questions[28].answer * ansArr[28])
  +(questions[29].answer * ansArr[29])
  +(questions[30].answer * ansArr[30])
  +(questions[31].answer * ansArr[31]))/7).toFixed(2) +'</span>';
  weightOCL_Business.innerHTML = weightOCLTag_Business;

  const weightOCL_Overall = result_box.querySelector(".weightOCL_Overall");
let weightOCLTag_Overall = '<span>'+   (((((questions[25].answer * ansArr[25])
  +(questions[26].answer * ansArr[26])
  +(questions[27].answer * ansArr[27])
  +(questions[28].answer * ansArr[28])
  +(questions[29].answer * ansArr[29])
  +(questions[30].answer * ansArr[30])
  +(questions[31].answer * ansArr[31]))/7) + (((questions[18].answer * ansArr[18])
  +(questions[19].answer * ansArr[19])
  +(questions[20].answer * ansArr[20])
  +(questions[21].answer * ansArr[21])
  +(questions[22].answer * ansArr[22])
  +(questions[23].answer * ansArr[23])
  +(questions[24].answer * ansArr[24]))/7)  + (((questions[11].answer * ansArr[11])
  +(questions[12].answer * ansArr[12])
  +(questions[13].answer * ansArr[13])
  +(questions[14].answer * ansArr[14])
  +(questions[15].answer * ansArr[15])
  +(questions[16].answer * ansArr[16])
  +(questions[17].answer * ansArr[17]))/7)  + (((questions[0].answer * ansArr[0])
  +(questions[1].answer * ansArr[1])
  +(questions[2].answer * ansArr[2])
  +(questions[3].answer * ansArr[3])
  +(questions[4].answer * ansArr[4])
  +(questions[5].answer * ansArr[5])
  +(questions[6].answer * ansArr[6])
  +(questions[7].answer * ansArr[7])
  +(questions[8].answer * ansArr[8])
  +(questions[9].answer * ansArr[9])
  +(questions[10].answer * ansArr[10]))/11))/4).toFixed(2) +'</span>';
weightOCL_Overall.innerHTML = weightOCLTag_Overall;


}

// insert time here

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time++; //invrement the time value
       timeQues[que_count] = time;
    }

}



function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
