
const DetailView = (timeInputController, detailElement) => {

    const render = () =>
        detailElement.innerText = "" + timeInputController.getDuration();

    timeInputController.onStartChanged(render);
    timeInputController.onDurationChanged(render);
};

