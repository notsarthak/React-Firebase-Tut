import React, {useState} from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const changeHandler = (e) => {
        let selected = e.target.files[0]; //accessing the files uploaded by the user using the 'files' property on the target which is an array. User can upload multiple files we want only the first one.
        const types = ["image/png", "image/jpeg"];
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setError('Please select an image (png/jpeg)!');
            setFile(null);
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
};

export default UploadForm;