import React, { Component } from 'react'
import style from './style.module.css'

export default class Banner extends Component {
    render() {
        return (
            <>
                <div className={`container text-center mt-5 banner ${style.banner}`}>
                    <div style={{ background: "#f8f9fa" }} className="p-5">
                        <h1>A warm welcome!</h1>
                        <p style={{ fontSize: "1.5rem" }}>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <button className='btn btn-primary' style={{ fontSize: "1.5rem" }}>Call to action</button>
                    </div>
                </div>
            </>
        )
    }
}
