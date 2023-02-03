import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import {UserServiceClientJSON, UserServiceClientProtobuf} from '../rpc/user/service.twirp'
import { FetchRPC } from 'twirp-ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

export const jsonClient = new UserServiceClientJSON(FetchRPC({
  baseUrl: 'http://localhost:8080/twirp',
}))
export const protobufClient = new UserServiceClientProtobuf(FetchRPC({
  baseUrl: 'http://localhost:8080/twirp',
}))