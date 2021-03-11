const swipperHtml = `
  <style>
    .swiper-container {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: white;
      z-index: 10000;
    }

    .swiper-container .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>

  <!-- Slider main container -->
  <div id="bsk-swiper" class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
    </div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
`;

(function () {
  bskCustomContent().then(
    async (bskCustomContentClient) => {
      bskCustomContentClient.on('bsk-api-error',
        error => console.log('bsk-api-error', error)
      )
      await bskCustomContentClient.appendHtml(swipperHtml, '#main-container').catch( e => console.log(e) );
    	const swiper = bskCustomContentClient.swiper();
      const carousel = new swiper('#bsk-swiper',{
        loop: true,
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    }
  );
})();
