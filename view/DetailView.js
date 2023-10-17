
const DetailView = (todoController, detailElement) => {

    const render = () =>
        detailElement.innerText = "" + todoController.getDuration();

    todoController.onStartChanged(render);
    todoController.onDurationChanged(render);
};

