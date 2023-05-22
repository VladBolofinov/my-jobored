import {Circles} from "react-loader-spinner";

import './Spinner.scss';

export const Spinner = () => {
    return (
            <div className='wrapper-spinner'>
                <Circles
                    height="200"
                    width="200"
                    color="#5E96FC"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
    )
}