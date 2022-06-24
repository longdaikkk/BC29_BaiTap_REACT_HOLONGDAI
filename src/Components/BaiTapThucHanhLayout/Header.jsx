import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-expand-sm navbar-light">
                    <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
