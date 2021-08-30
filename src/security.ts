export const checkAuthorization = (req: any): Boolean => {
    const authToken = req.headers.authorization || "";
    if (!authToken) { return false }
    if (authToken.indexOf(process.env.AUTHCODE) > -1) return true
    return false;
};