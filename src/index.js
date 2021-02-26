import AppService from './modules/app.service'
import { config } from './modules/config'
import './modules/header.component'
import './css/style.css'
import './scss/style.scss'

console.log('Config key:', config.key)

const service = new AppService('Hello world!')
service.log()