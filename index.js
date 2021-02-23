(function(){
  document.addEventListener('dynamicYieldBridgeReady', async e => {
    const dynamicYieldBridge = e.detail;

    function buttonFactory(title, message, right = '10px') {
      const button = document.createElement('button');
      button.id = 'dynamicYieldButton';
      button.style.position = 'fixed';
      button.style.right = right;
      button.style.bottom = '50px';
      button.style.zIndex = 1000000;
      button.appendChild(title);
      document.body.prepend(button);
      button.addEventListener('click', async (e) => {
        response = await dynamicYieldBridge.processRequest(message);
      })
      return button
    }

    const button1 = buttonFactory(document.createTextNode('Working link'), {route: 'es/mujer/rebajas/camisas-c1010194041.html'});
    const button2 = buttonFactory(document.createTextNode('Non working link'), {routes: 'es/mujer/rebajas/camisas-c1010194041.html'}, '100px');

    dynamicYieldBridge.on('error', 
      error => alert(error)
    )
  });
})();
