import axios from 'axios'
import React from 'react'
import {Playlist} from './components/playlist/playlist'

import './App.css'

type MyProps = {}
type MyState = {sources: []; currentImage: number}
export class App extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props)
        this.state = {
            sources: [],
            currentImage: -1,
        }
    }
    async getSources() {
        let allData = await axios.get('/playlist')
        return allData.data.data // getting allData from the Api
    }
    async componentDidMount() {
        const sources = await this.getSources()
        this.setState(
            {
                sources: sources,
                currentImage: 0,
            },
            () => {
                this.displayNext(sources[0].duration * 1000)
            }
        )
    }
    displayNext = (time: number | undefined) => {
        setTimeout(() => {
            this.setState(
                {
                    currentImage: this.state.currentImage == this.state.sources.length - 1 ? 0 : this.state.currentImage + 1,
                },
                () => {
                    this.displayNext(this.state.sources[this.state.currentImage]['duration'] * 1000)
                }
            )
        }, time)
    }

    render() {
        const _sources = this.state.sources
        const _index = this.state.currentImage
        return _sources && _index >= 0 ? (
            <div>
                <Playlist />
                <div className="player">
                    {_sources[_index]['type'] === 'image' ? (
                        <img className="image" src={_sources[_index]['url']} width="auto" height="auto" />
                    ) : (
                        <video className="video" width="auto" height="auto" autoPlay muted>
                            <source src={_sources[_index]['url']} type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
        ) : (
            <></>
        )
    }
}
