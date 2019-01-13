(function tooltip() {
  const container = document.querySelector('.container');
  const tool = document.createElement('div');
  const tooltext = document.createElement('p');
  const toolRect = document.createElement('div');
  tool.classList.add('tooltip');
  toolRect.classList.add('toolip-rect');

  function throttle(f, delay) {
    let counter = 0;
    setInterval(() => {
      counter = 0;
    }, delay);
    let timerId;
    return function (a) {
      if (counter === 0) {
        f.call(null, a);
        counter += 1;
      } else {
        setTimeout(clearTimeout(timerId), 0);
        timerId = setTimeout(() => {
          f.call(null, a);
        }, delay);
      }
    };
  }

  function setMessage(event) {
    tool.style.left = `${event.pageX - 53}px`;
    tool.style.top = `${event.pageY - 70}px`;
    container.appendChild(tool);
    tool.appendChild(tooltext);
    tool.appendChild(toolRect);
    tooltext.innerHTML = `X: ${event.pageX}, Y:${event.pageY}`;
  }

  const throttledMessage = throttle(setMessage, 500);

  container.addEventListener('mousemove', throttledMessage);
}());
