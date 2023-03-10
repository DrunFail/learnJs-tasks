#field {
    width: 200px;
    height: 150px;
    position: relative;
}

#ball {
    position: absolute;
    left: 0;
    top: 0;
    transition: 1s all;
}


let left = event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2;