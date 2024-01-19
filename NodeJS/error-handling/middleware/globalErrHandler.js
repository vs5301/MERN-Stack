const globalErrHandler = (err, req, res, next) => {
    console.log(err.statusCode);

    // status code // 404
    const statusCode = err.statusCode || 50

    // status: 'failed/success'
    const status = err.status

    // message
    const message = err.message
    å;
    res.status(statusCode).json({
        status,
        message,
        stack: err.stack,
    })
}

module.exports = globalErrHandler