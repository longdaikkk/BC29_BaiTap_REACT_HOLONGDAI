import React, { Component } from 'react'
import style from './style.module.css'

export default class Item extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-4 text-center p-3 mt-4'>
                        <i className={`fa-solid fa-baseball fa-2x ${style.icon}`} />
                        <div style={{background: "#f8f9fa"}} className="px-2 py-5">
                            <h3>Fresh new layout</h3>
                            <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                    <div className='col-4 text-center p-3 mt-4'>
                        <i className={`fa-solid fa-cloud-arrow-down fa-2x ${style.icon}`} />
                        <div style={{background: "#f8f9fa"}} className="px-2 py-5">
                            <h3>Free to download</h3>
                            <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                    </div>
                    <div className='col-4 text-center p-3 mt-4'>
                        <i className={`fa-solid fa-address-card fa-2x ${style.icon}`} />
                        <div style={{background: "#f8f9fa"}} className="px-2 py-5">
                            <h3>Jumbotron hero header</h3>
                            <p>The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                    </div>
                    <div className='col-4 text-center p-3 mt-4'>
                        <i className={`fa-brands fa-bootstrap fa-2x ${style.icon}`} />
                        <div style={{background: "#f8f9fa"}} className="px-2 py-5">
                            <h3>Feature boxes</h3>
                            <p>We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                    <div className='col-4 text-center p-3 mt-4'>
                        <i className={`fa-solid fa-code fa-2x ${style.icon}`} />
                        <div style={{background: "#f8f9fa"}} className="px-2 py-5">
                            <h3>Simple clean code</h3>
                            <p>We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                    <div className='col-4 text-center p-3 mt-4'>
                        <i className={`fa-solid fa-circle-check fa-2x ${style.icon}`} />
                        <div style={{background: "#f8f9fa"}} className="px-2 py-5">
                            <h3>A name you trust</h3>
                            <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
