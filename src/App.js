import React, {useState} from 'react';
import "./App.css";

const App = () => {

    const [fileText, setFileText] = useState('');
    console.log(fileText)

    let newFileMas = [];
    console.log(newFileMas);

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

            newFileMas.push(oneValue);
            newFileMas.push(twoValue);
            newFileMas.push(threeValue);
            newFileMas.push(fourValue);
            newFileMas.push(fiveValue);
            newFileMas.push(sixValue);
            newFileMas.push(sevenValue);
            newFileMas.push(eightValue);


            console.log("pair", pair);
            if (pair !== 6) {
                pair += 2;
            } else {
                pair = 0;
            }
        }
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
                                fileText
                            }
                        </div>
                        <div className={'gridEnd'}>
                            {
                                newFileMas.map(value => value.value)
                            }
                        </div>
                    </div>
                ) : null
            }


        </div>
    );
};

export default App;