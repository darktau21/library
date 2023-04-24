import $ from '../core'

$.prototype.animateOverTime = function (dur, cb, final) {
    let timeStart;

    function _animateOverTime(time) {
        timeStart = timeStart ?? time

        let timeElapsed = time - timeStart
        let complexion = Math.min(timeElapsed / dur, 1)

        cb(complexion)

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime)
        } else {
            if (typeof final === 'function') {
                final()
            }
        }
    }

    return _animateOverTime
}