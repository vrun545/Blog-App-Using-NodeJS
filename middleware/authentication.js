const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];

        // If token is not available
        if (!tokenCookieValue) {
            return next();
        }

        // Validate Token if token is available
        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
        } 
        catch (error) {
            alert("Internal Error")
        }
        return next();
    }
}

module.exports = {
    checkForAuthenticationCookie,
}