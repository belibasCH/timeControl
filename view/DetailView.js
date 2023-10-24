
const DetailView = (timeInputController, detailElement) => {
    const render = () =>
        detailElement.innerText = "" + timeInputController.getDuration();

    timeInputController.onDurationChanged(render);
};

