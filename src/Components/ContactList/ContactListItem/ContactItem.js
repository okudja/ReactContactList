import React, { Component, Fragment } from "react";
import "./ContactItem.css";

class ContactItem extends Component {

    state = {
        name: "Mike Tyson",
        address: "Harm, Stepana Bandery str.7",
        phone: "+38 097 28 28 666",
        mail: "tyson@gmail.com",
        avatar: 16,
        gender: "men"
    };

    onRandomAvatar = () => {
        const avatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            avatar: avatar
        });
    };

    render() {

        const { name, address, phone, mail, avatar, gender } = this.state;
        const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

        return (
            <Fragment>
                <li className="list-group-item">

                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src={URL} alt={name} class="rounded-circle mx-auto d-block img-fluid" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                            <label className="name lead">{name}</label>
                            <br />
                            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5842 Hillcrest Rd"></span>
                            <span className="text-muted">{address}</span>
                            <br />
                            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                            <span classNAme="text-muted small">{phone}</span>
                            <br />
                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
                            <span className="text-muted small text-truncate">{mail}</span>
                        </div>
                    </div >
                </li >
                <btn className="btn btn-success" onClick={this.onRandomAvatar}> Random avatar </btn>
            </Fragment>
        )


    }
};

export default ContactItem;