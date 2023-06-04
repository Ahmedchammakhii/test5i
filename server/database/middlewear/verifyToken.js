const { getAuth } = require("firebase-admin/auth");

// const auth = getAuth(app);
exports.VerifyToken = async (req, res, next) => {
    const authHeader = req.headers

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
            const decodedToken = await getAuth().verifyIdToken(token);
            console.log(decodedToken);
            req.uid = decodedToken.uid;
            // Store the UID in the request object for further processing if needed
            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            console.log(error);
            console.log(); ({ error: 'Unauthorized' }); // Return an error response for invalid tokens
        }
    } else {
        console.log(); ({ error: 'Unauthorized' });
    }
}