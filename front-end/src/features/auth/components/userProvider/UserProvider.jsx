import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../../../state/slices/userSlice";

function UserProvider({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return children;
}

export default UserProvider;
