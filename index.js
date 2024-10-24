import { sum } from "./main";
import './styles.css'
export image from './1.png'


const array = [1, 2, 3].map(i => i + 1)

function hello(...args) {
    console.log('Hi', args[0], args[1])
}

hello(sum(4, 4 ), array)


const imageElement = document.createElement('img')
imageElement.src = image
document.querySelector('body').append(imageElement)


console.log(image)