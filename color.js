// var Body = {
//     setBackgroundColor : function(color){
//         document.querySelector('body').style.backgroundColor = color;
//     },
//     setColor : function(color){
//         document.querySelector('body').style.color = color;
//     }
// }
var setColor = {
    backgroundAndText : function(background,text){
        $('body').css("background-color",background);
        $('body').css("color",text);
    }
}

var alist = {
    color : function(color){
        // var alist = document.querySelectorAll('a');
        //     var i = 0;
        //     while(i<alist.length){
        //         alist[i].style.color = color;
        //         i++
        //     }
        $('a').css("color",color);
    }
}

function NightDayHandler(self){
        
        if(self.value === '야간모드'){
            setColor.backgroundAndText('black','white');
            self.value = '주간모드';
            self.style = 'color:white';
            alist.color('white');
        } else{
            setColor.backgroundAndText('white','black');
            self.value = '야간모드';
            self.style = 'color:black';
            alist.color('black');
        }
}
  