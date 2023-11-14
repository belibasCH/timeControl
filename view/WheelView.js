const WheelView = (timeInputController, wheelSVG) => {
    //Wheel size - currently not dynamic - TODO
    const svgSize = timeInputController.getWheelsize();
    const realSize = 200;

    //Update the wheel on start and duration change
    const update = () => wheelSVG.setAttribute("transform", "rotate(" + timeInputController.getDuration() + ")");

    timeInputController.onStartChanged(update);
    timeInputController.onDurationChanged(update);

    //IIFE to draw the wheel
    (() => {
        wheelSVG.setAttribute("x", "0");
        wheelSVG.setAttribute("y", "0");
        wheelSVG.setAttribute("width", `${svgSize}`);
        wheelSVG.setAttribute("height", `${svgSize}`);
        wheelSVG.setAttribute("viewBox", `0 0 ${realSize} ${realSize}`);
        const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle1.setAttribute("cx", `${realSize / 2}`);
        circle1.setAttribute("cy", `${realSize / 2}`);
        circle1.setAttribute("r", `${realSize / 2}`);
        circle1.setAttribute("fill", "rgba(250,250,250,0.5)");
        circle1.setAttribute("stroke", "#404040");
        wheelSVG.appendChild(circle1);

        // Create the second circle
        const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle2.setAttribute("cx", `${realSize / 2}`);
        circle2.setAttribute("cy", `${realSize / 2}`);
        circle2.setAttribute("r", "39");
        circle2.setAttribute("fill", "#404040");
        wheelSVG.appendChild(circle2);

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
            wheelSVG.appendChild(path);
        });

        // const circleAnimation = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        // circleAnimation.setAttribute("cx", `${svgSize/ 2}`);
        // circleAnimation.setAttribute("cy", `${svgSize / 2}`);
        // circleAnimation.setAttribute("r", "80");
        // circleAnimation.setAttribute("stroke", "rgba(250,0,0,0.5)");
        // circleAnimation.setAttribute("fill", "none");
        // circleAnimation.setAttribute("stroke-width", "4");
        // circleAnimation.setAttribute("class", "stroke-animation");
        //
        // wheelSVG.appendChild(circleAnimation);

    })();

    //IIFE to add the event listeners
    (() => {
        const startRotation = event => {
            timeInputController.setStartPositions(event);
            wheelSVG.addEventListener("mousemove", updateWheelRotation);
            wheelSVG.addEventListener("touchmove", updateWheelRotation);
            wheelSVG.addEventListener("mouseup", stopRotation);
            wheelSVG.addEventListener("touchend", stopRotation);

        };
        const updateWheelRotation = event => {
            timeInputController.updateDuration(event);
            console.log(event.clientX);
            if (event.clientX > 190 || event.clientX < 10 || event.clientY > 190 || event.clientY < 10) {
                stopRotation();
            }
        };
        const stopRotation = () => {
            wheelSVG.removeEventListener("mousemove", updateWheelRotation);
            wheelSVG.removeEventListener("touchmove", updateWheelRotation);
            wheelSVG.removeEventListener("mouseup", stopRotation);
            wheelSVG.removeEventListener("touchend", stopRotation);
        };

        wheelSVG.addEventListener("mousedown", startRotation);
        wheelSVG.addEventListener("touchstart", startRotation);
        wheelSVG.addEventListener("wheel", timeInputController.updateWheelRotation);

    })();


};
