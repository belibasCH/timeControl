/*
const TimeLineView = (timeInputController, lineElement) => {
    const render = () => {

        // Specify the path to your SVG file
        const svgFilePath = "./../static/assets/timeLine.svg";

        // Use the fetch API to retrieve the SVG file
        fetch(svgFilePath)
            .then((response) => response.text())
            .then((svgContent) => {
                // Create a div element to act as a container
                const container = document.createElement("div");

                // Append the SVG content from the file to the container
                container.innerHTML = svgContent;

                // Append the container to the main lineElement
                lineElement.appendChild(container);
            })
            .catch((error) => {
                console.error("Error loading SVG file:", error);
            });
    }
    render();
}*/


const TimeLineView = (timeInputController, lineElement) => {
    const render = () => {
        const timelineSvgFilePath = "./../static/assets/timeLine.svg";
        const barSvgFilePath = "./../static/assets/Group 83.svg"; // Path to your second SVG

        // Fetch and load the timeline SVG
        fetch(timelineSvgFilePath)
            .then(response => response.text())
            .then(svgContent => {
                // Create a container for the SVGs
                const svgContainer = document.createElement("div");
                svgContainer.style.position = "relative"; // Set position to relative for inner positioning

                // Append the timeline SVG to the container
                const timelineContainer = document.createElement("div");
                timelineContainer.innerHTML = svgContent;
                svgContainer.appendChild(timelineContainer);

                // Fetch and load the bar SVG
                fetch(barSvgFilePath)
                    .then(response => response.text())
                    .then(svgContent => {
                        // Create a container for the bar SVG
                        const barContainer = document.createElement("div");
                        barContainer.innerHTML = svgContent;

                        // Style the barContainer for overlay
                        barContainer.style.position = "absolute";
                        barContainer.style.top = '31%'; // Adjust these values as needed
                        barContainer.style.left = '2.45%'; // Adjust these values as needed
                        barContainer.style.width = "100%";

                        // Append the bar SVG to the container
                        svgContainer.appendChild(barContainer);

                        // Append the SVG container to the main lineElement
                        lineElement.appendChild(svgContainer);
                    })
                    .catch(error => console.error("Error loading bar SVG file:", error));
            })
            .catch(error => console.error("Error loading timeline SVG file:", error));
    }
    render();
}
