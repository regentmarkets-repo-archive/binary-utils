export default (time) => {
    const d = time.split(':').map((val, ind) => {
                switch (ind) {
                    case 0 : {
                        return (parseInt(val, 0) <= 24);
                    }
                    case 1 : {
                        return (parseInt(val, 0) <= 59);
                    }
                    default :
                        return (parseInt(val, 0) <= 59);
                }
            });
    return d.indexOf(false) > -1;
}