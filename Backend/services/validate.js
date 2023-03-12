import User from "../models/User.js";
import jwtDecode from 'jwt-decode';

export const verifyUser = async (req, res, next) => {
    // Get authorization token from request header
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ data: true, hello: "good1" });
    }
    // { errors: [{ msg: "Please Login" }], removeToken: true }
    console.log(token);
    const decodeToken = await jwtDecode(token);
    console.log(decodeToken.id);

    const user = await User.find({ _id: decodeToken.id })
    console.log(user);

    User.find({ _id: decodeToken.id }).then((users) => {
        console.log(users); // An array of User documents that match the given criteria
        const newPassword = users[0].tokens.pop()
        // console.log(jwt.verify(decodeToken.id, newPassword))
        // Verify token

        if (token === newPassword) {
            console.log("yes no error")
            next();
        }
        else {
            return res.status(401).json({ data: true, hello: "good1" });
        }
    }).catch((error) => {
            res.status(401).json({ data: true, error : error.message });
        });
}

