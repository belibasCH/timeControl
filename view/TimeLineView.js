const TimeLineView = (timeInputController, lineElement) => {
    const render = () => {

        // Specify the path to your SVG file
        const svgFilePath = "./../static/assets/timeLine.svg";

        // Use the fetch API to retrieve the SVG file
        fetch(svgFilePath)
            .then((response) => response.text())
            .then((svgContent) => {
                // Create an SVG element
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                // Append the SVG content from the file to the SVG element
                svg.innerHTML = svgContent;

                // Append the SVG element to the container
                lineElement.appendChild(svg);
            })
            .catch((error) => {
                console.error("Error loading SVG file:", error);
            });
    }
    render();
}