import { ref, inject } from 'vue'
const ROUTER_KEY = '__router__'

function createRouter(options) {
    return new Router(options)
}

function useRouter() {
    return inject(ROUTER_KEY)
}

function createWebHashHistory() {
    function bindEvent(fn) {
        window.addEventListener('hashchange', fn)

    }
    return {
        bindEvent,
        url: window.location.hash.slice('1') || '/'
    }
}

class Router {
    constructor(options) {
        this.history = options.history
        this.routes = options.routes
        this.current = ref(this.history.url)

        this.history.bindEvent(() => {
            this.current.value = window.location.hash.slice(1)
        })
    }
    install(app) {
        app.provide(ROUTER_KEY.this)
    }
}

export {createRouter,createWebHashHistory,useRouter}