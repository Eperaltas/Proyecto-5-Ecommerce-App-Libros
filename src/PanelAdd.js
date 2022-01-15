import React from 'react';

class PanelAdd extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            title: '',
            image: '',
            rating: 1
        };

        this.cancelAction = this.cancelAction.bind(this);
        this.createItem = this.createItem.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    cancelAction(e){
        this.props.onhide();
    }

    onChangeTitle(e){
        this.setState({title: e.target.value});
        
    }
    onChangeImage(e){
        this.setState({image: e.target.value});
    }
    onChangeRating(e){
        const rating = parseInt(e.target.value);
        this.setState({rating: rating});
    }

    createItem(e){
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;
        this.props.onadd({title: title, image: image, rating: rating});
        this.cancelAction();
    }

    render(){
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.createItem}>
                    <p>
                        <label>Nombre completo</label><br />
                        <input type="text" name="title" className="input" onChange={this.onChangeTitle} />
                        </p>

                        <p>
                        <label>Apellido Paterno</label><br />
                        <input type="text" name="title" className="input" onChange={this.onChangeTitle} />
                        </p>

                        <p>
                        <label>Apellido Materno</label><br />
                        <input type="text" name="title" className="input" onChange={this.onChangeTitle} />
                        </p>
                        
                        <p>
                        <label>Correo electrónico</label><br />
                        <input type="text" name="title" className="input" onChange={this.onChangeTitle} />
                        </p>

                        <p>
                        <label>Crear contraseña</label><br />
                        <input type="text" name="image" className="input" onChange={this.onChangeImage} />
                        </p>

                        <p>
                        <label>Confirmar contraseña</label><br />
                        <input type="text" name="image" className="input" onChange={this.onChangeImage} />
                        </p>

                        <input type="submit" className="button btn-blue" value="Crear cuenta" />
                        <button className="button btn-normal" onClick={this.props.onhide}>Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;

/* <p>
                        <label>Precio</label><br />
                        <select onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </p> */