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