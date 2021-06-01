import "./singlePost1.css";

export default function SinglePost2() {
  return (
    <>
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1036843/pexels-photo-1036843.jpeg?cs=srgb&dl=pexels-artem-beliaikin-1036843.jpg&fm=jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        It hurts cause 
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>             
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
             Vaishu
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        It hurts cause when you told me the first time that you were in love with me, you knew you were not, but you still pretended that you had fallen for me, exactly like the sun falls for the moon to occupy the evening skies.<br></br><br></br>

        It hurts cause when I fell for you like a child falls in love with his bedtime stories and lullabies, you kept leading me on and on, as if this would go way beyond forever –<br></br> when you knew that all I was going to be in the end was a pile of debris.<br></br><br></br>


        It hurts cause when I told you that I was hurt and you could see that I was hurt and you knew that I was hurt because of you, all you ever told me in that moment was that I was being extra, that I was overwhelming – <br></br>when you knew that you had overwhelmed me with ignorance and suffering.<br></br><br></br>


        It hurts cause you knew that I loved you like I was breathing; like there was no other alternative to it and you still gave me reasons to give up – <br></br>even when you knew what giving up on breathing ends up in.<br></br><br></br>


        It hurts cause I clenched on to words – words that were sometimes poems, other days letters, and sometimes there were no words at all –<br></br> I clenched on to silence on some days; I ran from ways to ways – innumerable times, only for you to be able to comprehend the language of my trauma but you were never patient enough with words.<br></br><br></br>

        </p>
      </div>
    </div>

    </>
  );
}
