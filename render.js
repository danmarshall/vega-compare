function render() {
    var runtime = vega.parse(parent.spec);
    var div = document.getElementById('vis');
    new vega.View(runtime).initialize(div).renderer('canvas').run();
}
