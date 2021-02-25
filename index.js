(function(){
  function dyInit() {
    function buttonFactory(title, action, param, right = '10px') {
      const button = document.createElement('button');
      button.id = 'customContentButton';
      button.style.position = 'fixed';
      button.style.right = right;
      button.style.bottom = '50px';
      button.style.zIndex = 1000000;
      button.appendChild(title);
      document.body.prepend(button);
      button.addEventListener('click', (e) => {
        bskCustomContentBridge[action](param);
      })
      return button
    }

    const button1 = buttonFactory(document.createTextNode('Working link'), 'goTo', 'es/mujer/rebajas/camisas-c1010194041.html');
    const button2 = buttonFactory(document.createTextNode('Category link'), 'goTo', 'category:1010194034', '100px');
    const button3 = buttonFactory(document.createTextNode('Bad Category link'), 'goTo', 'category:123456789', '216px');
    const button4 = buttonFactory(document.createTextNode('Non working link'), 'goTo1', 'es/mujer/rebajas/camisas-c1010194041.html', '350px');
    const button5 = buttonFactory(document.createTextNode('Another non working link'), 'goTo', 123, '500px');

    bskCustomContentBridge.on('bsk-api-error',
      error => alert(error)
    )
  }

  bskCustomContentBridge.ready? dyInit() : document.addEventListener('bsk:customContentBridgeReady', dyInit)
})();
