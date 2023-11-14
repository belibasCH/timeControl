
const RectBarView = (timeInputController, barElement) => {
    const barHeight = 27;
    const width = timeInputController.getWidth();
    barElement.setAttribute("viewBox", `0 0 750 120`);
    barElement.setAttribute("width", width);
    barElement.setAttribute("height", "120");

    const rectBarGroup =   document.createElementNS("http://www.w3.org/2000/svg", "g");
    rectBarGroup.setAttribute("width", timeInputController.getDuration());
    rectBarGroup.setAttribute("height", barHeight.toString());
    rectBarGroup.setAttribute("fill", "none");
    rectBarGroup.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    rectBarGroup.setAttribute("cursor", "pointer");

    let startposition = 0;

    rectBarGroup.addEventListener("mousedown", event => {
        startposition = event.clientX;
        rectBarGroup.addEventListener("mousemove", updateBar);
        rectBarGroup.addEventListener("touchmove", updateBar);
        rectBarGroup.addEventListener("mouseup", stopBar);
        rectBarGroup.addEventListener("mouseleave", stopBar);
        rectBarGroup.addEventListener("touchend", stopBar);

    });
    const updateBar = event => {
        timeInputController.updateStart(event, startposition);
    }
    const stopBar = event => {
        startposition = 0;
        rectBarGroup.removeEventListener("mousemove", updateBar);
        rectBarGroup.removeEventListener("touchmove", updateBar);
        rectBarGroup.removeEventListener("mouseup", stopBar);
        rectBarGroup.removeEventListener("mouseleave", stopBar);
        rectBarGroup.removeEventListener("touchend", stopBar);

    }

// Erstellt das Gruppenelement mit Filter
    const groupWithFilter = document.createElementNS("http://www.w3.org/2000/svg", "g");
    groupWithFilter.setAttribute("filter", "url(#filter0_ii_211_685)");

// Erstellt das Rechteck
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", timeInputController.getDuration());
    rect.setAttribute("height", barHeight.toString());
    rect.setAttribute("rx", "3");
    rect.setAttribute("fill", "#E2E1E0");

// Fügt das Rechteck zur Gruppe hinzu
    groupWithFilter.appendChild(rect);

// Fügt die Gruppe zum SVG hinzu
    rectBarGroup.appendChild(groupWithFilter);

// Erstellt eine zweite Gruppe für die Pfade
    const handlers = document.createElementNS("http://www.w3.org/2000/svg", "g");
    handlers.setAttribute("opacity", "0.7");
    handlers.setAttribute("transform", "translate("+timeInputController.getDuration()/2+" 0)");

//Erstellt den handler in der Mitte
    const handlerMiddle = document.createElementNS("http://www.w3.org/2000/svg", "g");
    handlerMiddle.setAttribute("x", "-1");
    handlerMiddle.setAttribute("y", "0");
    handlerMiddle.setAttribute("width", "2");
    handlerMiddle.setAttribute("height", barHeight.toString());
    handlerMiddle.setAttribute("fill", "#404040");

    const topmiddle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    topmiddle.setAttribute("cx", "0");
    topmiddle.setAttribute("cy", (barHeight*0.33).toString());
    topmiddle.setAttribute("r", "2");


    const bottommiddle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    bottommiddle.setAttribute("cx", "0");
    bottommiddle.setAttribute("cy", (barHeight*0.66).toString());
    bottommiddle.setAttribute("r", "2");

    const topright = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    topright.setAttribute("cx", (barHeight*0.33).toString());
    topright.setAttribute("cy", (barHeight*0.33).toString());
    topright.setAttribute("r", "2");

    const bottomright = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    bottomright.setAttribute("cx", (barHeight*0.33).toString());
    bottomright.setAttribute("cy", (barHeight*0.66).toString());
    bottomright.setAttribute("r", "2");

    const topleft = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    topleft.setAttribute("cx", (0 -(barHeight*0.33)).toString());
    topleft.setAttribute("cy", (barHeight*0.33).toString());
    topleft.setAttribute("r", "2");

    const bottomleft = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    bottomleft.setAttribute("cx", (0 -(barHeight*0.33)).toString());
    bottomleft.setAttribute("cy", (barHeight*0.66).toString());
    bottomleft.setAttribute("r", "2");

    handlerMiddle.appendChild(topmiddle);
    handlerMiddle.appendChild(bottommiddle);
    handlerMiddle.appendChild(topright);
    handlerMiddle.appendChild(bottomright);
    handlerMiddle.appendChild(topleft);
    handlerMiddle.appendChild(bottomleft);





    handlers.appendChild(handlerMiddle);

// Fügt die Pfade-Gruppe zum SVG hinzu
    rectBarGroup.appendChild(handlers);

    barElement.appendChild(rectBarGroup);

    const render = () => {
        rectBarGroup.setAttribute("width", timeInputController.getDuration());
        rect.setAttribute("width", timeInputController.getDuration());
        handlers.setAttribute("transform", "translate("+timeInputController.getDuration()/2+" 0)");
        rectBarGroup.setAttribute("transform", "translate("+timeInputController.getStart()/20+" 0)");
        //rect.setAttribute("x", timeInputController.getStart());
    };

    timeInputController.onDurationChanged(render);
    timeInputController.onStartChanged(render);
};

