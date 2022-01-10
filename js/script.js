
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
//    startTimer(15); //calling startTimer function
//    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;




const ansArr = new Array(5);

for (var i = 0; i < 5; i++) {
    ansArr[i] = 0;
}

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector(".next_btn");
const prev_btn = document.querySelector(".prev_btn");
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
        //  startTimer(timeValue); //calling startTimer function 15s start
        //  startTimerLine(widthValue); //calling startTimerLine function 0s start line
          timeText.textContent = "Time Left"; //change the timeText to Time Left
          next_btn.classList.remove("show"); //hide the next button
          prev_btn.classList.add("show"); //hide the next button
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
             document.getElementById(x).insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
               prev_btn.classList.add("show");
               next_btn.classList.add("show"); //show the next button
             } else {   showResult(); //calling showResult function
             }
  }

  // if Next Que button clicked
  prev_btn.onclick = ()=>{
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
var x = ansArr[que_count].toString();
document.getElementById(x).classList.add("correct");
document.getElementById(x).insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option        
         if(que_numb == 1){  prev_btn.classList.remove("show"); }
      }else{
      //    clearInterval(counter); //clears counter
      //    clearInterval(counterLine); //clear counterLine

      }
  }
// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    const ocl_text = document.querySelector(".ocl_text");

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
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){

    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
  userAns = answer.textContent; //getting user selected option

  //  let correcAns = questions[que_count].answer; //getting correct answer from array (or weight)

    const allOptions = option_list.children.length; //getting all option items

     //if user selected option is equal to array's correct answer

        userScore += parseInt(userAns); //upgrading score value with 1
       ansArr[que_count] = parseInt(userAns);




        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option

        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
        console.log("que_count = " + que_count);
        console.log("que_numb = " + que_numb);
        console.log("nsArr[que_count] = " + ansArr[que_count]);
        console.log("answer" + answer);
    next_btn.classList.add("show"); //show the next button if user selected any option

}





function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    const scoreText1 = result_box.querySelector(".score_text1");
    const scoreText2 = result_box.querySelector(".score_text2");
    const scoreText3 = result_box.querySelector(".score_text3");
    const scoreText4 = result_box.querySelector(".score_text4");
     // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number


          //adding new span tag inside score_Text

    let scoreTag = '<span>Question no. 1  = '+ ansArr[0] +'</span>';
          scoreText.innerHTML = scoreTag;
        scoreTag = '<span>Question no. 2 = '+ ansArr[1] +'</span>';
          scoreText1.innerHTML = scoreTag;
        scoreTag = '<span>Question no. 3 = '+ ansArr[2] +'</span>';
          scoreText2.innerHTML = scoreTag;
        scoreTag = '<span>Question no. 4 = '+ ansArr[3] +'</span>';
          scoreText3.innerHTML = scoreTag;
        scoreTag = '<span>Question no. 5 = '+ ansArr[4] +'</span>';
          scoreText4.innerHTML = scoreTag;
}

// insert time here

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
