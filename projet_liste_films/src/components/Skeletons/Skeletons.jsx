import {Skeleton} from "@mui/material";

function Skeletons() {
    const divs = Array.from({length: 20}, (_, index) => (
        <div className="w-1/5 mx-2 flex justify-center">
            <Skeleton width={370} height={510} animation="wave" />
        </div>
    ));

    return <div className="flex flex-wrap justify-center">{divs}</div>;
}

export default Skeletons;