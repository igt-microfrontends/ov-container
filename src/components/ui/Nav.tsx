import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Nav = () => {
    const navigate = useNavigate();
    const { token, setToken } = useAuth();

    return (
        <nav>
            <div>Host</div>
            <ul>
                <li onClick={() => navigate("/")}>Dashboard</li>
                <li onClick={() => navigate("/calculator")}>Calculator</li>
            </ul>
            <div>{token}</div>
            <button onClick={() => setToken("token host")}>Setar token</button>
        </nav>
    );
};
