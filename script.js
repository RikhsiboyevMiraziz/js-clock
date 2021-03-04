const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')
const s = document.querySelector('.s')
const m = document.querySelector('.m')
const h = document.querySelector('.h')

function clock() {
    let time = new Date()
    let min = time.getMinutes()
    let hour = time.getHours()
    let secund = time.getSeconds()
    
    minutes.innerText = min <  10 ? '0' + min : min
    hours.innerText = hour <  10 ? '0' + hour : hour
    s.style.transform = `rotate(${secund*6}deg)`
    m.style.transform = `rotate(${min*6}deg)`
    h.style.transform = `rotate(${hour*30}deg)`
    
    setTimeout(() => clock(), 1000);
}
clock()


const tabs = document.querySelectorAll('.tabsItem')
const tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabs.length; i++) {
     tabs[i].addEventListener('click', function () {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        this.classList.add('active')
        tabsContentItem[i].classList.add('active')
     })
    
}

const startBtn = document.querySelector('.stopwatch__btn')
const stopwatch__hours = document.querySelector('.stopwatch__hours')
const stopwatch__minutes = document.querySelector('.stopwatch__minutes')
const stopwatch__seconds = document.querySelector('.stopwatch__seconds')
const tabsLink__span = document.querySelector('.tabsLink__span')

startBtn.addEventListener('click',function () {
       if(startBtn.innerHTML == 'start'){
        tabsLink__span.classList.add('active')
        startBtn.innerHTML = 'stop'
        secundomer()
    }else if(startBtn.innerHTML == 'stop'){
        tabsLink__span.classList.remove('active')
        tabsLink__span.classList.add('active_clear')
        startBtn.innerHTML = 'clear'

    }else if(startBtn.innerHTML == 'clear'){
        tabsLink__span.classList.remove('active_clear')
        startBtn.innerHTML = 'start'
        stopwatch__hours.innerHTML=0
        stopwatch__minutes.innerHTML=0
        stopwatch__seconds.innerHTML=0

    }
    
})

function secundomer(){
    stopwatch__seconds.innerHTML++
    if(stopwatch__seconds.innerHTML>59 ){
        
        stopwatch__minutes.innerHTML++
        stopwatch__seconds.innerHTML=0
        
        if(stopwatch__minutes.innerHTML>59 ){
            
            stopwatch__minutes.innerHTML=0
            stopwatch__hours.innerHTML++
            
            if( stopwatch__hours.innerHTML>23){
                
                stopwatch__hours.innerHTML=0
            }
        }
    }
    
    if(startBtn.innerHTML == 'stop'){
        
        setTimeout(() => secundomer(), 1);

    }
}
