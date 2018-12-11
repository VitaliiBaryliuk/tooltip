(function tooltip() {
  const container = document.querySelector('.container');
  const tool = document.createElement('div');
  const tooltext = document.createElement('p');
  const toolRect = document.createElement('div');
  tool.classList.add('tooltip');
  toolRect.classList.add('toolip-rect');

  const containerEventListener = (event) => {
    tool.style.left = `${event.pageX - 53}px`;
    tool.style.top = `${event.pageY - 70}px`;
    container.appendChild(tool);
    tool.appendChild(tooltext);
    tool.appendChild(toolRect);
    tooltext.innerHTML = `X: ${event.pageX}, Y:${event.pageY}`;
  };

  container.addEventListener('mousemove', containerEventListener);
}());
