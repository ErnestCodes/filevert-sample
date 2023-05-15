import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

function Player() {
  const [playing, setPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [comments, setComments] = useState<any[]>([]);
  const [addingComment, setAddingComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const playerRef = useRef<any>();

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (state: any) => {
    if (!playing) {
      setPlayedSeconds(state.playedSeconds);
    }
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  const handleSeek = (e: any) => {
    if (playerRef.current) {
      const seekTime = parseFloat(e.target.dataset.seconds);
      setPlaying(false);
      setPlayedSeconds(seekTime);
      playerRef.current.seekTo(seekTime);
      setAddingComment(true);
    }
  };

  const handleComment = (comment: any) => {
    setComments([...comments, { time: playedSeconds, comment }]);
    setCommentText("");
    setAddingComment(false);
  };

  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        playing={playing}
        onPlay={handlePlay}
        onPause={handlePlayPause}
        onProgress={handleProgress}
        onSeek={handleSeek}
        controls={true}
        ref={playerRef}
        style={{ padding: "8px", background: "#141414" }}
      />
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              {comment.comment} at {comment.time.toFixed(2)} seconds
            </li>
          ))}
        </ul>
        {addingComment ? (
          <div>
            <input
              type="text"
              placeholder={`Add a comment at ${playedSeconds.toFixed(
                2
              )} seconds`}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={() => handleComment(commentText)}>Submit</button>
          </div>
        ) : (
          <button onClick={() => setAddingComment(true)}>Add Comment</button>
        )}
      </div>
      <div>
        <progress
          max={playerRef.current ? playerRef.current.getDuration() : 0}
          value={playedSeconds}
          onClick={handleSeek}
        />
      </div>
    </div>
  );
}

export default Player;
