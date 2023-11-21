const WheelView_v2 = (timeInputController, wheelWrapper) => {
    const svgSize = timeInputController.getWheelsize();
    const realSize = 200; // Base size for scaling

    wheelWrapper.setAttribute("width", timeInputController.getTimeLineLength());
    wheelWrapper.setAttribute("height", svgSize);

    const getMiddle = () => {
        return timeInputController.getStart() + timeInputController.getDuration()/2
    }

    const tick = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    tick.setAttribute("x", getMiddle().toString());
    tick.setAttribute("y", "0");
    tick.setAttribute("points", getMiddle()+5+",0 "+getMiddle()+",20 "+(getMiddle()+10)+",20");
    tick.setAttribute("fill", "#6083FC");
    wheelWrapper.appendChild(tick);



    const wheelSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    wheelSVG.setAttribute("id", "wheel");
    wheelSVG.setAttribute("x", "0");
    wheelSVG.setAttribute("y", "0"); // Y position
    wheelSVG.setAttribute("fill", "blue"); // Fill color

    wheelWrapper.appendChild(wheelSVG);

    const scaleValue = (value) => {
        return value * realSize / 113; // Scale according to realSize
    };

    // Calculate hours and minutes from the 'duration' variable
    let initialDuration = timeInputController.getDuration();
    let duration = initialDuration;
    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;
    // Round the hours and minutes to whole numbers
    hours = Math.round(hours);
    minutes = Math.round(minutes);
    let durationText;

    const outerGroup = getOuterGroup(scaleValue);

    const innerGroup = getInnerGroup(scaleValue);

    const update = () => {
        outerGroup.setAttribute("transform-origin", "center center")   ;
        outerGroup.setAttribute("transform", "rotate(" + timeInputController.getDuration() + ")");

        innerGroup.setAttribute("transform-origin", "center center")   ;
        innerGroup.setAttribute("transform", "rotate(" + timeInputController.getDuration() + ")");


        tick.setAttribute("x", getMiddle().toString());
        tick.setAttribute("points", getMiddle()+5+",0 "+getMiddle()+",20 "+(getMiddle()+10)+",20");

        duration = timeInputController.getDuration();
        hours = Math.floor(duration / 60);
        minutes = duration % 60;
        updateDurationText(hours, minutes);
    };

    timeInputController.onStartChanged(update);
    timeInputController.onDurationChanged(update);


        wheelSVG.setAttribute("width", `${svgSize}`);
        wheelSVG.setAttribute("height", `${svgSize}`);
        wheelSVG.setAttribute("viewbox", `0 0 ${realSize} ${realSize}`);

        wheelSVG.appendChild(getDarkShadowFilter());
        wheelSVG.appendChild(getBrightShadowFilter());



        outerGroup.appendChild(getDarkShadowShape(scaleValue));

        outerGroup.appendChild(getBrightShadowShape(scaleValue));

        wheelSVG.appendChild(outerGroup);



        innerGroup.appendChild(getInnerCircleShadowFilter(scaleValue));

        wheelSVG.appendChild(innerGroup);

        durationText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        durationText.setAttribute("x", scaleValue(56.4996)); // Center of the inner circle
        durationText.setAttribute("y", scaleValue(56.5001)); // Center of the inner circle
        durationText.setAttribute("text-anchor", "middle");
        durationText.setAttribute("dominant-baseline", "middle");
        durationText.setAttribute("font-size", scaleValue(12));
        durationText.setAttribute("fill", "#fff"); // Color of the text
        durationText.setAttribute("font-family", "Arial"); // Specify Montserrat as the font-family


        initialDuration = timeInputController.getDuration();
        updateDurationText(Math.floor(initialDuration / 60), initialDuration % 60);

        wheelSVG.appendChild(durationText);

        // Create lines
        const linesData = [
            {x1: "57.15", y1: "15", x2: "57.15", y2: "25"},
            {x1: "57.15", y1: "88", x2: "57.15", y2: "98"},
            {x1: "15.5", y1: "56.35", x2: "25.5", y2: "56.35"},
            {x1: "88.5", y1: "56.35", x2: "98.5", y2: "56.35"},
            {x1: "34.3434", y1: "79.1544", x2: "22.3434", y2: "91.1544"},
            {x1: "91.3434", y1: "22.1544", x2: "79.3434", y2: "34.1544"},
            {x1: "48.307", y1: "87.0857", x2: "47.1426", y2: "91.4313"},
            {x1: "66.3253", y1: "19.0317", x2: "65.423", y2: "23.2097"},
            {x1: "40.335", y1: "83.8558", x2: "38.0855", y2: "87.7519"},
            {x1: "75.3532", y1: "22.7841", x2: "73.4002", y2: "26.5862"},
            {x1: "28.1824", y1: "71.8899", x2: "24.2863", y2: "74.1394"},
            {x1: "89.0461", y1: "36.5091", x2: "85.4538", y2: "38.8254"},
            {x1: "24.8298", y1: "63.9691", x2: "20.4842", y2: "65.1335"},
            {x1: "92.7764", y1: "45.5469", x2: "88.7069", y2: "46.8544"},
            {x1: "24.6985", y1: "46.9147", x2: "20.3529", y2: "45.7503"},
            {x1: "92.7525", y1: "64.934", x2: "88.5745", y2: "64.0316"},
            {x1: "27.9279", y1: "38.9431", x2: "24.0318", y2: "36.6937"},
            {x1: "89.0008", y1: "73.9623", x2: "85.1987", y2: "72.0093"},
            {x1: "33.9887", y1: "34.3099", x2: "21.9887", y2: "22.3099"},
            {x1: "90.9887", y1: "91.3116", x2: "78.9887", y2: "79.3116"},
            {x1: "39.8945", y1: "26.7908", x2: "37.6451", y2: "22.8947"},
            {x1: "75.2743", y1: "87.6545", x2: "72.9581", y2: "84.0622"},
            {x1: "47.8151", y1: "23.4382", x2: "46.6507", y2: "19.0926"},
            {x1: "66.2371", y1: "91.385", x2: "64.9295", y2: "87.3156"}
        ];

        linesData.forEach(lineData => {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", scaleValue(lineData.x1));
            line.setAttribute("y1", scaleValue(lineData.y1));
            line.setAttribute("x2", scaleValue(lineData.x2));
            line.setAttribute("y2", scaleValue(lineData.y2));
            line.setAttribute("stroke", "black");
            line.setAttribute("stroke-width", scaleValue(lineData.strokeWidth));
            outerGroup.appendChild(line);
        });

    function updateDurationText(hours, minutes) {
        if (durationText) {
            // Round the hours and minutes to whole numbers
            hours = Math.round(hours);
            minutes = Math.round(minutes);
            // Format the duration as "h hours m minutes"
            durationText.textContent = `${hours}h ${minutes}m`;
        }
    }

            const startRotation = event => {
            timeInputController.setStartPositions(event);
            wheelSVG.addEventListener("mousemove", updateDragRotation);
            wheelSVG.addEventListener("touchmove", updateDragRotation);
            wheelSVG.addEventListener("mouseup", stopRotation);
            wheelSVG.addEventListener("mouseleave", stopRotation);
            wheelSVG.addEventListener("touchend", stopRotation);

        };
        const updateDragRotation = event => {
            timeInputController.updateDuration(event);
        };
        const stopRotation = () => {
            wheelSVG.removeEventListener("mousemove", updateDragRotation);
            wheelSVG.removeEventListener("touchmove", updateDragRotation);
            wheelSVG.removeEventListener("mouseup", stopRotation);
            wheelSVG.removeEventListener("mouseleave", stopRotation);
            wheelSVG.removeEventListener("touchend", stopRotation);
        };

        wheelSVG.addEventListener("mousedown", startRotation);
        wheelSVG.addEventListener("touchstart", startRotation);
        wheelSVG.addEventListener("wheel", timeInputController.updateWheelRotation);
};

const getDarkShadowFilter = ()=> {
// Create a reusable inner shadow filter for the dark shadow
    const darkShadowFilter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    darkShadowFilter.setAttribute("id", "darkInnerShadowFilter");

// Define the filter operations for the dark shadow
    const darkShadowFilterOperations = [
        '<feOffset dx="4" dy="4"/>',
        '<feGaussianBlur stdDeviation="4"/>',
        '<feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"/>',
        '<feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.5 0"/>', // Adjusted color matrix values
    ];

// Append filter operations to the dark shadow filter element
    darkShadowFilter.innerHTML = darkShadowFilterOperations.join('');
    return darkShadowFilter;
}

const getBrightShadowFilter = ()=> {
    const brightShadowFilter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    brightShadowFilter.setAttribute("id", "brightInnerShadowFilter");

// Define the filter operations for the bright shadow
    const brightShadowFilterOperations = [
        '<feOffset dx="-4" dy="-4"/>',
        '<feGaussianBlur stdDeviation="4"/>',
        '<feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"/>',
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>', // Adjusted color matrix values
    ];

// Append filter operations to the bright shadow filter element
    brightShadowFilter.innerHTML = brightShadowFilterOperations.join('');
    return brightShadowFilter
}

const getInnerCircleShadowFilter = ()=> {
    const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.setAttribute("id", "innerCircleShadowFilter");

    // Define the filter operations for the inner circle shadow
    const filterOperations = [
        '<feOffset dx="4" dy="4"/>',             // Adjust the shadow offset as needed
        '<feGaussianBlur stdDeviation="4"/>',    // Adjust the blur radius as needed
        '<feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"/>',
        '<feBlend mode="normal" in2="SourceGraphic"/>',  // Apply the shadow to the inner circle
    ];

    filter.innerHTML = filterOperations.join('');
    return filter;
}

const getOuterGroup = scaleValue => {
    // Create a group for the outer circle and its shadows
    const outerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

// Create the outer circle
    const outerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    outerCircle.setAttribute("cx", scaleValue(56.5));
    outerCircle.setAttribute("cy", scaleValue(56.5));
    outerCircle.setAttribute("r", scaleValue(56.5));
    outerCircle.setAttribute("fill", "#E6E6E6");

// Append the outer circle to the group
    outerGroup.appendChild(outerCircle);
    return outerGroup;
}

const getInnerGroup = scaleValue => {
    // Create the inner group
    const innerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

// Create the inner circle
    const innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    innerCircle.setAttribute("cx", scaleValue(56.4996));
    innerCircle.setAttribute("cy", scaleValue(56.5001));
    innerCircle.setAttribute("r", scaleValue(27.2037));
    innerCircle.setAttribute("fill", "#6183FC");

// Apply the inner shadow filter to the inner circle
    innerCircle.setAttribute("filter", "url(#innerCircleShadowFilter)");

// Create a shadow shape behind the inner circle
    const shadowShape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    shadowShape.setAttribute("cx", scaleValue(56.4996));
    shadowShape.setAttribute("cy", scaleValue(56.5001));
    shadowShape.setAttribute("r", scaleValue(27.2037));
    shadowShape.setAttribute("fill", "#000"); // Color of the shadow

// Append the inner circle and the shadow shape to the inner group
    innerGroup.appendChild(shadowShape);
    innerGroup.appendChild(innerCircle);

    return innerGroup;
}

const getDarkShadowShape = scaleValue => {
    // Create a dark shadow shape for the inner shadow
    const darkShadowShape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    darkShadowShape.setAttribute("cx", scaleValue(56.5));
    darkShadowShape.setAttribute("cy", scaleValue(56.5));
    darkShadowShape.setAttribute("r", scaleValue(56.5));
    darkShadowShape.setAttribute("fill", "#000"); // Color of the dark shadow

// Apply the dark inner shadow filter to the dark shadow shape
    darkShadowShape.setAttribute("filter", "url(#darkInnerShadowFilter)");
    return darkShadowShape;
}

const getBrightShadowShape= scaleValue => {
    // Create a bright shadow shape for the inner shadow
    const brightShadowShape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    brightShadowShape.setAttribute("cx", scaleValue(56.5));
    brightShadowShape.setAttribute("cy", scaleValue(56.5));
    brightShadowShape.setAttribute("r", scaleValue(56.5));
    brightShadowShape.setAttribute("fill", "#fff"); // Color of the bright shadow

// Apply the bright inner shadow filter to the bright shadow shape
    brightShadowShape.setAttribute("filter", "url(#brightInnerShadowFilter)");
    return brightShadowShape;
}