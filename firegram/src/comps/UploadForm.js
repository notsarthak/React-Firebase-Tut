import React, {useState} from "react";

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
            <input type="file" onChange={changeHandler}/>
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
        </form>
    )
};

export default UploadForm;