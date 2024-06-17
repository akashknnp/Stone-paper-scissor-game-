let userscore=0;
let compscore=0;

const userscorep=document.querySelector("#user-score");
const compscorep=document.querySelector("#comp-score");

const msg=document.querySelector("#msg");

const choices=document.querySelectorAll(".choice");


choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        //console.log("clicked",userchoice);
        playgame(userchoice);
    });
});

const playgame=(userchoice)=>{
        console.log("user choice",userchoice);
        const compchoice=compgen();
        console.log("computer choice",compchoice);
        let userwin;
        if(userchoice===compchoice)
            {
                drawgame();
            }
        else
        {
            userwin=true;
            if(userchoice==="rock")
                {
                    if(compchoice==="paper")
                        {
                            userwin=false;
                        }
                    else
                    {
                        userwin=true;
                    }
                }
            else if(userchoice==="paper")
                {
                    if(compchoice==="scissor")
                        {
                            userwin=false;
                        }
                    else{
                        userwin=true;
                    }
                }
            else if(userchoice==="scissor")
                {
                    if(compchoice==="paper")
                        {
                            userwin=true;
                        }
                    else if(compchoice==="rock"){
                        userwin=false;
                    }
                }showwinner(userwin,userchoice,compchoice);   
        } 
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin)
        {   
            userscore++;
            userscorep.innerHTML=userscore; 
            msg.innerHTML="You won!!";
            msg.innerHTML="Your"+" "+userchoice+" "+"beats"+" "+compchoice+"* _ *";
            msg.style.backgroundColor="green";
        }
    else{
        compscore++;
        compscorep.innerHTML=compscore;
        msg.innerHTML="You lost";
        msg.innerHTML=compchoice+" "+"beats your"+" "+userchoice+"* ^ *";
        msg.style.backgroundColor="red";
        }
};

const compgen=()=>{
    let arr=["rock","paper","scissor"];
    const ran=Math.floor(Math.random()*3);
    return arr[ran];
}

const drawgame=()=>{
    msg.innerHTML="Game was draw"
    msg.style.backgroundColor="rgb(17, 17, 58)";
}