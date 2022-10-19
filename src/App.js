import React, {useState} from 'react';
import "./App.css";

const App = () => {

    const [fileText, setFileText] = useState('');
    console.log(fileText)

    // let newFileMas = [];
    const [newFileMas, setNewFileMas] = useState([]);

    console.log("newFileMas", newFileMas);

    const coddingMessage = "01101011";


    const readFile = () => {
        let file = document.getElementById('file').files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            console.log(reader.result);
            setFileText(reader.result);
        }
        reader.onerror = function () {
            console.log(reader.error);
        }
    }


    const decoded = () => {

        let pair = 0;
        let localFileMas = [];

        for (let i = 0; i < fileText.length; i += 8) {
            console.log("i", i);

            let oneValue = fileText[i];
            let twoValue = fileText[i + 1];
            let threeValue = fileText[i + 2];
            let fourValue = fileText[i + 3];
            let fiveValue = fileText[i + 4];
            let sixValue = fileText[i + 5];
            let sevenValue = coddingMessage[pair];
            let eightValue = coddingMessage[pair + 1];


            localFileMas.push(oneValue);
            localFileMas.push(twoValue);
            localFileMas.push(threeValue);
            localFileMas.push(fourValue);
            localFileMas.push(fiveValue);
            localFileMas.push(sixValue);
            localFileMas.push(sevenValue);
            localFileMas.push(eightValue);

            console.log("pair", pair);
            if (pair !== 6) {
                pair += 2;
            } else {
                pair = 0;
            }
        }
        setNewFileMas(localFileMas);


    }


    return (
        <div>
            <input
                type={'file'}
                id={'file'}
            />
            <button onClick={readFile}>
                Read file
            </button>
            <button onClick={decoded}>
                Codding
            </button>

            {
                fileText ? (
                    <div className={'mainGrid'}>
                        <div className={'gridStart'}>
                            {
                                fileText ? <b>{fileText}</b> : null
                            }
                        </div>
                        <div className={'gridEnd'}>
                            {/*{*/}
                            {/*    newFileMas.map(value => <div>value.value</div> )*/}
                            {/*}*/}
                            {
                                newFileMas ? (

                                    newFileMas.map(value => {
                                            return (
                                                <b>
                                                    {value.valueOf()}
                                                </b>
                                            )
                                        }
                                    )
                                ) : null
                            }
                        </div>
                    </div>
                ) : null
            }


        </div>
    );
};

export default App;