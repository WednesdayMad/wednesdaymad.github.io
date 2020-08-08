function generateWord()
{
    var words=[
      ["08/08/2020","Do you remember that time you told me about your movie idea about two otters? I wish that they have a happy ending in the sequel. I hope I changed your mind. I love you. "], 
      ["08/08/2020","I love everything about you, from your brown eyes, your long legs, your Zuko ASMR voice, your poreless skin to the way you style yourself and cut your hair. You are perfect to me."], 
      ["08/08/2020","I hate front-end so uch Oppa. This was really hard to do. But I love you so much and you are worth all my effort and love. I hope you like my gift. I will send you mails here."], 
      ["08/08/2020", "Thank you for all the times that you were patient and never gave up on me. I am really grateful. You are the best boyfriend any girl can ask for. I am lucky to have met you."], 
      ["08/08/2020","The first time I was mad at you. You asked me to pray with you. I hope you know how much that meant to me. You keep surprising me with your thoughtfulness. Thank you. "], 
      ["08/08/2020","I'm sorry whenever I am not as understanding, patient or loveable as I should be whenever we I get mad when I don't get my way. Just know that you make me wanna stay.  "], 

        ];

    	var random = Math.floor(Math.random() * words.length);

   document.getElementById("date").innerHTML=words[random][0];
   document.getElementById("message").innerHTML=words[random][1];

}

generateWord();