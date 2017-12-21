function updateBoxDimension() {
    var container = document.getElementById('container');
    var windowHeight = window.innerHeight;
    var containerHeight = container.offsetHeight;
    var windowWidth = window.innerWidth;
    var containerWidth = container.offsetWidth;
    var containerTop = ((windowHeight / 2) - (containerHeight / 2)) + 'px';
    container.style.marginTop = containerTop;
    if (windowWidth > 469) {
      var containerLeft = ((windowWidth - containerWidth)/ 2) + 'px' ;
      container.style.marginLeft = containerLeft;
    }
  };

updateBoxDimension();
