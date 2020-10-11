const sendRequest = (cb) => {
    if (cb) {
        cb(null, { message: 'Everything is okey' });
    }
};
sendRequest((error, obj) => {
    if (error) {
        console.log('error');
    }
    else {
        console.log(obj);
    }
});
//# sourceMappingURL=functiontype.js.map