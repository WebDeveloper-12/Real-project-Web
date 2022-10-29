var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

var navitem = document.getElementsByClassName("nav-item")
var sections = document.getElementsByClassName("sections")

window.onscroll = function(){
    for(i = 0; i<sections.length;i++){
        if(scrollY>sections[i].offSetTop && scrollY < sections[i].offSetTop+sections[i].offSetHeight){
            navitem[i].classList.add("navitem")
        }
        else{
            navitem[i].classList.remove("navitem")
        }
    }
}

for(var i=0;i < navitem.length;i++){
    navitem[i].onclick = function(){
        this.classList.add("navitem")

        for(var j = 0; j<navitem.length;i++){
            navitem[i].classList.remove("navitem")
        }
    }
}

function first(){
    window.scrollTo(0,70)
}

function second(){
    window.scrollTo(0,1000)
}

function third(){
    window.scrollTo(0,1577)
}

function fourth(){
    window.scrollTo(0,2400)
}

function fifth(){
    window.scrollTo(0,3000)
}

function toTop(){
    window.scrollTo(0,0)
}