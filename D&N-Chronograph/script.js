"use strict"

const deg = 6;
const snrs = document.querySelector('#snrs');
const sr = document.querySelector('#sr');
const sst = document.querySelector('#sst');
const snst = document.querySelector('#snst');
const grg = document.querySelector('#grg');
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const dl = document.querySelector('#dl');


setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 15;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh + (mm / 24)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    let times = SunCalc.getTimes(new Date(), 51.6, 11.6);

    let sunriseStr = times.sunrise;
    let hsr = sunriseStr.getHours() * 15;
    let msr = sunriseStr.getMinutes() * deg;
    snrs.style.transform = `rotateZ(${hsr + (msr / 24)}deg)`;

    let sunsetStr = times.sunset;
    let hst = sunsetStr.getHours() * 15;
    let mst = sunsetStr.getMinutes() * deg;
    snst.style.transform = `rotateZ(${hst + (mst / 24)}deg)`;

    let sunrisesre = times.sunrise;
    let hsre = sunrisesre.getHours() * 15;
    let msre = sunrisesre.getMinutes() * deg;
    sr.style.transform = `rotateZ(${hsre + (msre / 24)}deg)`;
    let text = ('0' + times.sunrise.getHours()).slice(-2) + ':' + ('0' + times.sunrise.getMinutes()).slice(-2);
    sr.innerHTML = text;

    let sunsetsst = times.sunset;
    let hsst = sunsetsst.getHours() * 15;
    let msst = sunsetsst.getMinutes() * deg;
    sst.style.transform = `rotateZ(${hsst + (msst / 24)}deg)`;
    let text1 = times.sunset.getHours() + ':' + ('0' + times.sunset.getMinutes()).slice(-2);
    sst.innerHTML = text1;

    let Sekunden = Math.abs(sunsetsst.getTime() - sunrisesre.getTime());
    let tag = Math.floor(Sekunden / (1000 * 60 * 60 * 24));
    Sekunden = Sekunden % (1000 * 60 * 60 * 24);
    let std = Math.floor(Sekunden / (1000 * 60 * 60));
    Sekunden = Sekunden % (1000 * 60 * 60);
    let min = Math.floor(Sekunden / (1000 * 60));
    Sekunden = Sekunden % (1000 * 60);
    let sec = Math.floor(Sekunden / 1000);
    let mSec = Sekunden % 1000;
    let daylenght = "  " + std + " Std. " + min + " Min.";
    dl.innerHTML = daylenght;
        
    let summert = day.getTimezoneOffset() * -1;
    if (summert === 120) {
        grg.style.transform = `rotateZ(15deg)`;
    }else{
        grg.style.transform = `rotateZ(0deg)`;
    }

const sunrisesound = new Audio("Sonnenaufgang.mp3");
const sunsetsound = new Audio("Sonnenuntergang.mp3");

    let sunrise = day.getHours() + ':' + day.getMinutes();
    if (sunrise === text) {
        sunrisesound.play();
    }else{
        sunrisesound.pause();
    }

    let sunset = day.getHours() + ':' + day.getMinutes();
    if (sunset === text1) {
        sunsetsound.play();
    }else{
        sunsetsound.pause();
    }

})



