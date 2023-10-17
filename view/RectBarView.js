
const RectBarView = (timeInputController, barElement) => {

    const render = () => {
        barElement.style.width = "" + timeInputController.getDuration()+"px";
        console.log(barElement.style.width);
    }

    timeInputController.onDurationChanged(render);
};

