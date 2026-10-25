import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/600.css'
import '@fontsource/jetbrains-mono/500.css'
import '../styles.css'
import './phone.css'
import PhoneApp from './PhoneApp'

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><PhoneApp /></React.StrictMode>)
if ('serviceWorker' in navigator) navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`, { scope: import.meta.env.BASE_URL }).catch(() => {})
