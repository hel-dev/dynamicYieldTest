(function(){
  document.addEventListener('dynamicYieldBridgeReady', async e => {
    const dynamicYieldBridge = e.detail;
    const message = {
      route: 'es/mujer/rebajas/camisas-c1010194041.html'
    }
    const button = document.createElement('button');
    button.id = 'dynamicYieldButton';
    button.style.position = 'fixed';
    button.style.right = '10px';
    button.style.bottom = '50px';
    button.style.zIndex = 1000000;
    const title = document.createTextNode('Dynamic Yield!');
    button.appendChild(title);
    document.body.prepend(button);
    button.addEventListener('click', async (e) => {
      response = await dynamicYieldBridge.processRequest(message);
    })
  });
})()
