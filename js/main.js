const time = ()=>{
const sec = document.querySelector('.seconds_number_1');
const date1 = new Date();

let fixedDate = 60 - date1.getSeconds();
if(fixedDate <10)
{
fixedDate = "0" + fixedDate;
}
else
{
    fixedDate = fixedDate;
}

sec.innerHTML = fixedDate;
};

const getMin = ()=>{
    const min = document.querySelector('.minutes_number_1');
    const date2 = new Date();
    let fixedDate = 60 - date2.getMinutes();
    if(fixedDate <10)
    {
    fixedDate = "0" + fixedDate;
    }
    else
    {
        fixedDate = fixedDate;
    }

    min.innerHTML = fixedDate;
};

const getHor = ()=>{
    const hour = document.querySelector('.hours_number_1');
    const date2 = new Date();

    let fixedDate = 24 - date2.getHours();
    if(fixedDate <10)
{
    fixedDate = "0" + fixedDate;
}
    hour.innerHTML = fixedDate  ;
};

const getDays =()=>{
    const  date1 = new Date();
    const date2 = new Date(2022,00,01);

    const finalDate = Math.floor((date2-date1)/(1000*60*60*24));


    document.querySelector('.days_number_1').innerHTML = finalDate;

};



setInterval(()=>{
    
    getDays();
    time();
    getMin();
    getHor();
},1000);


