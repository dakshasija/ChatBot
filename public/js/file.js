(function() {
      module.exports.getfile = function(str) {
      var bayes = require('bayes');
      var classifier = bayes();
      classifier.learn('weather,how is the weather,hows weather,what is climate today,how is climate,what is weather','ss');
      classifier.learn('today day,what day is today,which day is today,day,tell me today day','day');
      classifier.learn('time,what is time,wht is time,whats time','c24');
      classifier.learn('suck you,you bitch,fuck you,slut you,you asshole,you are jerk,you r jerk, u r jerk,you are stupid,u slut,u bitch,fuck u,u asshole,u jerk,u suck,u are stupid,', 'abusive');
      classifier.learn('what is the meaning of life','trick');
      classifier.learn('how are you,how you doing,how r u,how r you,how are u,h r u,hw r u,and you,nd you','how');
      classifier.learn('you are sweet, this is incredibly, you amazing, you perfect, you great!!,u r sweet,u are sweet,u are sexy,you are interesting', 'greet');
      classifier.learn('hii,hello,hii dear,hi,hey','default');
      classifier.learn('how old you are ?,how old are you,your age, age','c13');
      classifier.learn('love you','love');
      classifier.learn('wassup, whatsup,sup ?,hii wassup,hi wassup,hii whatsup,hi whatsup','c25');
      classifier.learn('hate you,you are arrogant','hate');
      classifier.learn('tell something about you','c7');
      classifier.learn('i m good, i am good, i m fine, i am fine, i am great,i m great,just hanging in there,good,fine,happy','fine');
      classifier.learn('what is your name ?,wht is ur nam,whatsyour name','name');
      classifier.learn('nice name, interesting name','cl');
      classifier.learn('yey','c3');
      classifier.learn('why ?','c11');
      classifier.learn('why do you think so','c12');
      classifier.learn('i am feeling sad,felling bore,felling sick,i am depress,sad,sick,depress','c4');
      classifier.learn('what ?',"c10");
      classifier.learn('okay,ok','c5');
      classifier.learn('bye','c6');
      classifier.learn('oh,maybe, possibly,',"c14");
      classifier.learn(' is president name ,  is prime minister name,where is, is the location name, do you know about it,capital,capital of,president,prime minster,what is capital, who is ?, is the score','c15');
      classifier.learn('no','c16');
      classifier.learn('what are you doing,what r u doing,what u doing','c17');
      classifier.learn('who are you,what are you,who r you,who r u','c18');
      classifier.learn('who make you, who is your father,who is the creater of you','c19');
      classifier.learn('where do you live,where do u live,where do you put up,where is your home,where you are,where u are,where u r','c20');
      classifier.learn('really,seriously','c21');
      classifier.learn('what do you like,what you like','c22');
      classifier.learn('what is your boyfriend name,boyfriend name','c23');
      classifier.learn('date,what is date,whats date,today date,tell me today date','c');
      classifier.learn('todays day and date,today day & date,day & date,date & day','days');
      var token=classifier.categorize(str);
      return token;
    }
}());
