function generateWord()
{
    var words=[
      ["08/08/2020","Do you remember that time you told me about your movie idea about two otters? I wish that they have a happy ending in the sequel. I hope I changed your mind. I love you. "], 
      ["08/08/2020","I love everything about you, from your brown eyes, your long legs, your Zuko ASMR voice, your poreless skin to the way you style yourself and cut your hair. You are perfect to me."], 
      ["08/08/2020","I hate front-end so much Oppa. This was really hard to do but I love you so much and you are worth all my effort and love. I hope you like my gift. I will send you mails here."], 
      ["08/08/2020","Thank you for all the times that you were patient and never gave up on me. I am really grateful. You are the best boyfriend any girl can ask for. I am lucky to have met you."], 
      ["08/08/2020","The first time I was mad at you. You asked me to pray with you. I hope you know how much that meant to me. You keep surprising me with your thoughtfulness. Thank you. "], 
      ["08/08/2020","I'm sorry whenever I am not as understanding, patient or loveable as I should be whenever we I get mad when I don't get my way. Just know that you make me wanna stay.  "], 
      ["08/09/2020","Alot of times, I feel anxious and have this urge to run away but you Always magically somehow make everything better. You said that its just luck but I think its God's blessing."], 
      ["08/09/2020","Thank you for always spoiling me. I hope you know how much I appreciate you. Everything you do for me is full of thoughtfulness. I am beyond blessed to have met you."], 
      ["08/09/2020","I just want you to know that its okay to be scared and not knowing where to go and what to do. Even if you are afraid of the outcome, please know I will always support you."], 
      ["08/09/2020","I love you more than the thousands of miles between us. I love you more than the hours it takes to finally meet you. I love you more than the number of words I can ever say to you."], 
      ["08/09/2020","Life gets hard. Its confusing and I'm always used to people leaving but at the very least I hope you become one of the few people and blessings in my life that stay in my life."], 
      ["08/09/2020","You remind me of happy endings I thought I could never have. I'm pessimistic but you make me want to believe that fairy tales can happen in real life and that everthing will be okay."], 
      ["08/09/2020","If you read this, I hope that we can pray together. I want to thank God for letting me meet you. I hope he blesses us and helps us move our Love into reality and into the future."], 
      ["08/10/2020","Today, I showed you pictures of me from my past. They are deep rooted insecurities of mine. However, you never failed to reassure me and told me I was pretty. Thank you. It means so much to me."], 
      ["08/10/2020","I really hope that you learn to open up more to me oppa.  I want to know everything about you even your past, things you're insecure about, your fears and doubts etc. I will love every part of you."], 
      ["08/10/2020","In alot of ways, I am doubtful and pessimistic about how this would turn out but I've decided to love you and trust what I feel. I'm grateful for who you are to me right now."], 
      ["08/10/2020","For all the times that you doubt yourself, Don't. You are such a hardworking, patient, kind, generous and loveable person. You deserve everything and more. You can do anything."], 
      ["08/10/2020","I know you always hold back. You retreat into your mind every hurt, every negative emotion you feel because you think they aren't worth recognition but they are. Your feelings are important to me."], 
      ["08/10/2020","I wish we could have prayed today. The Bible Reading is 'The Lord is your shade at your right hand'(Psalm 121:5). I pray God protects and shield you and that you find refuge in Him. I love you."], 
        ];

    	var random = Math.floor(Math.random() * words.length);

   document.getElementById("date").innerHTML=words[random][0];
   document.getElementById("message").innerHTML=words[random][1];

}

generateWord();