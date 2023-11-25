app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET'); // Allow GET requests
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow necessary headers
    next();
    });