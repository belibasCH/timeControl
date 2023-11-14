
const TimeLineView = (timeInputController, lineElement) => {
    const width = timeInputController.getWidth();

    lineElement.setAttribute("viewBox", `0 0 750 60`);
    lineElement.setAttribute("width", `${width}`);
    lineElement.setAttribute("height", "120");

    const totalBigTicks = 5; // Total number of big ticks
    const timelineLength = 750; // Total length of the timeline
    const bigTickLength = 30; // Length of big ticks
    const mediumTickLength = 15; // Length of small ticks
    const smallTickLength = 6; // Length of smallest ticks
    const strokeColor = "#525252"; // Color of the ticks
    const startHour = 6; // Start hour of the timeline

    // Function to create a line element
    function createLine(x1, y1, x2, y2, stroke, strokeWidth, strokeLinecap) {
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2 + y1);
        line.setAttribute("stroke", stroke);
        line.setAttribute("stroke-width", strokeWidth);
        line.setAttribute("stroke-linecap", strokeLinecap);
        return line;
    }

    // Function to create a path element
    function createPath(d, stroke) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        path.setAttribute("stroke", stroke);
        return path;
    }

    // Function to create and add a time label
    function addTimeLabel(x, y, hour) {
        const timeLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        timeLabel.setAttribute("x", x);
        timeLabel.setAttribute("y", y);
        timeLabel.setAttribute("font-size", "12");
        timeLabel.setAttribute("fill", strokeColor);
        timeLabel.textContent = hour.toString().padStart(2, "0") + ":00"; // Format as HH:00
        lineElement.appendChild(timeLabel);
    }

    // Add the main path to the SVG
    lineElement.appendChild(createPath("M0 16.5H" + timelineLength, "#6B4D57"));

    // Calculate spacing between big ticks
    const bigTickSpacing = timelineLength / (totalBigTicks - 1);

    // Create big and small ticks
    for (let i = 0; i < totalBigTicks; i++) {
        let bigTickPosition = i * bigTickSpacing;

        // Create big tick
        lineElement.appendChild(createLine(bigTickPosition, 1, bigTickPosition, bigTickLength, strokeColor, "2", "round"));

        addTimeLabel(bigTickPosition - 15, bigTickLength - 40, startHour + i*3);

        // Create medium and small ticks if not the last big tick
        if (i < totalBigTicks - 1) {
            let mediumTicks = 2; // Number of medium ticks between big ticks
            let mediumTickSpacing = bigTickSpacing / (mediumTicks + 1);

            for (let j = 1; j <= mediumTicks; j++) {
                let mediumTickPosition = bigTickPosition + j * mediumTickSpacing;
                lineElement.appendChild(createLine(mediumTickPosition, 9.5, mediumTickPosition, mediumTickLength, strokeColor, "1", "round"));

                addTimeLabel(mediumTickPosition - 15, mediumTickLength - 15, startHour + i*3+j);

                // Create small tick before each medium tick
                let smallTickBeforeMedium = mediumTickPosition - mediumTickSpacing / 2;
                lineElement.appendChild(createLine(smallTickBeforeMedium, 13.25, smallTickBeforeMedium, smallTickLength, strokeColor, "0.5", "round"));

                // Create small tick after the last medium tick, only if it's not the last medium tick
                if (j === mediumTicks) {
                    let smallTickAfterMedium = mediumTickPosition + mediumTickSpacing / 2;
                    lineElement.appendChild(createLine(smallTickAfterMedium, 13.25, smallTickAfterMedium, smallTickLength, strokeColor, "0.5", "round"));
                }
            }
        }
    }
}
