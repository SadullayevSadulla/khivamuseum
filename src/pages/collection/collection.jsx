import React from 'react';
import "./collection.css";
import MainBoy from '../MainBoy/mainBoy';

const Collection = () => {
    return (
        <div className="collection-container">
            <div className="ikki">
                <div className="about container">
                    <h1>Muzey kolleksiyasi</h1>
                    <p>Bosh sahifa <div class="line"></div> Muzey kolleksiyasi</p>
                </div>
            </div>
            <h1 className='container sd'>Ekspozitsiyalar</h1>
           <div className="gh">
             <MainBoy/>
           </div>
        </div>
    );
};

export default Collection;