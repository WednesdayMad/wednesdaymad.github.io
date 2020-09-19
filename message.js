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
      ["08/11/2020","I just woke up. Last night is the first time we watched anime and video called together. It was so fun figuring out our online date. I liked the virtual background. Thank you for last night. I loved it"],
      ["09/20/2020","Gosh, so much happened already. Thank you for gifting me the skincare Oppa. Know that I love you even if you give me nothing. You are more than enough. I love you with all my heart."],
      ["08/20/2020","Thank you so much Oppa for introducing me to your friend today. She is super nice and I'm so glad that I met her. I'm grateful to God that you met wonderful people that help you."],
      ["08/20/2020","I'm sorry that you had to change you work schedule because of me and I ended up not following through and still sleeping late. I wish I could do better for you. I want to love you like you deserve."],
      ["08/11/2020","I remember asking God for you before I met you. I told him that when I met you. I will take care of you and love you with all my heart but I feel that I havent been doin that lately. I'll be better."],
      ["08/11/2020","Whenever you say I'm pretty when I know for a fact that I'm not. It makes me feel happy. Thank you for building my confidence in myself around you. You make me feel like the most beautiful girl in the world."],
      ["08/11/2020","I think my mom knows about you now. She keeps mentioning it out of nowhere how I'm talking to an American. She says she prefers that rather than a korean because she dislikes tha language barrier. I guess your the best of both worlds."],
      ["08/11/2020","When I get money, I will spoil you so much. I can't wait. My cousin said she will let me live with her in Georgia in the future. I can't wait to visit you. I feel like God is opening opportunities for us to be together. "],

        ];

    	var random = Math.floor(Math.random() * words.length);

   document.getElementById("date").innerHTML=words[random][0];
   document.getElementById("message").innerHTML=words[random][1];

}

generateWord();
