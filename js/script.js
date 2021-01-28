let sliderImage = $('.slider__image');

for(let i = 0; i < sliderImage.length; i++) {
  $('.slider__pagers').append(`<li>${(i + 1)}</li>`);
}

let sliderPagers = $('.slider__pagers');
let sliderPagersItem = $('.slider__pagers li');
let sliderPagersActive = '.slider__pagers li.active';
let sliderList = $('.slider__list');
let sliderItem = $('.slider__item');
let sliderTarget = 0;
let itemLast = sliderPagersItem.length - 1;

function checkImageHeight() {
  let sliderHeight = sliderImage.height();
  sliderList.css('height', sliderHeight + 'px');
}

$(window).on('load', checkImageHeight);

sliderPagersItem.first().addClass('active');
sliderItem.hide().first().show();

function sliderSwitcher(sliderTarget) {
  sliderItem.fadeOut(300).eq(sliderTarget).fadeIn(300);
  sliderPagersItem.removeClass('active').eq(sliderTarget).addClass('active');
}

sliderPagersItem.on('click', function () {
  if(!$(this).hasClass('active')) {
    sliderTarget = $(this).index();
    sliderSwitcher(sliderTarget)
  }
})

function sliderTiming() {
  sliderTarget = $(sliderPagersActive).index();
  // sliderTarget = sliderTarget === itemLast ? 0 : sliderTarget + 1;

  // console.log(sliderTarget);
  if(sliderTarget === itemLast) {
    sliderTarget = 0;
  } else {
    sliderTarget = sliderTarget + 1;
  }
  sliderSwitcher(sliderTarget);
}

// sliderTiming()
// sliderTiming()

let timerRun = setInterval(sliderTiming, 5000);