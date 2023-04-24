import $ from '../core'

$.prototype.show = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue
        }

        this[i].style.display = '';
    }

    return this
}

$.prototype.toggle = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue
        }

        this[i].style.display = this[i].style.display === 'none' ? '' : 'none';
    }

    return this
}
