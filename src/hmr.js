const pluginName = '[protoast-3d]';

if (process.env.NODE_ENV !== 'production') {

    console.log(pluginName, 'mode: development!');
}


if (module.hot) {

    module.hot.accept('./core/instance/cameras.js', function () {

        console.log(pluginName, 'Accepting updated cameras.js');
    });

    module.hot.accept('./core/instance/cameras.js', function () {

        console.log(pluginName, 'Accepting updated scenes.js');
    });

    module.hot.accept('./core/instance/cameras.js', function () {

        console.log(pluginName, 'Accepting updated renderer.js');
    });

    module.hot.accept('./main.js', function () {

        console.log(pluginName, 'Accepting updated main.js');
    });
}
