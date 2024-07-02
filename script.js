const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton  = document.getElementById('check-message-btn');



// regex to catch spam requests
const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i
const freeRegex = /(?:^|\s)fr[e3][e3] m[0o]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[5s][t7][o0][c{[(]k [a@4]l[e3]r[7t](?:$|\s)/i
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

// array containing regexes 
const denyList = [helpRegex,dollarRegex,freeRegex,stockRegex,dearRegex];


const isSpam = (msg)=> denyList.some((regex)=>regex.test(msg))




// add ab event listener on the checkmessage button
checkMessageButton.addEventListener('click',()=>{
    if(messageInput.value === ""){
        alert('Please enter a message.');
        return
    }
    result.textContent = isSpam(messageInput.value)?"Oh no! This looks like a spam message.":"This message does not seem to contain any spam.";
    messageInput.value ="";
})
