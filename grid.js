/**
 * Created by sms061987 on 8/30/16.
 */

var dragSrcEl = null;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(e) {
    dragSrcEl = this;
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function drop(e) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
}

var cols = document.querySelectorAll('#main-container .inline-container');
[].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', drag, false);
    col.addEventListener('dragover', allowDrop, false);
    col.addEventListener('drop', drop, false);
});