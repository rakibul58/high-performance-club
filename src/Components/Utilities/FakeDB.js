let breaks = 0;
const addToDb = time =>{
    localStorage.setItem('break-time', time);
    breaks = getFromDB();
    console.log(breaks);

}

const getFromDB = () =>{
    const storedCart = localStorage.getItem('break-time');
    if(storedCart)
    {
        return storedCart;
    }
    else
        return 0;
}

export {
    addToDb,
    getFromDB
};