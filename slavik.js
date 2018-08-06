function movingNav() {
    const buttons = document.querySelectorAll('.button-clear');
    const nav = document.querySelector('nav');
    const highlightedSpan = document.createElement('span');
    highlightedSpan.classList.add('moving-link');
    document.body.appendChild(highlightedSpan);

    const startingTop = nav.getBoundingClientRect().top;
    const startingLeft = nav.getBoundingClientRect().left;

    highlightedSpan.style.top = `${startingTop}px`;
    // highlightedSpan.style.left = `${startingLeft}px`;

    function movingEffect() {
        const coords = this.getBoundingClientRect();
        console.log(coords);
        const coordsObj = {
            width: coords.width,
            height: coords.height,
            top: coords.top,
            left: coords.left
        }
        highlightedSpan.style.width = `${coordsObj.width}px`;
        highlightedSpan.style.height = `${coordsObj.height}px`;
        highlightedSpan.style.transform = `translate(${coordsObj.left}px, 0px`;

    }
    buttons.forEach(e => e.addEventListener('mouseenter', movingEffect));

}
movingNav();