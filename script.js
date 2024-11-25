function init(){            
    place_word   = document.getElementById('place_word')
    possible_letters = 'abcdefghijklmnopqrstuvwxyz'
    possible_letters_arr = possible_letters.split('')
    console.log(possible_letters_arr)


    word_forgame = []
    word_mask    = []
    all_letters = []
    try_letters = []

    games_word = [
        'java',
        'python',
        'css',
        'html',
        'php',
        'ruby',
        'bang',
        'justice',
        'line',
        'dramatic',
        'visit',
        'notebook',
        'game',
        'scandal',
        'vertical',
        'dry',
        'easy',
        'curriculum',
        'ward',
        'front',
        'government',
        'discrimination',
        'wrist',
        'move',
        'consciousness',
        'intelligence',
        'hut',
        'draw',
        'advantage',
        'sofa',
        'confine',
        'wheat',
        'mother',
        'blonde',
        'hurt',
        'linger',
        'migration',
        'get',
        'mosquito',
        'harass',
        'latest',
        'abstract',
        'vegetarian',
        'slice',
        'traffic',
        'cane',
        'moon',
        'basin',
        'executive',
        'wedding',
        'camp',
        'pedestrian',
        'inquiry',
        'right',
        'hate',
        'housewife'
    ]

    rand = Math.floor(Math.random() * games_word.length);
    picked_word = games_word[rand]
    word_forgame = picked_word.split('')

    for(i = 0; i < word_forgame.length; i++){
        word_mask.push('_')
    }
    alp = document.getElementById('alpha')
    possible_letters_arr.forEach(element => {
      diva =  document.createElement('div')
      diva.addEventListener('click', function(){
        proverka(element)
        this.classList.add('used')
      })
      diva.innerText = element
      alp.append(diva)
    })
    



    // addEventListener('click', )    


    pop = 7
    givepop(pop)
    add(word_mask)
}

init()

function proverka(letter){
    alp = document.getElementById('alpha')
    result = document.getElementById('result')
    resultmsg = document.getElementById('result_msg_cont')
    


    ltr = letter
    tryy = document.getElementById('try')


    
    console.log(ltr)
    if(all_letters.indexOf(ltr) >= 0){
        return give('try others letters')
    }else{
        all_letters.push(ltr)
        try_letters.push(ltr)
    }
    
    flag = false

    if(ltr == ""){
        return give("nono")
    }
    
    word_forgame.forEach((element, index) => {
        if (element == ltr){
            flag = true
            word_mask[index] = ltr
        }
    });
    
    if(flag == false){
        if(pop > 0){
            pop --
            give('no')
        }   
    }else{
        give("yep")
    }

    
    update()
    
    givepop(pop)
    
    add(word_mask)

    if(pop == 0){
        alp.classList.add('hidden')
        result.classList.remove('hidden')
        resultmsg.style.backgroundImage = "url(https://pbs.twimg.com/media/CZrCRTUWwAAGAME.jpg)"
        resultmsg.innerText = 'lose'
        return
    }
    if(word_mask.indexOf('_') == -1){
        alp.classList.add('hidden')
        result.classList.remove('hidden')
        resultmsg.style.backgroundImage = "url(https://papascoach.net/wp-content/uploads/2016/01/cup-1013619_640-300x300.jpg)"
        resultmsg.innerText = 'win'
        return
    }
}

function add(word_mask){
    
    place_word.innerText = ""

    word_mask.forEach(element => {
        let div = document.createElement('div')
        div.innerText = element
        place_word.append(div)
    });
    
}

function give(text){
    sms          = document.getElementById('sms')
   sms.innerText = text

}

function givepop(text){
    popetka       = document.getElementById('pop')
    popetka.innerText = text
   
}

canvas = document.getElementById('cnv')
canvas.width = 300
canvas.height = 300

ctx = canvas.getContext('2d')





//висельница

function draw1(){
    ctx.beginPath()
    ctx.lineWidth = 8
    ctx.moveTo(0, 300)
    ctx.lineTo(300, 300)
    ctx.stroke()
    ctx.closePath()
    
}

function draw2() {
    ctx.beginPath()
    ctx.moveTo(300, 400)
    ctx.lineTo(300,0)
    ctx.stroke()
    ctx.closePath()

}

function draw3() {
    ctx.beginPath()
    ctx.moveTo(300, 0)
    ctx.lineTo(150, 0)
    ctx.stroke()
    ctx.lineWidth = 2
    ctx.lineTo(150, 50)
    ctx.stroke()
    ctx.closePath()

}


//кружок

function draw4(){
ctx.beginPath()
ctx.moveTo(175, 75)
ctx.lineWidth = 4
ctx.arc(150, 75, 25, 0, 2 * Math.PI)
ctx.stroke()
ctx.closePath()

}

//тело

function draw5(){
    ctx.beginPath()
    ctx.moveTo(150, 100)
    ctx.lineTo(150, 220)
    ctx.stroke()
    ctx.closePath()

}

//руки

function draw6(){
    ctx.beginPath()
    ctx.moveTo(100, 120)
    ctx.lineTo(200, 120)
    ctx.stroke()
    ctx.closePath()

}

//ноги

function draw7(){
    ctx.beginPath()
    ctx.moveTo(150, 220)
    ctx.lineTo(130, 280)
    ctx.moveTo(150, 220)
    ctx.lineTo(170, 280)
    ctx.stroke()
    ctx.closePath()

}


function update(){
    switch(pop){
        case 6:
            draw1()
        break;
        case 5: 
            draw2()
        break;
        case 4:
            draw3()
        break;
        case 3:
            draw4()
        break;
        case 2:
            draw5()
        break;
        case 1: 
            draw6()
        break;
        case 0:
            draw7()
        break;   
    }

}
