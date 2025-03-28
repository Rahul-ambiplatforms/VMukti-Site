import { useParams } from "react-router-dom";
import ServingsContent from "../../components/ServingsContent";

const ServingsDock = () => {
    const { name } = useParams();
    return (
        <>
            {/* serving dock */}
            <ServingsContent page={name} />
        </>
    )
}

export default ServingsDock;