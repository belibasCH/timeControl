
const WheelView = (todoController, controlSVG) => {

    const render = () => {
        // controlSVG.innerText = "" + todoController.getDuration();

        controlSVG.setAttribute("x", "100");
        controlSVG.setAttribute("y", "0");

        const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle1.setAttribute("cx", "100");
        circle1.setAttribute("cy", "100");
        circle1.setAttribute("r", "100");
        circle1.setAttribute("fill", "rgba(250,250,250,0.5)");
        circle1.setAttribute("stroke", "#404040");
        controlSVG.appendChild(circle1);

        // Create the second circle
        const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle2.setAttribute("cx", "100");
        circle2.setAttribute("cy", "100");
        circle2.setAttribute("r", "39");
        circle2.setAttribute("fill", "#404040");
        controlSVG.appendChild(circle2);

        // Create the paths
        const paths = [
            { d: "M100.617 13.5803L100.617 41.9753", strokeWidth: "4" },
            { d: "M100 159.259L100 187.654", strokeWidth: "4" },
            { d: "M100 159.259L100 187.654", strokeWidth: "4" },
            { d: "M160.494 100H188.889", strokeWidth: "4" },
            { d: "M13.5802 100H41.9753", strokeWidth: "4" },
            { d: "M39.2536 39.5093L51.5993 51.855", strokeWidth: "3" },
            { d: "M149.56 150.689L161.906 163.035", strokeWidth: "3" },
            { d: "M149.199 51.7801L162.779 38.1998", strokeWidth: "3" },
            { d: "M38.8171 162.162L52.3974 148.582", strokeWidth: "3" }
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
        circleAnimation.setAttribute("cx", "100");
        circleAnimation.setAttribute("cy", "100");
        circleAnimation.setAttribute("r", "80");
        circleAnimation.setAttribute("stroke", "rgba(250,250,250,0.5)");
        circleAnimation.setAttribute("fill", "none");
        circleAnimation.setAttribute("stroke-width", "4");
        circleAnimation.setAttribute("class", "stroke-animation");


        controlSVG.appendChild(circleAnimation);


        controlSVG.setAttribute("onmousedown", "setStart(event)");



        // function createElements() {
        //     const template = document.createElement('DIV'); // only for parsing
        //     template.innerHTML = `
        //         <button class="delete">&times;</button>
        //         <input type="text" size="36">
        //         <input type="checkbox">
        //     `;
        //     return template.children;
        // }
        // const [deleteButton, inputElement, checkboxElement] = createElements();
        //
        // checkboxElement.onclick = _ => todo.setDone(checkboxElement.checked);
        // deleteButton.onclick    = _ => todoController.removeTodo(todo);
        //
        // todoController.onTodoRemove( (removedTodo, removeMe) => {
        //     if (removedTodo !== todo) return;
        //     rootElement.removeChild(inputElement);
        //     rootElement.removeChild(deleteButton);
        //     rootElement.removeChild(checkboxElement);
        //     removeMe();
        // } );
        //
        // rootElement.appendChild(deleteButton);
        // rootElement.appendChild(inputElement);
        // rootElement.appendChild(checkboxElement);

    };

    todoController.onStartChanged(render);
    todoController.onDurationChanged(render);

};
