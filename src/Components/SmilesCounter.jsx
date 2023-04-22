import React, { useState } from 'react';
import CreateSmile from "./Components/CreateSmile/CreateSmile";
import ShowResult from './Components/ShowResult/ShowResult';
import ImageSmiles from './Components/ImageSmiles/ImageSmiles';
import styles from './SmilesCounter.module.scss';

function SmilesCounter() {

    const [smiles, setSmiles] = useState([
        { id: 0, name: "Стісняшка", count: 0, href: "./src/assets/images/joy.svg" },
        { id: 1, name: "Соня", count: 0, href: "./src/assets/images/sleepy.svg" },
        { id: 2, name: "Здивований", count: 0, href: "./src/assets/images/smile.svg" },
    ]);

    const handleVoit = (smileId) => {
        const updatedSmiles = smiles.map(el => {
            if (el.id === smileId) {
                return { ...el, count: el.count + 1 };
            } else {
                return el;
            }
        });

        setSmiles(updatedSmiles);
        setWinner(null) // скидаємо переможця
    }


    const [winner, setWinner] = useState(null); // у winner зберігається id переможеця до скидання


    function handleShowResults() {
        let arr = smiles.slice() // копіюємо масив щоб не пересортовувався масив smiles
        const sortedSmiles = arr.sort((a, b) => b.count - a.count)
        setWinner(sortedSmiles[0].id) // отримуємо id переможця
    }


    return (
        <section className={styles.wrapper}>

            <h1>Голосування за найпривабливіший смайлик</h1>

            <div className={styles.container__smiles}>

                <div className={styles.wrapper}>
                    <div>
                        <ImageSmiles src={smiles[0].href} />
                    </div>
                    <div>
                        {smiles[0].count}
                        <CreateSmile title={'голосувати'} handleClick={() => handleVoit(0)} />
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <div>
                        <ImageSmiles src={smiles[1].href} />
                    </div>
                    <div>
                        {smiles[1].count}
                        <CreateSmile title={'голосувати'} handleClick={() => handleVoit(1)} />
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <div>
                        <ImageSmiles src={smiles[2].href} />
                    </div>
                    <div>
                        {smiles[2].count}
                        <CreateSmile title={'голосувати'} handleClick={() => handleVoit(2)} />
                    </div>
                </div>

            </div>


            <div className={styles.wrapper}>
                <ShowResult handleClick={handleShowResults} />

                {winner !== null && (
                    <div className={styles.wrapper}> 
                        <ImageSmiles src={smiles[winner].href} />
                        {smiles[winner].name}
                    </div>
                )}
            </div>
        </section>
    );
}

export default SmilesCounter