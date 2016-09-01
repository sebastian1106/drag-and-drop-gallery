/**
 * Created by sms061987 on 8/30/16.
 */

var dragSrcEl = null;

function drag(e) {
    dragSrcEl = this;
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function drop(e) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
}