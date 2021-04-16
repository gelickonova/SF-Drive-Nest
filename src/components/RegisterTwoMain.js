import React from 'react';
import cameraIcon from '../img/camera-icon.svg'
import axios from "axios";

export default class RegisterOneMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        }
        this._handleImageChange = this._handleImageChange.bind(this);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} className="previewImage"  alt="Загруженное вами фото"/>);
        }

        document.title = "Шаг 2 из 3"
        return (<main className="step-two-main">
            <div>
                <p className="step">Шаг 2 из 3</p>
                <h1>Загрузите своё фото</h1>
                <p className="description">Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</p>
            </div>
            <form encType="multipart/form-data" method="post" className="form">
                <label htmlFor="upload-photo" className="label-upload-photo">
                    {$imagePreview}
                    <img src={cameraIcon} alt="форма для отправки фото" className="photo-icon"/>
                    <input type="file" className="photo-input"
                           id="upload-photo" accept="image/png, image/jpeg" onChange={this._handleImageChange}/>
                </label>
                <div className="footerBtn">
                    <input type="submit" value="Продолжить" className="continueBtn activeBtn" onClick={(e) => {
                        e.preventDefault()
                        console.log(this.state.file)
                        axios.post("/registration/step2", this.state.file).then(res => res.data).then(data => {
                            if (data) this.props.history.push('/registration/step3')
                        })
                    }}/>
                </div>
            </form>
        </main>)
    }
}