
const RectBarView = (timeInputController, barElement) => {

    const render = () => {
        barElement.style.width = "" + timeInputController.getDuration()+"px";
    }

    timeInputController.onDurationChanged(render);
};

