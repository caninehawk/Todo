import './styles.css'
import {createProject} from './createProject.js'
window.addEventListener('beforeunload', () => {
    localStorage.clear();
});
createProject();