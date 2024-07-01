let bat=document.getElementById("Bat");
let ball=document.getElementById("Ball");
let weicket=document.getElementById("Weicket");
let res=document.getElementById("reset");
let dis=document.getElementById("TEXT");
let arr=[bat,ball,weicket];
let comch=arr[Math.floor(Math.random()*3)].innerHTML;
let userch=" ";
bat.addEventListener("click",()=>{
userch=bat.innerHTML;
if(comch==="Ball"){
dis.innerHTML=`User Choice is ${userch} and Computer Choice is ${comch} so,User Won!!`;
dis.style.color="green";
}
else if(comch==="Weicket"){
    dis.innerHTML=`User Choice is ${userch} and Computer Choice is ${comch} so,Computer Won!!`;
    dis.style.color="red";
}
else if(comch==="Bat"){
    dis.innerHTML=`User Choice is ${userch} and Computer Choice is ${comch} so,Draw Game!!`;
    dis.style.color="yellow";
}
});
ball.addEventListener("click",()=>{
    userch=ball.innerHTML;
    if(comch==="Ball"){
    dis.innerHTML=`User Choice is ${userch} and Computer Choice is ${comch} so,Draw Game!!`;
    dis.style.color="yellow";
    }
    else if(comch==="Weicket"){
        dis.innerHTML=`User Choice is ${userch} and Computer Choice is ${comch} so,User Won!!`;
        dis.style.color="green";
    }
    else if(comch==="Bat"){
        dis.innerHTML=`User Choice is ${userch} and Computer Choice is ${comch} so,Computer Won!!`;
        dis.style.color="red";
    }
    });
    weicket.addEventListener("click",()=>{
        userch=weicket.innerHTML;
        if(comch==="Ball"){
            dis.innerHTML=`User Choice is ${userch} and Computer Choice is ${comch} so,Computer Won!!`;
            dis.style.color="red";
        }
        else if(comch==="Weicket"){
            dis.innerHTML=`User Choice is ${userch} and Computer Choice is ${comch} so,Draw Game!!`;
            dis.style.color="yellow";
        }
        else if(comch==="Bat"){
            dis.innerHTML=`User Choice is ${userch} and Computer Choice is ${comch} so,User Won!!`;
            dis.style.color="green";
        }
        });  
 res.addEventListener("click",function(){
  dis.innerHTML="New Game!!";
  dis.style.color="black";
  userch=" ";
 });       