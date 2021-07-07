import color1 from '../../assets/themes/color1';
import color2 from '../../assets/themes/color2';
import color3 from '../../assets/themes/color3';
import color4 from '../../assets/themes/color4';
import color5 from '../../assets/themes/color5';
import color6 from '../../assets/themes/color6';
import sunny from '../../assets/themes/sunny';
import marine from '../../assets/themes/marine';
import cloudy from '../../assets/themes/cloudy';
import def from '../../assets/themes/default';

const themes = [
    { name: 'default', class: '', color: def.color_primary },
    { name: 'color1', class: 'theme-color1', color: color1.color_primary },
    { name: 'color2', class: 'theme-color2', color: color2.color_primary },
    { name: 'color3', class: 'theme-color3', color: color3.color_primary },
    { name: 'color4', class: 'theme-color4', color: color4.color_primary },
    { name: 'color5', class: 'theme-color5', color: color5.color_primary },
    { name: 'color6', class: 'theme-color6', color: color6.color_primary },
    { name: 'sunny', class: 'theme-sunny', color: sunny.color_primary },
    { name: 'marine', class: 'theme-marine', color: marine.color_primary },
    { name: 'cloudy', class: 'theme-cloudy', color: cloudy.color_primary },
];

export default themes;
