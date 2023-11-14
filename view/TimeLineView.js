
const TimeLineView = (timeInputController, lineElement) => {
    const width = timeInputController.getWidth();

    lineElement.setAttribute("viewBox", `0 0 1200 60`);
    lineElement.setAttribute("width", `${width}`);
    lineElement.setAttribute("height", "60");


        // Function to create a line element
        function createLine(x1, y1, x2, y2, stroke, strokeWidth, strokeLinecap) {
            var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke", stroke);
            if (strokeWidth) line.setAttribute("stroke-width", strokeWidth);
            if (strokeLinecap) line.setAttribute("stroke-linecap", strokeLinecap);
            return line;
        }

        // Function to create a path element
        function createPath(d, stroke) {
            var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", d);
            path.setAttribute("stroke", stroke);
            return path;
        }

        // Add the main path to the SVG
        lineElement.appendChild(createPath("M0 16.5H757", "#6B4D57"));

        // Add lines to the SVG
        var lines = [
            { x1: "1", y1: "1", x2: "0.999999", y2: "29", stroke: "#525252", strokeWidth: "2", strokeLinecap: "round" },
            { x1: "63.5", y1: "9.5", x2: "63.5", y2: "23.5", stroke: "#525252", strokeLinecap: "round" },
            // ... (add all other line data here)
            // Example of adding more lines:
            { x1: "441.5", y1: "9.5", x2: "441.5", y2: "23.5", stroke: "#525252", strokeLinecap: "round" },
            { x1: "630.5", y1: "9.5", x2: "630.5", y2: "23.5", stroke: "#525252", strokeLinecap: "round" },
            // ... (add the rest of the lines)
        ];

        // Iterate over each line data and append to SVG
        lines.forEach(function(lineData) {
            lineElement.appendChild(createLine(lineData.x1, lineData.y1, lineData.x2, lineData.y2, lineData.stroke, lineData.strokeWidth, lineData.strokeLinecap));
        });








}
