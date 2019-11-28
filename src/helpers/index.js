import moment from 'moment';

export const formatDate = (dateToFormat) => {
    const today = new Date();
    
    if (moment(today).isSame(dateToFormat, 'day')){
        return moment(dateToFormat).format('h:mm a')
    }
    else {
        return moment(dateToFormat).format('D MMM');
    }
}

export const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const isAuthenticated = () => {
    const storage = window.localStorage.getItem('user');

    if(storage === 'Karl' || storage === 'johnDoe' || storage === 'janetDoe'){
        return true;
    }
    else{
        return false;
    }
}

//animations
export const closeSidebarAnimation = () => {
    document.querySelector('.sidebar').classList.remove('open-sidebar');
    document.querySelector('header').classList.add('close-header');
    document.querySelector('.sidebar').classList.add('close-sidebar');
    document.querySelector('header').classList.add('open-header');
}