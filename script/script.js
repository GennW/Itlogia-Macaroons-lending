$(function () { //выполнения кода после полной загрузки DOM. 

  //burger menu
  $('#burger').click(function () {
    $('#menu').addClass('open');
  });

  $('#menu *').click(function () {
    $('#menu').removeClass('open');
  });

  // document.getElementById('burger').onclick = function () {
  // document.getElementById('menu').classList.add('open');
  // };

  // document.querySelectorAll('#menu *').forEach((item) => {
  //   item.onclick = () => {
  //     document.getElementById('menu').classList.remove('open');
  //   }
  // });

  //Валидация и отправка формы
  let form = $('.order__macaroon-form');
  let product = $('.base-input').eq(0);
  let nameClient = $('.base-input').eq(1);
  let phone = $('.base-input').eq(2);
  let orderBtn = $('.order__btn');
  let loader = $('.loader');
  loader.hide();


  orderBtn.click(() => {
    let hasError = false;


    $('.input-error').hide();
    $('input').css('border-color', '#821328');

    if (!product.val()) {
      product.css('border-color', 'red');
      product.next().show();
      hasError = true;
    }
    if (!nameClient.val()) {
      nameClient.css('border-color', 'red');
      nameClient.next().show();
      hasError = true;
    }
    if (!phone.val()) {
      phone.css('border-color', 'red');
      phone.next().show();
      hasError = true;
    }
    if (!hasError) {
      loader.show();

      $.ajax({
        method: "POST",
        url: "https://testologia.site/checkout",
        data: { product: product.val(), name: nameClient.val(), phone: phone.val() }
      })
        .done(function (msg) {
          console.log(msg);
          loader.hide();
          if (msg.success) {
            let textBlock = $('<div class="text-block"></div>')
              .css({ height: '375px', display: 'grid', placeContent: 'center', textAlign: 'center', color: '#331907', fontSize: '18px' })
              .html('<p>Спасибо за Ваш заказ</p>. <p>Мы скоро свяжемся с Вами!</p>')
              .hide() // Скрыть блок перед появлением
            textBlock.fadeIn(2000); // плавное появление
            form.replaceWith(textBlock); //заменяем  форму  textBlock
          } else {
            alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
          }
        });
    }
  });

  // динамический год в футере

  $('.year').text(new Date().getFullYear())

});

