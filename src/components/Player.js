import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlay, faAngleLeft, faAngleRight, faVolumeMute, faPause, faVolumeUp } from "@fortawesome/free-solid-svg-icons"

const Player = ({ currentSong, isPlaying, setIsPlaying, songs, setCurrentSong }) => {
    const [isMute, setIsMute] = useState(false)
    const audioRef = useRef(null)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: "0"
    })

    useEffect(() => {
        console.log(2)
        return () => {
            audioRef.current.play()
            setIsPlaying(true)
        }
    }, [currentSong])

    const handleUpdateTime = (e) => {
        const currentTime = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({...songInfo, currentTime, duration})
    }

    const getTime = (time) => {
        return (
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const handlePlaySong = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        } else {
            audioRef.current.play()
            setIsPlaying(true)
        }
        
    }

    const handleMute = () => {
        if (isMute) {
            audioRef.current.muted = false
            setIsMute(false)
        } else {
            audioRef.current.muted = true
            setIsMute(true)
        }
    }

    const skipTrackHandler = (direction) => {
        let currentSongIndex = songs.findIndex((song) => song.id === currentSong.id)
        if (direction === "skip-back") {
            if ((currentSongIndex - 1) % (songs.length) === -1) {
                setCurrentSong(songs[songs.length - 1])
                return
            }
            setCurrentSong(songs[(currentSongIndex -1) % (songs.length)])
        }

        if (direction === "skip-forward") {
            setCurrentSong(songs[(currentSongIndex +1) % (songs.length)])
        }

    }

    const skipSongHandler = () => {
        let currentSongIndex = songs.findIndex((song) => song.id === currentSong.id)
        setCurrentSong(songs[(currentSongIndex +1) % (songs.length)])
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{ getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" onChange={dragHandler} />
                <p>{ getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick = {() => skipTrackHandler("skip-back")} className="previous" icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon className="play" icon={isPlaying ? faPause : faPlay} size="2x" onClick={handlePlaySong}/>
                <FontAwesomeIcon  onClick = {() => skipTrackHandler("skip-forward")} className="next" icon={faAngleRight} size="2x" />     
                <FontAwesomeIcon className="mute" icon={isMute ? faVolumeUp : faVolumeMute} size="2x" onClick={handleMute} />
            </div>
            <audio onEnded={skipSongHandler} onTimeUpdate={handleUpdateTime} ref={audioRef} src={currentSong.audio} onLoadedMetadata={handleUpdateTime}></audio>
        </div>
    )
}

export default Player
