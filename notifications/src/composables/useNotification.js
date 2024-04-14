import {eventDispatcher} from '@kkostadinov/root-config'

export function useNotification(){
    function createNotification(type, message){
        console.log('dispatching notification', type, message)
     eventDispatcher.dispatch('notification', {type, message})
    }

    function success(message){
        createNotification('success', message)
    }

    function error(message){
        createNotification('error', message)
    }

    function warning(message){
        createNotification('warning', message)
    }

    function info(message){
        createNotification('info', message)
    }

    return {
        success,
        error,
        warning,
        info
    }
}