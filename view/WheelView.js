const WheelView = (timeInputController, controlSVG) => {
    const size = 200;

    controlSVG.setAttribute("x", "0");
    controlSVG.setAttribute("y", "0");
    controlSVG.setAttribute("width", `${size}`);
    controlSVG.setAttribute("height", `${size}`);

    const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("cx", `${size / 2}`);
    circle1.setAttribute("cy", `${size / 2}`);
    circle1.setAttribute("r", `${size / 2}`);
    circle1.setAttribute("fill", "rgba(250,250,250,0.5)");
    circle1.setAttribute("stroke", "#404040");
    controlSVG.appendChild(circle1);

    // Create the second circle
    const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle2.setAttribute("cx", `${size / 2}`);
    circle2.setAttribute("cy", `${size / 2}`);
    circle2.setAttribute("r", "39");
    circle2.setAttribute("fill", "#404040");
    controlSVG.appendChild(circle2);

    // Create the paths
    const paths = [
        {d: "M100.617 13.5803L100.617 41.9753", strokeWidth: "4"},
        {d: "M100 159.259L100 187.654", strokeWidth: "4"},
        {d: "M100 159.259L100 187.654", strokeWidth: "4"},
        {d: "M160.494 100H188.889", strokeWidth: "4"},
        {d: "M13.5802 100H41.9753", strokeWidth: "4"},
        {d: "M39.2536 39.5093L51.5993 51.855", strokeWidth: "3"},
        {d: "M149.56 150.689L161.906 163.035", strokeWidth: "3"},
        {d: "M149.199 51.7801L162.779 38.1998", strokeWidth: "3"},
        {d: "M38.8171 162.162L52.3974 148.582", strokeWidth: "3"}
    ];
    paths.forEach(pathData => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", pathData.d);
        path.setAttribute("stroke", "#404040");
        path.setAttribute("stroke-width", pathData.strokeWidth);
        path.setAttribute("stroke-linecap", "round");
        controlSVG.appendChild(path);
    });

    const circleAnimation = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleAnimation.setAttribute("cx", `${size / 2}`);
    circleAnimation.setAttribute("cy", `${size / 2}`);
    circleAnimation.setAttribute("r", "80");
    circleAnimation.setAttribute("stroke", "rgba(250,0,0,0.5)");
    circleAnimation.setAttribute("fill", "none");
    circleAnimation.setAttribute("stroke-width", "4");
    circleAnimation.setAttribute("class", "stroke-animation");

    controlSVG.appendChild(circleAnimation);

    const handleWheelEvent = (event) => {
        timeInputController.updateWheelRotation(event);
    };

    const startRotation = (event) => {
        timeInputController.setStartPositions(event)
        controlSVG.addEventListener("mousemove", timeInputController.updateDuration);
        controlSVG.addEventListener("mouseup", stopRotation);
        controlSVG.addEventListener("wheel", handleWheelEvent);
    }

    const stopRotation = () => {
        controlSVG.removeEventListener("mousemove", timeInputController.updateDuration);
        controlSVG.removeEventListener("mouseup", stopRotation);
        controlSVG.removeEventListener("wheel", handleWheelEvent);
        controlSVG.removeEventListener("wheel", handleWheelEvent);
    }

    controlSVG.addEventListener("mousedown", startRotation);
    controlSVG.addEventListener("wheel", timeInputController.updateWheelRotation);
    controlSVG.addEventListener("mouseout", stopRotation);

    const update = () => {
        controlSVG.setAttribute("transform", "rotate(" + timeInputController.getDuration() + ")");
    };

    timeInputController.onStartChanged(update);
    timeInputController.onDurationChanged(update);

}
