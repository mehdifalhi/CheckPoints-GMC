

   var  countLength = 0
   var  countWords = 0
   var countVowels = 0 

   var sentence = prompt()

    // count length of a sentence
    while(sentence[countLength] != null ){
        countLength = countLength + 1 
    }
    
    alert(countLength)
    alert(sentence)
         // count words of a sentence
   
    for(i=0;i<countLength;i++){

        if (sentence[i] == " ")
        countWords = countWords + 1

        if(sentence[i] == "a" || sentence[i] == "e" || sentence[i] =="u" || sentence[i] =="i" || sentence[i] =="o") 
        countVowels = countVowels + 1 ;
    }
    countWords = countWords + 1
    alert(countWords)
    alert(sentence)
   
alert(countVowels)
alert(sentence)
     
