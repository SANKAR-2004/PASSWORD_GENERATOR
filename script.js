document.addEventListener('DOMContentLoaded',()=>{

    const outputelement=document.querySelector('#outputtxt');
    const submitbutton=document.querySelector('#btnsubmit');
    const capitalelement=document.querySelector('#capital');
    const symbolelement=document.querySelector('#symbol');
    const numberelement=document.querySelector('#number');
    const smallelement=document.getElementById("small");
    const copyelement=document.querySelector('#copy');
    const message=document.querySelector('.container p');
    const passlength=document.querySelector('#length');

                                         /*     ---COPY TEXT---- */

              copyelement.addEventListener('click',()=>{
                     let copytext=outputelement.value;
                     if(copytext)
                     {
                        navigator.clipboard.writeText(copytext);
                        message.innerHTML="Password Copied!!";
                        message.style.display="block";
                        message.style.color="red";
                     }
                     else
                     {
                        message.innerHTML="Please Generate Password!!";
                        message.style.display="block";
                        message.style.color="red";
                     }
                     
              });

                                         /*     ---Functions for random text---- */
    function fun(min,max)
    {
        let limit=max-min+1;
        let dummy=Math.floor(Math.random()*limit);
        dummy+=min;
        var stringValue = String.fromCharCode(dummy);
        return stringValue;
    }
    function numvalue(){
        return fun(48,57);
    }
    function smallvalue(){
        return fun(97,122);
    }
    function capvalue(){
        return fun(65,90);
    }
    function symbvalue(){
        let word="!@#$%^&*/{|.>?<-";
        return word[Math.floor(Math.random()*word.length)];
    }

                           /*     ---Array to Select checked options---- */

     const newarray=[
        {element:numberelement,call:numvalue},
        {element:smallelement,call:smallvalue},
        {element:capitalelement,call:capvalue},
        {element:symbolelement,call:symbvalue}
    ];

                           /*     ---Action on Submit button---- */
  
    submitbutton.addEventListener('click',()=>{

        const array2 =newarray.filter(({element})=>element.checked);
        let ans="";
        if(passlength.value=="" || passlength.value<0)
        {
            message.innerHTML="Enter Correct Password Length!!";
                        message.style.display="block";
                        message.style.color="red";
        }
        else
        {
            message.innerHTML=" ";
        }
            for(let i=0;i<passlength.value;i++)
              {
                let d=(Math.floor(Math.random()*array2.length));
                ans+=array2[d].call();
              }
              outputelement.value=ans;  
          if(array2=="")
          {
           alert("Please Select any Option");
          }
         
    });

});

