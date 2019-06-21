//параллах
function parallax(event){
    this.querySelectorAll('.img_bg').forEach(img_bg => {
        img_bg.style.transform = `translateX(${event.clientX/100}px)`
    });
}
document.addEventListener('mousemove', parallax);

//слайдер 
var img = ['img/8.png', 'img/9.png', 'img/10.png'];

var num = 0;
function next (){
    var slider = document.getElementById('block_with_slider_img');
    num++;
    if(num >= img.length){
        num = 0;
    }
    slider.src = img[num]
};
function prev (){
    var slider = document.getElementById('block_with_slider_img');
    num--;
    if (num < 0){
        num = img.length-1;
    }
    slider.src = img[num]
};



