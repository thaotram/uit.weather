import components from './component/load/components';
import style from './component/style/style';
import average from './image/average';
import complier from './component/complier/complier';
import run from './component/run/run';
// import find from './component/find/find';
import computed from './component/computed/computed';
import data from './component/data/data';

export default {
    components,
    style,
    data,
    complier,
    computed,
    run,
    image: {
        average,
    },
};
