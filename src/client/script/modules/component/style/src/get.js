module.exports = function get(property, self, defaultValue = undefined) {
    let value;
    if (property === 'size') {
        value = Number(self.$el.getAttribute('size'));
        if (!value) {
            value = get('parentSize', self, defaultValue);
        }
    } else if (property === 'parentSize') {
        let closest = self.$el;
        do {
            closest = closest.parentElement;
            if (closest == null) break;
            value = closest.getAttribute('size');
        } while (value == null);
    } else {
        console.warn('property is undefined, value will be set to defaultValue');
    }
    return value || defaultValue;
};